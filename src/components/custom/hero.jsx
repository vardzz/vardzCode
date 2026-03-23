"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const backgroundGlow = useMotionTemplate`radial-gradient(800px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.04), transparent 80%)`;

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center border-b border-white/10 px-4 bg-black overflow-hidden">
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: backgroundGlow }}
      />
      
      <div className="flex flex-col items-center justify-center text-center relative group">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17vw] leading-[0.75] font-black tracking-[-0.07em] uppercase text-white"
        >
          JERICHO
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col items-center -my-[2vw] relative z-20"
        >
          <span className="text-[10px] tracking-[0.4em] font-medium text-white/50 uppercase mb-4">
            Scroll to Explore
          </span>
          <div className="w-[1px] h-[50px] bg-white opacity-20" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-[17vw] leading-[0.75] font-black tracking-[-0.07em] uppercase text-white"
        >
          VARDE
        </motion.h1>
      </div>
    </section>
  );
}
