"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from './constants';

const TechStack = () => {
    return (
        <section id="tech-stack" className="relative z-10 w-full px-6 md:px-20 py-20 bg-black text-white overflow-hidden border-t border-white/5">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                className="w-full flex flex-col gap-12 items-center"
            >

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

            </motion.div>
        </section>
    );
};

export default TechStack;
