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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 bg-black overflow-hidden py-20">
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: backgroundGlow }}
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center text-center relative"
      >
        {/* JERICHO - Removed overflow-hidden to prevent clipping */}
        <div className="flex px-4 py-8">
          {"JERICHO".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-[17vw] leading-[0.8] font-black tracking-[-0.07em] uppercase text-white"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="flex flex-col items-center -my-[4vw] relative z-20"
        >
        </motion.div>

        {/* VARDE - Removed overflow-hidden and added vertical padding */}
        <div className="flex px-4 py-8">
          {"VARDE".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-[17vw] leading-[0.8] font-black tracking-[-0.07em] uppercase text-white"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
