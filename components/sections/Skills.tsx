// src/components/sections/Skills.tsx
"use client";

import { skills } from "@/config/portfolio";
import { Code2, Globe, Server, Cpu, Layers } from "lucide-react";
import { motion, Variants } from "framer-motion";


// 1. Your existing simple icons list (without AWS)
import { 
  SiTypescript, SiJavascript, SiPython, SiGo,
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiPrisma,
  SiGooglecloud, SiGit, SiGithubactions,
  SiOpenai, SiLangchain, SiFastapi, SiDocker
} from "react-icons/si";

// 2. Add the official cloud infrastructure logo from fa6
import { FaAws } from "react-icons/fa6";

// safe dictionary mapping string data variants directly to React elements
const techLogoMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // Languages
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  go: SiGo,
  golang: SiGo,

  // Frontend Engineering
  react: SiReact,
  nextjs: SiNextdotjs,
  "next.js": SiNextdotjs,
  tailwind: SiTailwindcss,
  tailwindcss: SiTailwindcss,
  redux: SiRedux,

  // Backend / Infrastructure Architecture
  nodejs: SiNodedotjs,
  "node.js": SiNodedotjs,
  express: SiExpress,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  mongodb: SiMongodb,
  prisma: SiPrisma,

  // Artificial Intelligence Systems
  openai: SiOpenai,
  langchain: SiLangchain,
  fastapi: SiFastapi,

  // Deployment Tooling / Cloud Infrastructure
  docker: SiDocker,
  aws: FaAws,
  gcp: SiGooglecloud,
  git: SiGit,
  "githubactions": SiGithubactions,
};

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const categoryMeta = [
    { key: "languages", label: "Languages", icon: Code2 },
    { key: "frontend", label: "Frontend Engineering", icon: Globe },
    { key: "backend", label: "Backend & Systems", icon: Server },
    { key: "aiAutomation", label: "AI & Automation", icon: Cpu },
    { key: "devopsTools", label: "DevOps & Tooling", icon: Layers },
  ];

  return (
    <section id="skills" className="relative w-full border-t border-zinc-900 pt-24 pb-16 bg-black text-white scroll-mt-24">
      
      {/* Layout Boundary Header aligned precisely to system specs */}
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 flex items-baseline justify-between border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-600">04 /</span>
          <h2 className="font-heading text-xs uppercase tracking-widest font-medium text-zinc-400">
            Technical Ecosystem
          </h2>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:inline">
          [ Core Stack v3.0 ]
        </span>
      </div>

      {/* Grid Layout Engine */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {categoryMeta.map((category) => {
          const CategoryIcon = category.icon;
          const skillItems = skills[category.key as keyof typeof skills] || [];

          return (
            <motion.div 
              key={category.key}
              variants={cardVariants}
              className="p-8 bg-zinc-950/30 border border-zinc-900 transition-all duration-300 hover:bg-zinc-950 hover:border-zinc-800 flex flex-col justify-between group"
            >
              <div>
                {/* Category Title Sub-Header */}
                <div className="flex items-center gap-3 mb-8 border-b border-zinc-900/60 pb-4">
                  <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                    <CategoryIcon className="h-4 w-4" />
                  </div>
                  <h3 className="font-heading text-xs uppercase tracking-wider font-medium text-zinc-300">
                    {category.label}
                  </h3>
                </div>

                {/* Sub-grid system presenting exact tech targets */}
                <div className="grid grid-cols-2 gap-3">
                  {skillItems.map((skill) => {
                    // Strips space and transforms characters down for smooth match testing
                    const lookupKey = skill.toLowerCase().replace(/\s+/g, "");
                    const LogoComponent = techLogoMap[lookupKey];

                    return (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 p-2.5 border border-zinc-900 bg-black/40 text-zinc-400 hover:text-white hover:border-zinc-800 transition-all duration-200 group/item"
                      >
                        {LogoComponent ? (
                          <LogoComponent className="h-4 w-4 text-zinc-500 group-hover/item:text-white transition-colors duration-200 shrink-0" />
                        ) : (
                          <span className="h-1 w-1 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors shrink-0" />
                        )}
                        <span className="text-xs font-light tracking-tight truncate">
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

    </section>
  );
}