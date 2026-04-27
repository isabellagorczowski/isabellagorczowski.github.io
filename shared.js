// ══════════════════════════════════
// after5nyc — shared.js  v2
// Unified nav · Mobile-first
// ══════════════════════════════════

// ── HAMBURGER / MOBILE DRAWER ──
document.addEventListener('DOMContentLoaded', () => {
  const btn  = document.getElementById('hamburgerBtn');
  const menu = document.getElementById('mobileMenu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      // Prevent body scroll while drawer is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close drawer when any link inside it is tapped
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on backdrop click (if menu itself is clicked outside sheet)
    menu.addEventListener('click', e => {
      if (e.target === menu) {
        menu.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
});

// ── TOAST ──
function showToast(msg) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity = '0'; }, 2200);
  setTimeout(() => { t.remove(); }, 2600);
}
