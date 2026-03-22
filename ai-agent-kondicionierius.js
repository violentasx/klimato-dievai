(() => {
  const roomPhotoInput = document.getElementById("roomPhotoInput");
  const modelSelect = document.getElementById("modelSelect");
  const attachBtn = document.getElementById("attachBtn");
  const statusText = document.getElementById("statusText");
  const canvas = document.getElementById("wallCanvas");
  const ctx = canvas.getContext("2d");

  const MODELS = Array.isArray(window.SALNA_MODELS) ? window.SALNA_MODELS : [];
  const indoorModels = MODELS.filter((m) => {
    const t = (m.tipas || "").toLowerCase();
    return !t.includes("isor") && Number(m.plotis_cm) > 0 && Number(m.aukstis_cm) > 0;
  });

  let roomImage = null;
  let selectedModel = null;

  function clamp(v, min, max) {
    return Math.max(min, Math.min(max, v));
  }

  function toUnitAngle(rad) {
    let a = rad;
    while (a > Math.PI / 2) a -= Math.PI;
    while (a < -Math.PI / 2) a += Math.PI;
    return a;
  }

  class KondicionieriausAgentas {
    // Viena vienintelė agento funkcija.
    prilipintiPrieSienos(kambarioNuotrauka, modelis) {
      const wallPlacement = this.rastiSienosZona(kambarioNuotrauka);
      return {
        x: wallPlacement.x,
        y: wallPlacement.y,
        width: wallPlacement.width,
        height: wallPlacement.height,
        angle: wallPlacement.angle,
        shear: wallPlacement.shear,
        wallLuma: wallPlacement.wallLuma,
        wallRgb: wallPlacement.wallRgb,
        modelis,
      };
    }

    rastiSienosZona(img) {
      // Paprastas "AI-like" heuristinis variantas:
      // ieškome didžiausios ramios horizontalios zonos viršutinėje 2/3 nuotraukos dalyje.
      const temp = document.createElement("canvas");
      temp.width = img.width;
      temp.height = img.height;
      const tctx = temp.getContext("2d");
      tctx.drawImage(img, 0, 0);

      const { data, width, height } = tctx.getImageData(0, 0, temp.width, temp.height);
      const rowScores = [];
      const maxY = Math.floor(height * 0.66);

      for (let y = Math.floor(height * 0.08); y < maxY; y += 4) {
        let edgeSum = 0;
        let samples = 0;
        for (let x = 2; x < width - 2; x += 4) {
          const i1 = (y * width + x) * 4;
          const i2 = (y * width + (x + 2)) * 4;
          const g1 = (data[i1] + data[i1 + 1] + data[i1 + 2]) / 3;
          const g2 = (data[i2] + data[i2 + 1] + data[i2 + 2]) / 3;
          edgeSum += Math.abs(g1 - g2);
          samples++;
        }
        const score = samples ? edgeSum / samples : 999;
        rowScores.push({ y, score });
      }

      rowScores.sort((a, b) => a.score - b.score);
      const bestRow = rowScores.length ? rowScores[0].y : Math.floor(height * 0.23);

      const widthRatio = 0.26;
      const hRatio = 0.14;
      const cx = Math.floor(width * 0.5);
      const cy = clamp(bestRow, 2, height - 3);

      // Sienos krypties įvertinimas pagal lokalų gradientų lauką.
      let sumCos2 = 0;
      let sumSin2 = 0;
      for (let y = Math.max(2, cy - 70); y <= Math.min(height - 3, cy + 70); y += 3) {
        for (let x = Math.max(2, cx - Math.floor(width * 0.35)); x <= Math.min(width - 3, cx + Math.floor(width * 0.35)); x += 4) {
          const idxL = (y * width + (x - 1)) * 4;
          const idxR = (y * width + (x + 1)) * 4;
          const idxU = ((y - 1) * width + x) * 4;
          const idxD = ((y + 1) * width + x) * 4;

          const l = (data[idxL] + data[idxL + 1] + data[idxL + 2]) / 3;
          const r = (data[idxR] + data[idxR + 1] + data[idxR + 2]) / 3;
          const u = (data[idxU] + data[idxU + 1] + data[idxU + 2]) / 3;
          const d = (data[idxD] + data[idxD + 1] + data[idxD + 2]) / 3;

          const gx = r - l;
          const gy = d - u;
          const mag = Math.hypot(gx, gy);
          if (mag < 9) continue;

          const edgeAngle = toUnitAngle(Math.atan2(-gx, gy));
          const w = mag;
          sumCos2 += Math.cos(2 * edgeAngle) * w;
          sumSin2 += Math.sin(2 * edgeAngle) * w;
        }
      }

      const rawAngle = 0.5 * Math.atan2(sumSin2, sumCos2 || 1);
      const angle = clamp(rawAngle, -0.16, 0.16);
      const shear = clamp(angle * 0.55, -0.12, 0.12);

      // Aplinkos šviesumo ir spalvos įvertinimas būsimo bloko zonoje.
      let rSum = 0;
      let gSum = 0;
      let bSum = 0;
      let n = 0;
      const sampleW = Math.floor(width * widthRatio * 1.25);
      const sampleH = Math.floor(height * hRatio * 1.35);
      for (let y = Math.max(0, cy - Math.floor(sampleH / 2)); y < Math.min(height, cy + Math.floor(sampleH / 2)); y += 2) {
        for (let x = Math.max(0, cx - Math.floor(sampleW / 2)); x < Math.min(width, cx + Math.floor(sampleW / 2)); x += 2) {
          const i = (y * width + x) * 4;
          rSum += data[i];
          gSum += data[i + 1];
          bSum += data[i + 2];
          n++;
        }
      }
      const wallRgb = n ? [rSum / n, gSum / n, bSum / n] : [190, 190, 190];
      const wallLuma = 0.2126 * wallRgb[0] + 0.7152 * wallRgb[1] + 0.0722 * wallRgb[2];

      return {
        x: width * 0.5,
        y: bestRow,
        width: width * widthRatio,
        height: height * hRatio,
        angle,
        shear,
        wallLuma,
        wallRgb,
      };
    }
  }

  const agentas = new KondicionieriausAgentas();

  function updateButtonState() {
    attachBtn.disabled = !(roomImage && selectedModel);
  }

  function fillModelOptions() {
    for (const m of indoorModels) {
      const option = document.createElement("option");
      option.value = String(m.id);
      option.textContent = `${m.gamintojas} ${m.modelis}`;
      modelSelect.appendChild(option);
    }
  }

  function drawBaseRoomImage() {
    if (!roomImage) return;
    canvas.width = roomImage.width;
    canvas.height = roomImage.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(roomImage, 0, 0);
  }

  function buildAcTexture(width, height, modelImage, wallLuma, wallRgb) {
    const acCanvas = document.createElement("canvas");
    acCanvas.width = Math.max(2, Math.round(width));
    acCanvas.height = Math.max(2, Math.round(height));
    const acCtx = acCanvas.getContext("2d");

    if (modelImage && modelImage.complete) {
      acCtx.drawImage(modelImage, 0, 0, acCanvas.width, acCanvas.height);
    } else {
      const g = acCtx.createLinearGradient(0, 0, 0, acCanvas.height);
      g.addColorStop(0, "#fcfcfc");
      g.addColorStop(1, "#d9d9d9");
      acCtx.fillStyle = g;
      acCtx.fillRect(0, 0, acCanvas.width, acCanvas.height);
    }

    const imageData = acCtx.getImageData(0, 0, acCanvas.width, acCanvas.height);
    const d = imageData.data;
    let lumSum = 0;
    let count = 0;
    for (let i = 0; i < d.length; i += 4) {
      const l = 0.2126 * d[i] + 0.7152 * d[i + 1] + 0.0722 * d[i + 2];
      lumSum += l;
      count++;
    }
    const acLuma = count ? lumSum / count : 180;

    const lumaFactor = clamp((wallLuma / Math.max(1, acLuma)) * 0.6 + 0.42, 0.72, 1.08);
    const tintStrength = 0.09;

    for (let i = 0; i < d.length; i += 4) {
      const r = d[i] * lumaFactor;
      const g = d[i + 1] * lumaFactor;
      const b = d[i + 2] * lumaFactor;

      d[i] = clamp(r * (1 - tintStrength) + wallRgb[0] * tintStrength, 0, 255);
      d[i + 1] = clamp(g * (1 - tintStrength) + wallRgb[1] * tintStrength, 0, 255);
      d[i + 2] = clamp(b * (1 - tintStrength) + wallRgb[2] * tintStrength, 0, 255);
    }
    acCtx.putImageData(imageData, 0, 0);
    return acCanvas;
  }

  function drawAcOverlay(placement, modelImage) {
    const { x, y, width, height, angle, shear, wallLuma, wallRgb } = placement;
    const localW = Math.max(4, width);
    const localH = Math.max(4, height);
    const acTex = buildAcTexture(localW, localH, modelImage, wallLuma, wallRgb);

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.transform(1, 0, shear, 1, 0, 0);

    // Kontaktinis šešėlis prie sienos.
    const shadowAlpha = clamp(0.22 + (180 - wallLuma) / 420, 0.14, 0.32);
    ctx.save();
    ctx.shadowColor = `rgba(0,0,0,${shadowAlpha})`;
    ctx.shadowBlur = Math.max(8, localH * 0.26);
    ctx.shadowOffsetX = 4;
    ctx.shadowOffsetY = Math.max(4, localH * 0.13);
    ctx.fillStyle = "rgba(0,0,0,0.18)";
    ctx.beginPath();
    ctx.roundRect(-localW / 2, -localH / 2, localW, localH, 10);
    ctx.fill();
    ctx.restore();

    // Pats blokas.
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(-localW / 2, -localH / 2, localW, localH, 10);
    ctx.clip();
    ctx.drawImage(acTex, -localW / 2, -localH / 2, localW, localH);

    // Švelniai permaišome su sienos tekstūra, kad neliktų "lipduko" efekto.
    ctx.globalCompositeOperation = "multiply";
    ctx.globalAlpha = 0.11;
    ctx.drawImage(
      roomImage,
      clamp(x - localW / 2, 0, Math.max(1, roomImage.width - localW)),
      clamp(y - localH / 2, 0, Math.max(1, roomImage.height - localH)),
      localW,
      localH,
      -localW / 2,
      -localH / 2,
      localW,
      localH
    );
    ctx.restore();

    // Kraštų paryškinimas ir viršaus ambient occlusion.
    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(-localW / 2 + 0.5, -localH / 2 + 0.5, localW - 1, localH - 1, 10);
    ctx.stroke();

    const topShade = ctx.createLinearGradient(0, -localH / 2, 0, 0);
    topShade.addColorStop(0, "rgba(0,0,0,0.20)");
    topShade.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = topShade;
    ctx.fillRect(-localW / 2, -localH / 2, localW, localH * 0.45);
    ctx.restore();

    ctx.restore();
  }

  async function loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(url);
        reject(err);
      };
      img.src = url;
    });
  }

  async function loadModelImage(url) {
    if (!url) return null;
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  roomPhotoInput.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    try {
      roomImage = await loadImageFromFile(file);
      drawBaseRoomImage();
      statusText.textContent = "Nuotrauka įkelta. Pasirinkite kondicionierių.";
    } catch (_err) {
      statusText.textContent = "Nepavyko įkelti nuotraukos.";
    }
    updateButtonState();
  });

  modelSelect.addEventListener("change", (event) => {
    const modelId = Number(event.target.value);
    selectedModel = indoorModels.find((m) => m.id === modelId) || null;
    if (selectedModel) {
      statusText.textContent = `Pasirinkta: ${selectedModel.gamintojas} ${selectedModel.modelis}`;
    }
    updateButtonState();
  });

  attachBtn.addEventListener("click", async () => {
    if (!roomImage || !selectedModel) return;

    drawBaseRoomImage();
    const placement = agentas.prilipintiPrieSienos(roomImage, selectedModel);
    const modelImage = await loadModelImage(selectedModel.imageUrl);
    drawAcOverlay(placement, modelImage);

    statusText.innerHTML = `<span class="ok">Atlikta:</span> kondicionierius prilipintas tikroviškiau (kampas, apšvietimas, šešėlis).`;
  });

  fillModelOptions();
})();
