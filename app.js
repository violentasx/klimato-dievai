/* ═══════════════════════════════════════════
   KLIMATO DIEVAI – JavaScript
   ═══════════════════════════════════════════ */

const VISI_VAIZDAI = [
  'img/20250217_103043.jpg',
  'img/IMG-016b4f2bf34cba6c7a1611bb0164f94e-V.jpg',
  'img/IMG-20240731-WA0003.jpg',
  'img/IMG-20250430-WA0000.jpg',
  'img/IMG-20250502-WA0000.jpg',
  'img/IMG-20250818-WA0000.jpg',
  'img/IMG-20250818-WA0001.jpg',
  'img/IMG-254e0119aa6bcaf4c5f77892cc07b518-V.jpg',
  'img/IMG-69409c111114605a475ef1568c20dd0a-V.jpg',
  'img/IMG-801b5f0add70f239da5e3fa363f9605c-V.jpg',
  'img/IMG-99c45e0a8dffd37f2ab711c08317e110-V.jpg',
  'img/IMG-a78f920896b36ff916c9c12d8b0c5cd8-V.jpg',
  'img/IMG-bbdfa78459509aa1c218de16291e8df1-V.jpg',
  'img/IMG-bc0f7a1c22d736ed09bcd4eba6eef948-V.jpg',
  'img/IMG-db22a8d8d74983d5d4797eec6517904e-V.jpg',
  'img/IMG-ded8a1574b50b6e0d71107675626368c-V.jpg',
  'img/IMG-f19a4bc64f1fe7bd6040997b3e9f4c74-V.jpg',
  'img/IMG_20240614_162925 (1).jpg',
  'img/IMG_20240614_162925 (2).jpg',
  'img/IMG_20240614_162925 (3).jpg',
  'img/IMG_20240614_162925 (4).jpg',
  'img/IMG_20240614_162925.jpg',
  'img/IMG_20240614_162933 (1).jpg',
  'img/IMG_20240614_162933 (2).jpg',
  'img/IMG_20240614_162933 (3).jpg',
  'img/IMG_20240614_162933 (4).jpg',
  'img/IMG_20240614_162933.jpg',
  'img/IMG_20240621_180952 (1).jpg',
  'img/IMG_20240621_180952 (2).jpg',
  'img/IMG_20240621_180952 (3).jpg',
  'img/IMG_20240621_180952 (4).jpg',
  'img/IMG_20240621_180952.jpg',
  'img/IMG_20240622_182501 (1).jpg',
  'img/IMG_20240622_182501 (2).jpg',
  'img/IMG_20240622_182501 (3).jpg',
  'img/IMG_20240622_182501.jpg',
  'img/IMG_20240622_182510 (1).jpg',
  'img/IMG_20240622_182510 (2).jpg',
  'img/IMG_20240622_182510 (3).jpg',
  'img/IMG_20240622_182510.jpg',
  'img/IMG_20240622_182520 (1).jpg',
  'img/IMG_20240622_182520 (2).jpg',
  'img/IMG_20240622_182520.jpg',
  'img/IMG_20240622_182541 (1).jpg',
  'img/IMG_20240622_182541 (2).jpg',
  'img/IMG_20240622_182541.jpg',
  'img/IMG_20240622_182547 (1).jpg',
  'img/IMG_20240622_182547 (2).jpg',
  'img/IMG_20240622_182547.jpg',
  'img/IMG_20240622_182550 (1).jpg',
  'img/IMG_20240622_182550 (2).jpg',
  'img/IMG_20240622_182550 (3).jpg',
  'img/IMG_20240622_182550.jpg',
  'img/IMG_20240628_154939 (1).jpg',
  'img/IMG_20240628_154939 (2).jpg',
  'img/IMG_20240628_154939 (3).jpg',
  'img/IMG_20240628_154939 (4).jpg',
  'img/IMG_20240628_154939.jpg',
  'img/IMG_20240628_154944 (1).jpg',
  'img/IMG_20240628_154944 (2).jpg',
  'img/IMG_20240628_154944 (3).jpg',
  'img/IMG_20240628_154944 (4).jpg',
  'img/IMG_20240628_154944.jpg',
  'img/IMG_20240628_155027 (1).jpg',
  'img/IMG_20240628_155027 (2).jpg',
  'img/IMG_20240628_155027 (3).jpg',
  'img/IMG_20240628_155027.jpg',
  'img/IMG_20240701_161835 (1).jpg',
  'img/IMG_20240701_161835 (2).jpg',
  'img/IMG_20240701_161835 (3).jpg',
  'img/IMG_20240701_161835.jpg',
  'img/IMG_20240701_161840 (1).jpg',
  'img/IMG_20240701_161840 (2).jpg',
  'img/IMG_20240701_161840.jpg',
  'img/IMG_20240701_165514 (1).jpg',
  'img/IMG_20240701_165514 (2).jpg',
  'img/IMG_20240701_165514.jpg',
  'img/IMG_20240701_165621 (1).jpg',
  'img/IMG_20240701_165621 (2).jpg',
  'img/IMG_20240701_165621 (3).jpg',
  'img/IMG_20240701_165621.jpg',
  'img/IMG_20240701_170315 (1).jpg',
  'img/IMG_20240701_170315 (2).jpg',
  'img/IMG_20240701_170315 (3).jpg',
  'img/IMG_20240701_170315.jpg',
  'img/IMG_20240703_125756 (1).jpg',
  'img/IMG_20240703_125756 (2).jpg',
  'img/IMG_20240703_125756 (3).jpg',
  'img/IMG_20240703_125756 (4).jpg',
  'img/IMG_20240703_125756.jpg',
  'img/IMG_20240703_140608 (1).jpg',
  'img/IMG_20240703_140608 (2).jpg',
  'img/IMG_20240703_140608 (3).jpg',
  'img/IMG_20240703_140608 (4).jpg',
  'img/IMG_20240703_140608.jpg',
  'img/IMG_20240711_154544 (1).jpg',
  'img/IMG_20240711_154544 (2).jpg',
  'img/IMG_20240711_154544 (3).jpg',
  'img/IMG_20240711_154544.jpg',
  'img/IMG_20240711_154600 (1).jpg',
  'img/IMG_20240711_154600 (2).jpg',
  'img/IMG_20240711_154600 (3).jpg',
  'img/IMG_20240711_154600.jpg',
  'img/IMG_20240711_154637 (1).jpg',
  'img/IMG_20240711_154637 (2).jpg',
  'img/IMG_20240711_154637 (3).jpg',
  'img/IMG_20240711_154637.jpg',
  'img/IMG_20240711_154645 (1).jpg',
  'img/IMG_20240711_154645 (2).jpg',
  'img/IMG_20240711_154645 (3).jpg',
  'img/IMG_20240711_154645.jpg',
  'img/IMG_20240725_155747 (1).jpg',
  'img/IMG_20240725_155747 (2).jpg',
  'img/IMG_20240725_155747 (3).jpg',
  'img/IMG_20240725_155747.jpg',
  'img/IMG_20240725_171216 (1).jpg',
  'img/IMG_20240725_171216 (2).jpg',
  'img/IMG_20240725_171216 (3).jpg',
  'img/IMG_20240725_171216 (4).jpg',
  'img/IMG_20240725_171216.jpg',
  'img/IMG_20240725_171223 (1).jpg',
  'img/IMG_20240725_171223 (2).jpg',
  'img/IMG_20240725_171223 (3).jpg',
  'img/IMG_20240725_171223 (4).jpg',
  'img/IMG_20240725_171223.jpg',
  'img/IMG_20240725_172154 (1).jpg',
  'img/IMG_20240725_172154 (2).jpg',
  'img/IMG_20240725_172154 (3).jpg',
  'img/IMG_20240725_172154.jpg',
  'img/IMG_20240726_120057 (1).jpg',
  'img/IMG_20240726_120057 (2).jpg',
  'img/IMG_20240726_120057 (3).jpg',
  'img/IMG_20240726_120057 (4).jpg',
  'img/IMG_20240726_120057.jpg',
  'img/IMG_20240731_135916 (1).jpg',
  'img/IMG_20240731_135916 (2).jpg',
  'img/IMG_20240731_135916 (3).jpg',
  'img/IMG_20240731_135916 (4).jpg',
  'img/IMG_20240731_135916.jpg',
  'img/IMG_20240731_135922 (1).jpg',
  'img/IMG_20240731_135922 (2).jpg',
  'img/IMG_20240731_135922 (3).jpg',
  'img/IMG_20240731_135922 (4).jpg',
  'img/IMG_20240731_135922.jpg',
  'img/IMG_20240731_142243 (1).jpg',
  'img/IMG_20240731_142243 (2).jpg',
  'img/IMG_20240731_142243 (3).jpg',
  'img/IMG_20240731_142243 (4).jpg',
  'img/IMG_20240731_142243.jpg',
  'img/IMG_20240801_135932 (1).jpg',
  'img/IMG_20240801_135932 (2).jpg',
  'img/IMG_20240801_135932 (3).jpg',
  'img/IMG_20240801_135932 (4).jpg',
  'img/IMG_20240801_135932.jpg',
  'img/IMG_20240801_154130 (1).jpg',
  'img/IMG_20240801_154130 (2).jpg',
  'img/IMG_20240801_154130 (3).jpg',
  'img/IMG_20240801_154130.jpg',
  'img/IMG_20240802_155912 (1).jpg',
  'img/IMG_20240802_155912 (2).jpg',
  'img/IMG_20240802_155912 (3).jpg',
  'img/IMG_20240802_155912 (4).jpg',
  'img/IMG_20240802_155912.jpg',
  'img/IMG_20240802_155928 (1).jpg',
  'img/IMG_20240802_155928 (2).jpg',
  'img/IMG_20240802_155928 (3).jpg',
  'img/IMG_20240802_155928 (4).jpg',
  'img/IMG_20240802_155928.jpg',
  'img/IMG_20240808_112933 (1).jpg',
  'img/IMG_20240808_112933 (2).jpg',
  'img/IMG_20240808_112933 (3).jpg',
  'img/IMG_20240808_112933.jpg',
  'img/IMG_20240808_112941 (1).jpg',
  'img/IMG_20240808_112941 (2).jpg',
  'img/IMG_20240808_112941 (3).jpg',
  'img/IMG_20240808_112941 (4).jpg',
  'img/IMG_20240808_112941.jpg',
  'img/IMG_20240808_113220 (1).jpg',
  'img/IMG_20240808_113220 (2).jpg',
  'img/IMG_20240808_113220 (3).jpg',
  'img/IMG_20240808_113220.jpg',
  'img/IMG_20240808_113232 (1).jpg',
  'img/IMG_20240808_113232 (2).jpg',
  'img/IMG_20240808_113232 (3).jpg',
  'img/IMG_20240808_113232 (4).jpg',
  'img/IMG_20240808_113232.jpg',
  'img/IMG_20240925_132802 (1).jpg',
  'img/IMG_20240925_132802 (2).jpg',
  'img/IMG_20240925_132802 (3).jpg',
  'img/IMG_20240925_132802 (4).jpg',
  'img/IMG_20240925_132802.jpg',
  'img/IMG_20240925_132911 (1).jpg',
  'img/IMG_20240925_132911 (2).jpg',
  'img/IMG_20240925_132911 (3).jpg',
  'img/IMG_20240925_132911 (4).jpg',
  'img/IMG_20240925_132911.jpg',
  'img/IMG_20240925_132917 (1).jpg',
  'img/IMG_20240925_132917 (2).jpg',
  'img/IMG_20240925_132917 (3).jpg',
  'img/IMG_20240925_132917 (4).jpg',
  'img/IMG_20240925_132917.jpg',
  'img/IMG_20240925_133052 (1).jpg',
  'img/IMG_20240925_133052 (2).jpg',
  'img/IMG_20240925_133052 (3).jpg',
  'img/IMG_20240925_133052 (4).jpg',
  'img/IMG_20240925_133052.jpg',
  'img/IMG_20240928_105302 (1).jpg',
  'img/IMG_20240928_105302 (2).jpg',
  'img/IMG_20240928_105302 (3).jpg',
  'img/IMG_20240928_105302 (4).jpg',
  'img/IMG_20240928_105302.jpg',
  'img/IMG_20241004_112419 (1).jpg',
  'img/IMG_20241004_112419 (2).jpg',
  'img/IMG_20241004_112419 (3).jpg',
  'img/IMG_20241004_112419 (4).jpg',
  'img/IMG_20241004_112419.jpg',
  'img/IMG_20241011_175904 (1).jpg',
  'img/IMG_20241011_175904 (2).jpg',
  'img/IMG_20241011_175904 (3).jpg',
  'img/IMG_20241011_175904 (4).jpg',
  'img/IMG_20241011_175904.jpg',
  'img/IMG_20241011_175928 (1).jpg',
  'img/IMG_20241011_175928 (2).jpg',
  'img/IMG_20241011_175928 (3).jpg',
  'img/IMG_20241011_175928 (4).jpg',
  'img/IMG_20241011_175928.jpg',
  'img/IMG_20241011_175944 (1).jpg',
  'img/IMG_20241011_175944 (2).jpg',
  'img/IMG_20241011_175944 (3).jpg',
  'img/IMG_20241011_175944 (4).jpg',
  'img/IMG_20241011_175944.jpg',
  'img/IMG_20241108_125501.jpg',
  'img/IMG_20241112_134423.jpg',
  'img/IMG_20241210_101346.jpg',
  'img/IMG_20241216_155353.jpg',
  'img/IMG_20241223_130041.jpg',
  'img/IMG_20250106_145240.jpg',
  'img/IMG_20250106_145625.jpg',
  'img/IMG_20250110_122137.jpg',
  'img/IMG_20250130_114344.jpg',
  'img/IMG_20250130_114640.jpg',
  'img/IMG_20250130_114907.jpg',
  'img/IMG_20250201_164037.jpg',
  'img/IMG_20250201_164040.jpg',
  'img/IMG_20250201_164042.jpg',
  'img/IMG_20250204_115758.jpg',
  'img/IMG_20250204_115812.jpg',
  'img/IMG_20250305_091736.jpg',
  'img/IMG_20250306_112910.jpg',
  'img/IMG_20250306_121810.jpg',
  'img/IMG_20250317_132110.jpg',
  'img/IMG_20250414_111123.jpg',
  'img/IMG_20250417_131347.jpg',
  'img/IMG_20250417_132834.jpg',
  'img/IMG_20250418_114904.jpg',
  'img/IMG_20250418_121941.jpg',
  'img/IMG_20250418_135337.jpg',
  'img/IMG_20250418_143343.jpg',
  'img/IMG_20250423_111620.jpg',
  'img/IMG_20250423_140238.jpg',
  'img/IMG_20250425_125217.jpg',
  'img/IMG_20250429_133828.jpg',
  'img/IMG_20250429_133842.jpg',
  'img/IMG_20250502_214307.jpg',
  'img/IMG_20250512_152152.jpg',
  'img/IMG_20250512_152156.jpg',
  'img/IMG_20250526_143322.jpg',
  'img/IMG_20250526_143826.jpg',
  'img/IMG_20250528_194828.jpg',
  'img/IMG_20250529_171133.jpg',
  'img/IMG_20250529_174401.jpg',
  'img/IMG_20250529_180020.jpg',
  'img/IMG_20250529_191315.jpg',
  'img/IMG_20250530_223807.jpg',
  'img/IMG_20250530_230047.jpg',
  'img/IMG_20250602_150548.jpg',
  'img/IMG_20250602_152652.jpg',
  'img/IMG_20250603_214737.jpg',
  'img/IMG_20250603_214758.jpg',
  'img/IMG_20250607_150547.jpg',
  'img/IMG_20250607_195942.jpg',
  'img/IMG_20250612_213215.jpg',
  'img/IMG_20250612_213220.jpg',
  'img/IMG_20250612_213254.jpg',
  'img/IMG_20250702_142710.jpg',
  'img/IMG_20250702_142722.jpg',
  'img/IMG_20250710_144406.jpg',
  'img/IMG_20250710_144407.jpg',
  'img/IMG_20250720_155311.jpg',
  'img/IMG_20250720_160133.jpg',
  'img/IMG_20250728_154003.jpg',
  'img/IMG_20250728_154016.jpg',
  'img/IMG_20250729_121318_1.jpg',
  'img/IMG_20250729_122851.jpg',
  'img/IMG_20250729_123037.jpg',
  'img/IMG_20250729_123208.jpg',
  'img/IMG_20250729_123209.jpg',
  'img/IMG_20250729_140255.jpg',
  'img/IMG_20250801_192046.jpg',
  'img/IMG_20250802_173553.jpg',
  'img/IMG_20250822_151800.jpg',
  'img/IMG_20250827_200807.jpg',
  'img/Messenger_creation_08F43853-948A-4954-8DF7-B1F991DAE08D.jpeg',
  'img/Messenger_creation_1F6CF1BD-2ABA-46D2-8F23-94F58136D3A7.jpeg',
  'img/Messenger_creation_38649D5C-057D-45B1-8ED8-2ACA0E16CE33.jpeg',
  'img/Messenger_creation_5E98A4BB-A2A8-45FD-B11B-765F145E33F1.png',
  'img/Messenger_creation_71C11952-C730-4CDF-BA1F-96036854FB76.jpeg',
  'img/Messenger_creation_7E8679C7-AB1B-4EAD-AEE3-8E142254D1C4.jpeg',
  'img/Messenger_creation_AABDE2BE-AB9F-4E92-A8D6-352C721A28ED.jpeg',
  'img/Messenger_creation_B4E6F88D-B47A-4FDE-A421-812C74B7854B.jpeg',
  'img/Messenger_creation_C6294E2E-A1F4-4DFB-AB58-8DE6BA5CF37D.jpeg',
  'img/Messenger_creation_ED839CBE-5C84-4185-BCE8-3301DA559860.jpeg',
  'img/Messenger_creation_FB43560F-A5DA-4761-9253-032284F84DA4.jpeg',
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
    form.addEventListener('submit', () => {
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
