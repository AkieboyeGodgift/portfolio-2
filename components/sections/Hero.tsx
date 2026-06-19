// src/components/sections/Hero.tsx
"use client";

import { siteConfig, stats } from "@/config/portfolio";
import { ArrowUpRight, Terminal, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 }
    }
  };

  return (
    <section className="relative h-screen min-h-[680px] sm:min-h-[800px] flex flex-col justify-between bg-black text-white selection:bg-white selection:text-black overflow-hidden w-full">
      
      {/* 1. TOP ANCHOR SPACE (Keeps geometry uniform) */}
      <div className="w-full h-12 shrink-0" />

      {/* 2. CENTRALIZED HEADLINE BLOCK ENGINE */}
      <div className="w-full flex-grow flex items-center justify-center">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full px-6 md:px-12 lg:px-16 flex flex-col items-start gap-8 sm:gap-10"
        >


          {/* Main Typography Header Node */}
          <div className="space-y-6 max-w-5xl">
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light tracking-tighter text-white leading-[0.9] sm:leading-[0.85]"
            >
              I'm <span className="font-normal font-sans block sm:inline sm:mt-0">{siteConfig.name}</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-lg sm:text-xl lg:text-2xl font-light text-zinc-400 tracking-tight max-w-3xl leading-relaxed"
            >
              {siteConfig.subtitle}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-xs sm:text-sm text-zinc-600 font-light leading-relaxed tracking-wide font-mono"
            >
              {siteConfig.description} Specializing in the architecture of automated web infrastructures, agentic AI ecosystems, and premium digital solutions.
            </motion.p>
          </div>

          {/* Call-to-Action Protocol Buttons Group */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-medium text-xs tracking-widest uppercase hover:bg-zinc-200 transition-all duration-300"
            >
              View Production Code
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href={siteConfig.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-zinc-900 hover:border-zinc-700 font-medium text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-all duration-300"
            >
              <FileText className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-400 transition-colors duration-300 pt-2 sm:pt-0 sm:pl-4 font-mono"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. BASE PROFILE DASHBOARD VALUES */}
      <div className="w-full px-6 md:px-12 lg:px-16 pb-12 shrink-0">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 w-full border-t border-zinc-900 pt-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="font-sans text-3xl sm:text-4xl font-light text-white tracking-tighter flex items-baseline gap-1">
                {stat.value}
                {idx === 0 && <span className="text-zinc-700 font-light text-xl font-mono">/</span>}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono mt-2 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}