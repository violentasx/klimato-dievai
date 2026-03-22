/* ═══════════════════════════════════════════
   KLIMATO DIEVAI – JavaScript
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
      img.alt = `Klimato Dievai – darbas ${i + 1}`;
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
    lbTitle.textContent = `Klimato Dievai – Darbas #${lbIndex + 1}`;
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

  console.log('%cKlimato Dievai ⚡🌡️', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
  console.log(`%c${VISI_VAIZDAI.length} nuotraukų | lukmantas@gmail.com`, 'color: #64748b;');
});
