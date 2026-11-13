/* ============ THEME TOGGLE ============ */
(function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const theme = saved || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
})();

// Data sub-tab per halaman
const pageTabs = {
  home: [
    { id: 'overview', label: 'Overview' },
    { id: 'highlights', label: 'Highlights' },
    { id: 'featured', label: 'Featured' },
    { id: 'whatido', label: 'What I Do' }
  ],
  about: [
    { id: 'profile', label: 'Profile' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'quotes', label: 'Quotes' }
  ],
  experience: [
    { id: 'timeline', label: 'Timeline' },
    { id: 'achievements', label: 'Achievements' }
  ],
  projects: [
    { id: 'all', label: 'All Projects' },
    { id: 'sql', label: 'SQL' },
    { id: 'python', label: 'Python / ML' },
    { id: 'dashboard', label: 'Dashboard' }
  ],
  contact: [
    { id: 'get-in-touch', label: 'Get in Touch' },
    { id: 'social', label: 'Social' },
    { id: 'availability', label: 'Availability' },
    { id: 'send-message', label: 'Send Message' }
  ]
};

let currentPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
  renderRail('home');
  attachNavListeners();
  attachModalListeners();
  attachThemeToggle();
  attachRailToggle();
  attachSwipeGallery();
});

// Render tombol sub-tab di left rail
function renderRail(page) {
  const container = document.getElementById('rail-items');
  container.innerHTML = '';
  pageTabs[page].forEach((tab, idx) => {
    const btn = document.createElement('button');
    btn.className = 'rail-item' + (idx === 0 ? ' active' : '');
    btn.dataset.tab = tab.id;
    btn.title = tab.label;
    btn.innerHTML = `
      <span class="rail-initial">${tab.label.charAt(0).toUpperCase()}</span>
      <span class="rail-label">${tab.label}</span>
    `;
    btn.addEventListener('click', () => activateTab(page, tab.id));
    container.appendChild(btn);
  });
}

// Aktifkan satu sub-tab
function activateTab(page, tabId) {
  document.querySelectorAll('.rail-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tabId);
  });
  const pageEl = document.querySelector(`.page[data-page="${page}"]`);
  if (!pageEl) return;
  pageEl.querySelectorAll('.panel').forEach(p => {
    p.classList.toggle('active', p.dataset.tab === tabId);
  });
  window.location.hash = `${page}/${tabId}`;
  setTimeout(attachSwipeGallery, 50);
}

// Pindah halaman (top nav)
function switchPage(page, tabId) {
  currentPage = page;
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
  document.querySelectorAll('.page').forEach(p => {
    p.classList.toggle('active', p.dataset.page === page);
  });
  renderRail(page);
  const defaultTab = tabId || pageTabs[page][0].id;
  activateTab(page, defaultTab);
}

function attachNavListeners() {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      switchPage(a.dataset.page);
    });
  });

  document.querySelectorAll('[data-goto-page]').forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.dataset.gotoPage));
  });

  // Handle hash saat load
  const [hashPage, hashTab] = window.location.hash.replace('#', '').split('/');
  if (hashPage && pageTabs[hashPage]) {
    switchPage(hashPage, hashTab);
  }
}

function attachModalListeners() {
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close');

  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => {
      const tmpl = card.querySelector('.card-detail-template');
      let body = '';
      if (tmpl) {
        body = tmpl.innerHTML;
      } else {
        body = card.dataset.modalBody || '';
      }
      document.getElementById('modal-title').innerHTML = (card.dataset.modalTitle || 'Detail').replace(/\|/g, '<br>');
      document.getElementById('modal-body').innerHTML = body;
      backdrop.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => backdrop.classList.remove('active'));
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.classList.remove('active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') backdrop.classList.remove('active');
  });
}

function attachThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  function updateIcon() {
    const current = document.documentElement.getAttribute('data-theme');
    btn.textContent = current === 'light' ? '☀️' : '🌙';
    btn.setAttribute('aria-label',
      current === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  }
  updateIcon();

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    updateIcon();
  });
}

function attachRailToggle() {
  const rail = document.getElementById('rail');
  const toggle = document.getElementById('rail-toggle');
  if (!rail || !toggle) return;

  // Restore state dari localStorage
  if (localStorage.getItem('rail-collapsed') === 'true') {
    rail.classList.add('collapsed');
  }

  toggle.addEventListener('click', () => {
    rail.classList.toggle('collapsed');
    const isCollapsed = rail.classList.contains('collapsed');
    localStorage.setItem('rail-collapsed', isCollapsed);
  });
}

function attachSwipeGallery() {
  document.querySelectorAll('[data-gallery]').forEach(gallery => {
    const track = gallery.querySelector('.swipe-track');
    const dotsContainer = gallery.querySelector('.swipe-dots');
    if (!track || !dotsContainer) return;

    const cards = track.querySelectorAll('.swipe-card');
    if (!cards.length) return;

    // Rebuild dots setiap kali (aman kalau tab switch)
    dotsContainer.innerHTML = '';
    cards.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'swipe-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ke slide ${i + 1}`);
      dot.addEventListener('click', () => {
        cards[i].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      });
      dotsContainer.appendChild(dot);
    });

    // Bind scroll & arrows hanya sekali per gallery
    if (gallery.dataset.scrollBound === 'true') return;
    gallery.dataset.scrollBound = 'true';

    const gap = 16;
    const getCardWidth = () => cards[0].offsetWidth + gap;

    track.addEventListener('scroll', () => {
      const w = getCardWidth();
      if (w <= gap) return;
      const idx = Math.round(track.scrollLeft / w);
      dotsContainer.querySelectorAll('.swipe-dot').forEach((d, i) => {
        d.classList.toggle('active', i === idx);
      });
    });

    const prevBtn = gallery.querySelector('.swipe-arrow.prev');
    const nextBtn = gallery.querySelector('.swipe-arrow.next');
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        const idx = Math.round(track.scrollLeft / getCardWidth());
        if (idx > 0) {
          cards[idx - 1].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
      });
      nextBtn.addEventListener('click', () => {
        const idx = Math.round(track.scrollLeft / getCardWidth());
        if (idx < cards.length - 1) {
          cards[idx + 1].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
        }
      });
    }
  });
}