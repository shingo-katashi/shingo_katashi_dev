export const site = {
  name: "Shingo Katashi",
  title: "Full-Stack & AI Developer",
  tagline:
    "End-to-end product engineering: scalable systems and pragmatic AI that ships.",
  location: "Tokyo, Japan",
  email: "shingo.katashi.dev@gmail.com",
  phone: "+81 90 1994 0302",
  github: "https://github.com/shingo-katashi",
  companyUrl: "https://www.scalyx.ai/",
  openTo: "Open to remote or hybrid opportunities",
  /** Set to true after adding public/resume.pdf */
  resumeAvailable: false,
  resumePath: "/resume.pdf",
};

/** Shown in the desktop sidebar between intro and navigation. */
export const sidebarHighlights = {
  label: "Focus",
  items: [
    "LLM features & AI agents",
    "AI-integrated e-commerce platforms",
    "Intelligent bots · TypeScript, React, Python",
  ],
  currentRole: {
    label: "Currently",
    company: "Scalyx",
    url: "https://www.scalyx.ai/",
  },
};

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const aboutParagraphs = [
  "Full-stack and AI engineer in Tokyo with over a decade of experience shipping software teams depend on—B2B platforms, luxury e-commerce, real-time operations, and AI-augmented products for organizations across Europe, the United States, and Asia-Pacific.",
  "A large share of my work today is production AI: embedding LLMs in customer and internal products, designing agent and automation workflows, building retrieval and tool-calling layers, and balancing latency, cost, reliability, and safety before anything reaches users.",
  "I work best where product, design, and engineering meet—translating ambiguous goals into maintainable TypeScript and Python, clear APIs, and interfaces that stay understandable as complexity grows. I have owned critical systems solo, grown delivery teams from scratch, and shipped under strict review with heavy third-party integration.",
  "At Scalyx, a retail technology company, I led full-stack delivery for Sophia Fiori (sophiafiori.com)—a luxury fine jewelry store where I built the Next.js storefront, Python backend, admin panel, and CMS. On the wider Scalyx platform I also develop AI-assisted retail features, including conversational assistants and automation grounded in live business data.",
  "In parallel I build open-source AI software—autonomous browser agents, web research agents, local RAG stacks, and LLM-driven security tooling—so the architectures I use in paid work are grounded in code I have run, measured, and iterated on myself.",
];

export const education = {
  school: "Waseda University",
  degree:
    "Bachelor of Engineering — Computer Science and Communications Engineering",
  degreeShort: "Computer Science and Communications Engineering",
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  location?: string;
  url?: string;
  bullets: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Full-Stack & AI Developer",
    company: "Scalyx",
    period: "2022 — Present",
    location: "Tokyo, Japan",
    url: "https://www.scalyx.ai/",
    bullets: [
      "Led full-stack delivery for Sophia Fiori, a production luxury jewelry e-commerce experience (sophiafiori.com)—storefront, backend services, admin, and CMS.",
      "Owned architecture and implementation across customer-facing Next.js/React, Python APIs, content management, and internal operations tooling.",
      "Shipped catalog, merchandising, and checkout flows for a live fine-jewelry brand; site powered by the Scalyx retail stack.",
      "Design and ship LLM-powered retail features—conversational assistants, operational automation, and integrations with observability and guardrails suitable for production.",
      "Contribute to shared engineering standards across AI and full-stack codebases (typing, CI, API contracts, and safe model usage patterns).",
    ],
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AWS",
      "GCP",
      "LLM APIs",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Seidat Oy",
    period: "Aug 2021 — Apr 2022",
    location: "Remote",
    url: "https://seidat.com",
    bullets: [
      "Delivered features on Seidat's Meteor.js + React presentation platform within an Nx monorepo.",
      "Integrated Pipedrive and additional third-party services into the live product.",
      "Participated in rigorous code review—shipping reviewed work and reviewing peers' pull requests.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Meteor",
      "MongoDB",
      "Nx",
      "Docker",
      "Kubernetes",
      "GCP",
    ],
  },
  {
    title: "Technical Lead & Full-Stack Engineer",
    company: "AmericaBuild Technology",
    period: "2019 — 2022",
    url: "http://www.americabuildtechnology.com",
    bullets: [
      "Built and maintained scalable B2B infrastructure as the primary engineer for permit-management organizations.",
      "Developed a feature-rich admin panel with D3.js analytics alongside a WordPress marketing site for content updates.",
    ],
    technologies: [
      "Java",
      "Spring",
      "PostgreSQL",
      "Angular",
      "Docker",
      "WordPress",
    ],
  },
  {
    title: "Lead Developer",
    company: "Intelico",
    period: "2016 — 2021",
    url: "https://www.intelico.com",
    bullets: [
      "Designed service-oriented architecture adopted across the company; created Intelico One, the security asset management admin product.",
      "Grew the engineering team from 0 to 5 and coordinated delivery with offshore contributors on products such as ForecourtEye.",
    ],
    technologies: ["C#", "ASP.NET", "Angular", "Azure", "SQL Server"],
  },
  {
    title: "Director of Technology",
    company: "United Hardscapes Inc",
    period: "2018 — 2020",
    bullets: [
      "Owned technology strategy and delivery: marketplace, company sites, and internal admin for hardscaping operations.",
      "Led integrations and acted as the main technical contact for clients and business stakeholders.",
    ],
    technologies: [
      "NestJS",
      "PostgreSQL",
      "React",
      "TypeORM",
      "Socket.io",
      "AWS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Frontend Lead Engineer",
    company: "SKAEL",
    period: "2016 — 2019",
    url: "https://skael.com",
    bullets: [
      "Built core UI for a large-scale data pipeline (billions of records) and internal admin tooling.",
      "Delivered Babelfish, a real-time team communication product with video conferencing and ML/AI integrations.",
    ],
    technologies: ["Angular", "TypeScript", "Node.js", "Go", "PostgreSQL"],
  },
];

export type ProjectItem = {
  name: string;
  description: string;
  url?: string;
  github?: string;
  builtWith: string[];
  highlight?: boolean;
};

export const projects: ProjectItem[] = [
  {
    name: "Sophia Fiori — Luxury E-Commerce",
    description:
      "Online fine jewelry store built at Scalyx: I designed and delivered the public storefront, backend APIs, admin panel, and CMS for sophiafiori.com—from catalog and collections to merchandising and checkout. Powered by Scalyx on the infrastructure side.",
    url: "https://sophiafiori.com/",
    github: "https://github.com/shingo-katashi/sophia-frontend",
    builtWith: [
      "Next.js",
      "React",
      "Python",
      "PostgreSQL",
      "Admin panel",
      "CMS",
    ],
    highlight: true,
  },
  {
    name: "ARTEX",
    description:
      "AI-assisted autonomous security testing platform with a Go backend and Next.js dashboard—task orchestration, findings, asset graphs, and human-in-the-loop agent chat.",
    url: "https://artex-demo.vercel.app/",
    github: "https://github.com/shingo-katashi/artex",
    builtWith: ["Go", "Next.js", "LLM agents", "Graph visualization"],
    highlight: true,
  },
  {
    name: "Telegram Web",
    description:
      "Web control plane for large-scale Telegram operations—manage hundreds of accounts from one place and run Telegram’s native capabilities through automation (messaging, sessions, and account workflows). Python backend with a Next.js management UI.",
    github: "https://github.com/shingo-katashi/telegram_web",
    builtWith: [
      "Python",
      "Next.js",
      "Telegram API",
      "Multi-account automation",
    ],
    highlight: true,
  },
  {
    name: "Seidat Sales Platform",
    description:
      "Enterprise presentation and sales-flow product. Delivered features in a Meteor + React Nx monorepo with CRM integrations and strict review culture.",
    url: "https://app.seidat.com",
    builtWith: ["Meteor", "React", "MongoDB", "Nx monorepo", "GCP"],
    highlight: true,
  },
  {
    name: "Offline Candlestick Trainer",
    description:
      "Educational offline candlestick chart app: FastAPI serves read-only market data to a React UI with multi-timeframe aggregation—no external APIs at runtime.",
    github: "https://github.com/shingo-katashi/tradingapp",
    builtWith: ["FastAPI", "React", "Vite", "SQLite", "Financial data"],
    highlight: true,
  },
  {
    name: "AgentGPT",
    description:
      "Browser-based autonomous AI agent platform—goal-driven task loops, tooling, and UI for running agents without leaving the web client.",
    github: "https://github.com/shingo-katashi/AgentGPT",
    builtWith: ["TypeScript", "Autonomous agents", "Browser runtime"],
    highlight: true,
  },
  {
    name: "Research AI",
    description:
      "Python research agent that searches the web and writes structured reports—explores retrieval, planning, and output formatting outside production traffic.",
    github: "https://github.com/shingo-katashi/research-ai",
    builtWith: ["Python", "Web search", "Report generation"],
    highlight: false,
  },
  {
    name: "Local RAG Chatbot",
    description:
      "Fully local RAG pipeline for private document Q&A—embeddings and chat without sending files to third-party services.",
    github: "https://github.com/shingo-katashi/RAG-chatbot-local",
    builtWith: ["Python", "Local LLMs", "Embeddings"],
    highlight: false,
  },
  {
    name: "Intelico One",
    description:
      "B2B security asset management admin—complex workflows and role-based access on a long-lived Angular and ASP.NET stack.",
    url: "https://one.intelico.com",
    builtWith: ["C#", "ASP.NET", "Angular", "Azure"],
    highlight: false,
  },
  {
    name: "HawkAyes NFT Marketplace",
    description:
      "Solidity contracts and web3.js integration for an NFT marketplace—representative of earlier Web3 and DeFi work.",
    url: "https://www.hawkayes.com",
    builtWith: ["Solidity", "Web3.js", "BSC"],
    highlight: false,
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Angular",
      "HTML/CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Java/Spring",
      "GraphQL",
      "REST",
    ],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    label: "AI & ML",
    skills: [
      "LLM integration",
      "RAG",
      "AI agents",
      "LangChain",
      "Prompt evaluation",
    ],
  },
  {
    label: "Platform",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    label: "Also experienced",
    skills: ["Solidity", "Smart contracts", "NFT marketplaces", "Web3.js"],
  },
];

export const contactBlurb =
  "I’m open to senior full-stack and AI engineering opportunities—full-time or contract—with teams shipping B2B SaaS or production AI products. Based in Tokyo and happy to work remotely or hybrid with colleagues across time zones in English.";
