// src/components/sections/Experience.tsx
import { experiences } from "@/config/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative w-full border-t border-zinc-900 pt-24 pb-16 bg-black text-white scroll-mt-24">
      
      {/* Structural Header Padding Bounds */}
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 flex items-baseline justify-between border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-600">02 /</span>
          <h2 className="font-heading text-xs uppercase tracking-widest font-medium text-zinc-400">
            Professional History
          </h2>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:inline">
          [ Core Milestones ]
        </span>
      </div>

      {/* High-End Split Timeline Grid */}
      <div className="w-full px-6 md:px-12 lg:px-16 flex flex-col border-t border-zinc-900">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="group w-full py-12 border-b border-zinc-900 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 transition-all duration-300 relative px-2 hover:bg-zinc-950/40"
          >
            {/* Top Hover Boundary Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-transparent group-hover:bg-zinc-800 transition-colors duration-300" />

            {/* Left Track Column: Period/Dates (Cols 1-3) */}
            <div className="md:col-span-3 lg:col-span-2 shrink-0">
              <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors block md:sticky md:top-28">
                {exp.period}
              </span>
            </div>

            {/* Middle Track Column: Identity & Context (Cols 4-4) */}
            <div className="md:col-span-4 lg:col-span-4 space-y-1">
              <h3 className="font-heading text-xl font-light tracking-tight text-white group-hover:text-zinc-100 transition-colors flex items-center gap-3">
                <span className="font-mono text-[10px] text-zinc-600 group-hover:text-zinc-400 transition-colors">
                  0{index + 1}
                </span>
                {exp.role}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-zinc-500 tracking-wide pl-5">
                // {exp.company}
              </p>
            </div>

            {/* Right Track Column: Architectural Impact Points (Cols 5-12) */}
            <div className="md:col-span-5 lg:col-span-6 md:pl-4">
              <ul className="space-y-4 text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                {exp.points.map((point, ptIndex) => (
                  <li key={ptIndex} className="flex items-start gap-4 group/item">
                    {/* Minimalist marker instead of standard large circles */}
                    <span className="mt-2 h-[1px] w-2 shrink-0 bg-zinc-700 group-hover/item:bg-white group-hover:bg-zinc-500 transition-colors duration-300" />
                    <span className="group-hover/item:text-zinc-200 transition-colors duration-200">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}