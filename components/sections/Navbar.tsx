// src/components/sections/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { navItems, siteConfig } from "@/config/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-zinc-900 py-4"
          : "bg-transparent py-6"
      }`}
    >
      {/* Expanded Outer Layout wrapper matching the rest of the application */}
      <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Brand Core Anchor */}
        <a 
          href="#home" 
          className="font-sans text-base tracking-widest font-medium text-white hover:text-zinc-400 transition-colors uppercase"
        >
          Akieboye Godgift<span className="text-zinc-600">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[11px] font-mono tracking-widest text-zinc-400 hover:text-white uppercase transition-colors duration-200 flex items-center gap-1.5"
            >
              <span className="text-[9px] text-zinc-600 font-light">0{idx + 1}.</span>
              {item.label}
            </a>
          ))}
          
          {/* Brutalist Sharp Layout Button Action */}
          <a
            href="#contact"
            className="text-[10px] font-mono uppercase tracking-widest bg-white text-black hover:bg-zinc-200 px-5 py-2.5 transition-all duration-300"
          >
            Connect
          </a>
        </div>

        {/* Mobile Menu Toggle Control */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-zinc-400 hover:text-white transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-x-0 top-[65px] z-40 w-full bg-black/95 backdrop-blur-xl border-b border-zinc-900 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 bg-black">
          {navItems.map((item, idx) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-mono tracking-wider uppercase text-zinc-300 hover:text-white py-3 border-b border-zinc-900/50 transition-colors flex items-center gap-3"
            >
              <span className="text-[10px] text-zinc-600">0{idx + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="w-full text-center text-xs font-mono uppercase tracking-widest bg-white text-black py-4 transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}