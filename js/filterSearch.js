/**
 * INDIA — A LIVING CANVAS: FILTER & SEARCH ENGINE
 * Multi-dimensional filtering by Period, Art Form, and Region,
 * combined with real-time text search and state feedback.
 */

import { ART_DATA, PERIODS, ART_FORMS, REGIONS } from './artData.js';
import { renderTimeline } from './timeline.js';

let activePeriodFilter = 'all';
let activeArtFormFilter = 'All';
let activeRegionFilter = 'All';
let currentSearchQuery = '';

export function initFilterSearch() {
  renderFilterControls();
  setupSearchInput();
  setupEmptyStateReset();
}

/**
 * Dynamically builds filter chips for Art Form and Region
 */
function renderFilterControls() {
  // Art Forms
  const artFormsContainer = document.getElementById('art-form-filters');
  if (artFormsContainer) {
    artFormsContainer.innerHTML = ART_FORMS.map(af => `
      <button class="filter-chip ${af === activeArtFormFilter ? 'active' : ''}" data-art-form="${af}">
        ${af}
      </button>
    `).join('');

    artFormsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      artFormsContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeArtFormFilter = chip.getAttribute('data-art-form');
      applyFilters();
    });
  }

  // Regions
  const regionsContainer = document.getElementById('region-filters');
  if (regionsContainer) {
    regionsContainer.innerHTML = REGIONS.map(reg => `
      <button class="filter-chip ${reg === activeRegionFilter ? 'active' : ''}" data-region="${reg}">
        ${reg === 'All' ? 'All Regions' : reg}
      </button>
    `).join('');

    regionsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;

      regionsContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeRegionFilter = chip.getAttribute('data-region');
      applyFilters();
    });
  }
}

/**
 * Setup search input listeners with debounce and clear button
 */
function setupSearchInput() {
  const searchInput = document.getElementById('timeline-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    currentSearchQuery = e.target.value.trim().toLowerCase();

    if (clearBtn) {
      if (currentSearchQuery.length > 0) {
        clearBtn.classList.add('visible');
      } else {
        clearBtn.classList.remove('visible');
      }
    }

    applyFilters();
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    currentSearchQuery = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
    applyFilters();
  });
}

/**
 * Set period filter from external triggers (e.g. Period Jump Rail)
 */
export function setPeriodFilter(periodId) {
  activePeriodFilter = periodId;
  applyFilters();
}

/**
 * Core Filter & Search Matching Algorithm
 */
export function applyFilters() {
  const filtered = ART_DATA.filter(item => {
    // 1. Period Match
    if (activePeriodFilter !== 'all' && item.periodId !== activePeriodFilter) {
      return false;
    }

    // 2. Art Form Match
    if (activeArtFormFilter !== 'All' && item.artForm !== activeArtFormFilter) {
      return false;
    }

    // 3. Region Match
    if (activeRegionFilter !== 'All' && item.region !== activeRegionFilter) {
      return false;
    }

    // 4. Search Query Match
    if (currentSearchQuery) {
      const q = currentSearchQuery;
      const titleMatch = item.title.toLowerCase().includes(q);
      const traditionMatch = item.tradition.toLowerCase().includes(q);
      const stateMatch = item.state.toLowerCase().includes(q);
      const regionMatch = item.region.toLowerCase().includes(q);
      const mediumMatch = item.medium.toLowerCase().includes(q);
      const descMatch = item.shortDescription.toLowerCase().includes(q);
      const yearMatch = item.yearLabel.toLowerCase().includes(q);
      const dnaMatch = item.dna ? (
        item.dna.material.toLowerCase().includes(q) ||
        item.dna.subject.toLowerCase().includes(q) ||
        item.dna.technique.toLowerCase().includes(q)
      ) : false;

      if (!titleMatch && !traditionMatch && !stateMatch && !regionMatch && !mediumMatch && !descMatch && !yearMatch && !dnaMatch) {
        return false;
      }
    }

    return true;
  });

  // Update UI Stats Badge
  updateStatsBadge(filtered.length, ART_DATA.length);

  // Render to Timeline
  const container = document.getElementById('timeline-container');
  const emptyState = document.getElementById('timeline-empty-state');

  if (container) {
    if (filtered.length === 0) {
      container.innerHTML = '';
      emptyState?.classList.add('visible');
    } else {
      emptyState?.classList.remove('visible');
      renderTimeline(container, filtered);
    }
  }
}

/**
 * Update the results stats counter
 */
function updateStatsBadge(visibleCount, totalCount) {
  const badge = document.getElementById('results-stats-badge');
  if (badge) {
    badge.innerHTML = `Displaying <strong>${visibleCount}</strong> of <strong>${totalCount}</strong> Milestones`;
  }
}

/**
 * Reset all filters back to default
 */
export function resetAllFilters() {
  activePeriodFilter = 'all';
  activeArtFormFilter = 'All';
  activeRegionFilter = 'All';
  currentSearchQuery = '';

  const searchInput = document.getElementById('timeline-search-input');
  if (searchInput) searchInput.value = '';

  const clearBtn = document.getElementById('search-clear-btn');
  if (clearBtn) clearBtn.classList.remove('visible');

  // Reset active classes on chips
  document.querySelectorAll('#art-form-filters .filter-chip').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-art-form') === 'All');
  });

  document.querySelectorAll('#region-filters .filter-chip').forEach(c => {
    c.classList.toggle('active', c.getAttribute('data-region') === 'All');
  });

  document.querySelectorAll('.period-jump-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-period-id') === 'all');
  });

  applyFilters();
}

function setupEmptyStateReset() {
  const resetBtn = document.getElementById('empty-state-reset-btn');
  resetBtn?.addEventListener('click', resetAllFilters);
}
