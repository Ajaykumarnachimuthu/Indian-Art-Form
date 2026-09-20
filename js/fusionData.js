/**
 * INDIA — A LIVING CANVAS: ACTIVITY 3
 * THE FUSION STUDIO — WARLI × KALAMKARI
 * Data Architecture: Traditions, Art DNA, Layers, Motifs, Pigments, Process & Curatorial Dossier
 * Academic Accreditation: CLA-I — CO2 (10 Marks)
 */

export const FUSION_METADATA = {
  projectTitle: "India — A Living Canvas",
  activityId: "ACTIVITY 03",
  activityTitle: "Regional Painting Fusion",
  studioTitle: "THE FUSION STUDIO",
  headline: "WARLI × KALAMKARI",
  tagline: "Geometry meets organic storytelling.",
  subtitle: "When two Indian visual traditions meet, a new visual language emerges.",
  academicCourse: "CLA-I — CO2",
  curatorialDisclaimer: "Warli × Kalamkari is an experimental contemporary fusion inspired by characteristics of two distinct Indian traditions. It is an original conceptual digital artwork created for academic and artistic exploration, not a historical coexistence.",
  artworkInfo: {
    title: "Warli × Kalamkari: Community in Harmony with Nature",
    type: "Contemporary Digital Fusion",
    sourceTraditions: "Warli (Maharashtra tribal heritage) + Kalamkari (Andhra Pradesh temple & textile heritage)",
    concept: "Community in harmony with nature — geometric human narrative intertwined with organic botanical life.",
    visualElements: "Triangular human rhythm + Tarpa dance circle + lotus botanical creepers + sacred hamsa birds + multi-tiered temple borders.",
    medium: "Original Scalable Vector Graphic (Digital Masterwork)",
    year: "2026",
    license: "Educational & Cultural Research Exhibition"
  }
};

export const TRADITIONS_DATA = {
  warli: {
    id: "warli",
    name: "Warli Painting",
    region: "Northern Sahyadri Range, Maharashtra & Gujarat border",
    community: "Indigenous Warli (Adivasi) tribal community",
    origins: "Dating back to at least 2500–3000 BCE in rock art lineage; formalized as ceremonial wall murals (Suvasini / Chauk).",
    essence: "Geometric, monochromatic, and rhythmic celebration of cyclical nature, mother Earth (Palghat), and collective village existence.",
    medium: "Rice paste white pigment (chuna/rice flour + water + gum bind) applied on mud, cow dung, and red ochre (geru) coated reed walls using chewed bamboo twigs.",
    visualGrammar: [
      "Geometric human figures composed of two opposing triangles (tip-to-tip)",
      "Upper triangle represents the torso; lower triangle represents pelvis and hips",
      "Triangles symbolize universal balance: the cosmic male and female principles (Purusha & Prakriti)",
      "Circular and spiral dance formations (Tarpa dance) reflecting seasonal cycles and uninterrupted life",
      "No linear perspective or horizon lines; space is flattened into a democratic collective canvas",
      "Repetitive, rhythmic motifs of flora, fauna, farming, and ancestral celebrations"
    ],
    authenticImage: "assets/images/authentic-warli.jpg",
    imageCaption: "Traditional Warli tribal mural with ritual Tarpa circular dance and village harvesting rhythm."
  },
  kalamkari: {
    id: "kalamkari",
    name: "Kalamkari Painting",
    region: "Andhra Pradesh (Srikalahasti & Machilipatnam schools)",
    community: "Chitrakar temple painters & coastal block-printing textile guilds",
    origins: "Documented since the Golconda Sultanate and Vijayanagara Empire (c. 13th–17th century CE) as temple hanging scrolls (Kalam = pen, Kari = craftsmanship).",
    essence: "Intricate, organic, botanical, and narrative storytelling characterized by flowing contour lines, meandering floral vines, and divine allegories.",
    medium: "Hand-drawn with a tamarind-twig kalam pen dipped in fermented iron-jaggery black ink (kasimi), dyed with natural madder root, indigo, alum mordants, and buffalo milk washes.",
    visualGrammar: [
      "Flowing, lyrical, undulating outlines with thick-and-thin calligraphic sensitivity",
      "Rich botanical vocabulary: multi-petaled lotuses (padma), curling vines (kalpavriksha creepers), and mango leaves",
      "Sacred avian and wildlife iconography: peacocks (mayura), swans (hamsa), and royal deer",
      "Dense, ornamental compositions where negative space is embellished with stipples and floral buds",
      "Multi-tiered decorative borders separating mythic narratives with architectural friezes",
      "Natural earthy and vegetable color spectrum: deep indigo, madder red, turmeric ochre, and warm unbleached cotton"
    ],
    authenticImage: "assets/images/authentic-kalamkari.jpg",
    imageCaption: "Classical Kalamkari temple textile hanging with Tree of Life (Kalpavriksha) and intricate floral arabesques."
  }
};

export const ART_DNA_COMPARISON = [
  {
    category: "Form & Geometry",
    warli: "Strictly geometric: triangles, circles, and straight lines distilled into elemental icons.",
    kalamkari: "Lyrical and organic: sinuous flowing curves, naturalistic curves, and ornate curvilinear contours.",
    fusionRole: "Warli's crisp angularity is cradled within Kalamkari's sweeping botanical curves, preventing visual stiffness."
  },
  {
    category: "Figures & Storytelling",
    warli: "Anonymous, egalitarian figures engaged in communal rhythm (harvesting, dancing, hunting).",
    kalamkari: "Narrative, iconic, and expressive figures with elongated eyes, ornate jewelry, and mythic stature.",
    fusionRole: "Warli's democratic village circle takes center stage, framed by Kalamkari's regal mythic botanical dignity."
  },
  {
    category: "Themes & Worldview",
    warli: "Animistic reverence for the forest, seasonal agricultural cycles, fertility, and community unity.",
    kalamkari: "Devotional epics (Ramayana, Mahabharata), sacred sacred groves (Tree of Life), and botanical flora.",
    fusionRole: "Unites the tribal celebration of community with the classical sacred sanctum of nature."
  },
  {
    category: "Compositional Rhythm",
    warli: "Centrifugal, spiraling, and circular rhythms spreading across an open pictorial field without borders.",
    kalamkari: "Structured, hierarchical, and deeply framed with decorative borders and architectural pilasters.",
    fusionRole: "Warli's energetic dance spiral is anchored and exalted by Kalamkari's formal border architecture."
  },
  {
    category: "Palette & Pigments",
    warli: "Monochromatic white rice paste on warm terracotta/geru mud; minimalist, raw, and high-contrast.",
    kalamkari: "Rich poly-chromatic earthy spectrum: fermented iron black, madder red, indigo blue, myrobalan yellow.",
    fusionRole: "Retains Warli's crisp white linework while bathing the composition in Kalamkari's natural dye tones."
  }
];

export const FUSION_LAYERS = [
  {
    id: "layer-bg",
    selector: "#layer-background",
    name: "The Textured Earth Base",
    tradition: "Shared Heritage",
    subtitle: "Organic handmade paper & mud wash surface",
    description: "A rich tactile substrate evoking raw sun-dried Warli mud plaster (geru) combined with unbleached, milk-treated Kalamkari khadi cotton.",
    role: "Provides the warm physical gravity upon which both white rice paste and botanical dyes register with tactile authenticity."
  },
  {
    id: "layer-warli",
    selector: "#layer-warli-figures",
    name: "Warli Geometric Figures",
    tradition: "Warli",
    subtitle: "Triangular anatomy & collective human movement",
    description: "Stick and double-triangle human figures holding hands in celebration, farming, carrying produce, and beating drums.",
    role: "Injects dynamic kinetic energy, egalitarian human storytelling, and geometric counterpoint into the composition."
  },
  {
    id: "layer-narrative",
    selector: "#layer-warli-narrative",
    name: "Warli Tarpa Circle & Life",
    tradition: "Warli",
    subtitle: "Sacred spiral dance, animals, and village huts",
    description: "The central Tarpa dance spiral radiating outward, accompanied by sacred cattle, deer, soaring birds, and rustic thatch huts.",
    role: "Establishes the core philosophical heart: humans living in joyful, cyclical reciprocity with the cosmos."
  },
  {
    id: "layer-botanical",
    selector: "#layer-kalamkari-botanicals",
    name: "Kalamkari Botanical Flourishes",
    tradition: "Kalamkari",
    subtitle: "Sinuous lotus vines, floral arabesques, and sacred peacocks",
    description: "Gracefully meandering botanical tendrils that entwine through the human figures, blooming into stylized lotuses and sheltering peacocks.",
    role: "Breaks angular rigidity with graceful organic curves, creating an ambient living garden that embraces the tribal community."
  },
  {
    id: "layer-border",
    selector: "#layer-kalamkari-border",
    name: "Decorative Kalamkari Border",
    tradition: "Kalamkari",
    subtitle: "Multi-tiered palmettes, chevrons, and lotus friezes",
    description: "A ceremonial structural frame inspired by Andhra temple textile hangings, featuring geometric teeth and undulating floral garlands.",
    role: "Converts the spontaneous tribal mural into an exalted museum masterwork, bestowing structural balance and curatorial focus."
  },
  {
    id: "layer-color",
    selector: "#layer-color-system",
    name: "Restrained Natural Dye Colorway",
    tradition: "Kalamkari & Warli",
    subtitle: "Terracotta, deep indigo, madder red, and mustard ochre",
    description: "Harmonization of the austere monochrome Warli white with Kalamkari's natural vegetable dye infusions.",
    role: "Binds the geometric figures and organic vines into a unified chromatic register, preventing visual discord."
  }
];

export const PROCESS_STEPS = [
  {
    stepNumber: "01",
    id: "step-base",
    title: "The Earthy Foundation",
    focus: "Substrate & Atmospheric Ground",
    description: "We begin with a textured ground derived from cow dung and geru (red mud) washes used in Warli homes, combined with the warm ivory grain of unbleached Kalamkari cotton.",
    visualAction: "Isolates the raw textured terracotta ground and establishes compositional margins.",
    activeLayers: ["layer-background"]
  },
  {
    stepNumber: "02",
    id: "step-figures",
    title: "Warli Geometric Figures",
    focus: "Human Anatomy in Balance",
    description: "Introducing the signature Warli double-triangle figures. Two inverted triangles meet at an apex — the upper triangle symbolizes the torso/heavens, while the lower represents the pelvis/earth.",
    visualAction: "Draws the elemental human figures carrying offerings, playing flutes, and drumming.",
    activeLayers: ["layer-background", "layer-warli-figures"]
  },
  {
    stepNumber: "03",
    id: "step-narrative",
    title: "The Tarpa Dance Circle",
    focus: "Cyclical Movement & Village Lore",
    description: "The figures interlock hands to form the sacred Tarpa dance spiral. Encircling the central horn player, the spiral symbolizes the cyclical passage of seasons without beginning or end.",
    visualAction: "Expands the community narrative with village huts, bullock carts, and the sacred sun.",
    activeLayers: ["layer-background", "layer-warli-figures", "layer-warli-narrative"]
  },
  {
    stepNumber: "04",
    id: "step-botanical",
    title: "Kalamkari Botanical Infusion",
    focus: "Organic Arabesques & Floral Life",
    description: "Sinuous Kalamkari vines (Kalpavriksha creepers) and blooming lotus medallions are introduced, flowing organically between and around the geometric human dancers.",
    visualAction: "Weaves lush botanical vines, foliage, and sacred peacocks across the pictorial plane.",
    activeLayers: ["layer-background", "layer-warli-figures", "layer-warli-narrative", "layer-kalamkari-botanicals"]
  },
  {
    stepNumber: "05",
    id: "step-border",
    title: "Ceremonial Kalamkari Framing",
    focus: "Architectural Border System",
    description: "A classical multi-tiered border is drawn around the artwork. Utilizing temple arch motifs, flowing floral garlands, and geometric running frets, it bestows dignity upon the narrative.",
    visualAction: "Encloses the vibrant interior with an ornate outer and inner Kalamkari border.",
    activeLayers: ["layer-background", "layer-warli-figures", "layer-warli-narrative", "layer-kalamkari-botanicals", "layer-kalamkari-border"]
  },
  {
    stepNumber: "06",
    id: "step-color",
    title: "Harmonized Earth Palette",
    focus: "Natural Dye Chemistry",
    description: "Rather than modern synthetic pigments, colors are drawn from traditional mineral and vegetable sources: indigo blue, madder root crimson, and raw ochre wash.",
    visualAction: "Infuses the artwork with authentic natural dye tones while keeping the Warli figures luminous.",
    activeLayers: ["layer-background", "layer-warli-figures", "layer-warli-narrative", "layer-kalamkari-botanicals", "layer-kalamkari-border", "layer-color-system"]
  },
  {
    stepNumber: "07",
    id: "step-final",
    title: "Final Unified Masterpiece",
    focus: "Community in Harmony with Nature",
    description: "The synthesis is complete. Geometric rhythm and organic luxury coexist in harmonious visual tension — neither tradition dominates; each elevates the other into a new contemporary language.",
    visualAction: "Reveals the full balanced fusion with complete textures, details, and interactive depth.",
    activeLayers: ["layer-background", "layer-warli-figures", "layer-warli-narrative", "layer-kalamkari-botanicals", "layer-kalamkari-border", "layer-color-system"]
  }
];

export const MOTIFS_DATA = [
  {
    id: "motif-warli-figure",
    name: "Triangular Human Figure",
    sourceLanguage: "Warli Tradition (Maharashtra)",
    category: "Anthropomorphic Geometry",
    symbolism: "Cosmic equilibrium (Purusha & Prakriti); egalitarian social structure where all individuals share equal geometric weight.",
    roleInFusion: "Provides kinetic pulse, rhythmic human interaction, and simplified clarity at the focal center of the composition.",
    svgSnippet: `<svg viewBox="0 0 100 120" class="motif-icon-svg"><circle cx="50" cy="20" r="10" fill="#F4EEDB"/><polygon points="50,32 30,68 70,68" fill="#F4EEDB"/><polygon points="30,68 70,68 50,105" fill="#F4EEDB"/><line x1="38" y1="46" x2="18" y2="35" stroke="#F4EEDB" stroke-width="4" stroke-linecap="round"/><line x1="62" y1="46" x2="82" y2="35" stroke="#F4EEDB" stroke-width="4" stroke-linecap="round"/><line x1="42" y1="105" x2="35" y2="118" stroke="#F4EEDB" stroke-width="4" stroke-linecap="round"/><line x1="58" y1="105" x2="65" y2="118" stroke="#F4EEDB" stroke-width="4" stroke-linecap="round"/></svg>`
  },
  {
    id: "motif-tarpa-dance",
    name: "Tarpa Dance Spiral",
    sourceLanguage: "Warli Tradition (Maharashtra)",
    category: "Ritual Choreography",
    symbolism: "The continuous unbroken cycle of creation, harvest, and ancestor veneration led by the Tarpa (wind instrument crafted from dried gourd and bamboo).",
    roleInFusion: "Serves as the circular magnetic nucleus of the artwork, drawing the viewer's eye inward before dispersing outward into the botanical realm.",
    svgSnippet: `<svg viewBox="0 0 120 120" class="motif-icon-svg"><circle cx="60" cy="60" r="48" fill="none" stroke="#F4EEDB" stroke-width="2" stroke-dasharray="6,4"/><circle cx="60" cy="60" r="32" fill="none" stroke="#F4EEDB" stroke-width="2" stroke-dasharray="5,3"/><circle cx="60" cy="60" r="14" fill="#C98A2C"/><circle cx="60" cy="60" r="6" fill="#1C1815"/></svg>`
  },
  {
    id: "motif-tree-life",
    name: "The Sacred Tree (Mahadeo)",
    sourceLanguage: "Warli × Kalamkari Synthesis",
    category: "Cosmic Arbor",
    symbolism: "In Warli, the tree is the dwelling of mother nature and ancestral spirits. In Kalamkari, the Tree of Life (Kalpavriksha) connects underworld, earth, and heavens.",
    roleInFusion: "The tree's trunk begins in pure Warli geometric chevron bark, then branches outward into lush Kalamkari leaves and blossoms — the literal spine of the fusion.",
    svgSnippet: `<svg viewBox="0 0 100 120" class="motif-icon-svg"><line x1="50" y1="110" x2="50" y2="40" stroke="#F4EEDB" stroke-width="6"/><path d="M50,70 Q25,50 20,25 Q45,35 50,55" fill="none" stroke="#3B5336" stroke-width="3"/><path d="M50,70 Q75,50 80,25 Q55,35 50,55" fill="none" stroke="#3B5336" stroke-width="3"/><circle cx="20" cy="25" r="7" fill="#781E1E"/><circle cx="80" cy="25" r="7" fill="#781E1E"/><circle cx="50" cy="20" r="9" fill="#C98A2C"/></svg>`
  },
  {
    id: "motif-kalamkari-lotus",
    name: "The Sacred Lotus (Padma)",
    sourceLanguage: "Kalamkari Tradition (Andhra Pradesh)",
    category: "Botanical Sanctum",
    symbolism: "Purity, divine birth, spiritual unfolding from primordial waters, and auspicious cosmic harmony.",
    roleInFusion: "Softens the hard geometric lines of the Warli figures, creating peaceful visual resting sanctuaries across the composition.",
    svgSnippet: `<svg viewBox="0 0 120 100" class="motif-icon-svg"><path d="M60,20 C45,45 35,65 60,85 C85,65 75,45 60,20 Z" fill="#781E1E"/><path d="M60,40 C30,50 20,70 45,85 C55,75 58,60 60,40 Z" fill="#B84323"/><path d="M60,40 C90,50 100,70 75,85 C65,75 62,60 60,40 Z" fill="#B84323"/><circle cx="60" cy="80" r="6" fill="#C98A2C"/></svg>`
  },
  {
    id: "motif-flowing-vine",
    name: "Meandering Botanical Vine (Ayate)",
    sourceLanguage: "Kalamkari Tradition (Andhra Pradesh)",
    category: "Lyrical Tendril",
    symbolism: "The continuous flow of Prana (vital breath), vitality, and the inexhaustible abundance of the wilderness.",
    roleInFusion: "Acts as connective tissue, meandering behind and between the dancing figures to seamlessly unify disjointed narrative zones.",
    svgSnippet: `<svg viewBox="0 0 120 80" class="motif-icon-svg"><path d="M10,65 Q35,15 65,55 T115,25" fill="none" stroke="#3B5336" stroke-width="4" stroke-linecap="round"/><circle cx="38" cy="30" r="5" fill="#781E1E"/><circle cx="85" cy="40" r="5" fill="#C98A2C"/><path d="M35,32 Q25,25 20,38" fill="none" stroke="#3B5336" stroke-width="2"/><path d="M85,42 Q95,35 100,48" fill="none" stroke="#3B5336" stroke-width="2"/></svg>`
  },
  {
    id: "motif-sacred-bird",
    name: "Sacred Peacock & Hamsa (Mayura)",
    sourceLanguage: "Kalamkari Tradition (Andhra Pradesh)",
    category: "Avian Grace",
    symbolism: "Royalty, vigilance, immortality, rain-bringing auspiciousness, and spiritual discernment.",
    roleInFusion: "Perched gracefully atop the organic vines, overlooking the human celebration and adding mythological depth.",
    svgSnippet: `<svg viewBox="0 0 120 100" class="motif-icon-svg"><path d="M30,75 C25,50 45,30 65,30 C75,30 85,38 85,50 C85,65 60,75 30,75 Z" fill="#1B2E4B"/><path d="M75,35 C80,20 90,15 95,20 C100,25 90,35 80,40" fill="none" stroke="#1B2E4B" stroke-width="3"/><circle cx="92" cy="18" r="3" fill="#C98A2C"/><path d="M30,75 C15,70 10,80 5,90" fill="none" stroke="#C98A2C" stroke-width="3"/></svg>`
  },
  {
    id: "motif-decorative-border",
    name: "Multi-Tiered Kalamkari Border",
    sourceLanguage: "Kalamkari Tradition (Andhra Pradesh)",
    category: "Architectural Framing",
    symbolism: "The sacred boundary (Lakshmana Rekha / Prakara) that separates the mundane external world from the consecrated inner narrative.",
    roleInFusion: "Bestows symmetry, curatorial completion, and museum-grade enclosure upon the spontaneous tribal dance.",
    svgSnippet: `<svg viewBox="0 0 120 60" class="motif-icon-svg"><rect x="5" y="8" width="110" height="44" fill="none" stroke="#C98A2C" stroke-width="3"/><line x1="5" y1="20" x2="115" y2="20" stroke="#781E1E" stroke-width="2"/><line x1="5" y1="40" x2="115" y2="40" stroke="#781E1E" stroke-width="2"/><polygon points="20,10 25,18 15,18" fill="#F4EEDB"/><polygon points="40,10 45,18 35,18" fill="#F4EEDB"/><polygon points="60,10 65,18 55,18" fill="#F4EEDB"/><polygon points="80,10 85,18 75,18" fill="#F4EEDB"/><polygon points="100,10 105,18 95,18" fill="#F4EEDB"/></svg>`
  }
];

export const COLOR_PALETTE = [
  {
    id: "color-earth",
    name: "Geru Mud Earth",
    hex: "#8D4024",
    pantone: "Terracotta Earth",
    tradition: "Warli Primary Ground",
    naturalSource: "Ferruginous red clay gathered from riverbeds and forest tracts, dried and mixed with water and binding resin.",
    symbolism: "Mother Earth (Bhoomi), the protective maternal womb, and fertility of the soil.",
    targetElements: ".color-target-earth"
  },
  {
    id: "color-white",
    name: "Chuna / Rice Flour White",
    hex: "#F4EEDB",
    pantone: "Natural Ivory",
    tradition: "Warli Visual Mark",
    naturalSource: "Finely ground white rice paste mixed with water and natural acacia tree gum (babul gond).",
    symbolism: "Purity, light, lunar illumination, innocence, and the ephemeral breath of life.",
    targetElements: ".color-target-white"
  },
  {
    id: "color-indigo",
    name: "Neel Deep Indigo",
    hex: "#1B2E4B",
    pantone: "Deep Indigo",
    tradition: "Kalamkari Classic Dye",
    naturalSource: "Leaves of the Indigofera tinctoria plant fermented in aerated tanks to precipitate dark blue indigotin cakes.",
    symbolism: "The infinite cosmos, rainclouds, divine transcendence, and spiritual mystery.",
    targetElements: ".color-target-indigo"
  },
  {
    id: "color-red",
    name: "Manjishtha Deep Red",
    hex: "#781E1E",
    pantone: "Madder Crimson",
    tradition: "Kalamkari Classic Dye",
    naturalSource: "Roots of Rubia cordifolia (Indian madder) boiled with alum mordants to bond firmly with cotton fibers.",
    symbolism: "Vital blood, energy (Shakti), marital celebration, passion, and auspicious ceremonies.",
    targetElements: ".color-target-red"
  },
  {
    id: "color-ochre",
    name: "Haldi & Harda Ochre",
    hex: "#C98A2C",
    pantone: "Warm Mustard Gold",
    tradition: "Kalamkari & Warli Accent",
    naturalSource: "Powdered turmeric rhizomes and myrobalan (terminalia chebula) fruit rind extracts.",
    symbolism: "Solar radiance, prosperity, sacred auspiciousness, harvest bounty, and inner wisdom.",
    targetElements: ".color-target-ochre"
  },
  {
    id: "color-green",
    name: "Vanaspati Earth Green",
    hex: "#3B5336",
    pantone: "Forest Moss",
    tradition: "Kalamkari Foliage",
    naturalSource: "Over-dyeing of turmeric yellow cotton with light indigo wash, tempered with pomegranate rind tannin.",
    symbolism: "Lush vegetation, sacred groves, ecological abundance, and eternal rebirth.",
    targetElements: ".color-target-green"
  },
  {
    id: "color-terracotta",
    name: "Matti Terracotta",
    hex: "#B84323",
    pantone: "Burnt Ochre",
    tradition: "Pan-Indian Heritage",
    naturalSource: "Sun-baked kiln terracotta slip and red hematite powder.",
    symbolism: "Craftsmanship, hearth, vernacular pottery, and the grounded dignity of Indian rural life.",
    targetElements: ".color-target-terracotta"
  }
];

export const DESIGN_TIMELINE = [
  {
    stage: "01",
    title: "Curatorial & Ethnographic Research",
    duration: "Phase 1: Foundation",
    summary: "Rigorous study of primary historical records and museum holdings from Maharashtra (Warli ritual wall murals) and Andhra Pradesh (Srikalahasti/Machilipatnam temple textiles).",
    details: "Identified cultural contexts, taboos, and material techniques. Established the imperative rule: acknowledge this as an academic contemporary synthesis rather than an ancient historical hybrid."
  },
  {
    stage: "02",
    title: "Visual Grammar Analysis",
    duration: "Phase 2: Formal Breakdown",
    summary: "Deconstructed both traditions into their fundamental formal axioms: geometry, linework, hierarchy, and spatial orientation.",
    details: "Mapped Warli's reductionist binary triangle human formula against Kalamkari's hyper-ornate botanical arabesques to identify shared formal and semantic intersections."
  },
  {
    stage: "03",
    title: "Motif Selection & Extraction",
    duration: "Phase 3: Iconography",
    summary: "Carefully curated 7 core motifs that carry unmistakable stylistic identity without competing for pictorial supremacy.",
    details: "Selected the Warli triangular human figure, Tarpa dance spiral, and sacred tree; paired with Kalamkari's multi-petaled lotus, meandering vine, sacred peacock, and architectural border."
  },
  {
    stage: "04",
    title: "Compositional Strategy & Synthesis",
    duration: "Phase 4: Structural Layout",
    summary: "Devised a unified narrative framework under the concept 'Community in Harmony with Nature' to prevent a simplistic split-screen composition.",
    details: "Placed Warli's energetic community rhythm at the core while weaving Kalamkari's organic flora and structural border system around and through it."
  },
  {
    stage: "05",
    title: "Color Chemistry Harmonization",
    duration: "Phase 5: Palette Selection",
    summary: "Transposed natural mineral and vegetable dye characteristics into digital color space (RGB/HEX) while avoiding garish synthetic saturation.",
    details: "Calibrated the contrast between crisp rice-paste white and deep indigo, madder red, and warm raw geru earth tones for museum-grade balance."
  },
  {
    stage: "06",
    title: "Digital Vector Engineering (SVG)",
    duration: "Phase 6: Layer Construction",
    summary: "Hand-crafted scalable vector elements organized into 6 semantic interactive groups for seamless layer isolation and animation.",
    details: "Engineered scalable vector paths ensuring crisp clarity at any viewport resolution while allowing real-time CSS filtering, stroke morphing, and interactive highlighting."
  },
  {
    stage: "07",
    title: "Interactive Studio Implementation",
    duration: "Phase 7: Studio Delivery",
    summary: "Built the responsive educational studio interface with step-by-step construction, morphing slider, color spotlights, and lightbox inspection.",
    details: "Integrated Web Audio Indian Tanpura ambiance, WCAG 2.1 AA accessibility, keyboard navigation, and seamless linking across the three project activities."
  }
];

export const ACADEMIC_TAKEAWAY = {
  headline: "Contemporary Digital Fusion: Academic Takeaway",
  courseOutcome: "CLA-I — CO2: Synthesizing Traditional Visual Systems",
  points: [
    {
      title: "Artistic Analysis",
      text: "Demonstrates that contrasting aesthetic paradigms — geometric tribal minimalism versus baroque textile ornamentation — can enrich each other when governed by deliberate compositional harmony."
    },
    {
      title: "Cultural Respect & Accuracy",
      text: "Maintains clear transparency: Warli and Kalamkari are respected as independent, living heritage traditions. The fusion is framed explicitly as an educational, modern artistic experiment."
    },
    {
      title: "Visual Experimentation",
      text: "Shows how digital vector tools allow the contemporary creator to deconstruct traditional visual languages into interactive layers of knowledge, rhythm, and form."
    },
    {
      title: "Pedagogical Impact",
      text: "Transforms a passive art viewing experience into an interactive laboratory where students and visitors dissect how artworks are philosophically conceived and physically constructed."
    }
  ]
};
