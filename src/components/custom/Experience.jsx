"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const { scrollYProgress } = useScroll();
  // We can use a subtle parallax for the background datemarks or just rely on standard scrolling
  
  const experiences = [
    { year: "2026 / 01", title: "COURT CATCHER", role: "DEVELOPER", desc: "An application engineered for seamless sports facility reservations and management." },
    { year: "2026 / 04", title: "HORIZON AI", role: "FRONTEND DEVELOPER", desc: "A specialized refactoring studio optimizing legacy codebases and AI integrations." },
    { year: "2026 / 08", title: "DENTARA", role: "DEVELOPER", desc: "A cloud-native ecosystem connecting dentistry students with patients." },
    { year: "2026 / 12", title: "ELDERKEY", role: "DEVELOPER", desc: "A secure, accessible platform engineered for specialized user needs." }
  ];

  return (
    <section id="experience" className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
      {/* Faint Dark Dotted Grid Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-32">
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Journey</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Chronicle</h2>
        </div>

        {/* Timeline Items */}
        <div className="space-y-40 md:space-y-64 relative">
          
          {/* Subtle connecting line down the middle or left */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[1px] bg-white/10" />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex flex-col md:flex-row items-center w-full"
              >
                {/* Background Massive Date Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[18vw] font-black uppercase text-white/[0.02] tracking-tighter whitespace-nowrap pointer-events-none select-none z-0">
                  {exp.year}
                </div>

                {/* Left Side Content Space */}
                <div className={`w-full md:w-1/2 relative z-10 flex ${isEven ? 'md:justify-end md:pr-20' : 'md:order-2 md:justify-start md:pl-20'}`}>
                  
                  {/* Content Box */}
                  <div className={`relative w-full max-w-lg pl-12 md:pl-0 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
                    
                    {/* Small Square Bullet Component */}
                    <div className={`absolute top-[10px] md:top-1/2 md:-translate-y-1/2 w-2 h-2 bg-white ${isEven ? 'left-[-4px] md:right-[-84px] md:left-auto' : 'left-[-4px] md:left-[-84px]'}`} />

                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-500 mb-6 block">
                      {exp.role}
                    </div>
                    <p className="text-lg text-zinc-400 font-light leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>

                </div>

                {/* Right Side Empty Space for Staggering */}
                <div className={`hidden md:block w-1/2 ${isEven ? '' : 'order-1'}`} />

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
