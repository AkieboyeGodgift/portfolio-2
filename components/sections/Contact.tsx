// src/components/sections/Contact.tsx
"use client";

import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Loader2, Mail, ShieldCheck } from "lucide-react";

export default function Contact() {
  // Integrate the specific Formspree hook using your endpoint key
  const [state, handleSubmit] = useForm("mzdqlnzk");

  return (
    <section id="contact" className="relative w-full border-t border-zinc-900 pt-24 pb-24 bg-black text-white scroll-mt-24">
      
      {/* Layout Boundary Header */}
      <div className="w-full px-6 md:px-12 lg:px-16 mb-16 flex items-baseline justify-between border-b border-zinc-900 pb-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-600">05 /</span>
          <h2 className="font-heading text-xs uppercase tracking-widest font-medium text-zinc-400">
            Initiate Connection
          </h2>
        </div>
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest hidden sm:inline">
          [ Secure Handshake protocol ]
        </span>
      </div>

      <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Communication Parameters (Cols 1-5) */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="font-heading text-3xl sm:text-5xl font-light tracking-tighter text-zinc-100 leading-[1.1] max-w-xl">
            Let's build something <span className="text-white font-normal">uncompromisingly efficient</span>.
          </h3>
          
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light max-w-md">
            Seeking to architect multi-tenant platforms, integrate autonomous agent models, or scale back-end infrastructure? Drop your technical brief here.
          </p>

          <div className="space-y-4 pt-4 max-w-sm">
            <div className="p-4 border border-zinc-900 bg-zinc-950/40 flex items-center gap-4">
              <Mail className="h-4 w-4 text-zinc-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Direct Channel</span>
                <a href="mailto:your-email@domain.com" className="text-xs text-zinc-300 hover:text-white transition-colors">
                  Contact via gateway
                </a>
              </div>
            </div>
            
            <div className="p-4 border border-zinc-900 bg-zinc-950/40 flex items-center gap-4">
              <ShieldCheck className="h-4 w-4 text-zinc-500" />
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Form Engine</span>
                <span className="text-xs text-zinc-400 font-light">E2E routed via Formspree TLS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Execution Form Block (Cols 6-12) */}
        <div className="lg:col-span-7 w-full lg:pl-6">
          {state.succeeded ? (
            /* Premium Success State Panel Instead of a generic alert box */
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-8 border border-zinc-800 bg-zinc-950/60 flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 bg-zinc-900 border border-zinc-800 text-white rounded-full">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-heading text-lg font-medium text-white">Transmission Successful</h4>
                <p className="text-xs text-zinc-500 font-light max-w-xs">
                  Your payload has resolved cleanly. I will evaluate the parameters and connect shortly.
                </p>
              </div>
            </motion.div>
          ) : (
            /* Interactive Technical Entry Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Identity / Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. Alex Grand"
                    className="w-full bg-zinc-950/40 border border-zinc-900 px-4 py-3.5 text-sm font-light text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 focus:bg-zinc-950 transition-all duration-300"
                  />
                </div>

                {/* Email Address Input Field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    Return Routing / Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. alex@infrastructure.io"
                    className="w-full bg-zinc-950/40 border border-zinc-900 px-4 py-3.5 text-sm font-light text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 focus:bg-zinc-950 transition-all duration-300"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs font-mono text-red-500 mt-1 block" />
                </div>
              </div>

              {/* Message Payload Textarea */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Project Parameters / Message Brief
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Outline the architectural scale, goals, and runtime targets..."
                  className="w-full bg-zinc-950/40 border border-zinc-900 px-4 py-3.5 text-sm font-light text-white placeholder-zinc-700 focus:outline-none focus:border-zinc-700 focus:bg-zinc-950 transition-all duration-300 resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs font-mono text-red-500 mt-1 block" />
              </div>

              {/* Dynamic Action Trigger Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-900 disabled:text-zinc-600 px-6 py-4 transition-all duration-300 select-none cursor-pointer disabled:cursor-not-allowed"
              >
                {state.submitting ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    Transmitting...
                  </>
                ) : (
                  <>
                    Dispatch Protocol
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}