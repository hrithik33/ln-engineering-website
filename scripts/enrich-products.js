const fs = require('fs');
let content = fs.readFileSync('src/data/products.ts', 'utf8');

const additions = {
  'ln-2500': {
    gallery: `    galleryImages: [
      "/images/machines/ln-stone-cutting-gantry.jpg",
      "/images/hero/industrial-stone-cutting-spray.jpg",
      "/images/factory/plant-lathe.jpg",
    ],`,
    apps: `    applications: [
      "Raw Quarry Block Squaring & Dressing",
      "360° Revolving Turntable Multi-Face Dressing",
      "Splitting Irregular Natural Stone & Granite Blocks",
      "Dimension Stone Block Preparation for Gangsaws",
    ],`
  },
  'ln-2500-pro': {
    gallery: `    galleryImages: [
      "/images/machines/ln-gantry-cutting-field.jpg",
      "/images/machines/ln-promaxx-2500-field.jpg",
      "/images/factory/plant-workforce.jpg",
    ],`,
    apps: `    applications: [
      "Dual-Purpose Block Squaring & Commercial Slicing",
      "High-Accuracy Marble & Sandstone Slab Cutting",
      "Variable Dual-RPM Feed Processing for Varied Hardness Stones",
      "Semi-Automated Continuous Block Dressing",
    ],`
  },
  'ln-2500-promaxx': {
    gallery: `    galleryImages: [
      "/images/machines/ln-promaxx-2500-field.jpg",
      "/images/hero/industrial-stone-cutting-spray.jpg",
      "/images/machines/ln-gantry-cutting-field.jpg",
    ],`,
    apps: `    applications: [
      "Heavy Abrasive Granite Block Dressing",
      "Remote Telemetry Monitored Quarry Plants",
      "Automated Slicing with Telescopic Pillar Protection",
      "High-Volume Commercial Stone Fabrication Hubs",
    ],`
  },
  'ln-6-wire': {
    gallery: `    galleryImages: [
      "/images/machines/ln-gantry-cutting-field.jpg",
      "/images/machines/ln-stone-cutting-gantry.jpg",
      "/images/factory/exhibition-verona.jpg",
    ],`,
    apps: `    applications: [
      "Heavy Thick Slab Slicing (50 mm to 100 mm)",
      "Monument & Memorial Base Manufacturing",
      "Architectural Stone Kerbstones & Pavers",
      "High-Yield Slicing of Hard Granite Blocks",
    ],`
  },
  'ln-12-wire': {
    gallery: `    galleryImages: [
      "/images/machines/ln-promaxx-2500-field.jpg",
      "/images/hero/industrial-stone-cutting-spray.jpg",
      "/images/factory/event-p14-img1.jpg",
    ],`,
    apps: `    applications: [
      "High-Volume Commercial Slab Production (20 mm / 30 mm)",
      "Thick Slab Pitch Cutting (50 mm to 100 mm)",
      "Blade Gangsaw Alternative with Reduced Slurry & Kerf",
      "Automated Multi-Slab Downward Cutting on Granite",
    ],`
  },
  'ln-22-wire': {
    gallery: `    galleryImages: [
      "/images/machines/ln-stone-cutting-gantry.jpg",
      "/images/machines/ln-promaxx-2500-field.jpg",
      "/images/hero/industrial-stone-cutting-spray.jpg",
    ],`,
    apps: `    applications: [
      "Flagship High-Volume Commercial Gangsaw Replacement",
      "21-Slab Single Pass High-Speed Granite Processing",
      "Export-Quality Parallel Slab Production",
      "Industrial Automated Stone Slicing Plants",
    ],`
  },
  'ln-hori-2100': {
    gallery: `    galleryImages: [
      "/images/machines/ln-stone-cutting-gantry.jpg",
      "/images/machines/ln-gantry-cutting-field.jpg",
      "/images/factory/plant-lathe.jpg",
    ],`,
    apps: `    applications: [
      "Horizontal Block Layer Slicing Without Repositioning",
      "Curved Architectural Arches up to 20 Ft Radius",
      "Bridge & Monument Arc Profiling",
      "Dual-Orientation (Horizontal & Vertical) Profiling",
    ],`
  },
  'ln-cnc-2100-promaxx': {
    gallery: `    galleryImages: [
      "/images/machines/ln-gantry-cutting-field.jpg",
      "/images/machines/ln-promaxx-2500-field.jpg",
      "/images/factory/exhibition-stonemart.jpg",
    ],`,
    apps: `    applications: [
      "2D & 3D Architectural CNC Stone Profiling",
      "Fluted Columns, Balustrades & Capital Carvings",
      "Ornate Cornices, Tapered Profiles & Cornice Mouldings",
      "CAD/CAM DXF Toolpath Interpolation on Granite & Marble",
    ],`
  },
  'diamond-wire-rope': {
    gallery: `  galleryImages: [
    "/images/products/wire-rope/diamond-wire-rope.jpg",
    "/images/products/wire-rope/hero.jpg",
    "/images/hero/industrial-stone-cutting-spray.jpg",
  ],`,
    apps: `  applications: [
    "High-Speed Primary Quarry Block Extraction",
    "Multiwire Gangsaw Commercial Slab Slicing",
    "Stationary Mono Wire Block Dressing & Squaring",
    "CNC Wire Profiling & Contour Carving on Hard Granites",
  ],`
  }
};

for (const [id, data] of Object.entries(additions)) {
  const targetRegex = new RegExp('(id:\\s*"' + id + '"[\\s\\S]*?galleryImages:\\s*\\[[\\s\\S]*?\\],)');
  if (targetRegex.test(content)) {
    content = content.replace(targetRegex, (match) => {
      const beforeGallery = match.substring(0, match.indexOf('galleryImages:'));
      return beforeGallery + data.gallery.trim() + '\n' + data.apps;
    });
    console.log('Updated ' + id);
  } else {
    console.warn('Could not find ' + id);
  }
}

fs.writeFileSync('src/data/products.ts', content, 'utf8');
console.log('Done!');
