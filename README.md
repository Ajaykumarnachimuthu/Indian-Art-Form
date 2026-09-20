# Indian-Art-Form

# India — A Living Canvas
### Curatorial Digital Heritage Exhibition & Interactive Art Studio

**Academic Course Alignment:** CLA-I — Continuous Learning Assessment | CO1 & CO2 — 10 Marks

---

## 🏛️ Exhibition Architecture

An interactive digital exhibition exploring thousands of years of Indian artistic heritage through three distinct, interconnected activities:

### 1. Activity 1: Through Time (`index.html`)
- **Chronological Art Timeline**: Spans from Paleolithic rock art (Bhimbetka, 30,000 BCE) to modern and progressive contemporary expressions.
- **Visual Hierarchy**: Features grand milestone highlights and refined contextual artifacts.
- **Curatorial Dossiers**: Deep-dive modals with Art DNA, historical contexts, aesthetic significance, and technical material anatomies.
- **Dynamic Era Navigation**: Scroll-spy floating jump rail with smooth chronological jumping.

### 2. Activity 2: Across India (`map.html`)
- **Interactive Art Geography Map**: CartoDB Voyager basemap geofenced strictly to India.
- **32 Cultural Destinations**: Covers every major regional art form across North, South, East, West, and Central India.
- **Three-Tier Marker Hierarchy**: Circular photographic pins featuring authentic artifacts with interactive hover previews.
- **Split-Screen Dossier**: Comprehensive multi-tab architectural and artistic breakdown with quick camera navigation.

### 3. Activity 3: The Fusion Studio (`fusion.html`)
- **Regional Painting Fusion: Warli × Kalamkari**: Explores the contemporary digital synthesis of two visual traditions.
- **Original Master SVG Canvas**: Dynamic multi-layered SVG composition depicting community ritual celebration inside an organic lotus garden.
- **Interactive Studio Controls**:
  - **Dominance Morphing Slider**: Real-time continuous blending between Warli tribal geometry and Kalamkari floral tapestries.
  - **7-Step Construction Stepper**: Interactive step-by-step breakdown of how the fusion was conceptualized, structured, and pigmented.
  - **Layer Inspector**: Toggle individual layers (earth base, border friezes, central Tarpa dance, Kalamkari flora, birds, and pigments).
  - **Motif & Pigment Explorers**: Dedicated spotlight controllers analyzing symbolic meanings and organic extraction chemistry.
  - **Distraction-Free Lightbox**: Fullscreen zoom and pan canvas viewer.

---

## 🛠️ Technology Stack

- **Markup & Structure**: Semantic HTML5 with accessibility attributes (`ARIA`, roles, landmarks).
- **Styling**: Vanilla CSS3 with hardware-accelerated GPU transforms (`translate3d`, `will-change`), CSS custom property tokens, and responsive viewports.
- **Interactivity**: Pure ES6+ JavaScript modules (zero bloated UI dependencies).
- **Geospatial Engine**: Leaflet.js with high-performance 2D Canvas vector rendering.
- **Deployment**: Configured for Vercel Edge Network (`vercel.json`) with clean URLs and CDN cache headers.

---

## 🚀 Local Development

1. Clone or download the repository:
   ```bash
   git clone https://github.com/Ajaykumarnachimuthu/Indian-Art-Form.git
   cd Indian-Art-Form
   ```

2. Start a local server:
   ```bash
   python -m http.server 5500
   ```

3. Open in your browser:
   - Timeline: [http://localhost:5500/index.html](http://localhost:5500/index.html)
   - Across India Map: [http://localhost:5500/map.html](http://localhost:5500/map.html)
   - The Fusion Studio: [http://localhost:5500/fusion.html](http://localhost:5500/fusion.html)

---

## 🌐 Deploy to Vercel

This repository includes `vercel.json` and is ready for one-click deployment:

1. Import this repository into [Vercel](https://vercel.com/new).
2. Click **Deploy**.
3. Vercel will build and serve the static application across its global Edge Network.
