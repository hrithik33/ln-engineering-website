// ============================================================================
// LN Engineering — Company Data (Central Source of Truth)
// Verified from Official Catalogues (ln.pdf & Product Catalogue)
// ============================================================================

export const company = {
  name: "LN Engineering",
  legalName: "L N Machineries Pvt. Ltd.",
  tagline: "Precision Stone Engineering",
  subTagline: "Fastest Cutting • Most Advanced PLC Panel • Most Accurate Cutting • Largest Flywheel",
  founder: "Mr. L. N. Jangid",

  // Verification flag: Catalogues prominently display "Since 1994" in branding,
  // while the milestone history starts from 1993. Both dates are acknowledged transparently.
  establishedDisplay: "Since 1994",
  timelineStartYear: "1993",

  description:
    "LN Engineering (L N Machineries Pvt. Ltd.) is an established Indian manufacturer of high-precision stone-processing machinery based in Rajsamand, Rajasthan. Known as the 'Accuracy Master', LN Engineering designs and manufactures advanced Mono Wire Saw Machines, Multiwire Gangsaw Machines, CNC Wire Profile Machines, and Diamond Wire Rope for global quarry and stone-processing industries.",

  philosophy:
    "Engineering precision with unwavering structural rigidity. Each machine undergoes stringent testing parameters and quality standards to deliver high productivity, minimum slurry waste, and optimum accuracy in marble, granite, and sandstone processing.",

  vision:
    "To provide state-of-the-art stone processing machinery globally, positioning Indian precision engineering as the benchmark in stone and wire technology worldwide.",

  mission:
    "To consistently innovate indigenous, customized stone-processing solutions that enhance production capacity, reliability, and profitability for stone entrepreneurs across domestic and international markets.",

  address: {
    street: "N. H. 8, Mokhampura",
    city: "Rajsamand",
    district: "Rajsamand (Udaipur)",
    state: "Rajasthan",
    country: "India",
    pincode: "313326",
    full: "N. H. 8, Mokhampura, Rajsamand (Udaipur), Rajsamand, India 313326",
    mapUrl: "https://maps.google.com/?q=Mokhampura+Rajsamand+Rajasthan+313326",
  },

  phones: [
    { number: "+919413638727", display: "+91 94136 38727", primary: true },
    { number: "+919828957057", display: "+91 98289 57057", primary: false },
  ],

  emails: [
    { address: "info@gangsawmachines.com", display: "info@gangsawmachines.com", primary: true },
    { address: "lnrajsamand@gmail.com", display: "lnrajsamand@gmail.com", primary: false },
  ],

  whatsapp: {
    number: "919413638727",
    display: "+91 94136 38727",
    defaultMessage: "Hello LN Engineering, I would like to request technical details and a quotation for stone processing machinery.",
  },

  social: {
    website: "https://www.gangsawmachines.com",
    facebook: "https://www.facebook.com/LNEngineeringINDIA",
    twitter: "https://twitter.com/LNEngineeringINDIA",
  },

  regionalContacts: [
    {
      region: "South India — Ongole Office",
      contactPerson: "C. Sivakothiah",
      phone: "+919866448897",
      phoneDisplay: "+91 98664 48897",
      address: "401, 5th Floor, Aditya Towers, Chennakesava Nagar, Ongole - 523002, Andhra Pradesh, India",
    },
    {
      region: "South India — Martur Office",
      contactPerson: "Somireddy Jaya Prakash",
      phone: "+919963015990",
      phoneDisplay: "+91 99630 15990",
      address: "Gannavaram Road, Martur (Village and Mandal), Bapatla District, Andhra Pradesh - 523301, India",
    },
  ],

  manufacturingPlant: {
    description: "The manufacturing facility is staffed by skilled mechanical engineers, machine planners, certified fabricators, and experienced assembly technicians.",
    tooling: [
      { name: "HMT Heavy Duty Lathe Machines", role: "High-precision turning and cylindrical machining" },
      { name: "Sweden-Made Horizontal Boring Machine", role: "Precision alignment and deep bore machining of structural pillars" },
      { name: "Heavy Duty Planer Machine", role: "Large-bed machining for vibration-free machine bases" },
      { name: "Radial Drill Machines", role: "Heavy structural drilling and precision hole positioning" },
      { name: "Shaper Machines", role: "Keyway and flat surface shaping" },
      { name: "Dedicated Industrial Paint Shop", role: "Anti-corrosive multi-coat industrial polyurethane finish" },
    ],
  },
} as const;

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  note?: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "1993",
    title: "Foundation of Precision Manufacturing",
    description: "Span of consistent development commences in Rajsamand, Rajasthan, dedicated to stone machinery.",
    note: "Official timeline begins 1993; brand mark reflects 'Since 1994'. Both documented.",
  },
  {
    year: "1994",
    title: "Mining Hydraulic Jacks",
    description: "Commenced commercial manufacturing of heavy-duty hydraulic jacks for mining operations.",
  },
  {
    year: "1995",
    title: "Mining Wire Saw Machines",
    description: "Pioneered indigenous diamond wire saw machines for quarrying and stone block extraction.",
  },
  {
    year: "1997",
    title: "Block Dressing Machines",
    description: "Launched dedicated block dressing machines for marble processing plants.",
  },
  {
    year: "1998",
    title: "Industrial Gantry Cranes",
    description: "Engineered heavy-tonnage gantry cranes for stone block handling in stockyards.",
  },
  {
    year: "1999",
    title: "Derrick Cranes for Mining",
    description: "Expanded into high-capacity derrick cranes for quarry pits and block loading.",
  },
  {
    year: "2000",
    title: "Marble Gangsaw Machines",
    description: "Introduced high-productivity marble gangsaw machines for commercial slab production.",
  },
  {
    year: "2003",
    title: "Global Export Commencement",
    description: "Commenced international exports of stone-processing machinery to overseas markets.",
  },
  {
    year: "2012",
    title: "Multiwire Gangsaw (16 Wires)",
    description: "Breakthrough development of 16-wire multiwire gangsaw for granite and marble slab cutting.",
  },
  {
    year: "2017",
    title: "Multiwire Gangsaw (20 Wires)",
    description: "Advanced into 20-wire high-throughput multiwire gangsaw platforms.",
  },
  {
    year: "2018",
    title: "Granite Block Dressing Machines",
    description: "Engineered ultra-rigid block dressing systems specifically tuned for hard granite blocks.",
  },
  {
    year: "2019",
    title: "Automatic Line Polisher",
    description: "Expanded surface-finishing lineup with automatic multi-head slab line polishers.",
  },
  {
    year: "2020",
    title: "Multiwire Gangsaw (12 Wires)",
    description: "Standardized the Mono Accuracy Master 12-wire platform with Siemens automation.",
  },
  {
    year: "2021",
    title: "Multiwire Gangsaw (22 Wires)",
    description: "Flagship Slab Accuracy Master 22-wire machine with 100 HP motor for massive throughput.",
  },
  {
    year: "2023",
    title: "CNC Wire Profile & Thick Slab Multiwire",
    description: "Introduced 2-axis & multi-axis CNC wire profiling machines with Siemens CNC and thick-slab multiwire.",
  },
] as const;

export const verifiedCredentials = [
  {
    year: "2008 & 2010",
    title: "Quality Certifications",
    organization: "Industrial Quality Standards",
    description: "Formal quality certifications for stone cutting and processing machine design.",
    status: "Verified in Catalogue",
  },
  {
    year: "2010",
    title: "RFC Gold Borrower Recognition",
    organization: "Rajasthan Financial Corporation (RFC)",
    description: "Appreciation from RFC for financial excellence and sound operational credibility.",
    status: "Verified in Catalogue",
  },
  {
    year: "2022",
    title: "ZED Bronze Quality Certification",
    organization: "Ministry of MSME, Government of India",
    description: "Zero Defect Zero Effect (ZED) Bronze level certification for manufacturing quality and eco-responsibility.",
    status: "Verified in Catalogue",
  },
  {
    year: "2023",
    title: "ZED Silver Quality Certification",
    organization: "Ministry of MSME, Government of India",
    description: "Elevated to ZED Silver level by Govt of India, confirming advanced precision quality systems.",
    status: "Verified in Catalogue",
  },
  {
    year: "2023",
    title: "Best Stone Technology (Multiwire) Award",
    organization: "Ministry of MSME / Stone Industry Forum",
    description: "Awarded Best Stone Technology for indigenous multiwire gangsaw innovation and precision cutting performance.",
    status: "Verified in Catalogue",
  },
] as const;

export const companyDiscrepancies = [
  {
    item: "Foundation Year",
    details: "Catalogue milestone lists 1993, while marketing emblems state 'Since 1994'. Both years preserved transparently until final company verification.",
  },
  {
    item: "Mono Wire Machine Count",
    details: "Catalogue 'ln.pdf' cites '120+ Machines Running Successfully'; another promotional material cites '200+'. We state the documented 120+ count with an advisory note.",
  },
  {
    item: "Wire Rope Diameter Unit",
    details: "Catalogue states '11.5 DIAMETER'. In accordance with industrial standards this represents mm, documented with verification notation.",
  },
] as const;

export const geographicalPresence = {
  national: [
    { state: "Rajasthan", locations: ["Rajsamand", "Bijoliya", "Chittorgarh", "Abu Road", "Dudu", "Jaipur", "Udaipur"] },
    { state: "Andhra Pradesh & Telangana", locations: ["Ongole", "Srikakulam", "Martur", "Karimnagar", "Chimakurthy"] },
    { state: "Karnataka & Tamil Nadu", locations: ["Bangalore", "Hosur", "Madurai", "Ilkal", "Jigani", "Puducherry"] },
    { state: "Gujarat", locations: ["Palanpur", "Himmatnagar", "Ahmedabad", "Halol"] },
  ],
  international: ["India (Domestic Hub)", "Egypt", "Azerbaijan", "Nepal"],
  exhibitions: [
    { name: "Stone Mart Jaipur", detail: "Regular premier machinery exhibitor" },
    { name: "STONA Bengaluru", detail: "National stone technology showcase" },
    { name: "Marmomac Verona (Italy)", detail: "International stone and wire saw representation" },
    { name: "GSTF Business Growing Platform", detail: "Active technology partner and knowledge sharer" },
  ],
};


export const stoneTypes = [
  "Granite",
  "Marble",
  "Sandstone",
  "Limestone",
  "Basalt",
  "Quartzite",
  "Feldspar",
  "Alaska White",
  "Lava Stone",
] as const;
