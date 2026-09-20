/**
 * INDIA — A LIVING CANVAS: APPLICATION ROOT
 * Orchestrates Timeline, Modal System, Filters, Navigation,
 * Web Audio Ambient Sound, and Activity Portals.
 */

import { initTimeline } from './timeline.js';
import { initModal } from './modal.js';
import { initFilterSearch } from './filterSearch.js';
import { initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Core Systems
  initTimeline();
  initModal();
  initFilterSearch();
  initNavigation();

  // Setup Hero Actions
  setupHeroInteractions();

  // Setup Activity Portals (Activity 2 & Activity 3)
  setupActivityPortals();
});

/**
 * Hero Primary and Secondary CTA Smooth Scrolling
 */
function setupHeroInteractions() {
  const btnBegin = document.getElementById('btn-begin-journey');
  const btnExplore = document.getElementById('btn-explore-timeline');

  btnBegin?.addEventListener('click', () => {
    const firstSection = document.getElementById('period-section-ancient') || document.getElementById('timeline-container');
    if (firstSection) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = firstSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });

  btnExplore?.addEventListener('click', () => {
    const controls = document.getElementById('curatorial-controls');
    if (controls) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = controls.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}

/**
 * Activity 2 & 3 Interactive Modals
 */
function setupActivityPortals() {
  const btnAct2 = document.getElementById('btn-activity-2');
  const btnAct3 = document.getElementById('btn-activity-3');

  // btn-activity-2 is now a direct link to map.html

  btnAct3?.addEventListener('click', () => {
    showActivityNotice(
      'Activity 3: THE FUSION STUDIO — Creative Synthesizer',
      'The Fusion Studio allows you to mix classical Indian artistic styles (e.g. Mughal miniature detailing with Warli tribal geometry, or Chola bronze silhouettes with Tanjore gold embossing) to generate novel syncretic artworks.'
    );
  });
}

function showActivityNotice(title, desc) {
  const noticeModal = document.createElement('div');
  noticeModal.className = 'artifact-modal-overlay active';
  noticeModal.innerHTML = `
    <div class="artifact-modal-window" style="max-width: 580px; padding: 2.5rem; text-align: center;">
      <span class="activity-badge" style="margin-bottom: 0.8rem;">Upcoming Educational Module</span>
      <h3 style="font-family: var(--font-serif-display); font-size: 1.4rem; color: var(--text-primary); margin-bottom: 1rem;">
        ${title}
      </h3>
      <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem;">
        ${desc}
      </p>
      <button class="activity-btn" style="justify-content: center; max-width: 220px; margin: 0 auto;" id="notice-close-btn">
        Return to Timeline
      </button>
    </div>
  `;

  document.body.appendChild(noticeModal);

  noticeModal.querySelector('#notice-close-btn').addEventListener('click', () => {
    noticeModal.remove();
  });

  noticeModal.addEventListener('click', (e) => {
    if (e.target === noticeModal) {
      noticeModal.remove();
    }
  });
}
