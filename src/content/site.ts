export type NavItem = {
  href: string;
  label: string;
};

export type HighlightStat = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type SocialLink = ProjectLink & {
  handle: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  productOverview: string;
  contributions: string[];
  techStack: string[];
  featureHighlights: string[];
  safeImpactStatements: string[];
  links: ProjectLink[];
  media: ProjectMedia;
};

export type Achievement = {
  title: string;
  detail: string;
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  description: string;
};

export const siteConfig = {
  name: "Ahmed Hasnain",
  firstName: "Ahmed",
  role: "Full-Stack Software Developer",
  shortRole: "Software Developer",
  location: "Rawalpindi, Pakistan",
  email: "ahmedhasnainmughal@gmail.com",
  phone: "+92 3225555205",
  phoneHref: "tel:+923225555205",
  siteUrl: "https://ahmedhasnain.com",
  logoSrc: "/logos/logo-light.svg",
  logoPrimarySrc: "/logos/logo-primary.svg",
  markSrc: "/logos/mark-light.svg",
  faviconSrc: "/logos/favicon.svg",
  portraitSrc: "/ahmedhasnain.jpeg",
  portraitAlt:
    "Portrait of Ahmed Hasnain, full-stack software developer and SaaS product engineer",
  intro:
    "Ahmed Hasnain is a full-stack software developer building SaaS products with Laravel, React, Vue, Next.js, and Python, with recent work spanning marketing tech, SEO content platforms, and AI-assisted product delivery.",
  summary:
    "Over the last five years, I have worked across link marketing, hospital software, ecommerce, and SEO content products. My work blends dependable engineering, product ownership, and disciplined AI-assisted workflows to ship faster without losing judgment.",
  heroTitle:
    "Ahmed Hasnain builds modern SaaS products with a practical full-stack mindset.",
  heroTagline:
    "I design and deliver product-facing software across Laravel, React, Vue, Next.js, and Python. Over the last year, I have used Claude, Codex, and ChatGPT extensively as part of a disciplined workflow for research, debugging, implementation support, and faster SaaS delivery.",
  aboutSummary:
    "I enjoy building software where product clarity, technical quality, and execution speed all matter. My background started with Laravel, WordPress, and Vue.js, then grew into SaaS product delivery, analytics workflows, and AI-assisted content systems.",
  aiWorkflowSummary:
    "For about one year, I have been using Claude, Codex, and ChatGPT extensively in a structured way to accelerate research, unblock implementation, sharpen debugging, and help deliver SaaS products with more speed and consistency.",
  resumeHref: "/ahmed-hasnain-resume.pdf",
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ahmedhasnain/",
      handle: "linkedin.com/in/ahmedhasnain",
    },
    {
      label: "GitHub",
      href: "https://github.com/hasnain-d4interactive",
      handle: "github.com/hasnain-d4interactive",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/AhmedHasnainMughal/",
      handle: "facebook.com/AhmedHasnainMughal",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ahmed_hasnain_mughal/",
      handle: "instagram.com/ahmed_hasnain_mughal",
    },
  ] as SocialLink[],
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: HighlightStat[] = [
  { value: "5+ years", label: "shipping production SaaS and web products" },
  { value: "1 year", label: "using AI tools extensively in delivery workflows" },
  { value: "Laravel to Python", label: "full-stack execution across product teams" },
];

export const strengths = [
  {
    title: "Product-first engineering",
    description:
      "I like working close to the product surface, where user workflows, business goals, and technical decisions connect.",
  },
  {
    title: "Reliable full-stack delivery",
    description:
      "From backend logic to UI polish, I am comfortable carrying a feature through design alignment, implementation, and production support.",
  },
  {
    title: "AI-assisted execution",
    description:
      "I use Claude, Codex, and ChatGPT in a practical way to move faster on research, debugging, implementation support, and delivery without outsourcing engineering judgment.",
  },
  {
    title: "Practical collaboration",
    description:
      "I work well with stakeholders, translate requirements into buildable scope, and keep quality high under real delivery pressure.",
  },
];

export const skills = [
  "Laravel",
  "PHP",
  "Vue.js",
  "React",
  "Next.js",
  "Python",
  "TypeScript",
  "JavaScript",
  "SQL",
  "REST APIs",
  "ClickHouse",
  "WordPress",
  "SEO tooling",
  "AI-assisted delivery",
];

export const focusAreas = [
  "SaaS product development",
  "Marketing technology",
  "Analytics and reporting surfaces",
  "AI-assisted product workflows",
  "Scalable backend features",
  "Modern frontend implementation",
];

export const achievements: Achievement[] = [
  {
    title: "Global Student Entrepreneur Awards regional winner",
    detail: "Entrepreneurs Organization, 2018",
  },
  {
    title: "COMSATS Project and Career Expo winner",
    detail: "Fall 2018",
  },
  {
    title: "Hult Prize runner-up",
    detail: "COMSATS chapter, 2018",
  },
  {
    title: "Visio Spark Competition runner-up",
    detail: "2018",
  },
];

export const education = {
  degree: "Electrical (Computer) Engineering",
  institution: "COMSATS University Islamabad",
  year: "2019",
};

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "D4 Interactive",
    role: "Software Developer",
    location: "Remote / Pakistan",
    start: "Apr 2024",
    end: "Present",
    summary:
      "Working on Replug, a marketing-focused SaaS product for branded links, analytics, QR codes, and campaign workflows.",
    highlights: [
      "Delivered bulk CSV link creation at high volume for operational marketing workflows.",
      "Built traffic routing and personalization-oriented features for smarter user journeys.",
      "Contributed to analytics and reporting experiences backed by ClickHouse.",
      "Improved legacy areas of the codebase while handling urgent bugs, admin tooling, and extension-related work.",
    ],
    stack: ["Laravel", "Vue.js", "ClickHouse", "JavaScript", "Chrome Extension"],
  },
  {
    company: "Care Soft",
    role: "PHP / Laravel / Vue.js Developer",
    location: "Pakistan",
    start: "Jul 2023",
    end: "Present",
    summary:
      "Building robust software components for a hospital management system with a focus on maintainable architecture and client requirements.",
    highlights: [
      "Worked with Laravel, Core PHP, SQL, jQuery, and Vue.js in a business-critical healthcare environment.",
      "Translated stakeholder needs into usable system functionality.",
      "Participated in agile delivery and quality-focused iteration cycles.",
      "Improved schema design for integrity, security, and performance.",
    ],
    stack: ["Laravel", "Vue.js", "Core PHP", "SQL", "jQuery"],
  },
  {
    company: "The Right Software",
    role: "Mid-Level Laravel and Vue.js Developer",
    location: "Rawalpindi, Pakistan",
    start: "Jan 2022",
    end: "Jun 2023",
    summary:
      "Worked on a large multivendor ecommerce platform with multiple modules and modern user-facing experiences.",
    highlights: [
      "Built frontend experiences with Vue.js and backend capabilities with Laravel.",
      "Contributed to a scalable multivendor commerce product across several functional modules.",
      "Worked with Stripe Connect and advanced payment workflows.",
    ],
    stack: ["Laravel", "Vue.js", "Stripe Connect", "SQL"],
  },
  {
    company: "Infinity Sol",
    role: "Laravel & Vue Developer",
    location: "Pakistan",
    start: "Jul 2021",
    end: "Dec 2021",
    summary:
      "Delivered client projects using Laravel and WordPress with an emphasis on performance, usability, and CMS flexibility.",
    highlights: [
      "Built Laravel applications with backend logic and database design.",
      "Customized WordPress sites with themes and plugin-level work.",
      "Integrated APIs and handled cross-browser debugging and optimization.",
    ],
    stack: ["Laravel", "Vue.js", "WordPress", "REST APIs"],
  },
  {
    company: "SB Software Solutions",
    role: "WordPress & Laravel Developer",
    location: "Pakistan",
    start: "Jan 2020",
    end: "Jun 2021",
    summary:
      "Built and customized business websites for local and international clients across multiple WordPress page-builder ecosystems.",
    highlights: [
      "Created client websites with Elementor, WPBakery, and other builder stacks.",
      "Handled theme customization, plugin integrations, and content updates.",
      "Focused on responsive behavior and SEO-friendly layouts.",
    ],
    stack: ["WordPress", "Laravel", "Elementor", "SEO"],
  },
];

export const projects: Project[] = [
  {
    slug: "replug",
    name: "Replug",
    tagline: "Link marketing SaaS for branded links, bio pages, QR codes, and campaign analytics.",
    summary:
      "A marketer-facing SaaS product where I worked across backend, frontend, analytics-related flows, and internal tooling.",
    productOverview:
      "Replug helps teams manage branded short links, QR codes, bio pages, traffic routing, campaign tracking, and reporting in one product built for digital marketing workflows.",
    contributions: [
      "Worked on product features that support link management, routing rules, analytics-oriented workflows, and marketer-facing operations.",
      "Built high-volume bulk link creation flows using CSV imports for large campaign batches.",
      "Contributed to shortened QR and bio-link related experiences, internal admin tools, and extension-connected work.",
      "Improved performance and maintainability in legacy parts of the codebase while supporting production stability.",
    ],
    techStack: ["Laravel", "Vue.js", "JavaScript", "ClickHouse", "MySQL"],
    featureHighlights: [
      "Branded short links and campaign-friendly workflows",
      "Bulk link creation for operational scale",
      "Traffic routing and personalization logic",
      "Analytics surfaces for tracking and reporting",
      "QR and bio-link product capabilities",
    ],
    safeImpactStatements: [
      "Supported production features for a live B2B SaaS used in digital marketing contexts.",
      "Contributed across both product delivery and technical maintenance, not just isolated tickets.",
      "Worked in areas where usability, reporting, and operational scale all mattered at once.",
    ],
    links: [
      { label: "Visit Replug", href: "https://replug.io/" },
      { label: "Replug Features", href: "https://replug.io/features" },
    ],
    media: {
      src: "/images/replug-visual.svg",
      alt: "Stylized product illustration inspired by link analytics and branded short-link workflows",
    },
  },
  {
    slug: "contentpen",
    name: "ContentPen",
    tagline: "AI-powered SEO content platform for research, writing, optimization, publishing, and analysis.",
    summary:
      "My current product context around Python-connected workflows, AI content tooling, and SEO-focused editorial operations.",
    productOverview:
      "ContentPen is an AI and SEO content platform designed to help teams research keywords, generate and refresh articles, manage linking, schedule publishing, and monitor content performance.",
    contributions: [
      "Contributing to an AI-assisted content product focused on planning, optimization, publishing, and editorial workflows.",
      "Working around Python-oriented systems and product experiences that combine automation with user-facing controls.",
      "Helping shape a platform that brings research, writing, optimization, and publishing into one connected workflow.",
    ],
    techStack: ["Python", "Next.js", "React", "SEO tooling", "Product UX"],
    featureHighlights: [
      "AI article generation and refresh workflows",
      "SEO optimization and linking support",
      "Publishing and scheduling-oriented experiences",
      "Editorial operations for content teams",
      "Analytics-informed content improvement loops",
    ],
    safeImpactStatements: [
      "Represents my move into AI-assisted product workflows alongside my full-stack web background.",
      "Shows experience beyond traditional CRUD apps into content automation and search-focused product logic.",
      "Strengthens my profile as a developer who can work across both frontend experience and backend-supported product systems.",
    ],
    links: [
      { label: "Visit ContentPen", href: "https://contentpen.ai/" },
      {
        label: "Content Planning Feature",
        href: "https://contentpen.ai/content-planning-and-scheduling",
      },
    ],
    media: {
      src: "/images/contentpen-visual.svg",
      alt: "Stylized product illustration inspired by AI-assisted SEO and content planning workflows",
    },
  },
];

export const secondaryBuilds = [
  {
    name: "Hospital Management System",
    description:
      "Built software components for a hospital environment with strong attention to maintainability, data integrity, and real client requirements.",
  },
  {
    name: "Multivendor Ecommerce Platform",
    description:
      "Contributed to a large-scale commerce product with multiple modules and Stripe Connect based payment workflows.",
  },
  {
    name: "Tender Management System",
    description:
      "Delivered a dashboard-driven system with PDFs, pipeline setup, order workflows, and operational tooling using Laravel and Vue.js.",
  },
];

export const contactMethods: ContactMethod[] = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: siteConfig.phoneHref,
    description:
      "Direct line for hiring conversations, project discussions, and product collaboration.",
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Best for detailed outreach, role discussions, and longer project context.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedhasnain",
    href: "https://www.linkedin.com/in/ahmedhasnain/",
    description: "A strong place to connect for full-time roles, collaborations, and professional networking.",
  },
  {
    label: "GitHub",
    value: "github.com/hasnain-d4interactive",
    href: "https://github.com/hasnain-d4interactive",
    description: "Supporting technical profile with repository visibility and developer context.",
  },
  {
    label: "Facebook",
    value: "facebook.com/AhmedHasnainMughal",
    href: "https://www.facebook.com/AhmedHasnainMughal/",
    description: "Personal profile link available for broader contact and social presence.",
  },
  {
    label: "Instagram",
    value: "instagram.com/ahmed_hasnain_mughal",
    href: "https://www.instagram.com/ahmed_hasnain_mughal/",
    description: "Social profile link that adds a more personal touch to the portfolio presence.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
