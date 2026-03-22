"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Cloud, ExternalLink, Code2 } from "lucide-react";
import { PROJECTS } from "./constants";
const workspaceBw = "/workspace_bw.jpg";

const SkillsAndPassion = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effect for the image (slower scroll speed)
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0
        },
    };

    return (
        <section
            ref={containerRef}
            id="projects"
            className="relative w-full text-white overflow-hidden scroll-mt-24"
        >
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-16 items-start">

                {/* Left Column: Parallax Workspace Image */}
                <div className="hidden lg:block relative w-full h-full bg-zinc-900 border-r border-white/5">
                    <div className="sticky top-24 h-screen overflow-hidden">
                        <motion.div style={{ y }} className="relative w-full h-full">
                            <Image
                                src={workspaceBw}
                                alt="Developer Workspace"
                                fill
                                className="object-cover grayscale contrast-125 opacity-40 group-hover:opacity-70 transition-opacity duration-700"
                                sizes="50vw"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 opacity-90" />
                        </motion.div>
                    </div>
                </div>

                {/* Right Column: Content Stack */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex flex-col gap-10 lg:pl-20 lg:pr-20 lg:py-24 px-6"
                >

                    {/* Header Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                            <span className="text-xs font-medium tracking-wider uppercase text-gray-300">Development Journey</span>
                        </div>

                        {/* Headings */}
                        <div className="space-y-4">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                                Technical <br /> Evolution
                            </h2>
                            <p className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                                Architecting scalable solutions while mastering the horizon of Cloud Engineering.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="relative group px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                <span className="relative flex items-center gap-2">
                                    View Tech Stack <ArrowRight size={18} />
                                </span>
                            </button>

                            <button className="px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-all hover:scale-105 backdrop-blur-sm flex items-center gap-2 cursor-pointer">
                                <Cloud size={18} className="text-blue-400" /> Cloud Roadmap
                            </button>
                        </div>
                    </motion.div>

                    {/* Feature Cards Waterfall */}
                    <div className="flex flex-col gap-6 mt-8">
                        {[
                            {
                                title: "Modern Stack Mastery",
                                desc: "Focusing on the transition from mid-level to Senior Architect by mastering robust design patterns and system performance.",
                                number: "01"
                            },
                            {
                                title: "Cloud Infrastructure",
                                desc: "Cloud enthusiast dedicated to AWS/Azure environments, serverless logic, and automating CI/CD pipelines.",
                                number: "02"
                            },
                            {
                                title: "The Growth Mindset",
                                desc: "Driven by a passion for continuous learning, bridging the gap between traditional code and modern cloud-native engineering.",
                                number: "03"
                            }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: i * 0.2,
                                    duration: 0.8,
                                    ease: [0.215, 0.61, 0.355, 1],
                                }}
                                className="group relative p-8 rounded-2xl bg-[#111] border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/20 hover:bg-[#161616]"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex gap-6 items-start">
                                    <span className="text-3xl font-mono text-white/10 group-hover:text-white/30 transition-colors">{card.number}</span>
                                    <div className="space-y-3">
                                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">{card.title}</h3>
                                        <p className="text-gray-500 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {card.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Subtle scale interaction */}
                                <div className="absolute inset-0 pointer-events-none border border-white/0 group-hover:border-white/10 rounded-2xl transition-all duration-500 group-hover:scale-[1.02]" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Projects Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 space-y-4"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">Featured Projects</h2>
                        <p className="text-gray-400 text-sm md:text-base max-w-md">
                            A curated selection of my work in full-stack development and cloud architecture.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-20">
                        {PROJECTS.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300"
                            >
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <span className="text-[10px] uppercase tracking-widest text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full border border-blue-400/20">
                                        {project.status}
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    <div className="p-3 w-fit rounded-xl bg-white/5 text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all">
                                        <Code2 size={24} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold">{project.title}</h3>
                                        <p className="text-sm text-gray-500 line-clamp-2 group-hover:text-gray-400 transition-colors">
                                            {project.desc}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, index) => (
                                            <span key={index} className="text-[10px] text-gray-400 border border-white/5 px-2 py-0.5 rounded-md">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="pt-2">
                                        <a href={project.link} className="inline-flex items-center gap-2 text-sm font-medium text-white/50 group-hover:text-white transition-all">
                                            Case Study <ExternalLink size={14} />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default SkillsAndPassion;
