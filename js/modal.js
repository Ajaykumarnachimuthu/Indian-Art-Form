/**
 * INDIA — A LIVING CANVAS: ARTIFACT DETAIL VIEWER (MODAL)
 * Level 2 & Level 3 Museum-Grade Deep Dive with Art DNA,
 * Sequential cycling (Previous/Next), and Full Keyboard Accessibility.
 */

import { ART_DATA } from './artData.js';

let currentItemIndex = -1;
let previouslyFocusedElement = null;

const modalOverlay = document.getElementById('artifact-modal');
const modalWindow = document.getElementById('modal-window');
const closeBtn = document.getElementById('modal-close-btn');
const prevBtn = document.getElementById('modal-prev-btn');
const nextBtn = document.getElementById('modal-next-btn');

/**
 * Initializes modal event listeners
 */
export function initModal() {
  if (!modalOverlay) return;

  // Close triggers
  closeBtn?.addEventListener('click', closeArtifactModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeArtifactModal();
    }
  });

  // Previous & Next navigation
  prevBtn?.addEventListener('click', navigatePrevious);
  nextBtn?.addEventListener('click', navigateNext);

  // Keyboard navigation
  document.addEventListener('keydown', handleModalKeyboard);
}

/**
 * Opens the modal populated with the given artwork ID
 */
export function openArtifactModal(itemId) {
  const index = ART_DATA.findIndex(item => item.id === itemId);
  if (index === -1) return;

  currentItemIndex = index;
  previouslyFocusedElement = document.activeElement;

  populateModalData(ART_DATA[currentItemIndex]);

  // Show modal
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling

  // Update navigation button states
  updateNavButtonStates();

  // Set focus to close button for accessibility
  setTimeout(() => {
    closeBtn?.focus();
  }, 100);
}

/**
 * Closes the modal and restores focus
 */
export function closeArtifactModal() {
  if (!modalOverlay.classList.contains('active')) return;

  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
}

/**
 * Navigate to previous item in the dataset
 */
function navigatePrevious() {
  if (currentItemIndex > 0) {
    currentItemIndex--;
    populateModalData(ART_DATA[currentItemIndex]);
    updateNavButtonStates();
  }
}

/**
 * Navigate to next item in the dataset
 */
function navigateNext() {
  if (currentItemIndex < ART_DATA.length - 1) {
    currentItemIndex++;
    populateModalData(ART_DATA[currentItemIndex]);
    updateNavButtonStates();
  }
}

/**
 * Update previous / next button disabled states
 */
function updateNavButtonStates() {
  if (prevBtn) prevBtn.disabled = currentItemIndex <= 0;
  if (nextBtn) nextBtn.disabled = currentItemIndex >= ART_DATA.length - 1;
}

/**
 * Keyboard shortcuts inside modal: ESC to close, Left/Right arrows to navigate
 */
function handleModalKeyboard(e) {
  if (!modalOverlay.classList.contains('active')) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    closeArtifactModal();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    navigatePrevious();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    navigateNext();
  }
}

/**
 * Populates all modal data fields dynamically
 */
function populateModalData(item) {
  // Showcase Media
  const imgEl = document.getElementById('modal-artwork-image');
  if (imgEl) {
    imgEl.src = item.image || item.thumb;
    imgEl.alt = item.title;
    imgEl.onerror = () => {
      imgEl.src = item.thumb || 'assets/images/hero-bg.jpg';
    };
  }

  // Header and Essential Info
  document.getElementById('modal-era-label').textContent = item.periodLabel;
  document.getElementById('modal-title').textContent = item.title;
  document.getElementById('modal-year').textContent = item.yearLabel;
  document.getElementById('modal-short-desc').textContent = item.shortDescription;

  // Quick Meta
  document.getElementById('modal-meta-tradition').textContent = item.tradition;
  document.getElementById('modal-meta-location').textContent = `${item.state} (${item.region} India)`;
  document.getElementById('modal-meta-medium').textContent = item.medium;

  // Level 3: Art DNA Panel
  const dnaGrid = document.getElementById('modal-dna-grid');
  if (dnaGrid && item.dna) {
    dnaGrid.innerHTML = `
      <div class="dna-chip">
        <span class="dna-label">Region</span>
        <span class="dna-value">${item.dna.region}</span>
      </div>
      <div class="dna-chip">
        <span class="dna-label">Material</span>
        <span class="dna-value">${item.dna.material}</span>
      </div>
      <div class="dna-chip">
        <span class="dna-label">Technique</span>
        <span class="dna-value">${item.dna.technique}</span>
      </div>
      <div class="dna-chip">
        <span class="dna-label">Subject</span>
        <span class="dna-value">${item.dna.subject}</span>
      </div>
      <div class="dna-chip">
        <span class="dna-label">Tradition</span>
        <span class="dna-value">${item.dna.tradition}</span>
      </div>
      <div class="dna-chip">
        <span class="dna-label">Period</span>
        <span class="dna-value">${item.dna.period}</span>
      </div>
    `;
  }

  // Historical Context & Significance
  document.getElementById('modal-history-text').textContent = item.historicalContext;
  document.getElementById('modal-significance-text').textContent = item.significance;

  // Visual Characteristics Bullet List
  const charList = document.getElementById('modal-characteristics-list');
  if (charList && item.characteristics) {
    charList.innerHTML = item.characteristics
      .map(char => `<li class="characteristics-item">${char}</li>`)
      .join('');
  }

  // Did You Know Box
  const dykBox = document.getElementById('modal-did-you-know-text');
  if (dykBox) {
    dykBox.textContent = item.didYouKnow || "This masterwork represents an enduring milestone in the evolution of Indian cultural aesthetics.";
  }

  // Image / Archival Source Attribution
  const sourceEl = document.getElementById('modal-source-credit');
  if (sourceEl) {
    sourceEl.innerHTML = `
      <span class="source-credit-label">Archival Image / Source Attribution</span>
      <span class="source-credit-value">${item.sourceCredit}</span>
    `;
  }

  // Scroll modal body back to top on entry switch
  const scrollBody = document.querySelector('.modal-scroll-body');
  if (scrollBody) scrollBody.scrollTop = 0;
}
