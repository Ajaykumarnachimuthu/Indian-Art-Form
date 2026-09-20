/**
 * INDIA — A LIVING CANVAS: ACTIVITY 3
 * THE FUSION STUDIO — WARLI × KALAMKARI
 * Core Application Engine: Interactivity, SVG Layering, Morphing Slider,
 * Lightbox Gallery, Audio Ambiance, and Educational Controllers.
 * Academic Accreditation: CLA-I — CO2
 */

import {
  FUSION_METADATA,
  TRADITIONS_DATA,
  ART_DNA_COMPARISON,
  FUSION_LAYERS,
  PROCESS_STEPS,
  MOTIFS_DATA,
  COLOR_PALETTE,
  DESIGN_TIMELINE,
  ACADEMIC_TAKEAWAY
} from './fusionData.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application Subsystems
  initHeaderAndScroll();
  initArtDnaSection();
  initStudioLayerControls();
  initMorphingSlider();
  initTransformationPlayer();
  initProcessStepper();
  initMotifExplorer();
  initColorExplorer();
  initDesignTimeline();
  initAcademicTakeaways();
  initLightboxGallery();
});

/**
 * Header sticky scroll behavior
 */
function initHeaderAndScroll() {
  const header = document.getElementById('site-header');
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
 * Art DNA Comparison Matrix
 */
function initArtDnaSection() {
  const container = document.getElementById('art-dna-list');
  if (!container) return;

  const html = ART_DNA_COMPARISON.map((dna, idx) => `
    <article class="art-dna-row" data-dna-index="${idx}" tabindex="0" role="listitem" aria-label="Comparison: ${dna.category}">
      <div class="art-dna-category">
        <span class="art-dna-badge">Dimension 0${idx + 1}</span>
        <h3 class="art-dna-category-name">${dna.category}</h3>
      </div>

      <div class="dna-box warli-box">
        <span class="dna-tradition-tag">Warli Tradition</span>
        <p class="dna-box-desc">${dna.warli}</p>
      </div>

      <div class="dna-box kalamkari-box">
        <span class="dna-tradition-tag">Kalamkari Tradition</span>
        <p class="dna-box-desc">${dna.kalamkari}</p>
      </div>
    </article>
  `).join('');

  container.innerHTML = html;

  // Hover sync with master SVG
  container.querySelectorAll('.art-dna-row').forEach(row => {
    row.addEventListener('mouseenter', () => {
      row.classList.add('active');
      const idx = parseInt(row.getAttribute('data-dna-index'), 10);
      highlightSvgByDna(idx);
    });

    row.addEventListener('mouseleave', () => {
      row.classList.remove('active');
      resetSvgLayers();
    });
  });
}

function highlightSvgByDna(idx) {
  const svg = document.getElementById('fusion-master-svg');
  if (!svg) return;

  svg.classList.add('layer-active');
  svg.querySelectorAll('.fusion-layer').forEach(l => l.classList.remove('highlighted-layer'));

  if (idx === 0) { // Form & Geometry -> Warli figures + Kalamkari botanicals
    document.getElementById('layer-warli-figures')?.classList.add('highlighted-layer');
    document.getElementById('layer-kalamkari-botanicals')?.classList.add('highlighted-layer');
  } else if (idx === 1) { // Figures & Storytelling -> Tarpa narrative + Figures
    document.getElementById('layer-warli-figures')?.classList.add('highlighted-layer');
    document.getElementById('layer-warli-narrative')?.classList.add('highlighted-layer');
  } else if (idx === 2) { // Themes -> Botanicals + Narrative
    document.getElementById('layer-kalamkari-botanicals')?.classList.add('highlighted-layer');
    document.getElementById('layer-warli-narrative')?.classList.add('highlighted-layer');
  } else if (idx === 3) { // Composition -> Border + Dance Spiral
    document.getElementById('layer-kalamkari-border')?.classList.add('highlighted-layer');
    document.getElementById('layer-warli-figures')?.classList.add('highlighted-layer');
  } else if (idx === 4) { // Palette -> Color System + Background
    document.getElementById('layer-color-system')?.classList.add('highlighted-layer');
    document.getElementById('layer-background')?.classList.add('highlighted-layer');
  }
}

/**
 * Interactive Layer Reveal Controls
 */
function initStudioLayerControls() {
  const stack = document.getElementById('layer-controls-stack');
  const btnShowAll = document.getElementById('btn-show-all-layers');
  const svg = document.getElementById('fusion-master-svg');
  if (!stack || !svg) return;

  const buttonsHtml = FUSION_LAYERS.map(l => `
    <button class="btn-layer-toggle" data-layer-id="${l.id}" data-selector="${l.selector}">
      <div class="layer-btn-info">
        <span class="layer-btn-title">${l.name}</span>
        <span class="layer-btn-badge">${l.tradition} &bull; ${l.subtitle}</span>
      </div>
      <span class="layer-btn-indicator" aria-hidden="true"></span>
    </button>
  `).join('');

  stack.innerHTML = buttonsHtml;

  // Layer toggle handler
  stack.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-layer-toggle');
    if (!btn) return;

    stack.querySelectorAll('.btn-layer-toggle').forEach(b => b.classList.remove('active'));
    btnShowAll?.classList.remove('active');
    btn.classList.add('active');

    const layerId = btn.getAttribute('data-layer-id');
    const layerData = FUSION_LAYERS.find(l => l.id === layerId);
    if (!layerData) return;

    // Emphasize target layer (ensure all layers are displayed)
    svg.classList.add('layer-active');
    svg.querySelectorAll('.fusion-layer').forEach(l => {
      l.style.display = '';
      l.classList.remove('highlighted-layer');
    });
    const targetElement = document.querySelector(layerData.selector);
    if (targetElement) {
      targetElement.classList.add('highlighted-layer');
      targetElement.style.opacity = '1';
    }

    // Update Curatorial Inspector Note
    updateInspector(layerData.tradition, layerData.name, layerData.description, `“${layerData.role}”`);
  });

  // "Unified Fusion" / Show All handler
  btnShowAll?.addEventListener('click', () => {
    stack.querySelectorAll('.btn-layer-toggle').forEach(b => b.classList.remove('active'));
    btnShowAll.classList.add('active');
    resetSvgLayers();
    updateInspector(
      "All Layers Unified",
      "Community in Harmony with Nature",
      "A deliberate contemporary synthesis combining Warli's geometric human rhythm with Kalamkari's organic botanical and avian vitality.",
      "“Neither tradition dominates; each elevates the other into a new contemporary language.”"
    );
  });
}

function resetSvgLayers() {
  const svg = document.getElementById('fusion-master-svg');
  if (!svg) return;
  svg.classList.remove('layer-active', 'motif-spotlight-active');
  svg.querySelectorAll('.fusion-layer').forEach(l => {
    l.classList.remove('highlighted-layer');
    l.style.display = '';
    l.style.opacity = '1';
    l.style.filter = '';
  });
  svg.querySelectorAll('.spotlight-motif').forEach(m => m.classList.remove('spotlight-active'));
  svg.querySelectorAll('.color-highlight-pulsing').forEach(c => c.classList.remove('color-highlight-pulsing'));
}

function updateInspector(tag, title, desc, role) {
  const tagEl = document.getElementById('inspector-tag');
  const titleEl = document.getElementById('inspector-title');
  const descEl = document.getElementById('inspector-desc');
  const roleEl = document.getElementById('inspector-role');

  if (tagEl) tagEl.textContent = tag;
  if (titleEl) titleEl.textContent = title;
  if (descEl) descEl.textContent = desc;
  if (roleEl) roleEl.textContent = role;
}

/**
 * Continuous Morphing Slider (Warli <-> Balanced Fusion <-> Kalamkari)
 */
function initMorphingSlider() {
  const slider = document.getElementById('dominance-slider');
  const caption = document.getElementById('slider-state-caption');
  const svg = document.getElementById('fusion-master-svg');
  if (!slider || !svg) return;

  const warliFigures = document.getElementById('layer-warli-figures');
  const warliNarrative = document.getElementById('layer-warli-narrative');
  const kalamkariBotanicals = document.getElementById('layer-kalamkari-botanicals');
  const kalamkariBorder = document.getElementById('layer-kalamkari-border');

  let rafId = null;

  slider.addEventListener('input', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      const val = parseInt(slider.value, 10);
      svg.classList.remove('layer-active');
      svg.querySelectorAll('.fusion-layer').forEach(l => { l.style.display = ''; });

      if (val < 40) {
        // Warli dominant
        const kalamkariRatio = Math.max(0.1, (val / 50));
        
        if (warliFigures) warliFigures.style.opacity = '1';
        if (warliNarrative) warliNarrative.style.opacity = '1';
        if (kalamkariBotanicals) kalamkariBotanicals.style.opacity = kalamkariRatio.toFixed(2);
        if (kalamkariBorder) kalamkariBorder.style.opacity = (kalamkariRatio * 0.9).toFixed(2);

        if (caption) caption.textContent = `${val}% — Warli Tribal Geometry Dominant`;
      } else if (val > 60) {
        // Kalamkari dominant
        const warliRatio = Math.max(0.12, 1 - ((val - 50) / 50));

        if (warliFigures) warliFigures.style.opacity = warliRatio.toFixed(2);
        if (warliNarrative) warliNarrative.style.opacity = warliRatio.toFixed(2);
        if (kalamkariBotanicals) kalamkariBotanicals.style.opacity = '1';
        if (kalamkariBorder) kalamkariBorder.style.opacity = '1';

        if (caption) caption.textContent = `${val}% — Kalamkari Botanical Tapestry Dominant`;
      } else {
        // Balanced fusion
        if (warliFigures) warliFigures.style.opacity = '1';
        if (warliNarrative) warliNarrative.style.opacity = '1';
        if (kalamkariBotanicals) kalamkariBotanicals.style.opacity = '1';
        if (kalamkariBorder) kalamkariBorder.style.opacity = '1';

        if (caption) caption.textContent = `50% — Harmonized Contemporary Synthesis`;
      }
    });
  });
}

/**
 * Transformation Player Sequence (Before / After Transition)
 */
function initTransformationPlayer() {
  const btn = document.getElementById('btn-toggle-transformation');
  if (!btn) return;

  let isPlaying = false;
  let timer = null;
  let currentStage = 0;

  const stages = [
    { name: "Stage 1: Pure Warli Language", warli: 1, kalamkari: 0.05, border: 0.1 },
    { name: "Stage 2: Botanical Infusion", warli: 0.9, kalamkari: 0.6, border: 0.3 },
    { name: "Stage 3: Temple Border Framing", warli: 0.9, kalamkari: 0.7, border: 1 },
    { name: "Stage 4: Natural Dye Harmonization", warli: 1, kalamkari: 0.9, border: 1 },
    { name: "Stage 5: Final Contemporary Fusion", warli: 1, kalamkari: 1, border: 1 }
  ];

  function runStage(idx) {
    const stage = stages[idx];
    const svg = document.getElementById('fusion-master-svg');
    if (svg) {
      svg.classList.remove('layer-active');
      svg.querySelectorAll('.fusion-layer').forEach(l => { l.style.display = ''; });
    }
    const warliFigures = document.getElementById('layer-warli-figures');
    const warliNarrative = document.getElementById('layer-warli-narrative');
    const kalamkariBotanicals = document.getElementById('layer-kalamkari-botanicals');
    const kalamkariBorder = document.getElementById('layer-kalamkari-border');
    const slider = document.getElementById('dominance-slider');

    if (warliFigures) warliFigures.style.opacity = stage.warli;
    if (warliNarrative) warliNarrative.style.opacity = stage.warli;
    if (kalamkariBotanicals) kalamkariBotanicals.style.opacity = stage.kalamkari;
    if (kalamkariBorder) kalamkariBorder.style.opacity = stage.border;

    if (slider) slider.value = idx === 0 ? 0 : (idx === 4 ? 50 : 25 * idx);
    updateInspector("Transformation Player", stage.name, `Demonstrating progressive visual evolution through continuous animation.`, "“From tribal austerity to rich harmonious synthesis.”");
  }

  btn.addEventListener('click', () => {
    if (isPlaying) {
      clearInterval(timer);
      isPlaying = false;
      btn.classList.remove('active');
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="16 3 21 3 21 8"></polyline>
          <line x1="4" y1="20" x2="21" y2="3"></line>
          <polyline points="21 16 21 21 16 21"></polyline>
          <line x1="15" y1="15" x2="21" y2="21"></line>
          <line x1="4" y1="4" x2="9" y2="9"></line>
        </svg>
        Transformation Player
      `;
      resetSvgLayers();
    } else {
      isPlaying = true;
      btn.classList.add('active');
      btn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="6" y="4" width="4" height="16"></rect>
          <rect x="14" y="4" width="4" height="16"></rect>
        </svg>
        Pause Transformation
      `;
      currentStage = 0;
      runStage(currentStage);

      timer = setInterval(() => {
        currentStage = (currentStage + 1) % stages.length;
        runStage(currentStage);
      }, 2400);
    }
  });
}

/**
 * The 7-Step Fusion Construction Process
 */
function initProcessStepper() {
  const nav = document.getElementById('process-steps-nav');
  const btnPrev = document.getElementById('btn-step-prev');
  const btnNext = document.getElementById('btn-step-next');
  if (!nav) return;

  let currentStepIdx = 0;

  // Render Tabs
  const tabsHtml = PROCESS_STEPS.map((step, idx) => `
    <button class="process-step-tab ${idx === 0 ? 'active' : ''}" data-step-index="${idx}" role="tab" aria-selected="${idx === 0}">
      <span class="process-step-num">Step ${step.stepNumber}</span>
      <span class="process-step-title">${step.title}</span>
    </button>
  `).join('');

  nav.innerHTML = tabsHtml;

  function renderStep(idx, updateCanvas = true) {
    currentStepIdx = idx;
    const step = PROCESS_STEPS[idx];

    // Update Tabs
    nav.querySelectorAll('.process-step-tab').forEach((tab, i) => {
      tab.classList.toggle('active', i === idx);
      tab.setAttribute('aria-selected', i === idx ? 'true' : 'false');
    });

    // Update Card
    const badge = document.getElementById('step-active-badge');
    const title = document.getElementById('step-active-title');
    const desc = document.getElementById('step-active-desc');
    const action = document.getElementById('step-active-action');

    if (badge) badge.textContent = `Step ${step.stepNumber} / Phase: ${step.focus}`;
    if (title) title.textContent = step.title;
    if (desc) desc.textContent = step.description;
    if (action) action.textContent = step.visualAction;

    // Button states
    if (btnPrev) btnPrev.disabled = (idx === 0);
    if (btnNext) btnNext.disabled = (idx === PROCESS_STEPS.length - 1);

    if (updateCanvas) {
      // Update master SVG layers according to activeLayers
      const allLayers = [
        'layer-background',
        'layer-warli-figures',
        'layer-warli-narrative',
        'layer-kalamkari-botanicals',
        'layer-kalamkari-border',
        'layer-color-system'
      ];

      allLayers.forEach(layerId => {
        const el = document.getElementById(layerId);
        if (!el) return;
        if (step.activeLayers.includes(layerId)) {
          el.style.display = '';
          el.style.opacity = '1';
        } else {
          el.style.display = 'none';
        }
      });
    }

    // Scroll active tab into view if needed
    const activeTab = nav.querySelector(`.process-step-tab[data-step-index="${idx}"]`);
    activeTab?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Click on Tab
  nav.addEventListener('click', (e) => {
    const tab = e.target.closest('.process-step-tab');
    if (!tab) return;
    const idx = parseInt(tab.getAttribute('data-step-index'), 10);
    renderStep(idx, true);
  });

  // Next / Prev clicks
  btnPrev?.addEventListener('click', () => {
    if (currentStepIdx > 0) renderStep(currentStepIdx - 1, true);
  });

  btnNext?.addEventListener('click', () => {
    if (currentStepIdx < PROCESS_STEPS.length - 1) renderStep(currentStepIdx + 1, true);
  });

  // On initial page load: keep master canvas fully displayed, only initialize stepper text
  renderStep(0, false);
}

/**
 * Motif Explorer Section
 */
function initMotifExplorer() {
  const grid = document.getElementById('motifs-grid');
  const svg = document.getElementById('fusion-master-svg');
  if (!grid || !svg) return;

  const html = MOTIFS_DATA.map(m => `
    <article class="motif-card" data-motif-id="${m.id}" tabindex="0" role="button" aria-label="Explore motif: ${m.name}">
      <header class="motif-card-header">
        <div class="motif-icon-frame" aria-hidden="true">
          ${m.svgSnippet}
        </div>
        <div class="motif-info-title-group">
          <span class="motif-source-tag">${m.sourceLanguage}</span>
          <h3 class="motif-card-title">${m.name}</h3>
        </div>
      </header>

      <p class="motif-detail-p">
        <strong>Symbolism:</strong> ${m.symbolism}
      </p>

      <div class="motif-fusion-role">
        <strong>Role in Fusion:</strong> ${m.roleInFusion}
      </div>
    </article>
  `).join('');

  grid.innerHTML = html;

  // Click handler to spotlight on canvas
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.motif-card');
    if (!card) return;

    grid.querySelectorAll('.motif-card').forEach(c => c.classList.remove('active-motif'));
    card.classList.add('active-motif');

    const motifId = card.getAttribute('data-motif-id');
    const motif = MOTIFS_DATA.find(m => m.id === motifId);
    if (!motif) return;

    // Spotlight motif on canvas
    svg.classList.add('motif-spotlight-active');
    svg.querySelectorAll('.spotlight-motif').forEach(el => el.classList.remove('spotlight-active'));

    let targetSvgId = '';
    if (motifId === 'motif-warli-figure') targetSvgId = 'motif-target-warli-figure';
    else if (motifId === 'motif-tarpa-dance') targetSvgId = 'motif-target-tarpa';
    else if (motifId === 'motif-tree-life') targetSvgId = 'motif-target-tree';
    else if (motifId === 'motif-kalamkari-lotus') targetSvgId = 'motif-target-lotus';
    else if (motifId === 'motif-sacred-bird') targetSvgId = 'motif-target-bird';
    else if (motifId === 'motif-decorative-border') targetSvgId = 'layer-kalamkari-border';

    const targetEl = document.getElementById(targetSvgId);
    if (targetEl) targetEl.classList.add('spotlight-active');

    updateInspector(motif.sourceLanguage, motif.name, motif.symbolism, `“${motif.roleInFusion}”`);

    // Smooth scroll back to artwork viewport if viewport is scrolled far past
    const viewport = document.getElementById('artwork-viewport');
    if (viewport) {
      const rect = viewport.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        viewport.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  });
}

/**
 * Color Palette Explorer
 */
function initColorExplorer() {
  const grid = document.getElementById('palette-swatches-grid');
  const svg = document.getElementById('fusion-master-svg');
  if (!grid || !svg) return;

  const html = COLOR_PALETTE.map(c => `
    <article class="swatch-card" data-color-id="${c.id}" data-target="${c.targetElements}" tabindex="0" role="button" aria-label="Pigment swatch: ${c.name}">
      <div class="swatch-color-pill" style="background-color: ${c.hex};">
        <span class="swatch-hex-badge">${c.hex}</span>
      </div>
      <div class="swatch-body">
        <h3 class="swatch-name">${c.name}</h3>
        <span class="swatch-tradition-tag">${c.tradition}</span>
        <p class="swatch-source-desc">
          <strong>Natural Source:</strong> ${c.naturalSource}
        </p>
        <p class="swatch-source-desc" style="font-style: italic;">
          <strong>Symbolism:</strong> ${c.symbolism}
        </p>
      </div>
    </article>
  `).join('');

  grid.innerHTML = html;

  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.swatch-card');
    if (!card) return;

    grid.querySelectorAll('.swatch-card').forEach(s => s.classList.remove('active-swatch'));
    card.classList.add('active-swatch');

    const colorId = card.getAttribute('data-color-id');
    const color = COLOR_PALETTE.find(c => c.id === colorId);
    if (!color) return;

    // Highlight target elements in SVG
    svg.querySelectorAll('.color-highlight-pulsing').forEach(el => el.classList.remove('color-highlight-pulsing'));
    const matched = svg.querySelectorAll(color.targetElements);
    matched.forEach(el => el.classList.add('color-highlight-pulsing'));

    updateInspector(color.tradition, color.name, color.naturalSource, `“Symbolizes ${color.symbolism}”`);
  });
}

/**
 * Design Process Timeline (7 Stages Expandable Accordion)
 */
function initDesignTimeline() {
  const stack = document.getElementById('timeline-accordion-stack');
  if (!stack) return;

  const html = DESIGN_TIMELINE.map((item, idx) => `
    <article class="timeline-step-item ${idx === 0 ? 'expanded' : ''}" data-stage="${item.stage}">
      <button class="timeline-step-header" aria-expanded="${idx === 0}">
        <div class="step-num-title-group">
          <span class="timeline-step-badge">${item.stage}</span>
          <div>
            <h3 class="timeline-step-name">${item.title}</h3>
            <span style="font-family: var(--font-sans); font-size: 0.72rem; color: var(--terracotta);">${item.duration}</span>
          </div>
        </div>
        <svg class="timeline-step-toggle-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <div class="timeline-step-drawer">
        <div class="drawer-inner-padding">
          <p class="drawer-summary-p"><strong>Approach:</strong> ${item.summary}</p>
          <p class="drawer-details-p"><strong>Execution:</strong> ${item.details}</p>
        </div>
      </div>
    </article>
  `).join('');

  stack.innerHTML = html;

  stack.addEventListener('click', (e) => {
    const btn = e.target.closest('.timeline-step-header');
    if (!btn) return;
    const item = btn.closest('.timeline-step-item');
    const isExpanded = item.classList.contains('expanded');

    // Toggle clicked accordion
    item.classList.toggle('expanded', !isExpanded);
    btn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
  });
}

/**
 * Academic Takeaways Cards
 */
function initAcademicTakeaways() {
  const grid = document.getElementById('takeaway-grid');
  if (!grid) return;

  const html = ACADEMIC_TAKEAWAY.points.map((pt, idx) => `
    <article class="takeaway-card">
      <span class="takeaway-card-num">Takeaway 0${idx + 1}</span>
      <h3 class="takeaway-card-title">${pt.title}</h3>
      <p class="takeaway-card-desc">${pt.text}</p>
    </article>
  `).join('');

  grid.innerHTML = html;
}

/**
 * Distraction-Free Lightbox Gallery Modal with Zoom & Pan
 */
function initLightboxGallery() {
  const modal = document.getElementById('gallery-modal');
  const btnOpen = document.getElementById('btn-open-gallery');
  const btnClose = document.getElementById('btn-gallery-close');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomReset = document.getElementById('btn-zoom-reset');
  const canvasFrame = document.getElementById('gallery-canvas-frame');
  const masterSvg = document.getElementById('fusion-master-svg');

  if (!modal || !btnOpen || !canvasFrame || !masterSvg) return;

  let zoomScale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  let dragRafId = null;

  function updateTransform(smooth = false) {
    const svgClone = canvasFrame.querySelector('svg');
    if (svgClone) {
      svgClone.style.transition = smooth ? 'transform 0.2s cubic-bezier(0.2, 0.9, 0.3, 1)' : 'none';
      svgClone.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoomScale})`;
    }
  }

  function openGallery() {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Clone master SVG with current layer visibility
    canvasFrame.innerHTML = '';
    const clone = masterSvg.cloneNode(true);
    clone.id = 'gallery-clone-svg';
    clone.classList.add('gallery-modal-svg-content');
    clone.style.willChange = 'transform';
    canvasFrame.appendChild(clone);

    zoomScale = 1;
    panX = 0;
    panY = 0;
    updateTransform(false);
  }

  function closeGallery() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  btnOpen.addEventListener('click', openGallery);
  btnClose?.addEventListener('click', closeGallery);

  // Keyboard Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeGallery();
    }
  });

  // Zoom Controls
  btnZoomIn?.addEventListener('click', () => {
    zoomScale = Math.min(zoomScale + 0.3, 3.5);
    updateTransform(true);
  });

  btnZoomOut?.addEventListener('click', () => {
    zoomScale = Math.max(zoomScale - 0.3, 0.6);
    updateTransform(true);
  });

  btnZoomReset?.addEventListener('click', () => {
    zoomScale = 1;
    panX = 0;
    panY = 0;
    updateTransform(true);
  });

  // Mouse wheel zoom inside lightbox
  canvasFrame.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    zoomScale = Math.min(Math.max(zoomScale + delta, 0.6), 4);
    updateTransform(false);
  }, { passive: false });

  // Pan dragging without transition latency
  canvasFrame.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
    const svgClone = canvasFrame.querySelector('svg');
    if (svgClone) svgClone.style.transition = 'none';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    if (dragRafId) cancelAnimationFrame(dragRafId);
    dragRafId = requestAnimationFrame(() => {
      updateTransform(false);
    });
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      const svgClone = canvasFrame.querySelector('svg');
      if (svgClone) svgClone.style.transition = 'transform 0.2s cubic-bezier(0.2, 0.9, 0.3, 1)';
    }
  });
}
