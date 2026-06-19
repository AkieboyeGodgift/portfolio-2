// src/components/sections/Hero.tsx
"use client";

import { siteConfig, stats } from "@/config/portfolio";
import { ArrowUpRight, Terminal, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 16 },
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
    // Fixed vertical overflow on Infinix Note 8 by shifting hard height to min-height ranges, allowing layout to breathe
    <section className="relative min-h-[100dvh] md:h-screen flex flex-col justify-between bg-black text-white selection:bg-white selection:text-black overflow-hidden w-full pb-8 md:pb-12">
      
      {/* 1. TOP ANCHOR SPACE (Dynamically scaled layout padding) */}
      <div className="w-full h-8 sm:h-12 shrink-0" />

      {/* 2. CENTRALIZED HEADLINE BLOCK ENGINE */}
      <div className="w-full flex-grow flex items-center justify-center my-auto py-6">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          // Swapped sharp padding values to adaptive fluid units for hyper-narrow displays like the folded Z Fold
          className="w-full px-4 xs:px-6 md:px-12 lg:px-16 flex flex-col items-start gap-6 sm:gap-10"
        >
          {/* Identity Protocol Badge */}
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 border border-zinc-900 bg-zinc-950/20 backdrop-blur-sm tracking-widest uppercase text-[9px] sm:text-[10px] font-mono text-zinc-500"
          >
            <Terminal className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-400" />
            <span>Available for Roles & Core Contracts</span>
          </motion.div>

          {/* Main Typography Header Node */}
          <div className="space-y-4 sm:space-y-6 w-full max-w-5xl">
            <motion.h1 
              variants={fadeInUp}
              // Fixed typography overflow: text-4xl at lowest baseline preventing breakages on ultra-narrow phones
              className="font-heading text-4xl xs:text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-light tracking-tighter text-white leading-[0.95] sm:leading-[0.85] break-words"
            >
              I'm <span className="font-normal font-sans block sm:inline sm:mt-0">{siteConfig.name}</span>
            </motion.h1>
            
            <motion.h2 
              variants={fadeInUp}
              className="font-heading text-base sm:text-xl lg:text-2xl font-light text-zinc-400 tracking-tight max-w-3xl leading-relaxed"
            >
              {siteConfig.subtitle}
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp}
              className="max-w-2xl text-[11px] sm:text-sm text-zinc-600 font-light leading-relaxed tracking-wide font-mono"
            >
              {siteConfig.description} Specializing in the architecture of automated web infrastructures, agentic AI ecosystems, and premium digital solutions.
            </motion.p>
          </div>

          {/* Call-to-Action Protocol Buttons Group */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 bg-white text-black font-medium text-xs tracking-widest uppercase hover:bg-zinc-200 transition-all duration-300"
            >
              View Production Code
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href={siteConfig.resumeUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 bg-transparent border border-zinc-900 hover:border-zinc-700 font-medium text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-all duration-300"
            >
              <FileText className="h-4 w-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center text-[10px] tracking-widest uppercase text-zinc-600 hover:text-zinc-400 transition-colors duration-300 pt-1 sm:pt-0 sm:pl-4 font-mono text-center"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 3. BASE PROFILE DASHBOARD VALUES */}
      <div className="w-full px-4 xs:px-6 md:px-12 lg:px-16 shrink-0 mt-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12 w-full border-t border-zinc-900 pt-6">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col ${idx === 2 ? "col-span-2 md:col-span-1" : ""}`}
            >
              <span className="font-sans text-2xl sm:text-4xl font-light text-white tracking-tighter flex items-baseline gap-1">
                {stat.value}
                {idx === 0 && <span className="text-zinc-700 font-light text-lg sm:text-xl font-mono">/</span>}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}