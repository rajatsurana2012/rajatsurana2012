/* =====================================================================
   JSA — SCRIPT
   - Footer year
   - Mobile menu auto-close
   - Navkar mantra rotator (cycles 5 lines, fade in / fade out)
   ===================================================================== */

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Close mobile menu when a nav link is tapped
document.querySelectorAll('.nav ul a').forEach(a =>
  a.addEventListener('click', () => document.body.classList.remove('mobile-open'))
);

/* ---- NAVKAR MANTRA — same behaviour as the React version ----
   Each .navkar-text block cycles through the 5 lines independently.
   The CSS animation runs once per line; JS swaps the line every 2.8s. */

const NAVKAR_LINES = [
  "णमो अरिहंताणं",
  "णमो सिद्धाणं",
  "णमो आयरियाणं",
  "णमो उवज्झायाणं",
  "णमो लोए सव्वसाहूणं"
];

document.querySelectorAll('[data-navkar] .navkar-text').forEach((el) => {
  let i = 0;
  const tick = () => {
    // Rebuild the span so the CSS animation re-fires
    el.innerHTML = '';
    const s = document.createElement('span');
    s.textContent = NAVKAR_LINES[i];
    el.appendChild(s);
    i = (i + 1) % NAVKAR_LINES.length;
  };
  tick();
  setInterval(tick, 2800);
});
