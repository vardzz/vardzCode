"use client";

import React from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiPhp, SiLaravel, SiGooglecloud, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiFigma, SiVercel } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

export const TECH_STACK = [
    { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]", category: "Web Fundamentals", experience: "5+ years of experience" },
    { name: "CSS", icon: SiCss3, color: "text-[#1572B6]", category: "Web Styling", experience: "5+ years of experience" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]", category: "Core Scripting", experience: "5+ years of experience" },
    { name: "Java", icon: FaJava, color: "text-[#007396]", category: "Backend Development", experience: "3 years of experience" },
    { name: "Python", icon: SiPython, color: "text-[#3776AB]", category: "Data & Scripting", experience: "4 years of experience" },
    { name: "PHP", icon: SiPhp, color: "text-[#777BB4]", category: "Server-side Development", experience: "4 years of experience" },
    { name: "Laravel", icon: SiLaravel, color: "text-[#FF2D20]", category: "PHP Framework", experience: "3 years of experience" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "text-[#4285F4]", category: "Cloud Infrastructure", experience: "2 years of experience" },
    { name: "React", icon: SiReact, color: "text-[#61DAFB]", category: "Frontend Library", experience: "4 years of experience" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white", category: "React Framework", experience: "2 years of experience" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", category: "Typed JavaScript", experience: "3 years of experience" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]", category: "Utility CSS", experience: "4 years of experience" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]", category: "Runtime Environment", experience: "4 years of experience" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]", category: "Relational Database", experience: "3 years of experience" },
    { name: "AWS", icon: SiAmazonwebservices, color: "text-[#FF9900]", category: "Cloud Services", experience: "2 years of experience" },
    { name: "Docker", icon: SiDocker, color: "text-[#2496ED]", category: "Containerization", experience: "2 years of experience" },
    { name: "Git", icon: SiGit, color: "text-[#F05032]", category: "Version Control", experience: "5+ years of experience" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]", category: "Design Tool", experience: "3 years of experience" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white", category: "Deployment Platform", experience: "2 years of experience" },
    { name: "VS Code", icon: TbBrandVscode, color: "text-[#007ACC]", category: "Code Editor", experience: "5+ years of experience" },
];

export default function TechStack({ variant = "icons" }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
      className="bg-background py-12 overflow-hidden flex items-center relative transition-colors duration-300 ease-in-out"
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
      className={`flex items-center justify-center transition-colors duration-300 cursor-pointer ${variant === "icons" ? `text-foreground hover:${tech.color}` : "text-foreground hover:text-muted-foreground"}`}
      title={tech.name}
    >
      {variant === "icons" ? (
        <div className="transform hover:scale-110 transition-transform duration-300">
          <tech.icon size={50} />
        </div>
      ) : (
        <span className="text-4xl md:text-7xl font-black uppercase tracking-tighter">
          {tech.name}
        </span>
      )}
    </div>
  );
}
