// ============================================================================
// LN Engineering — Products Data (Central Source of Truth)
// Verified 1:1 against Official Catalogue (ln.pdf & Product Catalogue)
// ============================================================================

export interface SpecificationItem {
  label: string;
  value: string;
  highlight?: boolean;
  note?: string;
}

export interface ThickSlabConfig {
  thickness: string;
  wireCount: string;
}

export interface ProductModel {
  id: string;
  name: string;
  slug: string;
  series: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  categorySlug: string;
  categoryName: string;
  image: string;
  galleryImages: string[];
  applications: string[];
  keyHighlights: string[];
  specs: SpecificationItem[];
  thickSlabConfigs?: ThickSlabConfig[];
  standardSlabConfigs?: ThickSlabConfig[];
  catalogPageRef?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  models: ProductModel[];
}

// ----------------------------------------------------------------------------
// 1. MONO WIRE SAW MACHINES (Catalogue Page 6 & 7)
// ----------------------------------------------------------------------------
export const monoWireModels: ProductModel[] = [
  {
    id: "ln-2500",
    name: "LN 2500",
    slug: "ln-2500",
    series: "5th Generation Mono Wire Saw",
    tagline: "Industrial Workhorse for Precision Block Dressing",
    shortDescription:
      "Heavy-duty single diamond wire saw engineered for rugged, dependable granite and marble block squaring with 50-tonne revolving trolley capacity.",
    fullDescription:
      "The LN 2500 is the foundational heavy-duty workhorse of LN Engineering's 5th generation mono wire series. Equipped with massive 2500 mm dual flywheels and a 20 HP main motor, it delivers dependable cutting across hard granite, marble, and sandstone blocks up to 4000 × 2500 mm. Its robust mild steel fabricated frame guarantees vibration-free performance, extending diamond wire life and maintaining clean squaring cuts.",
    categorySlug: "mono-wire-saw",
    categoryName: "Mono Wire Saw Machines",
    image: "/images/machines/mono-wire-saw/mono-p6-img0.webp",
    galleryImages: [
      "/images/machines/mono-wire-saw/mono-p6-img0.webp",
      "/images/machines/mono-wire-saw/mono-p7-img1.webp",
      "/images/machines/ln-promaxx-2500-field.jpg",
    ],
    applications: [
      "Raw Quarry Block Squaring & Dressing",
      "360° Revolving Turntable Multi-Face Dressing",
      "Splitting Irregular Natural Stone & Granite Blocks",
      "Dimension Stone Block Preparation for Gangsaws",
    ],
    keyHighlights: [
      "2500 mm Precision Flywheels (Dual configuration)",
      "50 Tonnes Revolving Trolley Capacity",
      "4000 × 2500 mm Maximum Block Handling",
      "32 Heavy-Duty Up/Down Guide Rollers",
      "Cable-Connected Remote Operation",
    ],
    specs: [
      { label: "Flywheel Size", value: "2500 mm", highlight: true },
      { label: "Fast Cutting", value: "Yes" },
      { label: "Number of Flywheels", value: "2" },
      { label: "Main Motor Power", value: "20 HP (15 kW)", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "4000 × 2500 mm", highlight: true },
      { label: "Trolley Revolving Capacity", value: "50 Tonnes", highlight: true },
      { label: "Trolley Size", value: "7 ft × 7 ft" },
      { label: "Control Panel", value: "Manual Industrial Panel" },
      { label: "Display Screen", value: "No (Analog indicators)" },
      { label: "Pillar Protection Bellow Cover", value: "No" },
      { label: "Up/Down Guide Rollers", value: "32 Nos", highlight: true },
      { label: "Application Capability", value: "Dressing Only" },
      { label: "Motor Up/Down Control", value: "Normal (Standard feed)" },
      { label: "Warranty", value: "1 Year" },
      { label: "IoT System (Mobile Display)", value: "No" },
      { label: "Remote Control", value: "Cable Connected" },
      { label: "Machine Dimensions (L × W × H)", value: "30 ft × 20 ft × 11 ft" },
    ],
  },
  {
    id: "ln-2500-pro",
    name: "LN 2500 PRO",
    slug: "ln-2500-pro",
    series: "5th Generation Mono Wire Saw",
    tagline: "PLC-Controlled Dressing & High-Accuracy Slab Cutting",
    shortDescription:
      "Upgraded 25 HP mono wire machine equipped with a 7-inch touchscreen PLC panel, dual RPM feed, wireless remote, and dual dressing plus slab-cutting capability.",
    fullDescription:
      "The LN 2500 PRO elevates mono-wire performance with modern automation. Powered by a 25 HP main motor and controlled via an integrated 7-inch digital PLC touchscreen, the PRO model performs both precision block dressing and accurate slab cutting. Dual RPM vertical motor feed ensures optimal wire entry and steady cutting speed through varied stone hardnesses, operated effortlessly via an ergonomic wireless remote.",
    categorySlug: "mono-wire-saw",
    categoryName: "Mono Wire Saw Machines",
    image: "/images/machines/mono-wire-saw/ln-2500-pro.jpg",
    galleryImages: [
      "/images/machines/mono-wire-saw/ln-2500-pro.jpg",
      "/images/machines/mono-wire-saw/mono-p7-img0.webp",
      "/images/machines/mono-wire-saw/mono-p6-img0.webp",
    ],
    applications: [
      "Dual-Purpose Block Squaring & Commercial Slicing",
      "High-Accuracy Marble & Sandstone Slab Cutting",
      "Variable Dual-RPM Feed Processing for Varied Hardness Stones",
      "Semi-Automated Continuous Block Dressing",
    ],
    keyHighlights: [
      "7-Inch Digital Touchscreen PLC Controller",
      "Dressing + Accurate Slab Cutting Dual Operation",
      "25 HP High-Torque Main Motor",
      "Dual RPM Up/Down Feed Positioning",
      "Industrial Wireless Remote Control",
      "2-Year Manufacturer Warranty",
    ],
    specs: [
      { label: "Flywheel Size", value: "2500 mm", highlight: true },
      { label: "Fast Cutting", value: "Yes" },
      { label: "Number of Flywheels", value: "2" },
      { label: "Main Motor Power", value: "25 HP (18.5 kW)", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "4000 × 2500 mm", highlight: true },
      { label: "Trolley Revolving Capacity", value: "50 Tonnes", highlight: true },
      { label: "Trolley Size", value: "7 ft × 7 ft" },
      { label: "Control Panel", value: "PLC Automation Panel", highlight: true },
      { label: "Display Screen", value: "7-Inch Digital HMI Touchscreen", highlight: true },
      { label: "Pillar Protection Bellow Cover", value: "No" },
      { label: "Up/Down Guide Rollers", value: "32 Nos", highlight: true },
      { label: "Application Capability", value: "Dressing + Slab Cutting", highlight: true },
      { label: "Motor Up/Down Control", value: "Dual RPM Precision Feed", highlight: true },
      { label: "Warranty", value: "2 Years", highlight: true },
      { label: "IoT System (Mobile Display)", value: "No" },
      { label: "Remote Control", value: "Wireless Industrial Remote", highlight: true },
      { label: "Machine Dimensions (L × W × H)", value: "30 ft × 20 ft × 11 ft" },
    ],
  },
  {
    id: "ln-2500-promaxx",
    name: "LN 2500 PROMAXX",
    slug: "ln-2500-promaxx",
    series: "5th Generation Mono Wire Saw (Flagship)",
    tagline: "Connected Smart Mono Wire with IoT & Bellow Pillar Protection",
    shortDescription:
      "Flagship mono wire saw with full IoT mobile monitoring, protective pillar bellows, 7-inch PLC touchscreen, wireless remote, and premium 2-year warranty.",
    fullDescription:
      "The LN 2500 PROMAXX represents the pinnacle of 5th generation Indian mono wire saw engineering. Incorporating a state-of-the-art IoT telemetry system that streams cutting parameters directly to the plant manager's mobile phone, the PROMAXX safeguards machine longevity with heavy-duty telescopic bellow covers over the vertical pillars. It pairs a 25 HP main drive with 50-tonne revolving trolley capacity, dual RPM feed, and full dressing and slab-cutting flexibility.",
    categorySlug: "mono-wire-saw",
    categoryName: "Mono Wire Saw Machines",
    image: "/images/machines/mono-wire-saw/ln-2500-promaxx.jpg",
    galleryImages: [
      "/images/machines/mono-wire-saw/ln-2500-promaxx.jpg",
      "/images/machines/mono-wire-saw/mono-p7-img1.webp",
      "/images/machines/ln-promaxx-2500-field.jpg",
    ],
    applications: [
      "Heavy Abrasive Granite Block Dressing",
      "Remote Telemetry Monitored Quarry Plants",
      "Automated Slicing with Telescopic Pillar Protection",
      "High-Volume Commercial Stone Fabrication Hubs",
    ],
    keyHighlights: [
      "Built-in IoT Telemetry (Live Data Display on Mobile)",
      "Pillar Protection Telescopic Bellow Covers",
      "7-Inch Digital PLC Touchscreen Panel",
      "Dressing + Precision Slab Cutting Capability",
      "Dual RPM Smooth Vertical Drive",
      "Wireless Remote Control & 2-Year Warranty",
    ],
    specs: [
      { label: "Flywheel Size", value: "2500 mm", highlight: true },
      { label: "Fast Cutting", value: "Yes" },
      { label: "Number of Flywheels", value: "2" },
      { label: "Main Motor Power", value: "25 HP (18.5 kW)", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "4000 × 2500 mm", highlight: true },
      { label: "Trolley Revolving Capacity", value: "50 Tonnes", highlight: true },
      { label: "Trolley Size", value: "7 ft × 7 ft" },
      { label: "Control Panel", value: "Advanced PLC Panel", highlight: true },
      { label: "Display Screen", value: "7-Inch Digital HMI Touchscreen", highlight: true },
      { label: "Pillar Protection Bellow Cover", value: "Yes (Heavy Duty Bellow)", highlight: true },
      { label: "Up/Down Guide Rollers", value: "32 Nos", highlight: true },
      { label: "Application Capability", value: "Dressing + Slab Cutting", highlight: true },
      { label: "Motor Up/Down Control", value: "Dual RPM Precision Feed", highlight: true },
      { label: "Warranty", value: "2 Years", highlight: true },
      { label: "IoT System (Mobile Display)", value: "Yes (Live Mobile App Telemetry)", highlight: true },
      { label: "Remote Control", value: "Wireless Industrial Remote", highlight: true },
      { label: "Machine Dimensions (L × W × H)", value: "30 ft × 20 ft × 11 ft" },
    ],
  },
];

// ----------------------------------------------------------------------------
// 2. MULTIWIRE SAW MACHINES (Catalogue Page 10 & 11)
// ----------------------------------------------------------------------------
export const multiwireModels: ProductModel[] = [
  {
    id: "ln-6-wire",
    name: "LN 6 Wire",
    slug: "ln-6-wire",
    series: "Multiwire Thick Slab Series",
    tagline: "Compact High-Throughput Multiwire for Thick Slabs & Monuments",
    shortDescription:
      "Versatile 6-wire gangsaw engineered with Siemens PLC control and dual tensioning for thick slab cutting from 50 mm up to 100 mm.",
    fullDescription:
      "The LN 6 Wire Multiwire Saw Machine brings multi-wire efficiency to monument, kerbstone, and architectural thick-slab manufacturing. Driven by a 40 HP (30 kW) main motor and managed through a Siemens PLC automation system, it enables flexible wire pitch settings from 50 mm (6 wires) to 100 mm (3 wires) across large blocks up to 3600 × 2100 mm. Its dual tension system (main hydraulic + individual wire tension) prevents wire wander and guarantees uniform slab thickness.",
    categorySlug: "multiwire-saw",
    categoryName: "Multiwire Saw Machines",
    image: "/images/machines/multiwire-saw/ln-6-wire.jpg",
    galleryImages: [
      "/images/machines/multiwire-saw/ln-6-wire.jpg",
      "/images/machines/multiwire-saw/multi-p11-img0.webp",
      "/images/machines/multiwire-saw/multi-p11-img3.webp",
    ],
    applications: [
      "Heavy Thick Slab Slicing (50 mm to 100 mm)",
      "Monument & Memorial Base Manufacturing",
      "Architectural Stone Kerbstones & Pavers",
      "High-Yield Slicing of Hard Granite Blocks",
    ],
    keyHighlights: [
      "Thick Slab Processing from 50 mm to 100 mm",
      "Siemens Industrial PLC Automation with Touchscreen",
      "Dual Tension System (Main Hydraulic + Individual Pneumatic)",
      "40 HP (30 kW) High-Torque Main Drive Motor",
      "60 L/min Water Consumption with Pressure Recirculation",
    ],
    specs: [
      { label: "Maximum Number of Wires", value: "6 Wires", highlight: true },
      { label: "Series Designation", value: "Thick Slab Processing Master", highlight: true },
      { label: "Simultaneous Slab Yield", value: "Up to 5 Slabs in Single Pass", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "3600 × 2100 mm", highlight: true },
      { label: "Main Motor Power", value: "40 HP (30 kW)", highlight: true },
      { label: "Block Trolley Dimensions", value: "2400 × 2400 mm" },
      { label: "Automation Panel", value: "Siemens PLC with Digital Touchscreen HMI", highlight: true },
      { label: "Wire Tension System", value: "Dual (Main Hydraulic + Individual Pneumatic)", highlight: true },
      { label: "Water Requirement", value: "60 L/min (Continuous High-Pressure Circuit)", highlight: true },
      { label: "Rail Track Length", value: "20 ft + 20 ft (40 ft total / 12.2 m)" },
      { label: "Machine Footprint (L × W)", value: "30 ft × 20 ft (9.1 m × 6.1 m)" },
    ],
    thickSlabConfigs: [
      { thickness: "50 mm Slab", wireCount: "6 Wires" },
      { thickness: "60 mm Slab", wireCount: "5 Wires" },
      { thickness: "70 mm Slab", wireCount: "5 Wires" },
      { thickness: "80 mm Slab", wireCount: "4 Wires" },
      { thickness: "90 mm Slab", wireCount: "4 Wires" },
      { thickness: "100 mm Slab", wireCount: "3 Wires" },
    ],
  },
  {
    id: "ln-12-wire",
    name: "LN 12 Wire",
    slug: "ln-12-wire",
    series: "Mono Accuracy Master Series",
    tagline: "The Benchmark 12-Wire Platform for Commercial Slab Production",
    shortDescription:
      "High-precision 12-wire diamond saw available in both standard commercial slab (20-40 mm) and heavy thick-slab (50-100 mm) configurations with Siemens PLC.",
    fullDescription:
      "The LN 12 Wire Multiwire Saw Machine is the industry benchmark for commercial stone slab plants. Designated as the 'Mono Accuracy Master', it is engineered for exceptional slab parallelism and surface finish on granite, marble, and quartzite blocks. Offered in two verified configurations: a 60 HP (45 kW) version optimized for commercial 20, 30, and 40 mm slabs, and a 75 HP (55 kW) heavy-duty version engineered for thick structural slabs up to 100 mm. Both feature Siemens PLC automation and dual wire tension.",
    categorySlug: "multiwire-saw",
    categoryName: "Multiwire Saw Machines",
    image: "/images/machines/multiwire-saw/ln-12-wire.jpg",
    galleryImages: [
      "/images/machines/multiwire-saw/ln-12-wire.jpg",
      "/images/machines/multiwire-saw/multi-p10-img0.webp",
      "/images/machines/multiwire-saw/multi-p11-img2.webp",
    ],
    applications: [
      "High-Volume Commercial Slab Production (20 mm / 30 mm)",
      "Thick Slab Pitch Cutting (50 mm to 100 mm)",
      "Blade Gangsaw Alternative with Reduced Slurry & Kerf",
      "Automated Multi-Slab Downward Cutting on Granite",
    ],
    keyHighlights: [
      "12 Diamond Wire High-Output Parallel Cutting",
      "Available in Standard (20-40 mm) & Thick (50-100 mm) Slabs",
      "60 HP (45 kW) Standard / 75 HP (55 kW) Thick Slab Motor",
      "Siemens Industrial PLC System with Digital Touchscreen HMI",
      "Dual Wire Tensioning for Sub-Millimeter Parallelism",
    ],
    specs: [
      { label: "Maximum Number of Wires", value: "12 Wires", highlight: true },
      { label: "Series Designation", value: "Mono Accuracy Master", highlight: true },
      { label: "Simultaneous Slab Yield", value: "Up to 11 Slabs in Single Pass", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "3600 × 2100 mm", highlight: true },
      { label: "Main Motor Power", value: "60 HP (45 kW) Std / 75 HP (55 kW) Thick Slab", highlight: true },
      { label: "Block Trolley Dimensions", value: "2400 × 2400 mm" },
      { label: "Automation Panel", value: "Siemens PLC with Digital Touchscreen HMI", highlight: true },
      { label: "Wire Tension System", value: "Dual (Main Hydraulic + Individual Pneumatic)", highlight: true },
      { label: "Water Requirement", value: "120 L/min (Continuous High-Pressure Circuit)", highlight: true },
      { label: "Rail Track Length", value: "20 ft + 20 ft (40 ft total / 12.2 m)" },
      { label: "Machine Footprint (L × W)", value: "30 ft × 20 ft (9.1 m × 6.1 m)" },
    ],
    standardSlabConfigs: [
      { thickness: "20 mm Commercial Slab", wireCount: "12 Wires" },
      { thickness: "30 mm Standard Slab", wireCount: "9 Wires" },
      { thickness: "40 mm Heavy Slab", wireCount: "7 Wires" },
    ],
    thickSlabConfigs: [
      { thickness: "50 mm Slab", wireCount: "12 Wires" },
      { thickness: "60 mm Slab", wireCount: "10 Wires" },
      { thickness: "70 mm Slab", wireCount: "9 Wires" },
      { thickness: "80 mm Slab", wireCount: "8 Wires" },
      { thickness: "90 mm Slab", wireCount: "7 Wires" },
      { thickness: "100 mm Slab", wireCount: "6 Wires" },
    ],
  },
  {
    id: "ln-22-wire",
    name: "LN 22 Wire",
    slug: "ln-22-wire",
    series: "Slab Accuracy Master (High Capacity)",
    tagline: "Industrial 22-Wire Flagship for Massive High-Precision Slab Yield",
    shortDescription:
      "Massive 100 HP flagship multiwire gangsaw capable of running 22 diamond wires simultaneously for high-throughput commercial slab production with Siemens PLC.",
    fullDescription:
      "The LN 22 Wire — the 'Slab Accuracy Master' — is LN Engineering's highest capacity multiwire gangsaw, engineered for large commercial stone processing plants demanding massive daily slab production. Powered by a 100 HP (75 kW) heavy-duty motor, it slices large blocks up to 3600 × 2100 mm into up to 21 uniform slabs simultaneously. Siemens PLC intelligence paired with dual continuous tensioning delivers razor-thin tolerance across granite, marble, and quartzite.",
    categorySlug: "multiwire-saw",
    categoryName: "Multiwire Saw Machines",
    image: "/images/machines/multiwire-saw/ln-22-wire.jpg",
    galleryImages: [
      "/images/machines/multiwire-saw/ln-22-wire.jpg",
      "/images/machines/multiwire-saw/multi-p11-img1.webp",
      "/images/machines/multiwire-saw/multi-p11-img4.webp",
    ],
    applications: [
      "Flagship High-Volume Commercial Gangsaw Replacement",
      "21-Slab Single Pass High-Speed Granite Processing",
      "Export-Quality Parallel Slab Production",
      "Industrial Automated Stone Slicing Plants",
    ],
    keyHighlights: [
      "22 Simultaneous Diamond Wire Cutting Lines",
      "100 HP (75 kW) Heavy Duty Main Drive Motor",
      "Slab Accuracy Master Flagship Classification",
      "Siemens Industrial PLC System with Digital Touchscreen HMI",
      "220 L/min Water Management Circuit",
      "High Slicing Speed with Minimal Slurry Loss",
    ],
    specs: [
      { label: "Maximum Number of Wires", value: "22 Wires", highlight: true },
      { label: "Series Designation", value: "Slab Accuracy Master", highlight: true },
      { label: "Simultaneous Slab Yield", value: "Up to 21 Slabs in Single Pass", highlight: true },
      { label: "Maximum Block Size (L × H)", value: "3600 × 2100 mm", highlight: true },
      { label: "Main Motor Power", value: "100 HP (75 kW)", highlight: true },
      { label: "Block Trolley Dimensions", value: "2400 × 2400 mm" },
      { label: "Automation Panel", value: "Siemens PLC with Digital Touchscreen HMI", highlight: true },
      { label: "Wire Tension System", value: "Dual (Main Hydraulic + Individual Pneumatic)", highlight: true },
      { label: "Water Requirement", value: "220 L/min (Continuous High-Pressure Circuit)", highlight: true },
      { label: "Rail Track Length", value: "20 ft + 20 ft (40 ft total / 12.2 m)" },
      { label: "Machine Footprint (L × W)", value: "30 ft × 20 ft (9.1 m × 6.1 m)" },
    ],
    standardSlabConfigs: [
      { thickness: "20 mm Commercial Slab", wireCount: "22 Wires" },
      { thickness: "30 mm Standard Slab", wireCount: "18 Wires" },
      { thickness: "40 mm Heavy Slab", wireCount: "14 Wires" },
    ],
  },
];

// ----------------------------------------------------------------------------
// 3. CNC WIRE PROFILE MACHINES (Catalogue Page 8 & 9)
// ----------------------------------------------------------------------------
export const cncWireModels: ProductModel[] = [
  {
    id: "ln-hori-2100",
    name: "LN HORI 2100",
    slug: "ln-hori-2100",
    series: "Horizontal Wire Profile Series",
    tagline: "Horizontal & Vertical Arc and Design Stone Slicing",
    shortDescription:
      "Precision 2100 mm flywheel wire profiling machine engineered for horizontal and vertical arc cutting, curved columns, and design slicing up to 15-20 feet.",
    fullDescription:
      "The LN HORI 2100 is engineered for architectural stonework, column contouring, and large-format horizontal slicing. Equipped with two 2100 mm precision-balanced flywheels and a 20 HP (15 kW) main drive, it accommodates blocks up to 3000 × 2000 × 2000 mm on its 2600 × 2000 mm heavy-duty trolley. The dual horizontal and vertical movement allows stone fabricators to execute arc and design cutting spans up to 15 to 20 feet with reliable PLC control.",
    categorySlug: "cnc-wire-profile",
    categoryName: "CNC Wire Profile Machines",
    image: "/images/machines/cnc-wire-profile/ln-hori-2100.jpg",
    galleryImages: [
      "/images/machines/cnc-wire-profile/ln-hori-2100.jpg",
      "/images/machines/cnc-wire-profile/cnc-p8-img0.webp",
      "/images/factory/plant-lathe.jpg",
    ],
    applications: [
      "Horizontal Block Layer Slicing Without Repositioning",
      "Curved Architectural Arches up to 20 Ft Radius",
      "Bridge & Monument Arc Profiling",
      "Dual-Orientation (Horizontal & Vertical) Profiling",
    ],
    keyHighlights: [
      "Horizontal & Vertical Arc and Design Cutting",
      "Cutting Span Capacity up to 15–20 Feet",
      "2100 mm Dual Precision Flywheels",
      "3000 × 2000 × 2000 mm Large Block Capacity",
      "Heavy-Duty Industrial PLC Automation",
    ],
    specs: [
      { label: "Flywheel Size", value: "2100 mm Dual Flywheels", highlight: true },
      { label: "Number of Flywheels", value: "2" },
      { label: "Primary Application", value: "Horizontal and Vertical Arc/Design Cutting", highlight: true },
      { label: "Main Motor Power", value: "20 HP (15 kW)", highlight: true },
      { label: "Block Dimensions (L × H × W)", value: "3000 × 2000 × 2000 mm", highlight: true },
      { label: "Trolley Dimensions", value: "2600 × 2000 mm" },
      { label: "Control System", value: "Industrial PLC Automation with Digital HMI", highlight: true },
      { label: "Cutting Reach & Span", value: "Arc and Design Span up to 15–20 Feet", highlight: true },
      { label: "Toolpath Programming", value: "Parametric Arc & Linear Input via Touchscreen", highlight: true },
      { label: "Machine Dimensions (L × W × H)", value: "28 ft × 20 ft × 11 ft" },
    ],
  },
  {
    id: "ln-cnc-2100-promaxx",
    name: "LN CNC 2100 PROMAXX",
    slug: "ln-cnc-2100-promaxx",
    series: "CNC Wire Profile Series (Siemens CNC)",
    tagline: "Siemens CNC Multiaxis Precision Stone Contour & 3D Profiling",
    shortDescription:
      "Advanced Siemens CNC-driven wire profile machine for complex architectural contours, 3D profiling, vertical/horizontal slicing, and high-accuracy decorative cutting.",
    fullDescription:
      "The LN CNC 2100 PROMAXX is LN Engineering's premier contouring platform, driven by a genuine Siemens CNC industrial controller. Powered by a 25 HP (18.5 kW) main drive, this machine bridges the gap between raw stone handling and computer-guided architectural sculpting. It executes intricate 2D and 3D wire profile trajectories, cylindrical shaping, curved moldings, and balustrade cuts with sub-millimeter repeatable precision.",
    categorySlug: "cnc-wire-profile",
    categoryName: "CNC Wire Profile Machines",
    image: "/images/machines/cnc-wire-profile/ln-cnc-2100-promaxx.jpg",
    galleryImages: [
      "/images/machines/cnc-wire-profile/ln-cnc-2100-promaxx.jpg",
      "/images/machines/cnc-wire-profile/cnc-p9-img0.webp",
      "/images/factory/exhibition-stonemart.jpg",
    ],
    applications: [
      "2D & 3D Architectural CNC Stone Profiling",
      "Fluted Columns, Balustrades & Capital Carvings",
      "Ornate Cornices, Tapered Profiles & Cornice Mouldings",
      "CAD/CAM DXF Toolpath Interpolation on Granite & Marble",
    ],
    keyHighlights: [
      "Genuine Siemens CNC Controller",
      "Multiaxis Horizontal, Vertical, and 3D Profile Cutting",
      "25 HP (18.5 kW) High-Torque Main Motor Drive",
      "3000 × 2000 × 2000 mm Maximum Block Handling",
      "Interpolated Path Control for Complex Architectural Forms",
    ],
    specs: [
      { label: "Flywheel Size", value: "2100 mm Dual Flywheels", highlight: true },
      { label: "Number of Flywheels", value: "2" },
      { label: "Primary Application", value: "Multiaxis 2D/3D Complex Profile Cutting", highlight: true },
      { label: "Main Motor Power", value: "25 HP (18.5 kW)", highlight: true },
      { label: "Block Dimensions (L × H × W)", value: "3000 × 2000 × 2000 mm", highlight: true },
      { label: "Trolley Dimensions", value: "2600 × 2000 mm" },
      { label: "Control System", value: "Genuine Siemens CNC Controller", highlight: true },
      { label: "Cutting Reach & Span", value: "Multiaxis Interpolated Trajectory (Full Block)", highlight: true },
      { label: "Toolpath Programming", value: "Direct CAD/CAM DXF & G-Code File Import", highlight: true },
      { label: "Machine Dimensions (L × W × H)", value: "30 ft × 20 ft × 11 ft" },
    ],
  },
];

// ----------------------------------------------------------------------------
// 4. WIRE ROPE (Catalogue Page 12)
// ----------------------------------------------------------------------------
export const wireRopeProduct: ProductModel = {
  id: "diamond-wire-rope",
  name: "LN Diamond Wire Rope",
  slug: "diamond-wire-rope",
  series: "Consumable & Tooling Division",
  tagline: "High-Endurance Diamond Wire Rope with Imported Core Wire",
  shortDescription:
    "Engineered with 35 precision diamond beads per meter and imported high-tensile core wire for rapid, accurate, and resilient stone slicing.",
  fullDescription:
    "LN Diamond Wire Rope is designed and tested alongside LN Engineering wire machines to achieve maximum cutting speed, prolonged wire life, and minimum segment loss. Featuring an industry-leading density of 35 diamond beads per meter and an 11.5 diameter configuration with imported high-tensile steel core wire, it delivers smooth linear stone slicing across hard granite, marble, sandstone, and abrasive quartzites without premature snapping.",
  categorySlug: "wire-rope",
  categoryName: "Wire Rope",
  image: "/images/products/wire-rope/diamond-wire-rope.jpg",
  galleryImages: [
    "/images/products/wire-rope/diamond-wire-rope.jpg",
    "/images/products/wire-rope/rope-p12-img0.webp",
  ],
  applications: [
    "Multiwire Gangsaw Slicing (Granite & Marble Slabs)",
    "Stationary Mono Wire Block Dressing & Squaring",
    "Quarry Block Extraction & Dimension Stone Slicing",
    "CNC Wire Profiling & Contour Architectural Profiling",
  ],
  keyHighlights: [
    "35 Precision Diamond Beads per Meter (Catalogue Verified)",
    "11.5 mm Standard Diameter with High-Tensile Steel Core",
    "Imported European Core Wire for High Fatigue Resistance",
    "Cobalt-Bronze Matrix Bond for Maximum Diamond Retention",
    "Compatible Across All Modern Indian & International Wire Saws",
  ],
  specs: [
    { label: "Bead Density", value: "35 Beads per Meter", highlight: true, note: "Documented on Catalogue Page 12" },
    { label: "Available Diameters", value: "11.5 mm (Standard) • Custom diameters on request", highlight: true },
    { label: "Core Wire Material", value: "Imported High-Tensile Multi-Strand European Steel Core", highlight: true },
    { label: "Bond Matrix Type", value: "Sintered Cobalt-Bronze (Granite) / Electroplated (Marble)", highlight: true },
    { label: "Recommended Wire Speed", value: "22–28 m/s (Granite) • 28–34 m/s (Marble)" },
    { label: "Water Cooling Flow", value: "Continuous lubrication (min. 30–40 L/min per wire line)" },
    { label: "Stone Suitability", value: "Granite (all hardness grades), Marble, Sandstone, Quartzite, Basalt, Limestone", highlight: true },
    { label: "Compatible Machines", value: "Mono Wire Saws, Multiwire Gangsaws, Quarry Wire Saws, CNC Profilers" },
    { label: "Handling & Storage", value: "Store coiled in dry environment; maintain minimum coil radius R ≥ 150 mm" },
    { label: "Replacement Guidance", value: "Inspect bead wear profile; replace when bead diameter approaches core crimp threshold" },
  ],
};

// ----------------------------------------------------------------------------
// ALL CATEGORIES OVERVIEW
// ----------------------------------------------------------------------------
export const productCategories: ProductCategory[] = [
  {
    id: "mono-wire-saw",
    name: "Mono Wire Saw Machines",
    slug: "mono-wire-saw",
    tagline: "5th Generation Precision Block Dressing & Slab Cutting",
    shortDescription:
      "Single diamond wire saws with 2500 mm flywheels and 50-tonne revolving trolleys for fast block squaring and dressing.",
    heroImage: "/images/machines/mono-wire-saw/ln-2500-promaxx.jpg",
    models: monoWireModels,
  },
  {
    id: "multiwire-saw",
    name: "Multiwire Saw Machines",
    slug: "multiwire-saw",
    tagline: "Siemens PLC High-Output Slab & Thick-Slab Production",
    shortDescription:
      "6 to 22 wire high-capacity gangsaws featuring Slab Accuracy Master and Mono Accuracy Master technology.",
    heroImage: "/images/machines/multiwire-saw/ln-12-wire.jpg",
    models: multiwireModels,
  },
  {
    id: "cnc-wire-profile",
    name: "CNC Wire Profile Machines",
    slug: "cnc-wire-profile",
    tagline: "Horizontal & Siemens CNC Multiaxis Architectural Profiling",
    shortDescription:
      "2100 mm flywheel wire profilers for horizontal slicing, arc cutting, and complex 3D architectural stonework.",
    heroImage: "/images/machines/cnc-wire-profile/ln-cnc-2100-promaxx.jpg",
    models: cncWireModels,
  },
  {
    id: "wire-rope",
    name: "Diamond Wire Rope",
    slug: "wire-rope",
    tagline: "High-Endurance Diamond Wire with Imported Core Wire",
    shortDescription:
      "35 beads/meter diamond wire rope engineered for rapid cutting and extended wire endurance in abrasive stones.",
    heroImage: "/images/products/wire-rope/diamond-wire-rope.jpg",
    models: [wireRopeProduct],
  },
];

export function getAllProducts(): ProductModel[] {
  return [...monoWireModels, ...multiwireModels, ...cncWireModels, wireRopeProduct];
}

export function getProductBySlug(categorySlug: string, modelSlug: string): ProductModel | undefined {
  if (categorySlug === "wire-rope" || categorySlug === "products/wire-rope") {
    return wireRopeProduct;
  }
  const category = productCategories.find((c) => c.slug === categorySlug);
  return category?.models.find((m) => m.slug === modelSlug);
}

export function getCategoryBySlug(categorySlug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === categorySlug);
}
