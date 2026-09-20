/**
 * INDIA — A LIVING CANVAS: TIMELINE RENDERER
 * Dynamically builds the interactive vertical timeline with period groupings,
 * alternating visual hierarchy (Grand vs Refined), and Level 1 micro-interactions.
 */

import { ART_DATA, PERIODS } from './artData.js';
import { openArtifactModal } from './modal.js';

let currentVisibleItems = [...ART_DATA];

/**
 * Initialize the timeline container
 */
export function initTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  renderTimeline(container, currentVisibleItems);
}

/**
 * Renders the timeline grouped by historical periods
 */
export function renderTimeline(container, items) {
  container.innerHTML = '';

  // Group filtered items by periodId
  const periodGroups = {};
  PERIODS.forEach(p => {
    periodGroups[p.id] = [];
  });

  items.forEach(item => {
    if (periodGroups[item.periodId]) {
      periodGroups[item.periodId].push(item);
    }
  });

  let globalAlternatingIndex = 0;

  PERIODS.forEach(period => {
    const groupItems = periodGroups[period.id];
    if (!groupItems || groupItems.length === 0) return;

    // Period Section Container
    const periodBlock = document.createElement('div');
    periodBlock.className = 'period-block';
    periodBlock.id = `period-section-${period.id}`;
    periodBlock.setAttribute('data-period-id', period.id);

    // Period Header Banner
    const headerHtml = `
      <div class="period-header-banner">
        <span class="period-header-badge">
          <span class="hero-divider-diamond"></span>
          ${period.name}
          <span class="hero-divider-diamond"></span>
        </span>
        <h2 class="period-header-title">${period.name}</h2>
        <div class="period-header-timeframe">${period.timeframe}</div>
        <p class="period-header-desc">${period.description}</p>
      </div>
    `;
    periodBlock.innerHTML = headerHtml;

    // Spine Wrapper
    const spineWrapper = document.createElement('div');
    spineWrapper.className = 'timeline-spine-wrapper';

    groupItems.forEach(item => {
      const isLeft = (globalAlternatingIndex % 2 === 0);
      globalAlternatingIndex++;

      const itemEl = createTimelineItemElement(item, isLeft);
      spineWrapper.appendChild(itemEl);
    });

    periodBlock.appendChild(spineWrapper);
    container.appendChild(periodBlock);
  });
}

/**
 * Builds a single interactive artifact card
 */
function createTimelineItemElement(item, isLeft) {
  const itemEl = document.createElement('article');
  const alignmentClass = isLeft ? 'item-left' : 'item-right';
  const hierarchyClass = item.importance === 'grand' ? 'hierarchy-grand' : 'hierarchy-refined';

  itemEl.className = `timeline-item ${alignmentClass} ${hierarchyClass} anim-fade-in`;
  itemEl.id = `item-${item.id}`;
  itemEl.setAttribute('data-item-id', item.id);
  itemEl.setAttribute('data-period', item.periodId);
  itemEl.setAttribute('data-region', item.region);
  itemEl.setAttribute('data-art-form', item.artForm);

  itemEl.innerHTML = `
    <!-- Central Node Pin -->
    <div class="timeline-node-pin" aria-hidden="true">
      <div class="node-inner-core"></div>
    </div>

    <!-- Interactive Artifact Card -->
    <div class="artifact-card" tabindex="0" role="button" aria-label="Explore ${item.title}, ${item.yearLabel}">
      <div class="card-media-wrapper">
        <img 
          src="${item.thumb || item.image}" 
          alt="${item.title}" 
          class="card-image" 
          loading="lazy"
          onerror="this.onerror=null; this.src='assets/images/hero-bg.jpg';"
        />
        <div class="card-media-gradient"></div>
        <div class="card-period-year-badge">${item.yearLabel}</div>
        <div class="card-category-pill">${item.artForm}</div>
      </div>

      <div class="card-content">
        <div class="card-tradition-label">${item.tradition}</div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.shortDescription}</p>

        <div class="card-metadata-bar">
          <span class="card-meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            ${item.region} India (${item.state})
          </span>
          <span class="card-explore-action">
            Inspect Artifact
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `;

  const card = itemEl.querySelector('.artifact-card');

  // Level 2 & 3 Click Interaction
  card.addEventListener('click', () => {
    openArtifactModal(item.id);
  });

  // Keyboard accessibility
  card.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openArtifactModal(item.id);
    }
  });

  return itemEl;
}
