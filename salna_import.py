import argparse
import json
import re
from typing import List, Dict, Optional

import requests
from bs4 import BeautifulSoup


CATEGORY_URL = "https://salna.lt/lt/570-sieniniai-oro-kondicionieriai"


def _parse_float_lt(s: str) -> Optional[float]:
    if s is None:
        return None
    s = s.strip().replace("\xa0", " ")
    # Use dot as decimal separator
    s = s.replace(" ", "")
    s = s.replace(",", ".")
    try:
        return float(s)
    except ValueError:
        return None


def _escape_js_string(s: str) -> str:
    return (
        s.replace("\\", "\\\\")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "")
        .replace("\t", "\\t")
    )


def _extract_price_eur(text: str) -> Optional[int]:
    # There may be multiple EUR amounts (installments, extended warranty).
    # Main price is usually the max EUR value on the page.
    matches = re.findall(r"(\d[\d\s]*[.,]\d{2})\s*€", text)
    if not matches:
        matches = re.findall(r"(\d[\d\s]*[.,]\d{1,2})\s*€", text)
    if not matches:
        return None
    vals: List[float] = []
    for m in matches:
        v = _parse_float_lt(m)
        if v is not None:
            vals.append(v)
    if not vals:
        return None
    main = max(vals)
    return int(round(main))


def _extract_first_image_url(html: str, soup: BeautifulSoup) -> str:
    # Prefer OpenGraph image (usually present and stable).
    og = soup.find("meta", attrs={"property": "og:image"}) or soup.find("meta", attrs={"name": "og:image"})
    if og and og.get("content"):
        return og["content"]

    # Fallback: first relevant image URL.
    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if not src:
            continue
        if "large_default" in src and (src.lower().endswith(".jpg") or src.lower().endswith(".png")):
            return src

    for img in soup.find_all("img"):
        src = img.get("src") or img.get("data-src") or ""
        if src.lower().endswith(".jpg") or src.lower().endswith(".png"):
            return src

    # Last resort: look for large_default or .jpg in raw html.
    m = re.search(r'(https?://[^"\\s]+(?:large_default|home_default)[^"\\s]+\\.(?:jpg|png))', html, flags=re.IGNORECASE)
    return m.group(1) if m else ""


def _parse_brand_and_model(product_name: str) -> (str, str):
    # Remove common prefix
    clean = product_name.strip()
    clean = re.sub(r"^Oro kondicionierius\s*", "", clean, flags=re.IGNORECASE).strip()
    # Remove optional "/Šilumos siurblys" or "-šilumos siurblys" that may appear in titles
    clean = re.sub(
        r"^(?:/|\-|\u2013)\s*Šilumos siurblys\s*",
        "",
        clean,
        flags=re.IGNORECASE,
    ).strip()

    tokens = clean.split()
    if not tokens:
        return ("", product_name.strip())

    first_digit_idx = None
    for i, t in enumerate(tokens):
        if re.search(r"\d", t):
            first_digit_idx = i
            break
    if first_digit_idx is None:
        # No digits found; treat everything as model
        return ("", clean)

    brand = " ".join(tokens[:first_digit_idx]).strip()
    model = " ".join(tokens[first_digit_idx:]).strip()
    return (brand, model)


def scrape_models(limit: int) -> List[Dict]:
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36"
        }
    )

    category_html = session.get(CATEGORY_URL, timeout=30).text
    category_soup = BeautifulSoup(category_html, "html.parser")

    links = []
    for a in category_soup.find_all("a", href=True):
        href = a["href"]
        if href.startswith("/lt/preke/") and href.endswith(".html"):
            links.append("https://salna.lt" + href)

    # Deduplicate while preserving order
    seen = set()
    uniq_links = []
    for l in links:
        if l not in seen:
            seen.add(l)
            uniq_links.append(l)

    uniq_links = uniq_links[:limit]

    models: List[Dict] = []
    for idx, url in enumerate(uniq_links, start=1):
        html = session.get(url, timeout=30).text
        soup = BeautifulSoup(html, "html.parser")
        text = soup.get_text(" ", strip=True)

        # Title (h1)
        h1 = soup.find("h1")
        name = h1.get_text(" ", strip=True) if h1 else url.split("/")[-1]

        brand, model_code = _parse_brand_and_model(name)

        # Use raw HTML parsing (values are often inside separate <span> tags).
        # We match "label ... >VALUE<" and allow any HTML in between.
        # Energy class: values are typically "A++", "A+++", etc.
        # Keep it robust to HTML tag boundaries around the label/value.
        energy = None
        m = re.search(
            r"Energijos.{0,2000}?(A[+]{1,3})",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            energy = m.group(1).replace(" ", "")

        # Cooling power (kW). We search near the cooling label, but avoid strict tag placement.
        cool_kw = None
        m = re.search(
            r"aldymo galia kW.{0,1200}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            cool_kw = _parse_float_lt(m.group(1))

        noise_db = None
        # Indoor noise is under "Vidinio bloko ... iki dB".
        m = re.search(
            r"Vidinio bloko.{0,1000}?>\s*[^<]*?iki dB.{0,200}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            noise_db = _parse_float_lt(m.group(1))
        else:
            # Fallback: take first "iki dB" value in HTML.
            m = re.search(r"iki dB.{0,200}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<", html, flags=re.IGNORECASE | re.DOTALL)
            if m:
                noise_db = _parse_float_lt(m.group(1))

        height_cm = None
        width_cm = None
        depth_cm = None
        m = re.search(
            r"Vidinio bloko auk.{0,500}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            height_cm = _parse_float_lt(m.group(1))
        m = re.search(
            r"Vidinio bloko plot.{0,500}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            width_cm = _parse_float_lt(m.group(1))
        m = re.search(
            r"Vidinio bloko gyl.{0,500}?>\s*([0-9]+(?:[.,][0-9]+)?)\s*<",
            html,
            flags=re.IGNORECASE | re.DOTALL,
        )
        if m:
            depth_cm = _parse_float_lt(m.group(1))

        price_eur = _extract_price_eur(html)
        img_url = _extract_first_image_url(html, soup)

        # Basic required fields
        if cool_kw is None or price_eur is None:
            continue
        if not energy:
            # UI mapping supports A+/A++/A+++; default to A++ so styling/filtering still works.
            energy = "A++"

        # Plot recommendation heuristic (similar to the placeholder data)
        plot_area = int(round(cool_kw * 9))

        models.append(
            {
                "id": idx,
                "gamintojas": brand or "Salna",
                "modelis": model_code or name,
                "tipas": "Sieninis vidinis blokas",
                "galia_kW": round(cool_kw, 1),
                "energijos_klase": energy,
                "plotas_m2": plot_area,
                "triuksmas_dB": int(round(noise_db)) if noise_db is not None else 0,
                "kaina_EUR": price_eur,
                "aukstis_cm": round(height_cm, 1) if height_cm is not None else 0,
                "plotis_cm": round(width_cm, 1) if width_cm is not None else 0,
                "storis_cm": round(depth_cm, 1) if depth_cm is not None else 0,
                "imageUrl": img_url,
            }
        )

        print(f"{idx}/{len(uniq_links)}: {name} -> {energy}, {cool_kw} kW")

    return models


def models_to_js(models: List[Dict]) -> str:
    # Use window.SALNA_MODELS so ac-vizualizatorius.js can pick it up.
    items = []
    for m in models:
        items.append(
            "{"
            + f'"id":{m["id"]},'
            + f'"gamintojas":"{_escape_js_string(m["gamintojas"])}",'
            + f'"modelis":"{_escape_js_string(m["modelis"])}",'
            + f'"tipas":"{_escape_js_string(m["tipas"])}",'
            + f'"galia_kW":{m["galia_kW"]},'
            + f'"energijos_klase":"{_escape_js_string(m["energijos_klase"])}",'
            + f'"plotas_m2":{m["plotas_m2"]},'
            + f'"triuksmas_dB":{m["triuksmas_dB"]},'
            + f'"kaina_EUR":{m["kaina_EUR"]},'
            + f'"aukstis_cm":{m["aukstis_cm"]},'
            + f'"plotis_cm":{m["plotis_cm"]},'
            + f'"storis_cm":{m["storis_cm"]},'
            + f'"imageUrl":"{_escape_js_string(m["imageUrl"])}"'
            + "}"
        )
    return "window.SALNA_MODELS = [\n" + ",\n".join(items) + "\n];\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=70)
    ap.add_argument("--out", type=str, default="salna-models.js")
    args = ap.parse_args()

    models = scrape_models(args.limit)
    js = models_to_js(models)

    with open(args.out, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"Saved {len(models)} models to {args.out}")


if __name__ == "__main__":
    main()

