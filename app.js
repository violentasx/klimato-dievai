/* ═══════════════════════════════════════════
   atvesk – JavaScript
   ═══════════════════════════════════════════ */

const VISI_VAIZDAI = [
  'img/kondicionieriai/2025-02-17/20250217_103043.jpg',
  'img/kondicionieriai/2024-07-31/IMG-20240731-WA0003.jpg',
  'img/kondicionieriai/2025-04-30/IMG-20250430-WA0000.jpg',
  'img/kondicionieriai/2025-05-02/IMG-20250502-WA0000.jpg',
  'img/kondicionieriai/2025-08-18/IMG-20250818-WA0000.jpg',
  'img/kondicionieriai/2025-08-18/IMG-20250818-WA0001.jpg',
  'img/kondicionieriai/2024-06-14/IMG_20240614_162925.jpg',
  'img/kondicionieriai/2024-06-14/IMG_20240614_162933.jpg',
  'img/kondicionieriai/2024-06-21/IMG_20240621_180952.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182501.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182510.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182520.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182541.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182547.jpg',
  'img/kondicionieriai/2024-06-22/IMG_20240622_182550.jpg',
  'img/kondicionieriai/2024-06-28/IMG_20240628_154939.jpg',
  'img/kondicionieriai/2024-06-28/IMG_20240628_154944.jpg',
  'img/kondicionieriai/2024-06-28/IMG_20240628_155027.jpg',
  'img/kondicionieriai/2024-07-01/IMG_20240701_161835.jpg',
  'img/kondicionieriai/2024-07-01/IMG_20240701_161840.jpg',
  'img/kondicionieriai/2024-07-01/IMG_20240701_165514.jpg',
  'img/kondicionieriai/2024-07-01/IMG_20240701_165621.jpg',
  'img/kondicionieriai/2024-07-01/IMG_20240701_170315.jpg',
  'img/kondicionieriai/2024-07-03/IMG_20240703_125756.jpg',
  'img/kondicionieriai/2024-07-03/IMG_20240703_140608.jpg',
  'img/kondicionieriai/2024-07-11/IMG_20240711_154544.jpg',
  'img/kondicionieriai/2024-07-11/IMG_20240711_154600.jpg',
  'img/kondicionieriai/2024-07-11/IMG_20240711_154637.jpg',
  'img/kondicionieriai/2024-07-11/IMG_20240711_154645.jpg',
  'img/kondicionieriai/2024-07-25/IMG_20240725_155747.jpg',
  'img/kondicionieriai/2024-07-25/IMG_20240725_171216.jpg',
  'img/kondicionieriai/2024-07-25/IMG_20240725_171223.jpg',
  'img/kondicionieriai/2024-07-25/IMG_20240725_172154.jpg',
  'img/kondicionieriai/2024-07-26/IMG_20240726_120057.jpg',
  'img/kondicionieriai/2024-07-31/IMG_20240731_135916.jpg',
  'img/kondicionieriai/2024-07-31/IMG_20240731_135922.jpg',
  'img/kondicionieriai/2024-07-31/IMG_20240731_142243.jpg',
  'img/kondicionieriai/2024-08-01/IMG_20240801_135932.jpg',
  'img/kondicionieriai/2024-08-01/IMG_20240801_154130.jpg',
  'img/kondicionieriai/2024-08-02/IMG_20240802_155912.jpg',
  'img/kondicionieriai/2024-08-02/IMG_20240802_155928.jpg',
  'img/kondicionieriai/2024-08-08/IMG_20240808_112933.jpg',
  'img/kondicionieriai/2024-08-08/IMG_20240808_112941.jpg',
  'img/kondicionieriai/2024-08-08/IMG_20240808_113220.jpg',
  'img/kondicionieriai/2024-08-08/IMG_20240808_113232.jpg',
  'img/kondicionieriai/2024-09-25/IMG_20240925_132802.jpg',
  'img/kondicionieriai/2024-09-25/IMG_20240925_132911.jpg',
  'img/kondicionieriai/2024-09-25/IMG_20240925_132917.jpg',
  'img/kondicionieriai/2024-09-25/IMG_20240925_133052.jpg',
  'img/kondicionieriai/2024-09-28/IMG_20240928_105302.jpg',
  'img/kondicionieriai/2024-10-04/IMG_20241004_112419.jpg',
  'img/kondicionieriai/2024-10-11/IMG_20241011_175904.jpg',
  'img/kondicionieriai/2024-10-11/IMG_20241011_175928.jpg',
  'img/kondicionieriai/2024-10-11/IMG_20241011_175944.jpg',
  'img/kondicionieriai/2024-11-08/IMG_20241108_125501.jpg',
  'img/kondicionieriai/2024-11-12/IMG_20241112_134423.jpg',
  'img/kondicionieriai/2024-12-10/IMG_20241210_101346.jpg',
  'img/kondicionieriai/2024-12-16/IMG_20241216_155353.jpg',
  'img/kondicionieriai/2024-12-23/IMG_20241223_130041.jpg',
  'img/kondicionieriai/2025-01-06/IMG_20250106_145240.jpg',
  'img/kondicionieriai/2025-01-06/IMG_20250106_145625.jpg',
  'img/kondicionieriai/2025-01-10/IMG_20250110_122137.jpg',
  'img/kondicionieriai/2025-01-30/IMG_20250130_114344.jpg',
  'img/kondicionieriai/2025-01-30/IMG_20250130_114640.jpg',
  'img/kondicionieriai/2025-01-30/IMG_20250130_114907.jpg',
  'img/kondicionieriai/2025-02-01/IMG_20250201_164037.jpg',
  'img/kondicionieriai/2025-02-01/IMG_20250201_164040.jpg',
  'img/kondicionieriai/2025-02-01/IMG_20250201_164042.jpg',
  'img/kondicionieriai/2025-02-04/IMG_20250204_115758.jpg',
  'img/kondicionieriai/2025-02-04/IMG_20250204_115812.jpg',
  'img/kondicionieriai/2025-03-05/IMG_20250305_091736.jpg',
  'img/kondicionieriai/2025-03-06/IMG_20250306_112910.jpg',
  'img/kondicionieriai/2025-03-06/IMG_20250306_121810.jpg',
  'img/kondicionieriai/2025-03-17/IMG_20250317_132110.jpg',
  'img/kondicionieriai/2025-04-14/IMG_20250414_111123.jpg',
  'img/kondicionieriai/2025-04-17/IMG_20250417_131347.jpg',
  'img/kondicionieriai/2025-04-17/IMG_20250417_132834.jpg',
  'img/kondicionieriai/2025-04-18/IMG_20250418_114904.jpg',
  'img/kondicionieriai/2025-04-18/IMG_20250418_121941.jpg',
  'img/kondicionieriai/2025-04-18/IMG_20250418_135337.jpg',
  'img/kondicionieriai/2025-04-18/IMG_20250418_143343.jpg',
  'img/kondicionieriai/2025-04-23/IMG_20250423_111620.jpg',
  'img/kondicionieriai/2025-04-23/IMG_20250423_140238.jpg',
  'img/kondicionieriai/2025-04-25/IMG_20250425_125217.jpg',
  'img/kondicionieriai/2025-04-29/IMG_20250429_133828.jpg',
  'img/kondicionieriai/2025-04-29/IMG_20250429_133842.jpg',
  'img/kondicionieriai/2025-05-02/IMG_20250502_214307.jpg',
  'img/kondicionieriai/2025-05-12/IMG_20250512_152152.jpg',
  'img/kondicionieriai/2025-05-12/IMG_20250512_152156.jpg',
  'img/kondicionieriai/2025-05-26/IMG_20250526_143322.jpg',
  'img/kondicionieriai/2025-05-26/IMG_20250526_143826.jpg',
  'img/kondicionieriai/2025-05-28/IMG_20250528_194828.jpg',
  'img/kondicionieriai/2025-05-29/IMG_20250529_171133.jpg',
  'img/kondicionieriai/2025-05-29/IMG_20250529_174401.jpg',
  'img/kondicionieriai/2025-05-29/IMG_20250529_180020.jpg',
  'img/kondicionieriai/2025-05-29/IMG_20250529_191315.jpg',
  'img/kondicionieriai/2025-05-30/IMG_20250530_223807.jpg',
  'img/kondicionieriai/2025-05-30/IMG_20250530_230047.jpg',
  'img/kondicionieriai/2025-06-02/IMG_20250602_150548.jpg',
  'img/kondicionieriai/2025-06-02/IMG_20250602_152652.jpg',
  'img/kondicionieriai/2025-06-03/IMG_20250603_214737.jpg',
  'img/kondicionieriai/2025-06-03/IMG_20250603_214758.jpg',
  'img/kondicionieriai/2025-06-07/IMG_20250607_150547.jpg',
  'img/kondicionieriai/2025-06-07/IMG_20250607_195942.jpg',
  'img/kondicionieriai/2025-06-12/IMG_20250612_213215.jpg',
  'img/kondicionieriai/2025-06-12/IMG_20250612_213220.jpg',
  'img/kondicionieriai/2025-06-12/IMG_20250612_213254.jpg',
  'img/kondicionieriai/2025-07-02/IMG_20250702_142710.jpg',
  'img/kondicionieriai/2025-07-02/IMG_20250702_142722.jpg',
  'img/kondicionieriai/2025-07-10/IMG_20250710_144406.jpg',
  'img/kondicionieriai/2025-07-10/IMG_20250710_144407.jpg',
  'img/kondicionieriai/2025-07-20/IMG_20250720_155311.jpg',
  'img/kondicionieriai/2025-07-20/IMG_20250720_160133.jpg',
  'img/kondicionieriai/2025-07-28/IMG_20250728_154003.jpg',
  'img/kondicionieriai/2025-07-28/IMG_20250728_154016.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_121318_1.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_122851.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_123037.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_123208.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_123209.jpg',
  'img/kondicionieriai/2025-07-29/IMG_20250729_140255.jpg',
  'img/kondicionieriai/2025-08-01/IMG_20250801_192046.jpg',
  'img/kondicionieriai/2025-08-02/IMG_20250802_173553.jpg',
  'img/kondicionieriai/2025-08-22/IMG_20250822_151800.jpg',
  'img/kondicionieriai/2025-08-27/IMG_20250827_200807.jpg',
];

const RODYTI_IŠ_KARTO = 16;
const RODYTI_DAUGIAU  = 16;

document.addEventListener('DOMContentLoaded', () => {
  // Pagrindiniame puslapyje nuotraukų blokas su "nuotraukos/..." turi būti visiškai paslėptas/pašalintas.
  const mainPhotosBlock = document.getElementById('paslaugu-nuotraukos');
  if (mainPhotosBlock) mainPhotosBlock.remove();

  /* ── Fono video: autoplay po naršyklės apribojimų (muted) ── */
  document.querySelectorAll('video.hero-video-bg, video.section-bg-video').forEach((v) => {
    v.muted = true;
    v.play().catch(() => {});
  });

  /* ── Progreso juosta ── */
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.prepend(progressBar);
  window.addEventListener('scroll', () => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = Math.min(pct, 100) + '%';
  }, { passive: true });

  /* ── Sticky antraštė ── */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── Hamburger meniu ── */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  function closeMobileMenu() { mobileMenu.classList.remove('open'); document.body.style.overflow = ''; }
  burger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  document.querySelectorAll('.mm-link, .mm-cta').forEach(l => l.addEventListener('click', closeMobileMenu));

  /* ── Sklandus slinkimas ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' }); closeMobileMenu(); }
    });
  });

  /* ── Atsiskleidimas slinkant ── */
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 5) * 0.07}s`;
    revealObs.observe(el);
  });
  setTimeout(() => {
    document.querySelectorAll('#hero .reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 150 + i * 130);
    });
  }, 100);

  /* ── Parallax ── */
  const heroContent = document.querySelector('.hero-content');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight && heroContent) {
      heroContent.style.transform = `translateY(${y * 0.15}px)`;
      heroContent.style.opacity = Math.max(0, 1 - (y / window.innerHeight) * 1.6);
    }
  }, { passive: true });

  /* ══════════════════════════════════════════
     GALERIJA
  ══════════════════════════════════════════ */
  const grid = document.getElementById('galleryGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const loadMoreWrap = document.getElementById('loadMoreWrap');
  let rodoma = 0;
  if (grid && loadMoreBtn && loadMoreWrap) {

  function sukurtiGalerijos(kiek) {
    const iki = Math.min(rodoma + kiek, VISI_VAIZDAI.length);
    const frag = document.createDocumentFragment();

    for (let i = rodoma; i < iki; i++) {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      if (i % 11 === 3) item.classList.add('gi-tall');
      if (i % 9 === 0 && i > 0) item.classList.add('gi-wide');

      const img = document.createElement('img');
      img.src = VISI_VAIZDAI[i];
      img.alt = `atvesk – darbas ${i + 1}`;
      img.loading = 'lazy';

      const overlay = document.createElement('div');
      overlay.className = 'gi-overlay';
      const num = document.createElement('div');
      num.className = 'gi-num';
      num.textContent = `Darbas #${i + 1}`;
      overlay.appendChild(num);

      item.appendChild(img);
      item.appendChild(overlay);
      item.dataset.index = i;
      item.addEventListener('click', () => atidarytiLightbox(i));

      // Įėjimo animacija
      item.style.opacity = '0';
      item.style.transform = 'scale(0.92)';
      frag.appendChild(item);
    }

    grid.appendChild(frag);

    // Animuoti po įkėlimo
    const visiItems = grid.querySelectorAll('.gallery-item');
    Array.from(visiItems).slice(rodoma).forEach((el, i) => {
      setTimeout(() => {
        el.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
        el.style.opacity = '1';
        el.style.transform = 'scale(1)';
      }, i * 35);
    });

    rodoma = iki;
    if (rodoma >= VISI_VAIZDAI.length) loadMoreWrap.style.display = 'none';
  }

  sukurtiGalerijos(RODYTI_IŠ_KARTO);
  loadMoreBtn.addEventListener('click', () => sukurtiGalerijos(RODYTI_DAUGIAU));

  /* ══════════════════════════════════════════
     LIGHTBOX
  ══════════════════════════════════════════ */
  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbTitle   = document.getElementById('lbTitle');
  const lbCounter = document.getElementById('lbCounter');
  const lbClose   = document.getElementById('lbClose');
  const lbPrev    = document.getElementById('lbPrev');
  const lbNext    = document.getElementById('lbNext');
  let lbIndex = 0;

  function atidarytiLightbox(i) {
    lbIndex = i; atnaujintiLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function uzdarytiLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
  function atnaujintiLightbox() {
    lbImg.src = VISI_VAIZDAI[lbIndex];
    lbTitle.textContent = `atvesk – Darbas #${lbIndex + 1}`;
    lbCounter.textContent = `${lbIndex + 1} / ${VISI_VAIZDAI.length}`;
    lbPrev.style.opacity = lbIndex === 0 ? '0.3' : '1';
    lbNext.style.opacity = lbIndex === VISI_VAIZDAI.length - 1 ? '0.3' : '1';
  }

  lbClose.addEventListener('click', uzdarytiLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) uzdarytiLightbox(); });
  lbPrev.addEventListener('click', () => { if (lbIndex > 0) { lbIndex--; atnaujintiLightbox(); } });
  lbNext.addEventListener('click', () => { if (lbIndex < VISI_VAIZDAI.length - 1) { lbIndex++; atnaujintiLightbox(); } });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') uzdarytiLightbox();
    if (e.key === 'ArrowLeft'  && lbIndex > 0) { lbIndex--; atnaujintiLightbox(); }
    if (e.key === 'ArrowRight' && lbIndex < VISI_VAIZDAI.length - 1) { lbIndex++; atnaujintiLightbox(); }
  });

  // Braukimas (touch)
  let txStart = 0;
  lightbox.addEventListener('touchstart', e => { txStart = e.touches[0].clientX; });
  lightbox.addEventListener('touchend', e => {
    const d = txStart - e.changedTouches[0].clientX;
    if (Math.abs(d) > 50) {
      if (d > 0 && lbIndex < VISI_VAIZDAI.length - 1) { lbIndex++; atnaujintiLightbox(); }
      if (d < 0 && lbIndex > 0) { lbIndex--; atnaujintiLightbox(); }
    }
  });
  }

  /* ── Kontaktų forma ── */
  const form = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('submitBtn');
      btn.innerHTML = '<span>Siunčiama...</span>';
      btn.style.opacity = '0.7';
      setTimeout(() => { form.style.display = 'none'; formSuccess.classList.add('show'); }, 800);
    });
  }

  /* ── Mobilusis mygtukas ── */
  const callFab = document.getElementById('callFab');
  function tikrintiMobile() { callFab.style.display = window.innerWidth > 768 ? 'none' : 'flex'; }
  tikrintiMobile();
  window.addEventListener('resize', tikrintiMobile);

  /* ── Aktyvios navigacijos nuorodos ── */
  const navLinks = document.querySelectorAll('.nav a');
  const secObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        navLinks.forEach(l => { l.style.color = l.getAttribute('href') === `#${id}` ? 'var(--blue)' : ''; });
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('section[id]').forEach(s => secObs.observe(s));

  /* ── Pardavimai: visi kondicionieriai iš salna-models.js ── */
  const productsGrid = document.getElementById('productsGrid');
  if (productsGrid && Array.isArray(window.SALNA_MODELS)) {
    const formatEur = (n) => {
      return new Intl.NumberFormat('lt-LT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n) + ' €';
    };
    const skaiciuotiMusuKaina = (salnaKaina) => {
      const nuolaida = Math.min(salnaKaina * 0.05, 60);
      const musu = salnaKaina - nuolaida;
      return { musu, nuolaida };
    };

    const modeliai = window.SALNA_MODELS
      .filter((m) => Number(m.kaina_EUR) > 0 && Number(m.galia_kW) > 0)
      .sort((a, b) => Number(a.kaina_EUR) - Number(b.kaina_EUR));

    productsGrid.innerHTML = '';
    modeliai.forEach((m, idx) => {
      const salnaKaina = Number(m.kaina_EUR);
      const { musu, nuolaida } = skaiciuotiMusuKaina(salnaKaina);
      const energetine = m.energijos_klase || 'A++';
      const tipas = m.tipas || 'Sieninis kondicionierius';
      const imageUrl = m.imageUrl || 'img/kondicionieriai/2025-04-17/IMG_20250417_131347.jpg';
      const brand = m.gamintojas || 'Gamintojas';
      const modelis = m.modelis || 'Modelis';
      const galia = Number(m.galia_kW).toFixed(1).replace('.', ',');
      const triuksmas = Number(m.triuksmas_dB) > 0 ? Number(m.triuksmas_dB) : 'n/d';

      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-img-wrap">
          <img src="${imageUrl}" alt="${modelis}" class="product-img" loading="lazy" referrerpolicy="no-referrer" />
          ${idx < 3 ? '<div class="product-badge">Populiaru</div>' : ''}
        </div>
        <div class="product-body">
          <div class="product-brand">${brand}</div>
          <h3>${modelis}</h3>
          <p>${tipas}. Energijos klasė ${energetine}. Tinka patalpoms iki ${m.plotas_m2 || 'n/d'} m².</p>
          <div class="product-price">Mūsų kaina: <strong>${formatEur(musu)}</strong></div>
          <div class="product-price-note">Salna kaina: ${formatEur(salnaKaina)} (nuolaida ${formatEur(nuolaida)}, max 60 €)</div>
          <ul class="product-specs">
            <li>📊 Galia: ${galia} kW</li>
            <li>🌡️ Energijos klasė: ${energetine}</li>
            <li>🔊 Triukšmas iki: ${triuksmas} dB</li>
          </ul>
          <a href="#kontaktai" class="btn btn-primary product-btn">Užklausti kainos</a>
        </div>
      `;
      productsGrid.appendChild(card);
    });
  }

  /* ── Produktų kortelių tilt ── */
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });

  /* ══════════════════════════════════════════
     PRIETAISO REGISTRACIJOS MODALAS
  ══════════════════════════════════════════ */
  const regModal      = document.getElementById('regModal');
  const regClose      = document.getElementById('regClose');
  const openRegBtns   = document.querySelectorAll('#openRegistration, [data-open-reg]');
  const regForm       = document.getElementById('regForm');
  const regSuccess    = document.getElementById('regSuccess');
  const regUploadArea = document.getElementById('regUploadArea');
  const regPhoto      = document.getElementById('regPhoto');
  const regPreview    = document.getElementById('regPreview');
  const regUploadContent = document.getElementById('regUploadContent');
  let regFiles = [];

  function openRegModal() {
    regModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeRegModal() {
    regModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openRegBtns.forEach(btn => btn.addEventListener('click', openRegModal));
  regClose.addEventListener('click', closeRegModal);
  regModal.addEventListener('click', e => { if (e.target === regModal) closeRegModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && regModal.classList.contains('open')) closeRegModal(); });

  regUploadArea.addEventListener('click', () => regPhoto.click());
  regUploadArea.addEventListener('dragover', e => { e.preventDefault(); regUploadArea.classList.add('drag-over'); });
  regUploadArea.addEventListener('dragleave', () => regUploadArea.classList.remove('drag-over'));
  regUploadArea.addEventListener('drop', e => {
    e.preventDefault();
    regUploadArea.classList.remove('drag-over');
    handleRegFiles(e.dataTransfer.files);
  });
  regPhoto.addEventListener('change', () => handleRegFiles(regPhoto.files));

  function handleRegFiles(fileList) {
    Array.from(fileList).forEach(file => {
      if (!file.type.startsWith('image/')) return;
      if (regFiles.length >= 5) return;
      regFiles.push(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const wrap = document.createElement('div');
        wrap.className = 'reg-thumb-wrap';
        const img = document.createElement('img');
        img.src = e.target.result;
        img.alt = file.name;
        const removeBtn = document.createElement('button');
        removeBtn.className = 'reg-thumb-remove';
        removeBtn.type = 'button';
        removeBtn.textContent = '✕';
        removeBtn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const idx = regFiles.indexOf(file);
          if (idx > -1) regFiles.splice(idx, 1);
          wrap.remove();
          if (regFiles.length === 0) regUploadContent.style.display = '';
        });
        wrap.appendChild(img);
        wrap.appendChild(removeBtn);
        regPreview.appendChild(wrap);
        if (regFiles.length > 0) regUploadContent.style.display = 'none';
      };
      reader.readAsDataURL(file);
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('regSubmitBtn');
      btn.innerHTML = '<span>Siunčiama...</span>';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      const vardas    = document.getElementById('regName').value;
      const tel       = document.getElementById('regPhone').value;
      const email     = document.getElementById('regEmail').value;
      const prietaisas = document.getElementById('regDevice').value;
      const modelis   = document.getElementById('regModel').value;
      const sn        = document.getElementById('regSerial').value;
      const gedimas   = document.getElementById('regProblem').value;
      const nuotraukos = regFiles.length > 0 ? regFiles.length + ' nuotrauka(-os) pridėta(-os)' : 'Nepridėta';

      const subject = encodeURIComponent('Prietaiso registracija – ' + prietaisas + ' ' + modelis);
      const body = encodeURIComponent(
        'PRIETAISO REGISTRACIJA\n' +
        '═══════════════════════\n\n' +
        'KONTAKTAI:\n' +
        'Vardas: ' + vardas + '\n' +
        'Telefonas: ' + tel + '\n' +
        'El. paštas: ' + email + '\n\n' +
        'PRIETAISAS:\n' +
        'Tipas: ' + prietaisas + '\n' +
        'Modelis: ' + modelis + '\n' +
        'Serijinis Nr.: ' + (sn || 'Nenurodytas') + '\n\n' +
        'GEDIMAS:\n' + (gedimas || 'Neaprašytas') + '\n\n' +
        'Nuotraukos: ' + nuotraukos + '\n' +
        '(Jei klientas pridėjo nuotraukų, paprašykite atsiųsti jas atskirai)\n'
      );

      const mailtoLink = 'mailto:lukmantas@gmail.com?subject=' + subject + '&body=' + body;

      setTimeout(() => {
        window.location.href = mailtoLink;
        regForm.style.display = 'none';
        regSuccess.classList.add('show');
      }, 600);
    });
  }

  /* ── Bėganti akcijos lentelė ── */
  setTimeout(() => {
    const promo = document.createElement('div');
    promo.className = 'promo-runner';
    promo.innerHTML = 'Sveikiname - <strong>Nemokamas kondicionierius sumontavimas</strong>';
    document.body.appendChild(promo);

    let x = 24;
    let y = 24;
    let vx = 1.35;
    let vy = 1.05;
    let running = true;
    const mouse = { x: -9999, y: -9999 };
    const createdAt = Date.now();
    let firstChaseAt = 0;
    let lastInteractionAt = 0;

    function spawnCoolEffect(px, py) {
      const cool = document.createElement('div');
      cool.className = 'promo-cool-text';
      cool.textContent = '❄ vesa';
      cool.style.left = `${px}px`;
      cool.style.top = `${py}px`;
      document.body.appendChild(cool);
      setTimeout(() => cool.remove(), 900);
    }

    function markInteraction() {
      const now = Date.now();
      if (!firstChaseAt) firstChaseAt = now;
      lastInteractionAt = now;
    }

    function escapeFromPoint(px, py, boost = 9.5) {
      const rect = promo.getBoundingClientRect();
      const cx = x + rect.width / 2;
      const cy = y + rect.height / 2;
      const dx = cx - px;
      const dy = cy - py;
      const dist = Math.hypot(dx, dy) || 1;
      const nx = dx / dist;
      const ny = dy / dist;
      vx = nx * boost;
      vy = ny * boost;
      markInteraction();
      spawnCoolEffect(cx, cy);
    }

    function removePromo() {
      if (!running) return;
      running = false;
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown, true);
      promo.remove();
    }

    function bounce() {
      if (!running) return;
      const now = Date.now();
      if (!firstChaseAt && now - createdAt >= 10000) {
        // Nereagavo 10 s po pasirodymo.
        removePromo();
        return;
      }
      if (firstChaseAt && (now - firstChaseAt >= 15000 || now - lastInteractionAt >= 10000)) {
        // 15 s gaudymo arba 10 s be naujos reakcijos.
        removePromo();
        return;
      }

      const rect = promo.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const maxX = Math.max(0, window.innerWidth - w - 8);
      const maxY = Math.max(0, window.innerHeight - h - 8);

      x += vx;
      y += vy;

      if (x <= 0 || x >= maxX) {
        vx *= -1;
        x = Math.min(Math.max(x, 0), maxX);
      }
      if (y <= 0 || y >= maxY) {
        vy *= -1;
        y = Math.min(Math.max(y, 0), maxY);
      }

      const cx = x + w / 2;
      const cy = y + h / 2;
      const dx = cx - mouse.x;
      const dy = cy - mouse.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 170) {
        const nx = dx / (dist || 1);
        const ny = dy / (dist || 1);
        vx += nx * 0.9;
        vy += ny * 0.9;
        const speed = Math.hypot(vx, vy);
        const minSpeed = 5.6;
        if (speed < minSpeed) {
          vx = (vx / (speed || 1)) * minSpeed;
          vy = (vy / (speed || 1)) * minSpeed;
        }
        markInteraction();
        spawnCoolEffect(cx, cy);
      }

      promo.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      requestAnimationFrame(bounce);
    }

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onMouseDown = (e) => {
      if (!running) return;
      const rect = promo.getBoundingClientRect();
      const pad = 26;
      const inside =
        e.clientX >= rect.left - pad &&
        e.clientX <= rect.right + pad &&
        e.clientY >= rect.top - pad &&
        e.clientY <= rect.bottom + pad;
      if (inside) {
        e.preventDefault();
        e.stopPropagation();
        escapeFromPoint(e.clientX, e.clientY, 10.5);
      }
    };
    document.addEventListener('mousedown', onMouseDown, true);

    promo.addEventListener('mouseenter', () => {
      escapeFromPoint(mouse.x, mouse.y, 9.8);
    });
    promo.addEventListener('mousedown', (e) => {
      e.preventDefault();
      escapeFromPoint(e.clientX, e.clientY, 11.2);
    });

    requestAnimationFrame(bounce);
  }, 10000);

  console.log('%catvesk ⚡🌡️', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
  console.log(`%c${VISI_VAIZDAI.length} nuotraukų | lukmantas@gmail.com`, 'color: #64748b;');
});
