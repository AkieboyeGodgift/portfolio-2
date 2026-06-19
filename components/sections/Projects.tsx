// src/components/sections/Projects.tsx
"use client";

import Image from "next/image";
import { projects } from "@/config/portfolio";
import { FolderCode, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

// Production deployment lookup table mapped directly to your project configuration keys
const projectUrlMap: Record<string, string> = {
  kinetix: "https://kinetix-phi.vercel.app/",
  agentic: "https://agentic-ruby.vercel.app/",
  giftech: "https://www.giftech.site/",
  giftechstores: "https://www.giftech.site/",
  webbuilder: "https://webadmin-gamma.vercel.app/",
  aiwebsitebuilder: "https://webadmin-gamma.vercel.app/",
};

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="projects" className="relative w-full border-t border-zinc-900 pt-24 pb-16 bg-black text-white scroll-mt-24">
      
      {/* 1. SECTION HEADER */}
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 flex items-baseline justify-between border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-600">03 /</span>
          <h2 className="font-heading text-xs uppercase tracking-widest font-medium text-zinc-400">
            Core Production Builds
          </h2>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:inline">
          STATUS: SYS_ENG_ACTIVE
        </span>
      </div>

      {/* 2. DETAILED ARCHITECTURE CARDS GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        {projects.map((project, idx) => {
          // Normalize slug/title keys to retrieve the absolute vercel or direct production paths
          const lookupKey = (project.slug || project.title || "").toLowerCase().replace(/\s+/g, "");
          const projectLink = projectUrlMap[lookupKey] || (project as any).link || `#projects`;

          return (
            <motion.div 
              key={project.slug || idx} 
              variants={itemVariants}
              className="group flex flex-col justify-between p-8 bg-zinc-950/30 border border-zinc-900 transition-all duration-500 relative hover:bg-zinc-950 hover:border-zinc-800"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      [{idx + 1}]
                    </span>
                    <div className="text-zinc-500 group-hover:text-white transition-colors">
                      <FolderCode className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className={`h-1 w-1 rounded-full ${
                      project.status === "Building" || project.status === "In Development"
                        ? "bg-amber-500 animate-pulse"
                        : "bg-emerald-500"
                    }`} />
                    <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-500">
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-2xl font-light tracking-tight text-white flex items-center justify-between gap-2">
                    {project.title}
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="p-1 z-20 relative">
                      <ArrowUpRight className="h-4 w-4 text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </a>
                  </h3>
                  <p className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest">
                    // {project.subtitle}
                  </p>
                </div>

                <p className="text-zinc-400 text-xs sm:text-sm mt-4 leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-8 pt-6 border-t border-zinc-900">
                  <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest block mb-3">
                    _architecture_features
                  </span>
                  <div className="space-y-2">
                    {project.features?.map((feature, fIdx) => (
                      <div 
                        key={fIdx}
                        className="text-xs text-zinc-400 font-light flex items-center gap-3 group/item"
                      >
                        <span className="font-mono text-[10px] text-zinc-700 group-hover:text-zinc-500 transition-colors">
                          +{fIdx + 1}
                        </span>
                        <span className="group-hover/item:text-zinc-200 transition-colors duration-150">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-wrap gap-2">
                {project.tech?.map((techItem) => (
                  <span 
                    key={techItem}
                    className="text-[10px] font-mono tracking-tight text-zinc-600 bg-black border border-zinc-900/60 px-2.5 py-1 transition-all duration-300 group-hover:border-zinc-800 group-hover:text-zinc-400"
                  >
                    #{techItem.toLowerCase().replace(/\s+/g, "")}
                </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 3. HORIZONTAL VISUAL INDEX CAROUSEL */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-24 border-t border-b border-zinc-900 bg-zinc-950/10 py-12 overflow-hidden"
      >
        <div className="w-full px-6 md:px-12 lg:px-16 mb-6">
          <p className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase">
            // Selected Works Portfolio Visual Index
          </p>
        </div>

        <div className="w-full overflow-x-auto no-scrollbar px-6 md:px-12 lg:px-16 py-2 flex gap-8 scroll-smooth snap-x snap-mandatory relative z-10">
          {projects.map((project, idx) => {
            const lookupKey = (project.slug || project.title || "").toLowerCase().replace(/\s+/g, "");
            const projectLink = projectUrlMap[lookupKey] || (project as any).link || `#projects`;
            const projectSrc = (project as any).image || `/projects/${project.slug || lookupKey}.png`;

            return (
              <a 
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                key={`carousel-${project.slug || idx}`}
                className="group relative flex-shrink-0 w-[300px] sm:w-[460px] aspect-[16/10] bg-zinc-950 border border-zinc-900 overflow-hidden isolate transition-all duration-500 hover:border-zinc-700 snap-start"
              >
                {/* Image Frame Layer */}
                <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 contrast-[1.05] brightness-[0.6] group-hover:brightness-95 transition-all duration-700 ease-out group-hover:scale-[1.02] z-0">
                  <Image 
                    src={projectSrc} 
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-w-md) 300px, 460px"
                    priority={idx < 2}
                  />
                </div>

                {/* Information Display Hover Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    0{idx + 1} / _index
                  </span>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-lg font-light tracking-tight text-white">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-white shrink-0 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </motion.div>

    </section>
  );
}