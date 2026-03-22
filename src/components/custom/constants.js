import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
    SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiFigma, SiVercel,
    SiHtml5, SiCss3, SiJavascript, SiPython, SiGooglecloud, SiPhp, SiLaravel
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import React from 'react';

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
