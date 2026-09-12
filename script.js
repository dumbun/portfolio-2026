// ── Loader dismiss ──
const loader = document.getElementById('loader');
const loaderStart = performance.now();
const MIN_DISPLAY = 400; // ms — prevent a jarring flash

function dismissLoader() {
  const elapsed = performance.now() - loaderStart;
  const remaining = Math.max(0, MIN_DISPLAY - elapsed);
  setTimeout(() => {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.addEventListener('transitionend', () => loader.remove(), { once: true });
  }, remaining);
}

if (document.readyState === 'complete') {
  dismissLoader();
} else {
  window.addEventListener('load', dismissLoader);
}

// ── Image error fallback (must be global for inline onerror) ──
window.handleImgError = function (img) {
  const ph = document.createElement('div');
  ph.className = 'img-ph';
  ph.textContent = (img.alt || 'Preview unavailable') + ' — view on Google Play →';
  img.replaceWith(ph);
};

// ── DOM refs ──
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const links = document.getElementById('links');
const backToTop = document.getElementById('backToTop');
const navAnchors = links.querySelectorAll('a[href^="#"]');

// ── Scroll-driven updates (single handler, passive) ──
let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;

    // Navbar background
    nav.classList.toggle('scrolled', y > 12);

    // Back-to-top visibility
    backToTop.classList.toggle('visible', y > 600);

    // Active nav link highlight
    const sections = document.querySelectorAll('section[id], main[id]');
    let currentId = '';
    sections.forEach(sec => {
      if (sec.offsetTop - 120 <= y) currentId = sec.id;
    });
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + currentId);
    });

    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

// ── Mobile menu ──
menu.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => links.classList.remove('open'))
);

// ── Back to top ──
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Year ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Intersection Observer for reveal animations ──
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ── Trigger initial scroll state ──
onScroll();