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
  phone: "+92-322-5555205",
  intro:
    "I build product-focused web experiences for SaaS teams, with a foundation in Laravel and Vue and recent work spanning React, Next.js, and Python-powered AI workflows.",
  summary:
    "Over the last five years, I have worked across link marketing, hospital software, ecommerce, and SEO content products. My strongest work lives where product thinking, fast iteration, and dependable engineering meet.",
  resumeHref: "/ahmed-hasnain-resume.pdf",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmedhasnain/" },
    { label: "GitHub", href: "https://github.com/hasnain-d4interactive" },
    { label: "Email", href: "mailto:ahmedhasnainmughal@gmail.com" },
  ] as ProjectLink[],
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const heroStats: HighlightStat[] = [
  { value: "5+ years", label: "shipping production web products" },
  { value: "2 SaaS products", label: "featured case studies" },
  { value: "Laravel to Python", label: "full-stack range" },
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
    title: "Growth and content systems",
    description:
      "Recent work has centered on marketing technology, analytics, and AI-assisted content operations for growth teams.",
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
  "Testing",
];

export const focusAreas = [
  "SaaS product development",
  "Marketing technology",
  "Analytics and reporting surfaces",
  "AI-assisted content workflows",
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
    label: "Email",
    value: "ahmedhasnainmughal@gmail.com",
    href: "mailto:ahmedhasnainmughal@gmail.com",
    description: "Best for hiring conversations, freelance work, and direct outreach.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ahmedhasnain",
    href: "https://www.linkedin.com/in/ahmedhasnain/",
    description: "Connect for product engineering roles, collaborations, and professional networking.",
  },
  {
    label: "GitHub",
    value: "github.com/hasnain-d4interactive",
    href: "https://github.com/hasnain-d4interactive",
    description: "A supporting link for code visibility and technical background.",
  },
  {
    label: "Location",
    value: "Rawalpindi, Pakistan",
    href: "https://maps.google.com/?q=Rawalpindi,Pakistan",
    description: "Open to remote product work and collaborative software teams.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
