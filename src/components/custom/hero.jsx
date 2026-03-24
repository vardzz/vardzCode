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

  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [loopNum, setLoopNum] = React.useState(0);
  const [typingSpeed, setTypingSpeed] = React.useState(150);

  const words = ["Software Engineer", "Cloud Architect", "UI/UX Designer"];

  React.useEffect(() => {
    // Wait for the container's initial fade-in (2.5s) before starting to type
    const startTimeout = setTimeout(() => {
      const handleType = () => {
        const i = loopNum % words.length;
        const fullText = words[i];
        const updatedText = isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        } else if (isDeleting && updatedText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setTypingSpeed(150);
        } else {
          setTypingSpeed(isDeleting ? 50 : 100);
        }
      };

      const timer = setTimeout(handleType, typingSpeed);
      return () => clearTimeout(timer);
    }, loopNum === 0 && text === "" ? 3000 : 0); // initial delay of 3s to be safe

    return () => clearTimeout(startTimeout);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative z-10 w-full min-h-screen flex flex-col items-center justify-center px-4 bg-background overflow-hidden py-20 transition-colors duration-700 ease-in-out">
      {/* Background Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: backgroundGlow }}
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center relative"
      >
        {/* JERICHO - Responsive text-outline (mobile only) */}
        <div className="flex px-4 py-2 md:py-8">
          {"JERICHO".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-[18vw] md:text-[17vw] leading-[0.8] font-black tracking-[-0.07em] uppercase text-foreground text-outline"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1.5 }}
          className="flex flex-col items-center -my-[6vw] md:-my-[4vw] relative z-20"
        >
        </motion.div>

        {/* VARDE - Responsive text-outline (mobile only) */}
        <div className="flex px-4 py-2 md:py-8">
          {"VARDE".split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-[18vw] md:text-[17vw] leading-[0.8] font-black tracking-[-0.07em] uppercase text-foreground text-outline"
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Typewriter Effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
          className="flex flex-col items-center mt-12 relative z-20"
        >
          <span className="text-[3vw] md:text-[1.2vw] uppercase tracking-[0.5em] pl-[0.5em] font-medium text-muted-foreground min-h-[1.5em] flex items-center justify-center cursor-default">
            {text}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-[2px] h-[1.2em] bg-foreground ml-2"
            />
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
