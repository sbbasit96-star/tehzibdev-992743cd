export type Project = {
  slug: string;
  name: string;
  category: "Business" | "Professional" | "Landing Pages" | "E-commerce" | "Experimental";
  year: string;
  short: string;
  overview: string;
  challenge: string;
  goals: string[];
  discovery: string;
  design: string;
  development: string;
  tech: string[];
  features: string[];
  results: string[];
  lessons: string;
  accent: string; // hex for visual
  scale: "wide" | "tall" | "square";
};

export const PROJECTS: Project[] = [
  {
    slug: "atelier-north",
    name: "Atelier North",
    category: "Business",
    year: "2025",
    short: "Editorial site for an architecture practice.",
    overview: "A concept build exploring how a boutique architecture studio can present projects with the weight of a printed monograph while remaining fast and easy to update.",
    challenge: "Legacy sites in the architecture space tend to bury the work under heavy chrome. The brief called for restraint, story, and generous imagery.",
    goals: ["Reframe portfolio as narrative", "Load under 1.5s on 4G", "Editable by a non-technical team"],
    discovery: "Audited fifteen peer studios, mapped the client journey from discovery to first inquiry, and defined a content model built around case-driven story blocks.",
    design: "A single-column editorial rhythm, one accent gold rule, and generous type at 1.35 line-height. Photography carries the emotion; typography carries the credibility.",
    development: "Built on a modern React stack with a headless CMS. Images are art-directed and served responsively; motion is subtle and scroll-linked.",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Sanity CMS"],
    features: ["Custom project template", "Image mask reveals", "Editor-friendly CMS schema", "Locale-ready copy"],
    results: ["Concept build — metrics pending client rollout"],
    lessons: "Restraint is the hardest sell and the highest leverage.",
    accent: "#D4AF37",
    scale: "wide",
  },
  {
    slug: "meridian-legal",
    name: "Meridian Legal",
    category: "Professional",
    year: "2025",
    short: "Trust-first site for an independent legal practice.",
    overview: "A demonstration project positioning a solo attorney against larger firms by leaning into clarity, credentials, and a frictionless intake flow.",
    challenge: "Prospective clients arrive anxious. Every extra click costs a lead.",
    goals: ["Reduce time-to-inquiry", "Communicate authority without stiffness", "Support bilingual audience"],
    discovery: "Mapped a three-step intake journey and stripped the site to what a first-time visitor actually needs.",
    design: "Serif display, deep charcoal, single accent line. Confidence without ornament.",
    development: "Static-first pages, edge-cached forms, structured data for local SEO.",
    tech: ["React", "TypeScript", "Tailwind", "Zod"],
    features: ["Intake form with validation", "FAQ schema", "Bilingual toggle", "Focused CTAs on every page"],
    results: ["Sample build — real KPIs available upon client engagement"],
    lessons: "Clarity outperforms cleverness for high-consideration services.",
    accent: "#2C2C2C",
    scale: "tall",
  },
  {
    slug: "solstice-launch",
    name: "Solstice",
    category: "Landing Pages",
    year: "2024",
    short: "Product launch page for a wellness startup.",
    overview: "A single, cinematic landing page designed to convert cold traffic from paid social into pre-orders during a two-week launch window.",
    challenge: "One page had to do the work of a homepage, a product page, and an FAQ.",
    goals: ["Convert above 4%", "Load fast on mobile-first traffic", "Feel premium, not pushy"],
    discovery: "Message testing on three angles before build.",
    design: "Full-bleed hero, product photography with cinematic grain, sticky mobile CTA.",
    development: "Optimized for LCP under 1.2s. A/B ready.",
    tech: ["React", "Tailwind", "Framer Motion", "Vercel Analytics"],
    features: ["Sticky mobile CTA", "Waitlist form", "Testimonial marquee", "Section-level A/B slots"],
    results: ["Concept campaign — pending live results"],
    lessons: "The mobile CTA is the campaign.",
    accent: "#D4AF37",
    scale: "square",
  },
  {
    slug: "harbor-goods",
    name: "Harbor & Goods",
    category: "E-commerce",
    year: "2024",
    short: "Considered storefront for a specialty maker.",
    overview: "An e-commerce experience that treats products like objects in a gallery — deep photography, honest copy, and a checkout that gets out of the way.",
    challenge: "Small catalog, high price point, cautious buyers.",
    goals: ["Justify premium pricing", "Reduce checkout friction", "Support seasonal drops"],
    discovery: "Interviewed six existing customers to understand hesitation points.",
    design: "Slow, image-forward PDPs. Editorial collection pages.",
    development: "Headless commerce with a cart drawer and prefetched routes.",
    tech: ["React", "TypeScript", "Tailwind", "Shopify Hydrogen"],
    features: ["Cart drawer", "PDP image zoom", "Drop scheduler", "Editorial collection template"],
    results: ["Demo storefront — awaiting production launch"],
    lessons: "For considered goods, story is the conversion tool.",
    accent: "#0B0B0B",
    scale: "wide",
  },
  {
    slug: "outrun-portfolio",
    name: "Outrun",
    category: "Professional",
    year: "2024",
    short: "Portfolio site for a motion designer.",
    overview: "A personal portfolio designed around the reel — everything else exists to support the play button.",
    challenge: "Balance heavy media with fast load and clear inquiry path.",
    goals: ["Instant reel playback", "Case studies with real depth", "Bookable inquiry form"],
    discovery: "Reordered the case study template to lead with outcome.",
    design: "Dark background, generous negative space, one accent per project.",
    development: "Lazy media, prefetched navigation, embedded case-study video.",
    tech: ["React", "Tailwind", "Framer Motion"],
    features: ["Auto-play reel", "Case study template", "Scheduling embed"],
    results: ["Demo build — usable as a template"],
    lessons: "Show the work first. Explain it second.",
    accent: "#D4AF37",
    scale: "tall",
  },
  {
    slug: "field-notes",
    name: "Field Notes",
    category: "Experimental",
    year: "2025",
    short: "A typographic playground for long-form writing.",
    overview: "An experimental reading environment exploring how editorial typography can survive on the web without a print budget.",
    challenge: "Balance experimentation with readability.",
    goals: ["Hit AAA readability", "Support long-form focus", "Ship as a template"],
    discovery: "Prototyped four type scales before locking Fraunces + Inter.",
    design: "Two-column asymmetric grid, marginalia footnotes on desktop, single column on mobile.",
    development: "Static-first, MDX-driven.",
    tech: ["React", "MDX", "Tailwind"],
    features: ["Marginalia notes", "Reading progress", "Print stylesheet"],
    results: ["Personal experiment — used to prototype editorial systems"],
    lessons: "Restraint is a superpower for reading experiences.",
    accent: "#2C2C2C",
    scale: "square",
  },
];

export const PROJECT_CATEGORIES = [
  "All",
  "Business",
  "Professional",
  "Landing Pages",
  "E-commerce",
  "Experimental",
] as const;
