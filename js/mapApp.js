/**
 * INDIA — A LIVING CANVAS: ACROSS INDIA - APP ROOT
 * Main bootstrap script orchestrating the Leaflet map engine,
 * interaction state machine, sidebar filters, ambient sound, and mobile drawer.
 */

import { initMap, flyToIndiaOverview } from './mapEngine.js?v=2.1';
import { initInteraction, dismissHeroPreview } from './mapInteraction.js?v=2.1';
import { initFilters } from './mapFilters.js?v=2.1';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Leaflet Map Engine
  initMap();

  // 2. Initialize Interaction & State Machine (Hero Preview + Split Detail)
  initInteraction();

  // 3. Initialize Filters, Search, and Art Trails
  initFilters();

  // 4. Setup Mobile Sidebar Drawer
  setupMobileDrawer();

  // 5. Setup India Overview Reset Button
  setupOverviewReset();
});

/**
 * Mobile Sidebar Drawer Toggling
 */
function setupMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-sidebar-toggle-btn');
  const sidebarPanel = document.getElementById('map-sidebar-panel');

  toggleBtn?.addEventListener('click', () => {
    sidebarPanel?.classList.toggle('open');
    const isOpen = sidebarPanel?.classList.contains('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close sidebar on location select in mobile
  document.getElementById('sidebar-directory-list')?.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebarPanel?.classList.remove('open');
    }
  });
}

/**
 * Reset to Full India Overview
 */
function setupOverviewReset() {
  const resetBtn = document.getElementById('btn-reset-overview');
  resetBtn?.addEventListener('click', () => {
    dismissHeroPreview();
    flyToIndiaOverview();
  });
}


