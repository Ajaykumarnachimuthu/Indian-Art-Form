/**
 * INDIA — A LIVING CANVAS: THROUGH TIME
 * Curated Dataset of 24 Definitive Indian Art Milestones
 * Spanning Prehistoric, Ancient, Classical, Medieval, Early Modern, Modern, and Contemporary Eras.
 * 
 * Each entry adheres to strict museum-grade standards:
 * - Authentic historical photography / museum artifact imagery stored locally in assets/images/
 * - Authoritative sources and licensing credits
 * - Rich historical context and visual characteristics
 * - Structured Art DNA parameters
 */

export const ART_DATA = [
  {
    id: "bhimbetka-rock-art",
    title: "Bhimbetka Cave Paintings",
    periodId: "ancient",
    periodLabel: "Prehistoric / Upper Paleolithic to Mesolithic",
    yearLabel: "c. 10,000 – 8,000 BCE",
    numericYear: -9000,
    region: "Central",
    state: "Madhya Pradesh (Vindhyan Range)",
    artForm: "Painting",
    tradition: "Rock Art & Prehistoric Petroglyphs",
    importance: "grand",
    image: "assets/images/bhimbetka-rock-art.jpg",
    thumb: "assets/images/bhimbetka-rock-art.jpg",
    shortDescription: "Vibrant prehistoric rock shelter paintings depicting early human life, collective hunts, animal migrations, and ceremonial rituals.",
    historicalContext: "Discovered by archaeologist V.S. Wakankar in 1957, the Bhimbetka rock shelters contain over 750 sites nestled amidst quartzite cliffs. They provide an unbroken sequence of human culture from the Lower Paleolithic to the medieval era, showing how early hunter-gatherer communities conceptualized their sacred and natural ecology.",
    significance: "One of the oldest surviving records of human visual expression on the Indian subcontinent, designated a UNESCO World Heritage Site in 2003.",
    characteristics: [
      "Dynamic linear figures rendered with energetic stick-figure dynamism",
      "Layered superimposed styles indicating thousands of years of continuous artistic tradition",
      "Depictions of bisons, tigers, elephants, rhinoceroses, and communal dances",
      "Intimate portrayal of mother-child bonds and ritual gatherings"
    ],
    medium: "Mineral pigments (haematite red, manganese oxide, plant resins, animal fats)",
    dna: {
      region: "Madhya Pradesh (Central India)",
      material: "Natural mineral ochre & manganese on quartzite rock",
      technique: "Fingertip and fibrous plant quill application",
      subject: "Communal hunting, animal reverence, ritual dance",
      tradition: "Mesolithic Rock Shelter Art",
      period: "Prehistoric (c. 10,000 BCE)"
    },
    didYouKnow: "The red pigment (geru) utilized haematite ore that bonded chemically with the sandstone surface, allowing paintings to survive exposed to rainfall and monsoons for over 10,000 years.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Centre / Photo: Wikimedia Commons"
  },
  {
    id: "dancing-girl-mohenjodaro",
    title: "The Dancing Girl of Mohenjo-daro",
    periodId: "ancient",
    periodLabel: "Indus Valley / Harappan Civilization",
    yearLabel: "c. 2500 BCE",
    numericYear: -2500,
    region: "North",
    state: "Indus Valley (Mohenjo-daro, Sindh)",
    artForm: "Sculpture",
    tradition: "Harappan Metallurgy & Lost-Wax Casting",
    importance: "grand",
    image: "assets/images/dancing-girl-mohenjodaro.jpg",
    thumb: "assets/images/dancing-girl-mohenjodaro.jpg",
    shortDescription: "A world-renowned bronze statuette embodying extraordinary kinetic confidence, metallurgical sophistication, and naturalistic poise.",
    historicalContext: "Excavated in 1926 by Ernest Mackay at Mohenjo-daro, this 10.5 cm figurine startled 20th-century archaeologists who had not anticipated such advanced Hellenic-level anatomical freedom in a 4,500-year-old Bronze Age culture.",
    significance: "Proves that Indus sculptors had perfected the cire-perdue (lost-wax) metallurgy casting process millennia before it became standard in western antiquity.",
    characteristics: [
      "Subtle contrapposto-like stance: right hand on hip, bent left knee",
      "Left arm stacked with 24 bangles, possibly carved shell, bone, or terracotta",
      "Distinctive cowrie shell necklace and heavy hair swept into a rolled chignon",
      "Expressive half-closed elongated eyes reflecting confidence and youthful dignity"
    ],
    medium: "Cast bronze (Copper-tin alloy)",
    dna: {
      region: "Indus Valley (North-Western Subcontinent)",
      material: "Bronze (lost-wax investment casting)",
      technique: "Cire-perdue (lost-wax) casting and chisel chasing",
      subject: "Poised youthful female performer / ritual dancer",
      tradition: "Mature Harappan Bronze Age",
      period: "Bronze Age (c. 2500 BCE)"
    },
    didYouKnow: "British archaeologist Sir Mortimer Wheeler famously wrote: 'There is her little Baluchi-style face with all insolent defiance... She is about fifteen years old I should think, not more, but she stands there with her hands on her hips and feet a little forward.'",
    sourceCredit: "National Museum, New Delhi (Accession No. 5721/145) / Photo: Wikimedia Commons"
  },
  {
    id: "priest-king-mohenjodaro",
    title: "The Priest-King of Mohenjo-daro",
    periodId: "ancient",
    periodLabel: "Indus Valley / Harappan Civilization",
    yearLabel: "c. 2500 BCE",
    numericYear: -2450,
    region: "North",
    state: "Indus Valley (Mohenjo-daro, Sindh)",
    artForm: "Sculpture",
    tradition: "Harappan Stone Glyptic & Steatite Carving",
    importance: "refined",
    image: "assets/images/priest-king-mohenjodaro.jpg",
    thumb: "assets/images/priest-king-mohenjodaro.jpg",
    shortDescription: "A solemn, finely carved steatite bust adorned in a trefoil-patterned shawl, illustrating formal Harappan civic or spiritual iconography.",
    historicalContext: "Unearthed at the DK-B area of Mohenjo-daro in 1927, this figure stands as the defining portrait of elite authority in the Indus urban grid civilization, which lacked militaristic monuments like pyramids or conquest stelae.",
    significance: "Demonstrates high-status textile production, steatite firing techniques, and cross-cultural trade ties connecting the Indus to Mesopotamian Sumer.",
    characteristics: [
      "Fillet headband with a circular central jewel across a shaved brow",
      "Shawl draped over the left shoulder leaving the right shoulder bare (an ascetic custom)",
      "Carved trefoil motifs that originally held vibrant red pigment paste",
      "Trimmed, striated beard framing composed and serene contemplative features"
    ],
    medium: "Low-fired steatite (soapstone) with traces of red paste",
    dna: {
      region: "Indus Valley",
      material: "Steatite (fired soft talc stone)",
      technique: "Precision micro-chisel relief and drill-inlay work",
      subject: "Spiritual leader, high priest, or civic magistrate",
      tradition: "Harappan Formal Portraiture",
      period: "Mature Harappan (c. 2500 BCE)"
    },
    didYouKnow: "The trefoil motif found on the shawl is identical to sacred astronomic symbols discovered on royal statues in contemporary Sumerian Ur and Babylonian Mesopotamia.",
    sourceCredit: "National Museum of Pakistan, Karachi / Excavation records: Archaeological Survey of India"
  },
  {
    id: "lion-capital-sarnath",
    title: "The Ashoka Lion Capital at Sarnath",
    periodId: "ancient",
    periodLabel: "Mauryan Empire",
    yearLabel: "c. 250 BCE",
    numericYear: -250,
    region: "East",
    state: "Sarnath, Uttar Pradesh",
    artForm: "Sculpture",
    tradition: "Mauryan Monumental Monolith & Mirror Polish",
    importance: "grand",
    image: "assets/images/lion-capital-sarnath.jpg",
    thumb: "assets/images/lion-capital-sarnath.jpg",
    shortDescription: "The monumental polished sandstone capital featuring four back-to-back Asiatic lions, adopted as the official State Emblem of India.",
    historicalContext: "Erected by Emperor Ashoka the Great at the Deer Park in Sarnath where the Gautama Buddha delivered his first sermon (the Dhammacakkappavattana Sutta), turning the wheel of cosmic righteousness.",
    significance: "The supreme hallmark of Mauryan monumental art, celebrated globally for its glass-like lustrous polish (Chunar sandstone technique) and ethical statecraft symbolism.",
    characteristics: [
      "Four regal Asiatic lions facing the cardinal directions, symbolizing universal moral law",
      "Circular abacus featuring four animals: lion, horse, bull, and elephant, separated by 24-spoked Dhamma Chakras",
      "Inverted lotus bell base representing spiritual elevation through mundane waters",
      "Legendary 'Mauryan polish' that preserves a glossy porcelain sheen across millennia"
    ],
    medium: "Single block of polished Chunar sandstone",
    dna: {
      region: "Gangetic Plains / Uttar Pradesh",
      material: "Chunar buff sandstone",
      technique: "Monolithic chiseling & fine-abrasive high-gloss polishing",
      subject: "Dharma Chakra, Buddhist moral sovereignty, imperial statecraft",
      tradition: "Imperial Mauryan Pillar Architecture",
      period: "Mauryan Empire (c. 3rd c. BCE)"
    },
    didYouKnow: "The 24-spoked wheel depicted on the abacus of this capital directly forms the sacred Ashok Chakra at the center of the modern Republic of India’s National Flag.",
    sourceCredit: "Sarnath Archaeological Museum (ASI) / Photo: Wikimedia Commons"
  },
  {
    id: "sanchi-great-stupa",
    title: "The Great Stupa at Sanchi",
    periodId: "ancient",
    periodLabel: "Shunga & Satavahana Periods",
    yearLabel: "c. 2nd c. BCE – 1st c. CE",
    numericYear: -100,
    region: "Central",
    state: "Raisen District, Madhya Pradesh",
    artForm: "Architecture",
    tradition: "Early Buddhist Architecture & Narrative Torana Carving",
    importance: "grand",
    image: "assets/images/sanchi-great-stupa.jpg",
    thumb: "assets/images/sanchi-great-stupa.jpg",
    shortDescription: "The crown jewel of Buddhist commemorative architecture, featuring hemispherical stone domes and four exquisitely carved ceremonial gateways (Toranas).",
    historicalContext: "Originally commissioned by Emperor Ashoka over the relics of Buddha, the stupa was enlarged under the Shungas and gifted four monumental carved stone Toranas under the Satavahanas by guilds of ivory carvers from nearby Vidisha.",
    significance: "Presents the earliest panoramic visual encyclopedia of the Jataka tales (Buddha’s past lives) in aniconic Buddhist symbolism (empty throne, footprints, parasol, Bodhi tree).",
    characteristics: [
      "Solid hemispherical masonry dome (anda) crowned by a stone square railing (harmika) and triple parasol (chhatra)",
      "Four monumental gateways (Toranas) meticulously carved with narrative continuous relief",
      "Celebrated bracket figures of Yakshis (tree nymphs) exuding organic sensuality and abundance",
      "Stone circumambulatory pathways (pradakshina patha) for clockwise ritual meditation"
    ],
    medium: "Local sandstone masonry with deep relief narrative carving",
    dna: {
      region: "Madhya Pradesh (Central India)",
      material: "Local sandstone blocks",
      technique: "Dry-stone ashlar masonry & continuous narrative bas-relief",
      subject: "Jataka tales, relics of Buddha, civic processions, Yakshis",
      tradition: "Early Buddhist Stupa Monument",
      period: "Shunga-Satavahana (c. 2nd BCE – 1st CE)"
    },
    didYouKnow: "Inscriptions carved on the gateway pillars reveal that ordinary citizen guilds—including the local guild of ivory carvers—sponsored and carved sections of the stone, explaining the astonishing jewelry-like micro-detail.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "gandhara-standing-buddha",
    title: "Standing Buddha of Gandhara",
    periodId: "ancient",
    periodLabel: "Kushan Empire / Greco-Buddhist Art",
    yearLabel: "c. 1st – 2nd c. CE",
    numericYear: 150,
    region: "North",
    state: "Gandhara (Peshawar Valley / Taxila)",
    artForm: "Sculpture",
    tradition: "Greco-Buddhist Hybrid Classical Sculpture",
    importance: "refined",
    image: "assets/images/gandhara-standing-buddha.jpg",
    thumb: "assets/images/gandhara-standing-buddha.jpg",
    shortDescription: "A breathtaking synthesis of Greek Hellenistic sculptural realism and Indian Buddhist spiritual transcendence, carved in dark gray schist.",
    historicalContext: "Under the cosmopolitan Kushan monarchs like King Kanishka I along the Silk Road, Hellenistic sculptors descended from Alexander’s Bactrian kingdoms blended Mediterranean drapery techniques with Indic spiritual concepts to pioneer the first anthropomorphic representations of the Buddha.",
    significance: "Established the universal visual canon of Buddhist figurative sculpture that traveled across the Silk Road into Central Asia, China, Korea, and Japan.",
    characteristics: [
      "Realistic, heavy Roman-style toga drapery (sanghati) hanging in natural cascading folds",
      "Apollo-like youthful countenance with wavy chignon hair gathered into the cranial ushnisha",
      "Urna (spiritual third eye dot) on forehead and elongated meditative earlobes",
      "Right hand raised in the reassuring Abhaya Mudra (gesture of fearlessness)"
    ],
    medium: "Dark gray metamorphic quartzose schist stone",
    dna: {
      region: "Gandhara (North-Western Frontier)",
      material: "Gray crystalline schist stone",
      technique: "Deep undercut relief and Hellenistic anatomical modeling",
      subject: "Gautama Buddha in serene philosophical transcendence",
      tradition: "Greco-Buddhist (Gandharan) School",
      period: "Kushan Empire (c. 1st–2nd c. CE)"
    },
    didYouKnow: "Before the Gandhara and Mathura schools under the Kushans, the Buddha was never depicted as a human being for over 400 years, represented only through aniconic symbols like empty footprints and parasols.",
    sourceCredit: "The Metropolitan Museum of Art / Ethnological Museum Berlin / Photo: Wikimedia Commons"
  },
  {
    id: "mathura-kushan-sculpture",
    title: "Seated Buddha of the Mathura School",
    periodId: "ancient",
    periodLabel: "Kushan Empire / Mathura Tradition",
    yearLabel: "c. 2nd c. CE",
    numericYear: 180,
    region: "North",
    state: "Mathura, Uttar Pradesh",
    artForm: "Sculpture",
    tradition: "Indigenous Mathura Red Sandstone Tradition",
    importance: "refined",
    image: "assets/images/mathura-kushan-sculpture.jpg",
    thumb: "assets/images/mathura-kushan-sculpture.jpg",
    shortDescription: "Dynamic, robust, indigenously rooted sculpture carved from distinctive red-spotted Sikri sandstone, characterized by inner spiritual vitality (prana).",
    historicalContext: "While Gandhara adopted Hellenistic aesthetic norms, contemporary sculptors in Mathura developed a purely indigenous Indic idiom rooted in ancient Yaksha figures, characterized by broad shoulders, radiant warmth, and tactile fleshiness.",
    significance: "Mathura served as the greatest sculptural workshop of Northern India, producing masterworks for Buddhist, Jain, and early Hindu temple traditions alike.",
    characteristics: [
      "Carved from iconic mottled red sandstone quarried near Rupbas / Sikri",
      "Swelling thoracic volume indicating the yogic control of sacred breath (prana)",
      "Translucent muslin garment clinging tightly to the body with rippled shoulder folds",
      "Decorated halo (prabhamandala) carved with scallop borders and sacred foliage"
    ],
    medium: "Mottled red Sikri sandstone",
    dna: {
      region: "Mathura, Uttar Pradesh (North India)",
      material: "Red-spotted sandstone",
      technique: "Volumetric fleshy modeling and Yaksha-derived iconography",
      subject: "Seated Shakyamuni Buddha with attendants",
      tradition: "Mathura Kushan School",
      period: "Kushan Period (c. 2nd c. CE)"
    },
    didYouKnow: "The Mathura school was so prolific that its artists exported ready-carved statues across hundreds of kilometers along the Uttarapatha trade corridor as far as Sarnath, Taxila, and Bengal.",
    sourceCredit: "Government Museum, Mathura / Photo: Archaeological Survey of India"
  },
  {
    id: "sarnath-gupta-buddha",
    title: "The Sarnath Teaching Buddha",
    periodId: "classical",
    periodLabel: "Gupta Empire (Classical Golden Age)",
    yearLabel: "c. 5th c. CE",
    numericYear: 475,
    region: "East",
    state: "Sarnath, Uttar Pradesh",
    artForm: "Sculpture",
    tradition: "Classical Gupta Idealism",
    importance: "grand",
    image: "assets/images/sarnath-gupta-buddha.jpg",
    thumb: "assets/images/sarnath-gupta-buddha.jpg",
    shortDescription: "Universally acknowledged as the pinnacle of classical Indian sculpture, representing total balance, spiritual equanimity, and refined sensuous calm.",
    historicalContext: "Created during the cultural zenith of the Gupta Empire (the 'Golden Age' of Indian classical civilization), this statue captures the exact moment the Buddha sets in motion the Wheel of Law in the deer forest of Sarnath.",
    significance: "Represents the absolute synthesis of physical beauty and meditative transcendence, dispensing with drapery folds to focus on the pure luminous geometry of the human form.",
    characteristics: [
      "Hands held in the intricate Dharmachakra Pravartana Mudra (turning the Wheel of Truth)",
      "Smooth, diaphanous drapery entirely devoid of folds, revealing the supple form beneath",
      "Elaborately carved floral halo with celestial kinnaras floating in heavenly adoration",
      "Pedestal carving showing the five original disciples and two recumbent deer flanking the wheel"
    ],
    medium: "Chunar buff sandstone",
    dna: {
      region: "Sarnath / Uttar Pradesh",
      material: "Fine-grain Chunar sandstone",
      technique: "Refined geometric proportions and subtle surface polishing",
      subject: "First Sermon of the Buddha / Turning the Wheel of Law",
      tradition: "Gupta Classical School of Sarnath",
      period: "Gupta Period (c. 5th c. CE)"
    },
    didYouKnow: "Art historian Stella Kramrisch observed that Gupta sculpture succeeded in turning stone into an envelope of liquid light, giving the impression that the figure is filled with inner divine breath rather than muscular weight.",
    sourceCredit: "Sarnath Archaeological Museum, Uttar Pradesh / Photo: Wikimedia Commons"
  },
  {
    id: "ajanta-cave-murals",
    title: "Bodhisattva Padmapani at Ajanta",
    periodId: "classical",
    periodLabel: "Vakataka Dynasty / Classical Age",
    yearLabel: "c. 5th c. CE (Cave 1)",
    numericYear: 480,
    region: "West",
    state: "Aurangabad, Maharashtra",
    artForm: "Painting",
    tradition: "Classical Indian Tempera Fresco-Secco",
    importance: "grand",
    image: "assets/images/ajanta-cave-murals.jpg",
    thumb: "assets/images/ajanta-cave-murals.jpg",
    shortDescription: "A world-renowned masterpiece of sacred painting, depicting the Bodhisattva of Infinite Compassion holding a blue lotus in profound inward meditation.",
    historicalContext: "Painted in Cave 1 of the horseshoe-shaped basalt gorge of Ajanta under the royal patronage of the Vakataka King Harishena. The artist-monks worked in subterranean halls illuminated only by oil lamps and mirrors reflecting sunlight.",
    significance: "The supreme touchstone of ancient Asian mural traditions, establishing canons of expressive shading, lyrical contours, and soulful emotional psychology that inspired art across the entire Buddhist world.",
    characteristics: [
      "Elegant tribhanga (triple-bend) posture imparting gentle, compassionate movement",
      "Half-closed, lotus petal-shaped eyes gazing inward with infinite sorrow and gentleness",
      "Delicate hand holding a sacred blue nilotpala lotus with supreme naturalistic grace",
      "Layered shading along the contours creating subtle three-dimensional sculptural volume"
    ],
    medium: "Tempera on clay, cow dung, lime plaster, and natural vegetable/mineral pigments",
    dna: {
      region: "Sahyadri Mountains, Maharashtra (Western India)",
      material: "Natural lapis lazuli, ochre, lime on mud-plaster ground",
      technique: "Fresco-secco with calligraphic contour shading",
      subject: "Bodhisattva Avalokiteshvara (Padmapani) holding blue lotus",
      tradition: "Vakataka Classical Mural Tradition",
      period: "Classical Era (c. late 5th c. CE)"
    },
    didYouKnow: "The vibrant blue pigments used in Padmapani’s headdress and lotus were derived from pure lapis lazuli imported over 2,000 miles from the remote mines of Badakhshan in modern Afghanistan.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "descent-of-the-ganges",
    title: "Descent of the Ganges (Arjuna’s Penance)",
    periodId: "classical",
    periodLabel: "Pallava Dynasty",
    yearLabel: "c. 7th c. CE",
    numericYear: 650,
    region: "South",
    state: "Mamallapuram (Mahabalipuram), Tamil Nadu",
    artForm: "Sculpture",
    tradition: "Pallava Rock-Cut Monolithic Monumental Relief",
    importance: "grand",
    image: "assets/images/descent-of-the-ganges.jpg",
    thumb: "assets/images/descent-of-the-ganges.jpg",
    shortDescription: "A colossal open-air bas-relief carved across two giant pink granite boulders, portraying the cosmic descent of the sacred river Ganges to Earth.",
    historicalContext: "Commissioned by the Pallava King Narasimhavarman I (Mamalla) on the Coromandel coast. The natural vertical cleft between two massive boulders was transformed into a theatrical hydraulic spectacle representing the river descending from the heavens.",
    significance: "The largest and most ambitious open-air relief carving in the world, renowned for its lively inclusion of both divine beings and realistic animal studies.",
    characteristics: [
      "Natural stone cleft converted into the cascading riverbed filled with Nagas and Naginis",
      "Life-size family of elephants carved with playful infant calves under their protection",
      "Over 150 exquisitely sculpted figures: gods, celestial nymphs, hermits, monkeys, and lions",
      "Humorous details such as an ascetic cat standing on one leg surrounded by deceived mice"
    ],
    medium: "Monolithic natural pink granite cliffs",
    dna: {
      region: "Coromandel Coast, Tamil Nadu (South India)",
      material: "Native metamorphic granite outcrop",
      technique: "Direct open-air high and low-relief quarry carving",
      subject: "Myth of Bhagiratha bringing the river Ganga from heaven",
      tradition: "Pallava Dravidian Monumental Sculptural Style",
      period: "Early Medieval (c. 7th c. CE)"
    },
    didYouKnow: "During monsoon downpours, rainwater channeled down the cleft between the boulders into a cistern below, creating a real rushing waterfall that animated the stone serpent deities.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "kailasa-temple-ellora",
    title: "Kailasa Temple, Ellora (Cave 16)",
    periodId: "medieval",
    periodLabel: "Rashtrakuta Dynasty",
    yearLabel: "c. 760 – 800 CE",
    numericYear: 780,
    region: "West",
    state: "Aurangabad, Maharashtra",
    artForm: "Architecture",
    tradition: "Monolithic Rock-Cut Architecture (Top-Down Excavation)",
    importance: "grand",
    image: "assets/images/kailasa-temple-ellora.jpg",
    thumb: "assets/images/kailasa-temple-ellora.jpg",
    shortDescription: "The world’s grandest monolithic architectural achievement: an entire multi-storied temple complex carved top-down out of a single basalt mountain cliff.",
    historicalContext: "Commissioned primarily under the Rashtrakuta monarch Krishna I. Unlike conventional buildings constructed bottom-up with mortar and blocks, Kailasa was sculpted top-down by carving 200,000 tonnes of solid rock out of the Charanandri hills.",
    significance: "An unparalleled architectural feat of human engineering, conceived as a life-size terrestrial replica of Mount Kailasa, the Himalayan abode of Lord Shiva.",
    characteristics: [
      "Carved top-down with absolute zero tolerance for structural error or alteration",
      "Monumental plinth supported by life-size stone elephants and mythical lions",
      "Breathtaking two-story sculptural reliefs depicting Ravana shaking Mount Kailasa",
      "Free-standing 50-foot victory columns (dhvajastambhas) and multi-level mandapas"
    ],
    medium: "Living basalt volcanic trap rock cliff",
    dna: {
      region: "Deccan Plateau, Maharashtra (Western India)",
      material: "Basalt volcanic mountain face",
      technique: "Monolithic top-down quarry excavation & high-relief sculpting",
      subject: "Mount Kailash, Lord Shiva’s cosmic mountain dwelling",
      tradition: "Rashtrakuta Rock-Cut Dravidian Synthesis",
      period: "Early Medieval (c. 8th c. CE)"
    },
    didYouKnow: "An inscription from the period records the stunned architect himself exclaiming in wonder after completing the monument: 'Oh, how was it that I built this, without an error?!'",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "chola-nataraja-bronze",
    title: "Chola Bronze: Shiva as Nataraja",
    periodId: "medieval",
    periodLabel: "Chola Dynasty",
    yearLabel: "c. 10th – 11th c. CE",
    numericYear: 1000,
    region: "South",
    state: "Thanjavur, Tamil Nadu",
    artForm: "Sculpture",
    tradition: "Chola Lost-Wax Bronze Casting (Madhuchehishtavidhana)",
    importance: "grand",
    image: "assets/images/chola-nataraja-bronze.jpg",
    thumb: "assets/images/chola-nataraja-bronze.jpg",
    shortDescription: "The supreme philosophical and visual masterpiece of world sculpture: Lord Shiva performing the cosmic Anandatandava dance of creation, preservation, and dissolution.",
    historicalContext: "Perfected under the patronage of Chola imperial royalty—notably Queen Sembiyan Mahadevi and Emperor Rajaraja Chola I—in the temple workshops of the Kaveri delta.",
    significance: "Celebrated worldwide (by thinkers from Auguste Rodin to Carl Sagan) as the ultimate artistic visual metaphor for the dynamic, cyclic rhythm of modern quantum physics and cosmic cycles.",
    characteristics: [
      "Circular halo of continuous flames (Prabhamandala) symbolizing the boundless cosmic universe",
      "Upper right hand holding the damaru (hourglass drum) producing the primordial sound of creation (Nada)",
      "Upper left hand bearing the fire of dissolution (Agni); lower right in Abhaya Mudra (protection)",
      "Right foot trampling the dwarf demon Apasmara, signifying the destruction of human ignorance"
    ],
    medium: "Panchaloha bronze alloy (Copper, zinc, lead, gold, silver)",
    dna: {
      region: "Kaveri Basin, Tamil Nadu (South India)",
      material: "Panchaloha (five-metal sacred copper bronze alloy)",
      technique: "Lost-wax solid casting with manual hand-burnishing",
      subject: "Cosmic dance of Shiva (Ananda Tandava)",
      tradition: "Imperial Chola Sacred Bronze Tradition",
      period: "Medieval Chola Empire (c. 10th–11th c. CE)"
    },
    didYouKnow: "A two-meter tall bronze statue of Chola Nataraja stands prominently at CERN (European Organization for Nuclear Research) in Geneva, presented by the Government of India to honor the cosmic dance of subatomic particles.",
    sourceCredit: "Government Museum Chennai & LACMA Collections / Photo: Wikimedia Commons"
  },
  {
    id: "khajuraho-kandariya-mahadeva",
    title: "Kandariya Mahadeva Temple, Khajuraho",
    periodId: "medieval",
    periodLabel: "Chandela Dynasty",
    yearLabel: "c. 1025 – 1050 CE",
    numericYear: 1030,
    region: "Central",
    state: "Chhatarpur, Madhya Pradesh",
    artForm: "Architecture",
    tradition: "Nagara Sandhara Temple Architecture & Figurative Sculpture",
    importance: "grand",
    image: "assets/images/khajuraho-kandariya-mahadeva.jpg",
    thumb: "assets/images/khajuraho-kandariya-mahadeva.jpg",
    shortDescription: "The architectural zenith of the Northern Nagara temple style, famed for its soaring mountain-like shikhara and over 800 celestial figures carved into golden sandstone.",
    historicalContext: "Built by King Vidyadhara of the Chandela dynasty to celebrate military victory and divine cosmic order. The temple exterior forms a symbolic mountain range rising in crescendo to the 31-meter central tower.",
    significance: "Renowned for its unparalleled mastery of figurative sculpture, portraying gods, goddesses, celestial maidens (Surasundaris), and sensuous loving couples (mithunas) in harmonious cosmic balance.",
    characteristics: [
      "Soaring multi-turreted shikhara built of 84 miniature replica spires (urushringas)",
      "Continuous sculptured bands encircling the perimeter with extraordinary anatomical fluidity",
      "Surasundaris depicted applying makeup, removing thorns, braiding hair, and playing instruments",
      "Intricate interlocking dry-stone construction without a drop of mortar"
    ],
    medium: "Buff and honey-toned sandstone",
    dna: {
      region: "Bundelkhand, Madhya Pradesh (Central India)",
      material: "Fine-grained yellow/buff sandstone",
      technique: "Mortarless tongue-and-groove masonry and deep undercut sculptural friezes",
      subject: "Cosmic Mountain Meru, celestial maidens, divinity, Mithuna",
      tradition: "Chandela Nagara Style",
      period: "High Medieval (c. 11th c. CE)"
    },
    didYouKnow: "Despite popular misconception, erotic sculptures comprise less than 10% of the temple’s artwork; they served esoteric Tantric theological purposes as protective auspicious symbols at wall junctions.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "konark-sun-temple",
    title: "The Sun Temple of Konark",
    periodId: "medieval",
    periodLabel: "Eastern Ganga Dynasty",
    yearLabel: "c. 1250 CE",
    numericYear: 1250,
    region: "East",
    state: "Konark, Puri District, Odisha",
    artForm: "Architecture",
    tradition: "Kalinga Style Monumental Chariot Architecture",
    importance: "grand",
    image: "assets/images/konark-sun-temple.jpg",
    thumb: "assets/images/konark-sun-temple.jpg",
    shortDescription: "Conceived as a colossal celestial stone chariot with 24 intricately carved wheels drawn by seven galloping horses for Surya, the Sun God.",
    historicalContext: "Built by King Narasimhadeva I of the Eastern Ganga dynasty along the Bay of Bengal shore. Known to early European sailors as the 'Black Pagoda' because its dark iron-rich khondalite stone served as a navigational landmark.",
    significance: "The grandest monument of Kalinga architectural style, celebrated for its astronomical precision, monumental scale, and peerless stone craftsmanship.",
    characteristics: [
      "Twenty-four stone wheels, each 10 feet in diameter, functioning as accurate astronomical sundials",
      "Seven colossal rearing horses symbolizing the seven days of the week and rays of light",
      "Monumental plinth teeming with narrative bands of war elephants, royal processions, and musicians",
      "Massive chlorite statues of the Sun God standing on his celestial chariot"
    ],
    medium: "Khondalite and green chlorite stone with iron dowels",
    dna: {
      region: "Odisha Coast (East India)",
      material: "Khondalite stone & chlorite panels",
      technique: "Massive scale Kalinga masonry with iron dowel reinforcement",
      subject: "Surya the Sun God traveling across cosmic space",
      tradition: "Kalinga School of Architecture",
      period: "Medieval (c. 13th c. CE)"
    },
    didYouKnow: "The spokes of the 24 Konark wheels act as sophisticated sundials; by observing the shadow cast by the hub on the carved spoke beads, one can determine the exact time of day to within minutes.",
    sourceCredit: "Archaeological Survey of India / UNESCO World Heritage Site / Photo: Wikimedia Commons"
  },
  {
    id: "mughal-miniature-painting",
    title: "Mughal Imperial Painting: The Akbarnama",
    periodId: "early-modern",
    periodLabel: "Mughal Empire (Akbar & Jahangir Ateliers)",
    yearLabel: "c. 1590 – 1605 CE",
    numericYear: 1600,
    region: "North",
    state: "Fatehpur Sikri & Agra, Uttar Pradesh",
    artForm: "Miniature",
    tradition: "Mughal Court Atelier Miniature Tradition",
    importance: "grand",
    image: "assets/images/mughal-miniature-painting.jpg",
    thumb: "assets/images/mughal-miniature-painting.jpg",
    shortDescription: "A glorious fusion of Persian linear delicacy, Indian color vibrancy, and European atmospheric perspective, produced in the imperial scriptorium (Kitabkhana).",
    historicalContext: "Emperor Akbar established a vast royal atelier combining Persian master painters like Mir Sayyid Ali and Abd al-Samad with talented Hindu artists such as Basawan and Daswanth to document state history, dynastic epics, and scientific manuscripts.",
    significance: "Redefined South Asian manuscript culture, shifting emphasis from mythical abstraction toward intense observation of realistic psychological portraiture, flora, and wildlife.",
    characteristics: [
      "Collaborative workshop method: Tarh (composition sketch), Amal (coloring), and Chihranami (portraiture)",
      "Astonishing micro-detail executed with single-hair squirrel fur brushes",
      "Vibrant lapis lazuli blues, malachite greens, cinnabar reds, and burnished gold leaf",
      "High bird's-eye perspective capturing dynamic crowd motion, royal hunts, and court ceremonies"
    ],
    medium: "Opaque watercolor and shell gold on burnished wasli rag paper",
    dna: {
      region: "Agra / Fatehpur Sikri / Delhi (North India)",
      material: "Handmade wasli paper, mineral pigments, 24K powdered gold",
      technique: "Multi-layered burnished gouache & squirrel-hair micro-brushwork",
      subject: "Imperial history, natural science, court ceremonial diplomacy",
      tradition: "Imperial Mughal Atelier",
      period: "Early Modern Mughal (c. late 16th c. CE)"
    },
    didYouKnow: "To achieve their mirror-smooth gleam, finished paintings were placed face down on smooth marble and rigorously burnished with an agate or jade stone on the reverse side.",
    sourceCredit: "Victoria and Albert Museum, London / Musée Guimet Paris / Photo: Wikimedia Commons"
  },
  {
    id: "deccan-painting-bidriware",
    title: "Deccani Miniature & Bidriware Craft",
    periodId: "early-modern",
    periodLabel: "Deccan Sultanates (Bijapur, Golconda, Bidar)",
    yearLabel: "c. 1600 – 1650 CE",
    numericYear: 1625,
    region: "South",
    state: "Karnataka & Telangana (Deccan Plateau)",
    artForm: "Mixed / Craft",
    tradition: "Deccani Sultanate Lyrical Aesthetics & Bidri Inlay",
    importance: "refined",
    image: "assets/images/deccan-painting-bidriware.jpg",
    thumb: "assets/images/deccan-painting-bidriware.jpg",
    shortDescription: "A uniquely poetic courtly aesthetic combining Persian, Ottoman, and South Indian artistic temperaments, renowned for shimmering Bidri silver-on-black alloy metalwork.",
    historicalContext: "Flourishing under the cultured Sultan Ibrahim Adil Shah II of Bijapur and the Qutb Shahis of Golconda, Deccani art prized dreamlike fantasy, elongated forms, and luxurious deep purples, golds, and turquoises over Mughal documentary realism.",
    significance: "Produced Bidriware, one of India's most celebrated metallurgical crafts where pure silver is inlaid into a blackened zinc-copper alloy using unique soil found only around Bidar Fort.",
    characteristics: [
      "Lush, sensual color palettes dominated by deep indigo, lapis, muted violet, and gold",
      "Bidriware's striking jet-black matte background contrasting against gossamer silver wire inlays",
      "Poetic, mystical figures lost in musical contemplation, holding flowers or perfume vials",
      "Arabesque floral creepers (tehnishan) and geometric diaper patterns"
    ],
    medium: "Inlaid silver wire on blackened zinc-copper alloy (Bidri) & gouache on paper",
    dna: {
      region: "Deccan Plateau (Bidar, Bijapur, Golconda)",
      material: "Zinc alloy with copper, inlaid pure silver wire and gold leaf",
      technique: "Cold chisel trenching, silver inlay, and soil-based chemical patination",
      subject: "Courtly romance, musical ragas, floral arabesques",
      tradition: "Deccan Sultanate School",
      period: "Early Modern Deccan (c. 17th c. CE)"
    },
    didYouKnow: "The mysterious jet-black patina on Bidriware is produced by treating the alloy with a paste made of sal-ammoniac and special aged mud taken exclusively from the unlit interior basements of Bidar Fort.",
    sourceCredit: "The Metropolitan Museum of Art / LACMA Collections / Photo: Wikimedia Commons"
  },
  {
    id: "bani-thani-kishangarh",
    title: "Radha of Kishangarh (Bani Thani)",
    periodId: "early-modern",
    periodLabel: "Rajput / Rajasthani Painting",
    yearLabel: "c. 1750 CE",
    numericYear: 1750,
    region: "West",
    state: "Kishangarh, Rajasthan",
    artForm: "Miniature",
    tradition: "Kishangarh Rajput Miniature School",
    importance: "grand",
    image: "assets/images/bani-thani-kishangarh.jpg",
    thumb: "assets/images/bani-thani-kishangarh.jpg",
    shortDescription: "Celebrated as India’s 'Mona Lisa', painted by master artist Nihal Chand, immortalizing the court poet-singer Bani Thani as the embodiment of Radha.",
    historicalContext: "Created under the romantic patronage of Raja Savant Singh of Kishangarh (who wrote devotional Krishna poetry under the pen name Nagari Das). The painting represents his muse, a singer whose beauty inspired a stylized aesthetic canon.",
    significance: "The supreme icon of Rajasthani romantic idealism, characterized by hyperbolic elegance, arched eyes, and delicate diaphanous gossamer drapery.",
    characteristics: [
      "Exaggerated, upward-swept almond eyes reminiscent of lotus buds (kamal-nayan)",
      "High arched brows, delicate sharply pointed nose, and thin curled lips",
      "Translucent golden odhni (veil) patterned with tiny floral sprigs framing her profile",
      "Pearls, emeralds, and a nose-ring (nath) held with aristocratic poise"
    ],
    medium: "Opaque gouache, gold, and mica on handmade wasli paper",
    dna: {
      region: "Kishangarh, Rajasthan (West India)",
      material: "Wasli handmade paper, precious stone pigments, gold leaf",
      technique: "Nihal Chand’s lyrical line drawing and translucent glazing",
      subject: "Radha / Bani Thani in profile with sacred devotional elegance",
      tradition: "Kishangarh Rajput School",
      period: "Late Rajput (c. mid-18th c. CE)"
    },
    didYouKnow: "The Indian Postal Department honored this painting in 1973 by issuing a commemorative postage stamp bearing Nihal Chand's portrait of Bani Thani.",
    sourceCredit: "National Museum, New Delhi / Photo: Wikimedia Commons"
  },
  {
    id: "kangra-gita-govinda",
    title: "Pahari Painting: Kangra Gita Govinda",
    periodId: "early-modern",
    periodLabel: "Pahari School (Western Himalayas)",
    yearLabel: "c. 1775 – 1780 CE",
    numericYear: 1780,
    region: "North",
    state: "Kangra Valley, Himachal Pradesh",
    artForm: "Miniature",
    tradition: "Kangra Pahari Lyrical Watercolor Painting",
    importance: "refined",
    image: "assets/images/kangra-gita-govinda.jpg",
    thumb: "assets/images/kangra-gita-govinda.jpg",
    shortDescription: "A lyrical, verdant mountain miniature depicting Radha and Krishna amidst blossoming bowers, embodying the gentle romance of the Western Himalayas.",
    historicalContext: "Flourishing under the enlightened patronage of Raja Sansar Chand of Kangra, who gathered master artists of the family of Pandit Seu (Manaku and Nainsukh) in the Kangra valley after the decline of the Mughal court.",
    significance: "Celebrated for its pastoral poetry, serene treatment of Himalayan nature, tender human emotions, and soft musical color palettes.",
    characteristics: [
      "Lush, flowering trees and meandering streams capturing the freshness of the Shivalik hills",
      "Serene, delicate female countenances drawn with rhythmic purity of line",
      "Harmonious pastel shades: soft olive greens, twilight mauves, and warm saffron robes",
      "Visual translation of Jayadeva's 12th-century Sanskrit lyric poem, the Gita Govinda"
    ],
    medium: "Gouache on handmade wasli paper",
    dna: {
      region: "Himachal Pradesh (Pahari / Northern Himalayas)",
      material: "Paper, natural plant extracts, lapis, crushed pearls",
      technique: "Delicate continuous line work and soft atmospheric shading",
      subject: "Sacred pastoral romance of Radha and Krishna",
      tradition: "Kangra Pahari School",
      period: "Pahari Renaissance (c. late 18th c. CE)"
    },
    didYouKnow: "Art historian Ananda Coomaraswamy famously remarked: 'What Chinese art achieved for landscape, Pahari painting achieved for human love.'",
    sourceCredit: "National Museum, New Delhi / Government Museum and Art Gallery, Chandigarh"
  },
  {
    id: "tanjore-gold-leaf-painting",
    title: "Thanjavur (Tanjore) Gold Leaf Painting",
    periodId: "early-modern",
    periodLabel: "Maratha Rule in Thanjavur",
    yearLabel: "c. 18th – 19th c. CE",
    numericYear: 1820,
    region: "South",
    state: "Thanjavur, Tamil Nadu",
    artForm: "Painting",
    tradition: "Thanjavur Sacred Icon Painting",
    importance: "refined",
    image: "assets/images/tanjore-gold-leaf-painting.jpg",
    thumb: "assets/images/tanjore-gold-leaf-painting.jpg",
    shortDescription: "Radiant, high-relief devotional icons characterized by dense composition, raised gesso plasterwork, 22-karat gold foil, and semi-precious stone embellishments.",
    historicalContext: "Evolving after the fall of the Vijayanagara Empire when Raju artisan communities migrated to Thanjavur under the patronage of the Maratha ruler Serfoji II.",
    significance: "Distinctive for its luminous durability: designed to glow in dim, oil-lamp-lit domestic prayer alcoves (puja rooms) and temples.",
    characteristics: [
      "High relief (Chunnam) gesso work built up with unboiled limestone and tree gum",
      "Gilded overlays of genuine 22-karat gold leaf that never tarnishes",
      "Inlaid cut glass, semi-precious gems, and pearls creating sparkling three-dimensional depth",
      "Iconic plump, rounded faces and almond eyes depicting deities framed by ornate floral arches"
    ],
    medium: "22K gold foil, gesso relief, Jaipur gems, and water pigments on teakwood board",
    dna: {
      region: "Thanjavur, Tamil Nadu (South India)",
      material: "Seasoned jackfruit/teak wood, cotton cloth, 22K gold leaf, gesso",
      technique: "Gesso embossing (sukka/wet paste), gilding, gem encrustation",
      subject: "Enthroned Rama Pattabhishekam, Krishna, or Balaji",
      tradition: "Thanjavur (Tanjore) Sacred School",
      period: "Late Maratha-Nayaka (c. 18th–19th c. CE)"
    },
    didYouKnow: "Genuine antique Tanjore paintings used diamond dust and ruby particles mixed into the lacquer glazes to give the eyes of the deities an uncanny life-like sparkle in candlelight.",
    sourceCredit: "Government Museum Chennai / Tanjore Art Gallery / Photo: Wikimedia Commons"
  },
  {
    id: "folk-tribal-traditions",
    title: "Indigenous Living Traditions: Warli & Madhubani",
    periodId: "modern",
    periodLabel: "Living Indigenous & Folk Art",
    yearLabel: "Ancient Origins to 20th c. Renaissance",
    numericYear: 1900,
    region: "West",
    state: "Maharashtra (Warli) & Mithila, Bihar (Madhubani)",
    artForm: "Folk & Tribal",
    tradition: "Indigenous Ceremonial Wall & Floor Painting",
    importance: "grand",
    image: "assets/images/folk-tribal-traditions.jpg",
    thumb: "assets/images/folk-tribal-traditions.jpg",
    shortDescription: "Centuries-old living vernacular art forms: Warli’s rhythmic elemental triangles celebrating nature and Madhubani’s intricate ceremonial geometric narratives.",
    historicalContext: "Maintained for generations by rural women on the mud walls of village huts to celebrate marriages, harvests, and seasonal festivals. Brought to global modern prominence in the 1970s through master pioneers like Jivya Soma Mashe (Warli) and Jagdamba Devi (Madhubani).",
    significance: "Affirms that Indian artistic genius lives not only in royal courts or stone temples, but deeply woven into the daily communal rhythm of tribal and village life.",
    characteristics: [
      "Warli's elemental vocabulary: circle (sun/moon), triangle (mountains/trees), square (sacred enclosure)",
      "Dynamic swirling Tarpa dance circles capturing communal solidarity and cosmic cycles",
      "Madhubani's intricate double-line borders, hatched line shading, and natural vegetable dyes",
      "Celebration of nature: peacocks, fish, turtles, and sacred trees of life"
    ],
    medium: "Rice paste and water on mud/cow dung walls, or natural dyes on handmade paper",
    dna: {
      region: "Maharashtra (Western Ghats) & Mithila (Bihar)",
      material: "Rice paste, chewed bamboo twigs, soot, turmeric, cow-dung plaster",
      technique: "Geometric ritual stencilless line drawing & fine pen hatching",
      subject: "Mother goddess Palaghata, harvest, Tarpa dance, wedding kohbar",
      tradition: "Adivasi Warli & Mithila Vernacular Traditions",
      period: "Timeless Living Heritage"
    },
    didYouKnow: "In Warli philosophy, two triangles touching at the tip represent a human being: the upper triangle represents the torso reaching toward heaven, while the lower represents the pelvis rooted in mother earth.",
    sourceCredit: "Crafts Museum, New Delhi / National Handicrafts and Handlooms Museum"
  },
  {
    id: "raja-ravi-varma-shakuntala",
    title: "Raja Ravi Varma: Shakuntala & Damayanti",
    periodId: "modern",
    periodLabel: "Late 19th Century Modernity",
    yearLabel: "c. 1898 CE",
    numericYear: 1898,
    region: "South",
    state: "Travancore (Kerala) & Bombay",
    artForm: "Painting",
    tradition: "Academic Realism & Indian Mythological Narrative",
    importance: "grand",
    image: "assets/images/raja-ravi-varma-shakuntala.jpg",
    thumb: "assets/images/raja-ravi-varma-shakuntala.jpg",
    shortDescription: "A monumental breakthrough in Indian visual modernity: combining European academic oil painting techniques with the soul and mythology of Indian classical literature.",
    historicalContext: "A prince of the royal house of Kilimanoor in Kerala, Ravi Varma mastered Western academic realism and oil medium. In 1894, he established a pioneering oleographic printing press near Bombay, mass-producing prints of Hindu deities that entered millions of Indian homes.",
    significance: "Single-handedly democratized Indian sacred art and shaped the visual imagination of modern Indian cinema, theater, and popular iconography.",
    characteristics: [
      "Masterful depiction of psychological longing: Shakuntala pretending to remove a thorn to look back at King Dushyanta",
      "Luminous oil glazing rendering rich silks, golden zari borders, and soft skin tones",
      "Dramatically staged compositions influenced by Western neoclassical theater",
      "Authentic regional Indian attire, jewelry, and emotional body language"
    ],
    medium: "Oil on canvas",
    dna: {
      region: "Travancore, Kerala (South India)",
      material: "European oil pigments on stretched linen canvas",
      technique: "Western academic oil glazing, chiaroscuro, and theatrical staging",
      subject: "Kalidasa’s Shakuntala, epics of the Mahabharata and Ramayana",
      tradition: "Indian Modern Academic Realism",
      period: "Colonial Modernity (c. late 19th c. CE)"
    },
    didYouKnow: "Ravi Varma's oleographs were so ubiquitous across India that early cinema pioneer Dadasaheb Phalke worked in his printing press before directing India's very first feature film, 'Raja Harishchandra'.",
    sourceCredit: "Sri Chitra Art Gallery, Thiruvananthapuram / National Gallery of Modern Art, New Delhi"
  },
  {
    id: "bengal-school-bharat-mata",
    title: "Abanindranath Tagore: Bharat Mata",
    periodId: "modern",
    periodLabel: "Bengal Renaissance & Swadeshi Movement",
    yearLabel: "c. 1905 CE",
    numericYear: 1905,
    region: "East",
    state: "Kolkata, West Bengal",
    artForm: "Painting",
    tradition: "Bengal School Wash Painting Tradition",
    importance: "grand",
    image: "assets/images/bengal-school-bharat-mata.jpg",
    thumb: "assets/images/bengal-school-bharat-mata.jpg",
    shortDescription: "The iconic rallying symbol of the Indian Swadeshi movement: Mother India personified not as a warrior, but as a serene ascetic maiden dispensing food, cloth, learning, and spiritual salvation.",
    historicalContext: "Painted by Abanindranath Tagore during the anti-partition of Bengal protests in 1905. The artist rejected Western academic oil painting, seeking inspiration in Ajanta murals, Mughal miniatures, and Japanese wash techniques taught by visiting masters Okakura Kakuzo and Yokoyama Taikan.",
    significance: "Founded the nationalist Bengal School of Art, asserting India's cultural sovereignty and spiritual aesthetic independence during the freedom struggle.",
    characteristics: [
      "Four sacred arms holding Shiksha (vedas), Diksha (white cloth), Anna (sheaf of paddy), and Moksha (rosary)",
      "Muted, dreamy atmospheric haze created through repeated Japanese water-wash immersions",
      "Serene, meditative saffron-clad figure standing on a pristine lotus halo",
      "Intensely spiritual and compassionate countenance devoid of militaristic violence"
    ],
    medium: "Watercolor wash and ink on Japanese paper",
    dna: {
      region: "Kolkata, West Bengal (East India)",
      material: "Handmade paper, water pigments, natural gum",
      technique: "Modified Japanese wet-on-wet wash method & miniature line work",
      subject: "Bharat Mata (Mother India) as an ascetic dispenser of life and learning",
      tradition: "Bengal School of Art (Nationalist Modernism)",
      period: "Swadeshi Nationalist Era (c. 1905 CE)"
    },
    didYouKnow: "Sister Nivedita, the chief disciple of Swami Vivekananda, was so moved by the painting that she wanted it printed in hundreds of thousands of copies to hang in every peasant cottage across the subcontinent.",
    sourceCredit: "Rabindra Bharati Society, Kolkata / Victoria Memorial Hall / Photo: Wikimedia Commons"
  },
  {
    id: "amrita-sher-gil-three-girls",
    title: "Amrita Sher-Gil: Group of Three Girls",
    periodId: "modern",
    periodLabel: "Indian Modernism (1930s)",
    yearLabel: "c. 1935 CE",
    numericYear: 1935,
    region: "North",
    state: "Shimla, Himachal Pradesh & Paris",
    artForm: "Painting",
    tradition: "Indo-European Post-Impressionist Synthesis",
    importance: "grand",
    image: "assets/images/amrita-sher-gil-three-girls.jpg",
    thumb: "assets/images/amrita-sher-gil-three-girls.jpg",
    shortDescription: "A groundbreaking modernist masterpiece capturing the quiet dignity, poignant melancholia, and silent inner life of rural Indian women.",
    historicalContext: "Born to a Punjabi Sikh aristocrat and a Hungarian-Jewish opera singer, Sher-Gil trained at the École des Beaux-Arts in Paris. Feeling compelled to return to India in 1934, she declared: 'Europe belongs to Picasso, Matisse, Braque... India belongs only to me.'",
    significance: "Hailed as the vanguard pioneer of modern Indian art, merging Parisian post-impressionist color theory with the earthbound dignity and monumental forms of Ajanta and Basohli.",
    characteristics: [
      "Three young women seated with poised, contemplative gazes reflecting unspoken destiny",
      "Bold, flat color fields: deep vermilion red, plum magenta, and warm earthy ochre",
      "Sculptural simplification of facial planes and expressive elongated hands",
      "Rejection of exotic orientalism in favor of genuine psychological empathy"
    ],
    medium: "Oil on canvas",
    dna: {
      region: "Shimla, Punjab / Himachal Pradesh",
      material: "Heavy oil pigments on canvas",
      technique: "Post-impressionist color blocking with Ajanta-inspired monumental form",
      subject: "Three rural Punjabi girls contemplating womanhood and marriage",
      tradition: "Early Modern Indian Avant-Garde",
      period: "Interwar Modernism (c. 1935 CE)"
    },
    didYouKnow: "The Government of India declared Amrita Sher-Gil a 'National Treasure' artist in 1976; her original works are prohibited from ever being exported out of the country.",
    sourceCredit: "National Gallery of Modern Art (NGMA), New Delhi (Accession No. 1948) / Photo: Public Domain"
  },
  {
    id: "progressive-contemporary-art",
    title: "Progressive Artists & Contemporary Horizons",
    periodId: "contemporary",
    periodLabel: "Post-Independence to 21st Century",
    yearLabel: "c. 1947 to Present",
    numericYear: 1980,
    region: "Central",
    state: "Bombay, Delhi & Global Diasporas",
    artForm: "Mixed / Contemporary",
    tradition: "Progressive Modernism & Contemporary Installations",
    importance: "grand",
    image: "assets/images/progressive-contemporary-art.jpg",
    thumb: "assets/images/progressive-contemporary-art.jpg",
    shortDescription: "From the post-1947 Bombay Progressive Artists' Group (S.H. Raza's meditative 'Bindu', Tyeb Mehta, M.F. Husain) to contemporary monumental installations by Subodh Gupta and Bharti Kher.",
    historicalContext: "Formed in Bombay in 1947 by F.N. Souza, S.H. Raza, M.F. Husain, and K.H. Ara to forge a bold internationalist aesthetic for newly independent India. Today, contemporary Indian artists engage with urbanization, consumerism, ritual memory, and global identity.",
    significance: "Represents India's vibrant voice in 21st-century global biennales, honoring ancient geometric and cultural roots while fearlessly critiquing contemporary reality.",
    characteristics: [
      "S.H. Raza's iconic 'Bindu': the black void of origin, energy, and cosmic concentration",
      "Vibrant orchestration of primordial Indian colors: black, red, yellow, and blue",
      "Contemporary transition into monumental sculptures utilizing stainless steel tiffin boxes and bindi motifs",
      "Intersection of Vedic sacred geometry (Mandala) with European abstract expressionism"
    ],
    medium: "Acrylic on canvas / Mixed media monumental contemporary installation",
    dna: {
      region: "Pan-Indian / International Metropolises",
      material: "Acrylic, oil on linen, stainless steel, bronze, mixed media",
      technique: "Geometric abstraction, hard-edge meditation, monumental assemblage",
      subject: "The Bindu (seed of origin), cosmic energy, urban memory",
      tradition: "Progressive Modernism & Contemporary Indian Art",
      period: "Post-Independence to Contemporary Era"
    },
    didYouKnow: "Sayed Haider Raza recalled that when he was eight years old in Madhya Pradesh and easily distracted in school, his teacher drew a black dot (Bindu) on the wall and asked him to sit and concentrate on it—a moment that shaped his entire 70-year artistic journey.",
    sourceCredit: "National Gallery of Modern Art, New Delhi / Raza Foundation / Photo: Wikimedia Commons"
  }
];

export const PERIODS = [
  {
    id: "ancient",
    name: "Ancient Era",
    timeframe: "10,000 BCE – 300 CE",
    description: "From prehistoric rock shelters of Bhimbetka and the urban sophistication of Mohenjo-daro to the monumental Mauryan pillars and early Buddhist stupas."
  },
  {
    id: "classical",
    name: "Classical & Early Medieval",
    timeframe: "300 CE – 750 CE",
    description: "The golden age of Gupta sculpture, Ajanta's sublime cave murals, and Pallava monolithic granite carvings along the southern shores."
  },
  {
    id: "medieval",
    name: "High Medieval Era",
    timeframe: "750 CE – 1500 CE",
    description: "The colossal rock-cut Kailasa temple, radiant Chola lost-wax bronze sculptures, soaring Khajuraho spires, and Konark's colossal chariot of the Sun."
  },
  {
    id: "early-modern",
    name: "Early Modern & Courts",
    timeframe: "1500 CE – 1850 CE",
    description: "The jewel-like splendor of Mughal court ateliers, Deccani poetry in silver Bidriware, poetic Rajput miniature romance, and sacred Tanjore gold foil painting."
  },
  {
    id: "modern",
    name: "Modern Awakening",
    timeframe: "1850 CE – 1950 CE",
    description: "Living folk traditions of Warli and Madhubani, Raja Ravi Varma’s oil realism, Abanindranath Tagore’s Swadeshi nationalist revival, and Amrita Sher-Gil’s avant-garde empathy."
  },
  {
    id: "contemporary",
    name: "Post-Independence & Contemporary",
    timeframe: "1947 CE – Present",
    description: "The radical energy of the Bombay Progressive Artists' Group, S.H. Raza’s metaphysical Bindu, and vibrant multi-disciplinary 21st-century global art."
  }
];

export const ART_FORMS = [
  "All",
  "Painting",
  "Sculpture",
  "Architecture",
  "Miniature",
  "Folk & Tribal",
  "Mixed / Craft",
  "Mixed / Contemporary"
];

export const REGIONS = [
  "All",
  "North",
  "South",
  "East",
  "West",
  "Central"
];
