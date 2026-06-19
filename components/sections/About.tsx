// src/components/sections/About.tsx
import { specializations } from "@/config/portfolio";
import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full border-t border-zinc-900 pt-24 pb-16 bg-black text-white scroll-mt-24">
      
      {/* Structural Header Padding Bounds */}
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 flex items-baseline justify-between border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-600">01 /</span>
          <h2 className="font-heading text-xs uppercase tracking-widest font-medium text-zinc-400">
            Profile & Architecture
          </h2>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:inline">
          [ Engineering Spec v2.6 ]
        </span>
      </div>

      {/* Fluid Split Column Grid Layout */}
      <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Core Narrative Anchors (Takes up 5/12 of the viewport) */}
        <div className="lg:col-span-5 space-y-10">
          <h3 className="font-heading text-3xl sm:text-5xl font-light tracking-tighter text-zinc-100 leading-[1.1] max-w-xl">
            Building fluid, distributed systems at the convergence of <span className="text-white font-normal">AI orchestration</span> and <span className="text-white font-normal">scalable commerce</span>.
          </h3>
          
          <div className="space-y-6 text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
            <p>
              I am a Software Engineer specializing in designing and implementing performant web infrastructures, autonomous agent systems, multi-tenant e-commerce architectures, and intelligent workflow automation.
            </p>
            <p>
              My primary focus lies in refining complex business parameters into intuitive, production-grade applications with zero-compromise security controls and high concurrency limits.
            </p>
          </div>

          {/* Clean Brutalist Education Card */}
          <div className="p-6 rounded-xl bg-zinc-950 border border-zinc-900 flex items-start gap-4 transition-colors duration-300 hover:border-zinc-800 max-w-xl">
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-heading text-xs font-medium text-zinc-200 tracking-wider uppercase font-mono">
                Academic Framework
              </h4>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed font-light">
                Currently studying Software Engineering within the Faculty of Computing. Actively channeling theoretical data paradigms straight into live production multi-tenant cloud platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: High-End Asymmetric Specialization Stack (Takes up 7/12) */}
        <div className="lg:col-span-7 space-y-4 w-full lg:pl-6">
          <div className="w-full mb-6">
            <h4 className="font-heading text-[10px] uppercase tracking-widest font-mono text-zinc-600">
              // Primary Core Fields
            </h4>
          </div>
          
          {/* List Layout with sharp line dividers instead of generic grid blocks */}
          <div className="flex flex-col w-full border-t border-zinc-900">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="group w-full py-8 border-b border-zinc-900 flex flex-col sm:flex-row sm:items-start justify-between gap-4 transition-all duration-300 relative px-2 hover:bg-zinc-950/40"
              >
                {/* Asymmetric Hover Accent Line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-zinc-700 transition-colors duration-300" />
                
                <div className="sm:w-1/3 shrink-0">
                  <h5 className="font-heading text-md font-medium text-white tracking-tight group-hover:text-zinc-100 transition-colors flex items-center gap-2">
                    <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                      0{index + 1}
                    </span>
                    {spec.title}
                  </h5>
                </div>
                
                <div className="sm:w-2/3">
                  <p className="text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-300 leading-relaxed font-light transition-colors">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}