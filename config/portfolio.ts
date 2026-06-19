// src/config/portfolio.ts

export const siteConfig = {
  name: "Akieboye Godgift",
  title: "Software Engineer",
  subtitle: "Building AI Products, SaaS Platforms & Scalable Web Applications",
  description: "4+ years of experience designing and building web applications, AI-powered products, ecommerce platforms, and automation systems.",
  resumeUrl: "/resume.pdf", // Place your resume in the public folder
  socials: {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
  },
};

export const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Major Products Built", value: "4" },
  { label: "SaaS & AI Systems", value: "Multiple" },
];

export const specializations = [
  {
    title: "Full Stack Engineering",
    description: "Building complete, end-to-end web applications from fluid frontends to robust backend architectures."
  },
  {
    title: "AI Product Development",
    description: "Developing intelligent agentic workflows, LLM integrations, and automated RAG systems."
  },
  {
    title: "SaaS & Multi-Tenancy",
    description: "Designing scalable software products featuring complex database architectures and multi-tenant isolation."
  }
];

export const experiences = [
  {
    company: "AGM Techpluse",
    role: "Software Engineering Intern",
    period: "Present", // Update as needed
    points: [
      "Assisted in building and maintaining web applications using modern frameworks.",
      "Collaborated with cross-functional teams to deploy scalable backend services.",
      "Optimized frontend and backend codebases for maximum performance and responsiveness."
    ]
  },
  {
    company: "Jobeny Tech",
    role: "Website Developer",
    period: "Previous",
    points: [
      "Developed high-performance, responsive business websites tailored to client needs.",
      "Integrated modern web technologies, payment processing APIs, and custom management tools.",
      "Improved website SEO, overall performance scores, and user experience metrics."
    ]
  }
];

export const projects = [
  {
    title: "Agentic",
    slug: "agentic",
    subtitle: "SBOS SaaS Builder for AI Agents",
    description: "An AI-powered platform enabling users to build, deploy, and manage complex, multi-agent SaaS applications seamlessly.",
    status: "Building",
    tech: ["Next.js", "TypeScript", "AI APIs", "PostgreSQL", "Tailwind CSS"],
    features: ["Agent Workflow Builder", "Multi-Agent Architecture", "SaaS Generation", "Automation Workflows"]
  },
  {
    title: "Kinetix",
    slug: "kinetix",
    subtitle: "AI-Powered Storefront & Product SEO Platform",
    description: "An intelligent platform that helps businesses discover trending products and automatically generates highly optimized SEO product content.",
    status: "In Development",
    tech: ["Next.js", "TypeScript", "AI APIs", "PostgreSQL", "Prisma"],
    features: ["Product Discovery Engine", "AI SEO Writer", "Storefront Generation", "Automated Research"]
  },
  {
    title: "Giftech",
    slug: "giftech",
    subtitle: "Multi-Tenant Ecommerce Platform",
    description: "A highly scalable ecommerce engine allowing multiple distinct fashion vendors to operate autonomously under a single system architecture.",
    status: "MVP Completed",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Paystack API"],
    features: ["Multi-Tenant Isolation", "Vendor Dashboards", "Advanced Order Processing", "Unified Catalog Management"]
  },
  {
    title: "AI Website Builder",
    slug: "ai-website-builder",
    subtitle: "Prompt-to-Website Generator",
    description: "An AI infrastructure engine that compiles text prompts into clean code, automatically building and deploying fully responsive websites.",
    status: "Completed",
    tech: ["Next.js", "AI APIs", "Vercel API", "Tailwind CSS"],
    features: ["Instant Website Generation", "Automated Deployment Pipeline", "AI Content Engine"]
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "Python", "HTML", "CSS"],
  frontend: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui", "Redux Toolkit"],
  backend: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "REST APIs"],
  aiAutomation: ["LLM Integration", "AI Agents", "Workflow Automation", "Prompt Engineering", "RAG Systems"],
  devopsTools: ["Docker", "Vercel", "Git/GitHub", "Postman", "CI/CD Platforms"]
};

// Add this to the bottom of src/config/portfolio.ts

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];