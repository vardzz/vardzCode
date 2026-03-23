"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Experience() {
  const containerRef = useRef(null);
  
  // Track scroll progress within the container for the progress line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out the scroll progress for natural movement
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    { year: "2026 / 01", title: "COURT CATCHER", role: "DEVELOPER", desc: "An application engineered for seamless sports facility reservations and management." },
    { year: "2026 / 04", title: "HORIZON AI", role: "FRONTEND DEVELOPER", desc: "A specialized refactoring studio optimizing legacy codebases and AI integrations." },
    { year: "2026 / 08", title: "DENTARA", role: "DEVELOPER", desc: "A cloud-native ecosystem connecting dentistry students with patients." },
    { year: "2026 / 12", title: "ELDERKEY", role: "DEVELOPER", desc: "A secure, accessible platform engineered for specialized user needs." }
  ];

  return (
    <section id="experience" ref={containerRef} className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-32">
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Journey</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Chronicle</h2>
        </div>

        {/* Timeline Items Container */}
        <div className="space-y-40 md:space-y-64 relative">
          
          {/* Progress Connecting Line */}
          <div className="absolute top-0 bottom-0 left-[15px] md:left-1/2 w-[1px] bg-white/10" />
          
          <motion.div 
            className="absolute top-0 left-[15px] md:left-1/2 w-[1px] bg-white origin-top z-20"
            style={{ scaleY, height: "100%" }}
          />

          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <ExperienceItem 
                key={idx} 
                exp={exp} 
                isEven={isEven} 
                idx={idx}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

function ExperienceItem({ exp, isEven, idx }) {
  const itemRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Animate the background date's opacity and parallax as it crosses the viewport
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.03, 0.1, 0.03]);
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col md:flex-row items-center w-full"
    >
      {/* Background Massive Date Watermark with Parallax and Dynamic Opacity */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[18vw] font-black uppercase tracking-tighter whitespace-nowrap pointer-events-none select-none z-0"
        style={{ opacity, y, color: "white" }}
      >
        {exp.year}
      </motion.div>

      {/* Content Side */}
      <div className={`w-full md:w-1/2 relative z-10 flex ${isEven ? 'md:justify-end md:pr-20' : 'md:order-2 md:justify-start md:pl-20'}`}>
        
        <div className={`relative w-full max-w-lg pl-12 md:pl-0 ${isEven ? 'text-left md:text-right' : 'text-left'}`}>
          {/* Animated Square Bullet */}
          <motion.div 
            className={`absolute top-[10px] md:top-1/2 md:-translate-y-1/2 w-2 h-2 bg-white z-30 ${isEven ? 'left-[-4px] md:right-[-84px] md:left-auto' : 'left-[-4px] md:left-[-84px]'}`}
            style={{ 
              scale: useTransform(scrollYProgress, [0.45, 0.5, 0.55], [1, 2, 1]),
              boxShadow: useTransform(scrollYProgress, [0.45, 0.5, 0.55], ["0px 0px 0px white", "0px 0px 20px white", "0px 0px 0px white"])
            }}
          />

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

      {/* Buffer Side */}
      <div className={`hidden md:block w-1/2 ${isEven ? '' : 'order-1'}`} />

    </motion.div>
  );
}
