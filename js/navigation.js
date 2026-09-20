/**
 * INDIA — A LIVING CANVAS: NAVIGATION, SCROLL SPY & TIMELINE RAIL
 * Handles dynamic scroll progress, persistent period tracking via IntersectionObserver,
 * and smooth scrolling between historical eras.
 */

import { PERIODS } from './artData.js';

export function initNavigation() {
  renderPeriodRail();
  setupScrollProgress();
  setupScrollSpy();
  setupHeaderScrollState();
  setupBackToTop();
}

/**
 * Dynamically builds the floating period jump buttons
 */
function renderPeriodRail() {
  const railContainer = document.getElementById('period-rail-items');
  if (!railContainer) return;

  const allHtml = `
    <button class="period-jump-btn active" data-period-id="all">
      <span class="jump-indicator-dot"></span>
      All Eras
    </button>
  `;

  const periodButtons = PERIODS.map(p => `
    <button class="period-jump-btn" data-period-id="${p.id}">
      <span class="jump-indicator-dot"></span>
      ${p.name}
    </button>
  `).join('');

  railContainer.innerHTML = allHtml + periodButtons;

  // Jump Click Handler
  railContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.period-jump-btn');
    if (!btn) return;

    const periodId = btn.getAttribute('data-period-id');

    railContainer.querySelectorAll('.period-jump-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (periodId === 'all') {
      const topSection = document.getElementById('curatorial-controls');
      topSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const targetSection = document.getElementById(`period-section-${periodId}`);
      if (targetSection) {
        const offset = 130; // Header + Rail offset
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = targetSection.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
}

/**
 * Updates the 3px top reading progress bar as the user scrolls with requestAnimationFrame
 */
function setupScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (docHeight > 0) {
          const progress = (scrollTop / docHeight) * 100;
          progressBar.style.width = `${progress}%`;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Scroll spy using IntersectionObserver to highlight currently viewed period
 */
function setupScrollSpy() {
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const periodObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const periodId = entry.target.getAttribute('data-period-id');
        highlightRailPeriod(periodId);
      }
    });
  }, observerOptions);

  // Observe all period blocks when DOM is ready/updated
  setTimeout(() => {
    document.querySelectorAll('.period-block').forEach(block => {
      periodObserver.observe(block);
    });
  }, 300);
}

function highlightRailPeriod(periodId) {
  if (!periodId) return;
  const railContainer = document.getElementById('period-rail-items');
  if (!railContainer) return;

  railContainer.querySelectorAll('.period-jump-btn').forEach(btn => {
    if (btn.getAttribute('data-period-id') === periodId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/**
 * Header background opacity on scroll with RAF guard
 */
function setupHeaderScrollState() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  let isScrolled = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 40;
        if (scrolled !== isScrolled) {
          isScrolled = scrolled;
          header.classList.toggle('scrolled', isScrolled);
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Back to top smooth button
 */
function setupBackToTop() {
  const backToTopBtn = document.getElementById('back-to-top-btn');
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
