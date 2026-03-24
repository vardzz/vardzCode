"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  width = "w-full",
  variant = "up", // up, down, left, right, fade
  distance = 40,
  duration = 0.8,
  staggerChildren = 0.1,
  staggerDelay = 0
}) {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: variant === "up" ? distance : variant === "down" ? -distance : 0,
      x: variant === "left" ? distance : variant === "right" ? -distance : 0,
      scale: 0.95, 
      filter: "blur(4px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      scale: 1, 
      filter: "blur(0px)",
      transition: { 
        duration, 
        delay, 
        ease: [0.215, 0.61, 0.355, 1],
        staggerChildren,
        delayChildren: staggerDelay
      } 
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <div className={`relative ${width}`}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Optional: Export a sub-component for clearly defined children
export function ScrollRevealChild({ children }) {
  const childVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }
    }
  };

  return (
    <motion.div variants={childVariants}>
      {children}
    </motion.div>
  );
}
