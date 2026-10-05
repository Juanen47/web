// Mueve el brillo especular del cristal siguiendo al cursor.
const selector = '.about-text, .card, .project-card, .tech-block, .flow-steps';

document.addEventListener(
  'pointermove',
  (e) => {
    const el = (e.target as HTMLElement).closest<HTMLElement>(selector);
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  },
  { passive: true },
);
