/**
 * INDIA — A LIVING CANVAS: MAP ENGINE
 * Leaflet.js Initialization, Strict Indian Geographic Bounding,
 * External World Parchment Mask (Focus India Only),
 * Textured Topographic Tiles (Zero Watermarks, No API Key Required),
 * and Custom Three-Tier Marker Management.
 */

import { MAP_LOCATIONS } from './mapData.js';
import { handleMarkerClick } from './mapInteraction.js';
import { INDIA_GEOJSON, WORLD_MASK_GEOJSON } from './indiaGeo.js';

let mapInstance = null;
const markersMap = new Map();
let activeMarkerId = null;

// Strictly Focused on India
export const INDIA_CENTER = [22.8, 79.6];
export const INDIA_DEFAULT_ZOOM = 5;

// Strict Geofencing Bounds for India (prevents panning to other countries)
export const INDIA_BOUNDS = [
  [5.5, 66.5],   // Southwest corner (Lakshadweep / Arabian Sea)
  [37.5, 98.0]   // Northeast corner (Kashmir to Arunachal Pradesh)
];

/**
 * Initializes Leaflet Map with Textured Topography & Watermark-Free Tiles
 */
export function initMap() {
  const mapElement = document.getElementById('leaflet-art-map');
  if (!mapElement) return null;

  // Initialize Map strictly constrained to India with high-performance Canvas rendering
  mapInstance = L.map('leaflet-art-map', {
    center: INDIA_CENTER,
    zoom: INDIA_DEFAULT_ZOOM,
    minZoom: 4.8,
    maxZoom: 12,
    maxBounds: INDIA_BOUNDS,
    maxBoundsViscosity: 1.0, // Hard lock: rubber-band back if pulled outside India
    zoomControl: true,
    attributionControl: true,
    preferCanvas: true, // Hardware accelerated Canvas 2D rendering for GeoJSON vectors
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true
  });

  // Crisp OpenStreetMap Basemap (100% Free, Zero API Keys, Zero Watermarks)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    subdomains: 'abc',
    attribution: '',
    maxZoom: 18,
    updateWhenIdle: false, // Update continuously during panning to eliminate lag
    updateWhenZooming: false,
    keepBuffer: 8 // Cache adjacent tiles to prevent blank flashes
  }).addTo(mapInstance);

  // MASK LAYER: Shrouds foreign territories in solid warm antique parchment
  L.geoJSON(WORLD_MASK_GEOJSON, {
    style: {
      fillColor: '#ECE4D6',
      fillOpacity: 1.0,
      weight: 0,
      color: 'transparent'
    },
    interactive: false
  }).addTo(mapInstance);

  // ILLUMINATED COASTAL & BORDER AURA: Antique cartographic shoreline
  L.geoJSON(INDIA_GEOJSON, {
    style: {
      fillColor: 'transparent',
      fillOpacity: 0,
      weight: 3.5,
      color: '#C5A059',
      opacity: 0.85
    },
    interactive: false
  }).addTo(mapInstance);

  // Render Custom Markers
  renderAllMarkers();

  return mapInstance;
}

/**
 * Creates custom HTML DOM markers reflecting the 3-Tier Visual Hierarchy
 */
function renderAllMarkers() {
  MAP_LOCATIONS.forEach(loc => {
    const icon = createTieredDivIcon(loc);

    const marker = L.marker([loc.coordinates.lat, loc.coordinates.lng], {
      icon: icon,
      title: loc.name,
      riseOnHover: true,
      zIndexOffset: loc.hierarchy === 'major' ? 500 : (loc.hierarchy === 'secondary' ? 250 : 100)
    });

    marker.on('click', () => {
      handleMarkerClick(loc.id);
    });

    marker.addTo(mapInstance);
    markersMap.set(loc.id, marker);
  });
}

/**
 * Generates custom HTML for Major, Secondary, and Quiet markers
 */
function createTieredDivIcon(loc) {
  let html = '';
  let iconSize = [46, 52];
  let iconAnchor = [23, 50];

  const thumbImg = loc.thumb || loc.image || 'assets/images/hero-bg.jpg';

  if (loc.hierarchy === 'major') {
    iconSize = [46, 52];
    iconAnchor = [23, 50];
    html = `
      <div class="map-marker-major" id="marker-${loc.id}">
        <div class="marker-aura-ring"></div>
        <div class="marker-pin-outer">
          <img src="${thumbImg}" alt="${loc.name}" class="marker-pin-img" onerror="this.src='assets/images/hero-bg.jpg';" />
        </div>
        <div class="marker-pin-stem"></div>
        <div class="marker-label-tag">${loc.name}</div>
      </div>
    `;
  } else if (loc.hierarchy === 'secondary') {
    iconSize = [34, 40];
    iconAnchor = [17, 38];
    html = `
      <div class="map-marker-secondary" id="marker-${loc.id}">
        <div class="marker-pin-outer">
          <img src="${thumbImg}" alt="${loc.name}" class="marker-pin-img" onerror="this.src='assets/images/hero-bg.jpg';" />
        </div>
        <div class="marker-pin-stem"></div>
        <div class="marker-label-tag">${loc.name}</div>
      </div>
    `;
  } else {
    // Quiet tier: compact photo pin with terracotta accent
    iconSize = [30, 36];
    iconAnchor = [15, 34];
    html = `
      <div class="map-marker-secondary" id="marker-${loc.id}">
        <div class="marker-pin-outer">
          <img src="${thumbImg}" alt="${loc.name}" class="marker-pin-img" onerror="this.src='assets/images/hero-bg.jpg';" />
        </div>
        <div class="marker-pin-stem"></div>
        <div class="marker-label-tag">${loc.name}</div>
      </div>
    `;
  }

  return L.divIcon({
    html: html,
    className: 'custom-leaflet-marker-wrapper',
    iconSize: iconSize,
    iconAnchor: iconAnchor
  });
}

/**
 * Smoothly flies the camera to a target location
 */
export function flyToLocation(loc, targetZoom = 8) {
  if (!mapInstance) return;

  const offsetLat = loc.coordinates.lat - 0.15;

  mapInstance.flyTo([offsetLat, loc.coordinates.lng], targetZoom, {
    duration: 0.65,
    easeLinearity: 0.22
  });
}

/**
 * Resets camera to India Overview
 */
export function flyToIndiaOverview() {
  if (!mapInstance) return;

  mapInstance.flyTo(INDIA_CENTER, INDIA_DEFAULT_ZOOM, {
    duration: 0.55,
    easeLinearity: 0.22
  });
}

/**
 * Highlights a specific marker with enlarged halo
 */
export function highlightMarker(locationId) {
  resetHighlight();

  activeMarkerId = locationId;
  const markerEl = document.getElementById(`marker-${locationId}`);
  if (markerEl) {
    markerEl.classList.add('marker-active');
  }

  const leafletMarker = markersMap.get(locationId);
  if (leafletMarker) {
    leafletMarker.setZIndexOffset(1000);
  }
}

/**
 * Clears active marker highlight
 */
export function resetHighlight() {
  if (activeMarkerId) {
    const prevEl = document.getElementById(`marker-${activeMarkerId}`);
    if (prevEl) {
      prevEl.classList.remove('marker-active');
    }
    const prevMarker = markersMap.get(activeMarkerId);
    if (prevMarker) {
      prevMarker.setZIndexOffset(0);
    }
    activeMarkerId = null;
  }
}

/**
 * Filters visible markers on the map
 */
export function setMarkerVisibility(visibleIds) {
  const visibleSet = new Set(visibleIds);

  markersMap.forEach((marker, id) => {
    const el = document.getElementById(`marker-${id}`);
    if (visibleSet.has(id)) {
      if (!mapInstance.hasLayer(marker)) {
        marker.addTo(mapInstance);
      }
      if (el) el.classList.remove('marker-dimmed');
    } else {
      if (mapInstance.hasLayer(marker)) {
        mapInstance.removeLayer(marker);
      }
    }
  });
}

/**
 * Dims non-trail markers while keeping trail locations highlighted
 */
export function dimMarkersExcept(highlightedIds) {
  const highlightSet = new Set(highlightedIds);

  markersMap.forEach((marker, id) => {
    const el = document.getElementById(`marker-${id}`);
    if (el) {
      if (highlightSet.has(id)) {
        el.classList.remove('marker-dimmed');
      } else {
        el.classList.add('marker-dimmed');
      }
    }
  });
}

/**
 * Resets all marker dimming
 */
export function resetDimming() {
  markersMap.forEach((marker, id) => {
    const el = document.getElementById(`marker-${id}`);
    if (el) {
      el.classList.remove('marker-dimmed');
    }
  });
}
