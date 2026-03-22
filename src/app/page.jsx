"use client";

import React from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Component Imports
import About from "@/components/custom/about";
import TechStack from "@/components/custom/techStack";
import Experience from "@/components/custom/Experience";
import SkillsAndPassion from "@/components/custom/SkillsAndPassion";

const Page = () => {
  return (
    <div className="relative min-h-screen bg-[#000000] text-white overflow-x-hidden font-sans selection:bg-white/20">

      {/* Background Layer 1: Ambient Glow (Matching PatternCraft Reference) */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Background Layer 2: Sharp Striped Dark (Visible & Premium) */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
        }}
      />

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 pt-32 md:pt-40 pb-20 overflow-hidden min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
        >
          <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
          <span className="text-[10px] md:text-[15px] font-medium text-gray-200 tracking-wide">
            Future Cloud Engineer
          </span>
        </motion.div>

        <div className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tight mb-4 md:mb-6 overflow-hidden whitespace-nowrap max-w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {"Hello, I'm ".split("").map((char, index) => (
              <motion.span
                key={`char-${index}`}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            <span className="text-white">
              {"Jericho".split("").map((char, index) => (
                <motion.span
                  key={`name-${index}`}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-[90%] md:max-w-2xl text-gray-400 text-xs sm:text-sm md:text-lg leading-relaxed mb-8 md:mb-12 tracking-wide mx-auto"
        >
          I&apos;m a Computer Science student passionate about building meaningful and
          impactful software. I enjoy exploring modern technologies, developing
          applications, and expanding my skills through real-world projects.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 items-center justify-center w-full px-8 md:px-0"
        >
          <button className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-black/40 text-white text-sm md:text-base font-medium rounded-full cursor-pointer overflow-hidden transition-all hover:scale-105 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/30 blur-[15px] group-hover:bg-white/50 transition-colors" />
            <span className="relative z-10">Get Started Now</span>
          </button>

          <a href="#projects" className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-black/40 text-white text-sm md:text-base font-medium rounded-full cursor-pointer overflow-hidden transition-all hover:scale-105 border border-white/5 text-center">
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/20 blur-[15px] group-hover:bg-white/40 transition-colors" />
            <span className="relative z-10">See Projects</span>
          </a>
        </motion.div>
      </main>

      <About />
      <TechStack />
      <Experience />
      <SkillsAndPassion />
    </div >
  );
};

export default Page;
