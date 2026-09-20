/**
 * INDIA — A LIVING CANVAS: MAP INTERACTION & STATE MACHINE
 * Implements the 2-Stage Click Lifecycle:
 * Click 1: Smooth FlyTo + Marker Halo + Floating Hero Preview Card
 * Click 2: Seamless Transition to Split-Screen Full Detail Dossier
 * Return: Smooth Back-to-Map Navigation & Collision Prevention
 */

import { MAP_LOCATIONS } from './mapData.js';
import { flyToLocation, highlightMarker, resetHighlight, flyToIndiaOverview } from './mapEngine.js';

// Interaction States
export const STATES = {
  OVERVIEW: 'STATE_0_OVERVIEW',
  HERO_PREVIEW: 'STATE_2_HERO_PREVIEW',
  SPLIT_DETAIL: 'STATE_3_SPLIT_DETAIL'
};

let currentState = STATES.OVERVIEW;
let selectedLocationId = null;
let lastKnownCameraState = null;

// DOM Element References (Lazy-resolved for 100% resilience)
let heroCardEl = null;
let splitDetailOverlayEl = null;
let btnBackToMapEl = null;

export function getHeroCard() {
  if (!heroCardEl) heroCardEl = document.getElementById('floating-hero-card');
  return heroCardEl;
}

export function getSplitOverlay() {
  if (!splitDetailOverlayEl) splitDetailOverlayEl = document.getElementById('map-split-detail-overlay');
  return splitDetailOverlayEl;
}

export function initInteraction() {
  heroCardEl = getHeroCard();
  splitDetailOverlayEl = getSplitOverlay();
  btnBackToMapEl = document.getElementById('btn-back-to-map');

  // Hero Card Close Button
  const heroCloseBtn = document.getElementById('hero-card-close-btn');
  heroCloseBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    dismissHeroPreview();
  });

  // Hero Card "EXPLORE THIS PLACE →" CTA (Triggers State 3)
  const heroCtaBtn = document.getElementById('hero-card-cta-btn');
  heroCtaBtn?.addEventListener('click', () => {
    if (selectedLocationId) {
      openSplitDetailView(selectedLocationId);
    }
  });

  // Back to Map Button (Returns from State 3 to State 2/1)
  btnBackToMapEl?.addEventListener('click', returnToMap);

  // Keyboard Shortcuts: ESC closes split view or dismisses preview
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (currentState === STATES.SPLIT_DETAIL) {
        returnToMap();
      } else if (currentState === STATES.HERO_PREVIEW) {
        dismissHeroPreview();
      }
    }
  });
}

/**
 * Handles Marker Click: State Machine Logic
 * If unselected: First Click -> FlyTo + Hero Preview
 * If already selected: Second Click -> Transition to Split Detail
 */
export function handleMarkerClick(locationId) {
  const loc = MAP_LOCATIONS.find(l => l.id === locationId);
  if (!loc) return;

  if (selectedLocationId === locationId && currentState === STATES.HERO_PREVIEW) {
    // Second click on the same active marker -> Open Full Detail View
    openSplitDetailView(locationId);
  } else {
    // First click (or different marker) -> FlyTo + Hero Preview
    selectAndPreviewLocation(loc);
  }
}

/**
 * Stage 1: FlyTo + Marker Aura + Floating Hero Preview Card
 */
export function selectAndPreviewLocation(loc) {
  const card = getHeroCard();
  // Collision Avoidance: If another hero card is open, dismiss it first
  if (card && card.classList.contains('visible')) {
    card.classList.remove('visible');
  }

  selectedLocationId = loc.id;
  currentState = STATES.HERO_PREVIEW;

  // 1. Highlight Marker
  highlightMarker(loc.id);

  // 2. Smooth Camera FlyTo (zoom level 8 for major/secondary, 9 for tight sites)
  const zoomLevel = loc.hierarchy === 'major' ? 8 : 9;
  flyToLocation(loc, zoomLevel);

  // 3. Highlight corresponding item in sidebar directory
  highlightSidebarDirectoryItem(loc.id);

  // 4. Populate and Animate Hero Card
  populateHeroCard(loc);

  setTimeout(() => {
    getHeroCard()?.classList.add('visible');
  }, 250);
}

/**
 * Dismisses floating hero card and returns to overview
 */
export function dismissHeroPreview() {
  getHeroCard()?.classList.remove('visible');
  resetHighlight();
  selectedLocationId = null;
  currentState = STATES.OVERVIEW;
  clearSidebarHighlight();
}

/**
 * Populates floating hero preview card data
 */
function populateHeroCard(loc) {
  const imgEl = document.getElementById('hero-card-img');
  if (imgEl) {
    imgEl.src = loc.image || loc.thumb;
    imgEl.alt = loc.name;
    imgEl.onerror = () => { imgEl.src = 'assets/images/hero-bg.jpg'; };
  }

  document.getElementById('hero-card-tag').textContent = loc.artForms[0] || 'Art Center';
  document.getElementById('hero-card-title').textContent = loc.name;
  document.getElementById('hero-card-tradition').textContent = loc.tradition;
  document.getElementById('hero-card-state').textContent = `${loc.state} (${loc.region} India)`;
  document.getElementById('hero-card-desc').textContent = loc.shortDescription;
}

/**
 * Stage 2: Smooth 600–800ms transition to Split-Screen Full Detail View
 */
export function openSplitDetailView(locationId) {
  const loc = MAP_LOCATIONS.find(l => l.id === locationId);
  if (!loc) return;

  currentState = STATES.SPLIT_DETAIL;

  // Dismiss hero preview card
  getHeroCard()?.classList.remove('visible');

  // Populate Split-Screen Dossier
  populateSplitDetail(loc);

  // Trigger smooth transition
  getSplitOverlay()?.classList.add('active');

  // Accessibility: Focus back button
  setTimeout(() => {
    btnBackToMapEl?.focus();
  }, 100);
}

/**
 * Return to Map: Smoothly slides detail away and restores map focus
 */
export function returnToMap() {
  const overlay = getSplitOverlay();
  if (!overlay || !overlay.classList.contains('active')) return;

  overlay.classList.remove('active');
  currentState = STATES.HERO_PREVIEW;

  // Re-display hero card after returning to map
  if (selectedLocationId) {
    const loc = MAP_LOCATIONS.find(l => l.id === selectedLocationId);
    if (loc) {
      setTimeout(() => {
        getHeroCard()?.classList.add('visible');
      }, 350);
    }
  }
}

/**
 * Populates full split-screen educational dossier
 */
function populateSplitDetail(loc) {
  // Left Media Pane
  const imgEl = document.getElementById('split-detail-img');
  if (imgEl) {
    imgEl.src = loc.image || loc.thumb;
    imgEl.alt = loc.name;
    imgEl.onerror = () => { imgEl.src = 'assets/images/hero-bg.jpg'; };
  }

  // Source Credit
  const creditEl = document.getElementById('split-source-credit');
  if (creditEl) {
    creditEl.innerHTML = `<strong>Image / Source:</strong> ${loc.imageCredit}`;
  }

  // Right Dossier Pane
  document.getElementById('split-era-pill').textContent = `${loc.era} Era`;
  document.getElementById('split-location-title').textContent = loc.name;
  document.getElementById('split-location-subtitle').textContent = `${loc.state} · ${loc.tradition}`;

  // Chips
  document.getElementById('chip-art-form').textContent = loc.artForms.join(', ');
  document.getElementById('chip-period').textContent = loc.period;
  document.getElementById('chip-region').textContent = `${loc.region} India`;

  // Educational Text
  document.getElementById('split-history-text').textContent = loc.historicalContext;
  document.getElementById('split-significance-text').textContent = loc.significance;

  // Key Features Bullet Points
  const featuresList = document.getElementById('split-features-list');
  if (featuresList && loc.keyFeatures) {
    featuresList.innerHTML = loc.keyFeatures
      .map(feat => `<li class="split-feature-item">${feat}</li>`)
      .join('');
  }

  // Did You Know Box
  const dykBox = document.getElementById('split-did-you-know-text');
  if (dykBox) {
    dykBox.textContent = loc.didYouKnow || "This historic destination represents a vital cornerstone in the geographic evolution of Indian art.";
  }

  // Scroll info pane back to top
  const rightPane = document.querySelector('.split-right-info-pane');
  if (rightPane) rightPane.scrollTop = 0;
}

/**
 * Sidebar directory item highlight synchronization
 */
function highlightSidebarDirectoryItem(locationId) {
  document.querySelectorAll('.directory-item-card').forEach(item => {
    if (item.getAttribute('data-location-id') === locationId) {
      item.classList.add('active');
      item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
}

function clearSidebarHighlight() {
  document.querySelectorAll('.directory-item-card').forEach(item => {
    item.classList.remove('active');
  });
}
