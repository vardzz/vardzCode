"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiLaravel, SiGooglecloud, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiFigma, SiVercel } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export const TECH_STACK = [
    { name: "HTML", icon: <SiHtml5 size={50} />, color: "hover:text-[#E34F26]" },
    { name: "CSS", icon: <SiCss3 size={50} />, color: "hover:text-[#1572B6]" },
    { name: "JavaScript", icon: <SiJavascript size={50} />, color: "hover:text-[#F7DF1E]" },
    { name: "Java", icon: <FaJava size={50} />, color: "hover:text-[#007396]" },
    { name: "Python", icon: <SiPython size={50} />, color: "hover:text-[#3776AB]" },
    { name: "PHP", icon: <SiPhp size={50} />, color: "hover:text-[#777BB4]" },
    { name: "Laravel", icon: <SiLaravel size={50} />, color: "hover:text-[#FF2D20]" },
    { name: "Google Cloud", icon: <SiGooglecloud size={50} />, color: "hover:text-[#4285F4]" },
    { name: "React", icon: <SiReact size={50} />, color: "hover:text-[#61DAFB]" },
    { name: "Next.js", icon: <SiNextdotjs size={50} />, color: "hover:text-white" },
    { name: "TypeScript", icon: <SiTypescript size={50} />, color: "hover:text-[#3178C6]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={50} />, color: "hover:text-[#06B6D4]" },
    { name: "Node.js", icon: <SiNodedotjs size={50} />, color: "hover:text-[#339933]" },
    { name: "PostgreSQL", icon: <SiPostgresql size={50} />, color: "hover:text-[#4169E1]" },
    { name: "AWS", icon: <SiAmazonwebservices size={50} />, color: "hover:text-[#FF9900]" },
    { name: "Docker", icon: <SiDocker size={50} />, color: "hover:text-[#2496ED]" },
    { name: "Git", icon: <SiGit size={50} />, color: "hover:text-[#F05032]" },
    { name: "Figma", icon: <SiFigma size={50} />, color: "hover:text-[#F24E1E]" },
    { name: "Vercel", icon: <SiVercel size={50} />, color: "hover:text-white" },
    { name: "VS Code", icon: <TbBrandVscode size={50} />, color: "hover:text-[#007ACC]" },
];

export default function TechStack({ variant = "icons" }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      className="bg-black py-12 overflow-hidden flex items-center relative"
    >
      <div className="absolute inset-x-0 w-[200vw] sm:w-[300vw] pointer-events-none" />
      
      {/* Container for Infinite Scroll */}
      <div className="relative flex overflow-hidden py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        >
          {/* First Set */}
          <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
            {TECH_STACK.map((tech, idx) => (
              <TechItem key={`set1-${idx}`} tech={tech} variant={variant} />
            ))}
          </div>
          {/* Second Set (Duplicate for seamless loop) */}
          <div className="flex gap-16 md:gap-24 pr-16 md:pr-24 items-center">
            {TECH_STACK.map((tech, idx) => (
              <TechItem key={`set2-${idx}`} tech={tech} variant={variant} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function TechItem({ tech, variant }) {
  return (
    <div 
      className={`flex items-center justify-center transition-colors duration-500 cursor-pointer ${variant === "icons" ? `text-zinc-600 ${tech.color}` : "text-zinc-800 hover:text-white"}`}
      title={tech.name}
    >
      {variant === "icons" ? (
        <div className="transform hover:scale-110 transition-transform duration-300">
          {tech.icon}
        </div>
      ) : (
        <span className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
          {tech.name}
        </span>
      )}
    </div>
  );
}
