/**
 * INDIA — A LIVING CANVAS: MAP FILTERS, SEARCH & ART TRAILS
 * Real-time text search, multi-dimensional category filters,
 * interactive Curated Art Trails with guided step flight,
 * and synchronized accessible location directory.
 */

import { MAP_LOCATIONS, ART_TRAILS, ART_FORMS_LIST, ERAS_LIST, REGIONS_LIST } from './mapData.js';
import { setMarkerVisibility, dimMarkersExcept, resetDimming, flyToIndiaOverview } from './mapEngine.js?v=2.1';
import { selectAndPreviewLocation, dismissHeroPreview } from './mapInteraction.js';

let activeSearchQuery = '';
let selectedArtForm = 'All';
let selectedEra = 'All';
let selectedRegion = 'All';

let activeTrail = null;
let currentTrailStepIndex = 0;

export function initFilters() {
  renderFilterDropdowns();
  renderArtTrails();
  setupSearch();
  setupTrailRunner();
  updateFilteredView();
}

/**
 * Builds Filter Dropdown Select Elements
 */
function renderFilterDropdowns() {
  const artFormSelect = document.getElementById('filter-art-form');
  const eraSelect = document.getElementById('filter-era');
  const regionSelect = document.getElementById('filter-region');

  if (artFormSelect) {
    artFormSelect.innerHTML = ART_FORMS_LIST.map(f => `<option value="${f}">${f === 'All' ? 'All Art Forms' : f}</option>`).join('');
    artFormSelect.addEventListener('change', (e) => {
      selectedArtForm = e.target.value;
      deactivateTrail();
      updateFilteredView();
    });
  }

  if (eraSelect) {
    eraSelect.innerHTML = ERAS_LIST.map(e => `<option value="${e}">${e === 'All' ? 'All Historical Eras' : e + ' Era'}</option>`).join('');
    eraSelect.addEventListener('change', (e) => {
      selectedEra = e.target.value;
      deactivateTrail();
      updateFilteredView();
    });
  }

  if (regionSelect) {
    regionSelect.innerHTML = REGIONS_LIST.map(r => `<option value="${r}">${r === 'All' ? 'All Indian Regions' : r + ' India'}</option>`).join('');
    regionSelect.addEventListener('change', (e) => {
      selectedRegion = e.target.value;
      deactivateTrail();
      updateFilteredView();
    });
  }
}

/**
 * Builds Art Trails Pills in Sidebar
 */
function renderArtTrails() {
  const container = document.getElementById('trails-pills-container');
  if (!container) return;

  container.innerHTML = ART_TRAILS.map(trail => `
    <button class="trail-pill-btn" data-trail-id="${trail.id}" aria-label="Explore ${trail.name}">
      <span>${trail.name}</span>
      <span class="trail-count">${trail.locationIds.length} stops</span>
    </button>
  `).join('');

  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.trail-pill-btn');
    if (!btn) return;

    const trailId = btn.getAttribute('data-trail-id');

    if (activeTrail && activeTrail.id === trailId) {
      // Toggle off
      deactivateTrail();
    } else {
      activateTrail(trailId);
    }
  });
}

/**
 * Activates an Art Trail
 */
function activateTrail(trailId) {
  const trail = ART_TRAILS.find(t => t.id === trailId);
  if (!trail) return;

  activeTrail = trail;
  currentTrailStepIndex = 0;

  // Update UI Pills
  document.querySelectorAll('.trail-pill-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-trail-id') === trailId);
  });

  // Dim non-trail markers
  dimMarkersExcept(trail.locationIds);

  // Show Trail Runner Bar
  const runnerBar = document.getElementById('trail-runner-bar');
  runnerBar?.classList.add('visible');
  updateTrailRunnerUI();

  // Auto-fly to the first location in the trail
  const firstLoc = MAP_LOCATIONS.find(l => l.id === trail.locationIds[0]);
  if (firstLoc) {
    selectAndPreviewLocation(firstLoc);
  }

  // Filter Directory List to trail locations
  renderDirectoryList(MAP_LOCATIONS.filter(l => trail.locationIds.includes(l.id)));
}

/**
 * Deactivates active trail and restores full map view
 */
function deactivateTrail() {
  activeTrail = null;
  currentTrailStepIndex = 0;

  document.querySelectorAll('.trail-pill-btn').forEach(btn => btn.classList.remove('active'));

  const runnerBar = document.getElementById('trail-runner-bar');
  runnerBar?.classList.remove('visible');

  resetDimming();
  updateFilteredView();
}

/**
 * Sets up Trail Runner previous/next navigation
 */
function setupTrailRunner() {
  const prevBtn = document.getElementById('trail-prev-btn');
  const nextBtn = document.getElementById('trail-next-btn');

  prevBtn?.addEventListener('click', () => {
    if (!activeTrail) return;
    if (currentTrailStepIndex > 0) {
      currentTrailStepIndex--;
      stepToCurrentTrailLocation();
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (!activeTrail) return;
    if (currentTrailStepIndex < activeTrail.locationIds.length - 1) {
      currentTrailStepIndex++;
      stepToCurrentTrailLocation();
    }
  });
}

function stepToCurrentTrailLocation() {
  if (!activeTrail) return;
  const locId = activeTrail.locationIds[currentTrailStepIndex];
  const loc = MAP_LOCATIONS.find(l => l.id === locId);
  if (loc) {
    selectAndPreviewLocation(loc);
    updateTrailRunnerUI();
  }
}

function updateTrailRunnerUI() {
  if (!activeTrail) return;
  const indicator = document.getElementById('trail-step-indicator');
  if (indicator) {
    indicator.textContent = `Stop ${currentTrailStepIndex + 1} of ${activeTrail.locationIds.length}`;
  }

  const prevBtn = document.getElementById('trail-prev-btn');
  const nextBtn = document.getElementById('trail-next-btn');
  if (prevBtn) prevBtn.disabled = currentTrailStepIndex <= 0;
  if (nextBtn) nextBtn.disabled = currentTrailStepIndex >= activeTrail.locationIds.length - 1;
}

/**
 * Setup Live Search
 */
function setupSearch() {
  const searchInput = document.getElementById('sidebar-search-input');
  const clearBtn = document.getElementById('sidebar-search-clear-btn');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    activeSearchQuery = e.target.value.trim().toLowerCase();

    if (clearBtn) {
      clearBtn.classList.toggle('visible', activeSearchQuery.length > 0);
    }

    deactivateTrail();
    updateFilteredView();
  });

  clearBtn?.addEventListener('click', () => {
    searchInput.value = '';
    activeSearchQuery = '';
    clearBtn.classList.remove('visible');
    searchInput.focus();
    deactivateTrail();
    updateFilteredView();
  });

  // Pressing Enter on search automatically selects first matching location
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstMatch = getFilteredLocations()[0];
      if (firstMatch) {
        selectAndPreviewLocation(firstMatch);
      }
    }
  });
}

/**
 * Computes filtered locations based on active search & dropdowns
 */
function getFilteredLocations() {
  return MAP_LOCATIONS.filter(loc => {
    // 1. Art Form Match
    if (selectedArtForm !== 'All' && !loc.artForms.includes(selectedArtForm)) {
      return false;
    }

    // 2. Era Match
    if (selectedEra !== 'All' && loc.era !== selectedEra) {
      return false;
    }

    // 3. Region Match
    if (selectedRegion !== 'All' && loc.region !== selectedRegion) {
      return false;
    }

    // 4. Search Query Match
    if (activeSearchQuery) {
      const q = activeSearchQuery;
      const matchName = loc.name.toLowerCase().includes(q);
      const matchState = loc.state.toLowerCase().includes(q);
      const matchTradition = loc.tradition.toLowerCase().includes(q);
      const matchRegion = loc.region.toLowerCase().includes(q);
      const matchDesc = loc.shortDescription.toLowerCase().includes(q);
      const matchFeatures = loc.keyFeatures ? loc.keyFeatures.some(f => f.toLowerCase().includes(q)) : false;

      if (!matchName && !matchState && !matchTradition && !matchRegion && !matchDesc && !matchFeatures) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Updates visible markers on map and populates directory list
 */
export function updateFilteredView() {
  const filtered = getFilteredLocations();

  // Update map marker visibility
  setMarkerVisibility(filtered.map(l => l.id));

  // Update Stats Counter
  const countEl = document.getElementById('sidebar-location-count');
  if (countEl) {
    countEl.textContent = `${filtered.length} Art Centers`;
  }

  // Update Directory List
  renderDirectoryList(filtered);
}

/**
 * Renders the accessible Directory List in the sidebar
 */
function renderDirectoryList(locations) {
  const container = document.getElementById('sidebar-directory-list');
  if (!container) return;

  if (locations.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted); font-size: 0.85rem;">
        No Indian art destinations match your current filters.
      </div>
    `;
    return;
  }

  container.innerHTML = locations.map(loc => `
    <article class="directory-item-card" data-location-id="${loc.id}" tabindex="0" role="button" aria-label="${loc.name}, ${loc.state}">
      <div class="dir-thumb-frame">
        <img 
          src="${loc.thumb || loc.image}" 
          alt="${loc.name}" 
          class="dir-item-thumb" 
          loading="lazy"
          onerror="this.src='assets/images/hero-bg.jpg';"
        />
      </div>
      <div class="dir-item-info">
        <div class="dir-item-top-row">
          <h4 class="dir-item-name">${loc.name}</h4>
          <span class="dir-tier-badge tier-${loc.hierarchy}">${loc.hierarchy}</span>
        </div>
        <div class="dir-item-meta">
          <span class="dir-item-state">${loc.state}</span>
          <span class="dir-item-sep">&bull;</span>
          <span class="dir-item-tradition">${loc.tradition}</span>
        </div>
      </div>
    </article>
  `).join('');

  // Attach card click triggers
  container.querySelectorAll('.directory-item-card').forEach(card => {
    card.addEventListener('click', () => {
      const locId = card.getAttribute('data-location-id');
      const loc = MAP_LOCATIONS.find(l => l.id === locId);
      if (loc) {
        selectAndPreviewLocation(loc);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}
