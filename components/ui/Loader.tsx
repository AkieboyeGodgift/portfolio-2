// src/components/ui/Loader.tsx
"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fast but incremental premium loading speed simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Small buffer to let the user see 100% complete
          setTimeout(() => setIsVisible(false), 200);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 font-heading">
      <div className="w-full max-w-xs px-4 space-y-4">
        {/* Top Text State */}
        <div className="flex justify-between items-center text-xs tracking-widest text-zinc-400">
          <span className="animate-pulse flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            INITIALIZING CORE_SYS
          </span>
          <span className="text-emerald-400 font-mono">{Math.min(progress, 100)}%</span>
        </div>

        {/* Outer Premium Border Track */}
        <div className="w-full h-[3px] bg-zinc-900 border border-zinc-800 rounded-full overflow-hidden">
          {/* Inner Glowing Gradient Bar */}
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 shadow-[0_0_12px_rgba(16,185,129,0.4)] transition-all duration-70ms ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        {/* Undertext Status logs */}
        <p className="text-[10px] text-center font-mono text-zinc-600 tracking-wider uppercase">
          {progress < 40 && "Loading stack modules..."}
          {progress >= 40 && progress < 80 && "Binding modern interface metrics..."}
          {progress >= 80 && "Executing optimal system paint..."}
        </p>
      </div>
    </div>
  );
}