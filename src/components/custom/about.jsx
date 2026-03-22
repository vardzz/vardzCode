"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { TECH_STACK } from './constants';

const Vardz = '/Vardz.jpg';

const About = () => {
    return (
        <section id="about" className="relative z-10 w-full px-6 md:px-20 py-20 text-white overflow-hidden">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
            >

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

            </motion.div>
        </section>
    );
};

export default About;
