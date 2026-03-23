"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  // In a real app with next-themes, you'd integrate the actual theme flip here.
  // For this aesthetic-only exercise, we just toggle the state visually.
  const toggleTheme = () => setIsDark(!isDark);

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-md mix-blend-difference"
    >
      <div className="font-black text-white text-xl uppercase tracking-tight">
        VARDZ
      </div>
      
      <div className="hidden md:flex gap-16">
        {["About", "Experience", "Work"].map((link, idx) => (
          <a 
            key={idx} 
            href={`#${link.toLowerCase()}`}
            className="text-[10px] tracking-[0.2em] uppercase text-white hover:text-zinc-400 transition-colors duration-300 font-medium"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center">
        <button 
          onClick={toggleTheme}
          className="relative w-12 h-6 rounded-full border border-white/20 bg-transparent flex items-center px-1 overflow-hidden"
          aria-label="Toggle Theme"
        >
          <motion.div 
            className="w-4 h-4 rounded-full bg-white"
            animate={{ x: isDark ? 0 : 22 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </button>
      </div>
    </motion.nav>
  );
}
