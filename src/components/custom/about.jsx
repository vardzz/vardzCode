"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <div className="relative w-full bg-black text-white">
      {/* ABOUT ME ("MEET VARDZ") */}
      <section id="about" className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Column */}
        <motion.div 
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="flex flex-col flex-start"
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-500 mb-8 block">Identity</span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">Meet Vardz</h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-16 max-w-2xl">
            I'm Jericho Varde, a passionate <strong className="font-bold text-white">Software Engineer & Cloud Enthusiast</strong> based in the Philippines. I specialize in crafting <strong className="font-bold text-white">robust web applications</strong> and <strong className="font-bold text-white">scalable cloud architectures</strong>, blending strict technical precision with creative problem-solving to elevate digital experiences.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="bg-white text-black py-5 px-10 font-bold uppercase tracking-widest text-[11px] hover:bg-zinc-200 transition-colors">
              Download CV
            </button>
            <button className="bg-transparent text-white border border-white py-5 px-10 font-bold uppercase tracking-widest text-[11px] hover:bg-white/5 transition-colors">
              My Process
            </button>
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="relative aspect-[3/4] md:aspect-square lg:aspect-[3/4] bg-zinc-900 overflow-hidden group"
        >
          <Image 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqJ8Kn5GHk1YsWmDZtv10m9u5xMrxOVGaWccUoxL3-p-rGepMqpX9wghbnaFZ09S_FRTUyM0hPchLG3jO1i5IGBBS4qlqUKRlLWIGZVeCA1YvOnwbT2z1h3vAja4VYPY0gnN_KAn5VQLYDFN_M97nQk5pbIKZ6-842v6juK8fI7v4D0xJQzBgDZVu8if4VTDpoSGT1SzKQgMA3F30ebovlvZtRKW6HUJeIn9b8hGhImmDReNXJfKYZjJKlf_LF8IY-CxyaVs_oq82_" 
            alt="Portrait of Jericho Varde"
            fill
            className="object-cover grayscale contrast-125 brightness-75 transition-transform duration-[1.5s] group-hover:scale-105"
          />
          {/* Micro-badge */}
          <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-10 w-24 h-24 bg-black border border-white/20 flex items-center justify-center p-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-white leading-tight text-center font-bold">
              Software<br/>Architect<br/>2026
            </span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
