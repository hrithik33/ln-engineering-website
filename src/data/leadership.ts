// ============================================================================
// LN Engineering — Leadership Profiles Data
// Verified against Official Master Catalogue and Company Engineering Records
// ============================================================================

export interface LeaderMilestone {
  year: string;
  title: string;
  description: string;
}

export interface LeaderArea {
  title: string;
  description: string;
  tags?: string[];
}

export interface LeadershipProfile {
  slug: "ln-jangid" | "mayank-jangid" | "manish-jangid";
  name: string;
  role: string;
  badge: string;
  image: string;
  imageAlt: string;
  qualification?: string;
  experienceDisplay: string;
  headline: string;
  shortIntro: string;
  professionalOverview: string[];
  journeyWithLN: {
    overview: string;
    keyContributions: string[];
  };
  areasOfResponsibility: LeaderArea[];
  milestones: LeaderMilestone[];
  leadershipPhilosophy?: {
    quote: string;
    context: string;
  };
  relevantMachines: {
    name: string;
    series: string;
    href: string;
    description: string;
  }[];
}

export const leadershipProfiles: LeadershipProfile[] = [
  {
    slug: "ln-jangid",
    name: "Mr. L. N. Jangid",
    role: "Founder & Chairman",
    badge: "Founder & Chairman",
    image: "/images/about/leadership/mr-l-n-jangid.webp",
    imageAlt: "Mr. L. N. Jangid, Founder and Chairman of LN Engineering",
    experienceDisplay: "Decades of Precision Engineering",
    headline: "Pioneering Indigenous Heavy Stone Machinery in India Since 1993",
    shortIntro:
      "Founder and Chief Mechanical Architect of LN Engineering, Mr. L. N. Jangid spearheaded the development of India's earliest indigenous mining wire saws, marble gangsaws, and multiwire platforms from Rajsamand, Rajasthan.",
    professionalOverview: [
      "Mr. Laxmi Narayan Jangid is the visionary founder and executive chairman of LN Engineering (L N Machineries Pvt. Ltd.). With decades of hands-on mechanical research, machine tool design, and structural calculation, he established the company's precision manufacturing works at Rajsamand, Rajasthan — the epicentre of India's natural stone and marble mining industry.",
      "Beginning commercial machinery manufacturing in 1993, he championed the engineering principle that heavy stone machinery must achieve minimum mechanical load with maximum cutting efficiency. Under his structural direction, LN Engineering grew from an indigenous equipment manufacturer into an internationally recognized brand with over 500+ heavy stone processing machines built and commissioned across India, Egypt, Azerbaijan, and Nepal.",
      "He continues to govern company quality benchmarks, high safety factor fabrication tolerances, and long-term architectural machine development, ensuring every machine that leaves the Rajsamand works delivers decades of dependable quarry and plant service.",
    ],
    journeyWithLN: {
      overview:
        "From establishing early hydraulic quarry mining jacks in 1994 to engineering multi-wire diamond gangsaws and Siemens CNC profiling platforms, Mr. L. N. Jangid has directed every major generational leap in LN Engineering's history.",
      keyContributions: [
        "Pioneered indigenous diamond wire saw manufacturing for Indian quarry block extraction in 1995.",
        "Engineered the foundational heavy-duty block dressing systems and marble gangsaw platforms (1997–2000).",
        "Commenced global machinery exports to overseas natural stone fabricators in 2003.",
        "Guided the research and development of India's multiwire gangsaw series from 16 wires (2012) to the flagship 22-wire Slab Accuracy Master (2021).",
        "Mentored two generations of mechanical engineers and machine fabricators at the Rajsamand works.",
      ],
    },
    areasOfResponsibility: [
      {
        title: "Core Machine Design & Rigidity Calculations",
        description:
          "Formulates chassis dynamics, stress analysis, and vibration-damping parameters for heavy gantry columns and dual 2500 mm flywheels.",
        tags: ["Structural Rigidity", "Finite Element Logic", "Flywheel Dynamics"],
      },
      {
        title: "Executive Governance & Quality Benchmarks",
        description:
          "Sets factory inspection standards, heavy weld penetration criteria, and certified precision alignment protocols across the works.",
        tags: ["Quality Governance", "Plant Standards", "ISO Compliance"],
      },
      {
        title: "Indigenous Stone Machinery Innovation",
        description:
          "Directs indigenous R&D replacing expensive European imports with robust, serviceable, heavy-duty Indian alternatives tuned for harsh quarry environments.",
        tags: ["Import Substitution", "Quarry Engineering", "R&D Strategy"],
      },
      {
        title: "Long-Term Industrial Vision",
        description:
          "Steers corporate investments in large-bed machine tooling, factory expansion, and workforce development to serve global stone processing hubs.",
        tags: ["Corporate Strategy", "Capital Tooling", "Industry Legacy"],
      },
    ],
    milestones: [
      {
        year: "1993",
        title: "Establishment of Manufacturing Works",
        description:
          "Commenced precision mechanical engineering and machinery production in Rajsamand, Rajasthan.",
      },
      {
        year: "1994",
        title: "Mining Hydraulic Jacks Commercial Launch",
        description:
          "Engineered high-tonnage hydraulic jacks for quarry block extraction, establishing the 'Since 1994' brand identity.",
      },
      {
        year: "1995",
        title: "First Indigenous Mining Wire Saw",
        description:
          "Successfully fabricated and deployed LN's first diamond wire saw machine in Rajasthan marble quarries.",
      },
      {
        year: "2000",
        title: "Commercial Marble Gangsaw Introduction",
        description:
          "Introduced high-productivity marble gangsaws for commercial dimension slab processing.",
      },
      {
        year: "2003",
        title: "Commencement of International Exports",
        description:
          "Expanded machine deliveries into international natural stone markets, establishing LN Engineering overseas.",
      },
      {
        year: "2012–2026",
        title: "Multiwire Revolution & 500+ Fleet Benchmark",
        description:
          "Steered continuous development of 6-wire, 12-wire, 20-wire, 22-wire, and thick-slab multiwire platforms, crossing 500+ machines built.",
      },
    ],
    leadershipPhilosophy: {
      quote:
        "To deliver minimum load with maximum cutting efficiency, providing stone processing facilities with higher slab yields, reduced power consumption, dependable long-term durability, and maximum return on investment.",
      context: "Official LN Engineering Corporate Mission Statement formulated by the Founder.",
    },
    relevantMachines: [
      {
        name: "LN 2500 Mono Wire Saw",
        series: "5th Generation Mono Wire Series",
        href: "/machines/mono-wire-saw",
        description: "The foundational 2500 mm dual flywheel workhorse engineered for rugged 50-tonne block squaring.",
      },
      {
        name: "LN 22 Wire Gangsaw",
        series: "Slab Accuracy Master Flagship",
        href: "/machines/multiwire-saw",
        description: "100 HP flagship multiwire gangsaw running 22 diamond wires simultaneously for high-throughput commercial slab slicing.",
      },
    ],
  },
  {
    slug: "mayank-jangid",
    name: "Mr. Mayank Jangid",
    role: "Director",
    badge: "Director",
    image: "/images/about/leadership/mr-mayank-jangid.webp",
    imageAlt: "Mr. Mayank Jangid, Director at LN Engineering",
    qualification: "B.E. Mechanical & Production Oversight",
    experienceDisplay: "Heavy Fabrication & Plant Oversight",
    headline: "Directing Precision Machine Fabrication, Shop Floor Tooling & Field Commissioning",
    shortIntro:
      "Director overseeing mechanical manufacturing, heavy gantry fabrication, structural tolerance inspection, and turnkey plant commissioning at LN Engineering's Rajsamand works.",
    professionalOverview: [
      "Mr. Mayank Jangid holds a Bachelor of Engineering (B.E.) in Mechanical Engineering. He directs all physical manufacturing operations, heavy fabrication workshops, and precision assembly lines at LN Engineering's Rajsamand manufacturing works.",
      "His technical focus centers on structural rigidity, precision pillar alignment, dynamic vibration damping, and turnkey commissioning. Under his production oversight, the factory deploys heavy-duty machine tooling including HMT lathes, Swedish horizontal boring machinery, and large-bed planar shapers to maintain sub-millimeter tolerances on multi-tonne fabricated beams.",
      "He personally supervises the quality inspection protocols for every gantry frame, ensuring strict adherence to the company's &plusmn;0.2 mm parallel slab cutting standard before equipment is dispatched for domestic installation or overseas export.",
    ],
    journeyWithLN: {
      overview:
        "Leading the modernization of LN Engineering's shop floor infrastructure, Mr. Mayank Jangid has translated advanced mechanical engineering into streamlined, standardized production workflows.",
      keyContributions: [
        "Modernized the Rajsamand machine shop with high-precision horizontal boring and milling infrastructure.",
        "Standardized the 5th generation mono-wire frame fabrication, incorporating 32 heavy-duty guide rollers for zero wire deviation.",
        "Established rigid pre-dispatch testing protocols, verifying dynamic flywheel balance and hydraulic tension response under simulated full loads.",
        "Personally supervised turnkey plant installations and commissioning for major stone processors across Rajasthan, Andhra Pradesh, and Karnataka.",
        "Implemented rigorous Zero Defect Zero Effect (ZED) quality management practices throughout the fabrication plant.",
      ],
    },
    areasOfResponsibility: [
      {
        title: "Machinery Manufacturing & Heavy Fabrication",
        description:
          "Oversees plate cutting, heavy multi-pass welding, stress relief, and gantry assembly across all machine categories.",
        tags: ["Heavy Fabrication", "Weld Inspection", "Assembly Line"],
      },
      {
        title: "Structural Alignment & Tolerance Inspection",
        description:
          "Ensures vertical pillars, flywheel shafts, and revolving block turntables meet strict sub-millimeter planar standards.",
        tags: ["Tolerance Metrology", "Flywheel Balancing", "Guide Roller Setup"],
      },
      {
        title: "Machine Tooling & Plant Equipment",
        description:
          "Directs operations of the in-house machine tool park, including HMT heavy-duty lathes and Swedish horizontal boring machinery.",
        tags: ["HMT Tooling", "Boring Machining", "Plant Maintenance"],
      },
      {
        title: "Turnkey Field Commissioning",
        description:
          "Coordinates field engineers and technicians during foundation setup, electrical cabling, hydraulic hookup, and trial stone cuts.",
        tags: ["Site Commissioning", "Civil Layouts", "Field Engineering"],
      },
    ],
    milestones: [
      {
        year: "Key Initiative",
        title: "Machine Shop Modernization",
        description:
          "Integrated high-capacity Swedish horizontal boring machines and large-bed shapers into core fabrication workflows.",
      },
      {
        year: "Key Initiative",
        title: "Standardization of 32-Roller Guide Assembly",
        description:
          "Re-engineered vertical up/down carriage mechanics with 32 heavy-duty rollers, dramatically reducing wire flutter.",
      },
      {
        year: "Key Initiative",
        title: "Turnkey Cluster Commissioning Across India",
        description:
          "Supervised multi-machine installation projects across major stone corridors including Ongole, Martur, Hosur, and Bijoliya.",
      },
      {
        year: "Quality Focus",
        title: "ZED Quality Standard Implementation",
        description:
          "Embedded zero-defect fabrication controls on the shop floor, supporting company ZED quality certifications from Govt. of India.",
      },
    ],
    relevantMachines: [
      {
        name: "LN 2500 PRO Mono Wire Saw",
        series: "5th Generation Dual Dressing & Slicing",
        href: "/machines/mono-wire-saw#ln-2500-pro",
        description: "25 HP mono wire machine equipped with dual RPM vertical feed, wireless remote, and dressing plus slab cutting capability.",
      },
      {
        name: "LN 6 Wire Multiwire Gangsaw",
        series: "Thick Slab Processing Master",
        href: "/machines/multiwire-saw#ln-6-wire",
        description: "Rugged 40 HP multiwire system built for monuments, kerbstones, and heavy architectural thick slabs from 50 to 100 mm.",
      },
    ],
  },
  {
    slug: "manish-jangid",
    name: "Mr. Manish Jangid",
    role: "Director",
    badge: "Director",
    image: "/images/about/leadership/mr-manish-jangid.webp",
    imageAlt: "Mr. Manish Jangid, Director at LN Engineering",
    qualification: "B.E. Mechanical & Commercial Strategy",
    experienceDisplay: "R&D Strategy & Global Expansion",
    headline: "Spearheading Automation R&D, Domestic Stone Partnerships & International Markets",
    shortIntro:
      "Director leading new product development, Siemens CNC and IoT automation adoption, domestic cluster expansion, and international client relationships at LN Engineering.",
    professionalOverview: [
      "Mr. Manish Jangid holds a Bachelor of Engineering (B.E.) in Mechanical Engineering with specialized focus on commercial strategy and industrial automation. He drives LN Engineering's technological modernization, product line innovation, and commercial expansion.",
      "Recognizing the global shift toward automated dimension stone processing, he spearheaded the integration of Siemens S7 PLC controllers, digital touchscreen HMIs, and IoT remote telemetry into LN Engineering's 5th generation machinery lineup. This allows stone processing plant managers to monitor live cutting parameters, feed rates, and wire tension from mobile applications.",
      "On the commercial front, he oversees customer relationships, techno-commercial project proposals, and regional service networks across India's premier stone processing clusters (Rajasthan, Andhra Pradesh, Telangana, Karnataka, Tamil Nadu, and Gujarat), while spearheading exports to international markets including Egypt, Azerbaijan, and Nepal.",
    ],
    journeyWithLN: {
      overview:
        "Championing technological innovation and commercial reach, Mr. Manish Jangid has positioned LN Engineering as a modern, globally capable stone machinery brand.",
      keyContributions: [
        "Pioneered the development of the LN 2500 PROMAXX flagship mono wire saw, integrating live mobile app IoT telemetry and telescopic bellow protection.",
        "Spearheaded LN Engineering's entry into multi-axis CNC wire profiling with genuine Siemens CNC controllers (LN CNC 2100 PROMAXX).",
        "Expanded regional sales and service support networks, establishing direct regional offices in Ongole and Martur, Andhra Pradesh.",
        "Represented LN Engineering at national and international stone exhibitions including Marmomac Verona (Italy), Stone Mart Jaipur, and STONA Bengaluru.",
        "Established technical supply partnerships for high-endurance diamond wire rope with imported core wire.",
      ],
    },
    areasOfResponsibility: [
      {
        title: "New Product Development & R&D Strategy",
        description:
          "Formulates roadmap for next-generation stone machinery, incorporating Siemens CNC, multi-axis interpolation, and energy-efficient drive systems.",
        tags: ["Siemens Automation", "IoT Telemetry", "CNC R&D"],
      },
      {
        title: "Techno-Commercial Proposals & Solutions",
        description:
          "Translates complex customer quarry and factory requirements into precise machine configurations, foundation drawings, and commercial terms.",
        tags: ["Techno-Commercial", "Project Sizing", "Custom Configurations"],
      },
      {
        title: "Domestic & Global Market Expansion",
        description:
          "Builds enduring relationships with quarry owners, stone exporters, and machinery distributors across 20+ Indian clusters and overseas markets.",
        tags: ["Market Expansion", "Export Operations", "Exhibitions"],
      },
      {
        title: "Customer Support & Regional Service",
        description:
          "Manages after-sales service operations, rapid spare parts fulfillment, and direct engineer support from Rajsamand and South India regional offices.",
        tags: ["Client Success", "Service Network", "Rapid Spare Parts"],
      },
    ],
    milestones: [
      {
        year: "Key Initiative",
        title: "IoT Telemetry System Launch",
        description:
          "Developed and standardized built-in mobile app telemetry for the LN 2500 PROMAXX mono wire saw.",
      },
      {
        year: "Key Initiative",
        title: "Siemens CNC Wire Profile Introduction",
        description:
          "Brought genuine Siemens CNC multi-axis contouring to natural stone fabricators with the LN CNC 2100 PROMAXX.",
      },
      {
        year: "Key Initiative",
        title: "South India Regional Network Expansion",
        description:
          "Established direct regional sales and technical service representation in Ongole and Martur, Andhra Pradesh.",
      },
      {
        year: "Global Outreach",
        title: "International Stone Exhibition Showcase",
        description:
          "Showcased LN Engineering technology at Marmomac Verona (Italy), STONA Bengaluru, and Stone Mart Jaipur.",
      },
    ],
    relevantMachines: [
      {
        name: "LN 2500 PROMAXX",
        series: "5th Generation Smart Mono Wire (Flagship)",
        href: "/machines/mono-wire-saw#ln-2500-promaxx",
        description: "Flagship mono wire saw with live mobile app IoT telemetry, telescopic pillar bellow covers, and 7-inch PLC touchscreen.",
      },
      {
        name: "LN CNC 2100 PROMAXX",
        series: "Siemens CNC Multiaxis Profile Series",
        href: "/machines/cnc-wire-profile#ln-cnc-2100-promaxx",
        description: "Genuine Siemens CNC-driven wire machine for intricate 2D/3D architectural profiling, fluted columns, and curved moldings.",
      },
    ],
  },
];

export function getLeaderBySlug(slug: string): LeadershipProfile | undefined {
  return leadershipProfiles.find((l) => l.slug === slug);
}

export function getAllLeaderSlugs(): string[] {
  return leadershipProfiles.map((l) => l.slug);
}
