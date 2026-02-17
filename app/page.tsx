"use client";

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/components/icon/logo.png';
import Vardz from '@/components/assets/Vardz.jpg';
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
  SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiFigma, SiVercel,
  SiHtml5, SiCss3, SiJavascript, SiPython, SiGooglecloud, SiPhp, SiLaravel
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import SkillsAndPassion from "@/components/SkillsAndPassion";

const TECH_STACK = [
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

const Page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="relative min-h-screen bg-[#000000] text-white overflow-x-hidden font-sans selection:bg-white/20">

      {/* 3. Background Graphics: Advanced Gradient Smoke */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

        {/* Base Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        {/* Moving Smoke/Light Blobs - Adjusted for Mobile */}
        <motion.div
          animate={{
            x: ["-20%", "20%", "-20%"],
            y: ["-20%", "20%", "-20%"],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full opacity-20 blur-[80px] md:blur-[100px] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)',
          }}
        />

        <motion.div
          animate={{
            x: ["20%", "-20%", "20%"],
            y: ["10%", "-10%", "10%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-[-10%] w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full opacity-15 blur-[100px] md:blur-[120px] mix-blend-screen"
          style={{
            background: 'radial-gradient(circle, rgba(200,200,255,0.1) 0%, transparent 70%)',
          }}
        />

        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[-20%] left-[20%] w-[100vw] h-[60vh] md:w-[70vw] md:h-[50vh] rounded-full blur-[80px] md:blur-[90px] mix-blend-screen"
          style={{
            background: 'radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* 1. Header & Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-16 bg-black/50 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none">
          <div className="relative flex items-center justify-center">
            <Image
              src={logo}
              alt="Vardz Logo"
              width={120}
              height={40}
              className="w-10 md:w-12 h-auto object-contain"
            />
          </div>
          <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors leading-none pt-1">
            Vardz
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center text-base font-medium text-gray-400">
          {['About', 'Tech Stack', 'Projects', 'Experience', 'Socials'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-all">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
            <span className={`w-full h-[2px] bg-white transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`w-full h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[2px] bg-white transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden text-2xl"
          >
            {['About', 'Tech Stack', 'Projects', 'Experience', 'Socials'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* 2. Hero Section */}
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
            {/* "Hello, I'm " */}
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

            {/* "Jericho" */}
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
          {/* Custom Button with Bottom Glow */}
          <button className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-black/40 text-white text-sm md:text-base font-medium rounded-full cursor-pointer overflow-hidden transition-all hover:scale-105 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-50" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/30 blur-[15px] group-hover:bg-white/50 transition-colors" />
            <span className="relative z-10">Get Started Now</span>
          </button>

          <button className="group relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-3.5 bg-black/40 text-white text-sm md:text-base font-medium rounded-full cursor-pointer overflow-hidden transition-all hover:scale-105 border border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-30" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/20 blur-[15px] group-hover:bg-white/40 transition-colors" />
            <span className="relative z-10">See Projects</span>
          </button>
        </motion.div>
      </main>

      {/* 2.5 About Me Section */}
      <section id="about" className="relative z-10 w-full px-6 md:px-20 py-20 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left Column: Identity & Information */}
          <div className="flex flex-col gap-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="text-5xl md:text-7xl font-bold tracking-tighter flex flex-wrap"
            >
              {"Meet Vardz".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg"
            >
              I&apos;m Jericho Varde, a passionate <span className="text-white font-medium">Software Engineer & Cloud Enthusiast</span> based in the Philippines. I specialize in crafting robust web applications and scalable cloud architectures, blending technical precision with creative problem-solving to elevate digital experiences.
            </motion.p>

            <div className="w-full h-[1px] bg-white/10 my-2" />

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {TECH_STACK.map((tech) => (
                <span key={tech.name} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-gray-300 hover:bg-white/10 hover:text-white transition-colors cursor-default backdrop-blur-sm">
                  {tech.name}
                </span>
              ))}
            </motion.div>

            <div className="w-full h-[1px] bg-white/10 my-2" />

            {/* Experience Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6 text-sm md:text-base text-gray-400"
            >
              <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center hover:text-white transition-colors cursor-default">
                <span>Freelance</span>
                <span>Full-Stack Developer</span>
                <span className="text-right">Currently</span>
              </div>
              <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center hover:text-white transition-colors cursor-default">
                <span>Student</span>
                <span>Computer Science</span>
                <span className="text-right">2023-Present</span>
              </div>
              <div className="grid grid-cols-[1fr_1.5fr_1fr] items-center hover:text-white transition-colors cursor-default">
                <span>Intern</span>
                <span>Tech Startup Inc.</span>
                <span className="text-right">2022-23</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center group"
          >
            <Image
              src={Vardz}
              alt="Portrait of Jericho"
              fill
              className="object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </section>

      {/* 2.6 Tech Stack Section */}
      <section id="tech-stack" className="relative z-10 w-full px-6 md:px-20 py-20 bg-zinc-950 text-white overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My Tech Stack</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>


          {/* Infinite Carousel Container */}
          <div className="flex overflow-hidden w-full mask-linear-fade py-12">
            <motion.div
              className="flex gap-8 md:gap-12 px-4"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 60, // Slower scrolling for smoother feel
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Duplicate the array to create seamless loop */}
              {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  animate={{
                    y: [0, -20, 0], // Sine wave vertical motion
                  }}
                  transition={{
                    duration: 4, // Fixed duration for synchronized wave
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2, // Linear delay creates the traveling wave
                  }}
                  className={`relative flex-shrink-0 w-24 h-24 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group cursor-default ${tech.color}`}
                >
                  <div className="absolute inset-0 rounded-full bg-white/5 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                  <div
                    title={tech.name}
                    className="text-white/80 group-hover:text-inherit transition-colors duration-300 relative z-10"
                  >
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 3. Skills & Passion Section */}
      <SkillsAndPassion />

      {/* 4. Footer */}
      <footer className="w-full py-12 bg-black border-t border-white/10 flex flex-col items-center justify-center gap-6 z-20">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none">
          <div className="relative flex items-center justify-center">
            <Image
              src={logo}
              alt="Vardz Logo"
              width={120}
              height={40}
              className="w-10 md:w-12 h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
          <span className="relative z-10 text-xl font-bold tracking-tight text-center text-white group-hover:text-gray-300 transition-colors leading-none pt-1" style={{ color: 'white' }}>
            Vardz
          </span>
        </Link>
        <p className="relative z-10 text-white text-xs md:text-sm font-medium tracking-wide text-center" style={{ color: 'white' }}>
          @2026 Jericho Varde. All Rights Reserved.
        </p>
      </footer>
    </div >
  );
};

export default Page;