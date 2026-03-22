"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const experienceData = [
    { year: "2025", title: "Currently a 3rd Year BSCS Student", subtitle: "Pamantasan ng Cabuyao" },
    { year: "2023", title: "Started Bachelor of Science in Computer Science", subtitle: "Pamantasan ng Cabuyao" },
    { year: "2022", title: "Became interested in coding", subtitle: "Self-taught Journey" },
    { year: "2022", title: "Finished Senior High", subtitle: "Pamantasan ng Cabuyao" },
    { year: "2020", title: "Finished Junior High", subtitle: "Bigaa Integrated NHS" },
    { year: "2016", title: "Finished Elementary", subtitle: "Bigaa Elementary School" },
    { year: "2011", title: "Studied at Holy Redeemer School of Cabuyao", subtitle: "Early Education" },
  ];

  return (
    <section id="experience" className="relative z-10 w-full px-6 md:px-16 lg:px-20 py-32 bg-black text-white overflow-hidden scroll-mt-20 border-t border-white/5">
      <div className="w-full flex flex-col items-center max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center space-y-4 mb-24"
        >
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-2">
                <span className="text-xs font-medium tracking-wider uppercase text-gray-400">Timeline</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-tight text-white">
                Experience
            </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative w-full" ref={containerRef}>
            
            {/* The Vertical Line (Track) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />
            
            {/* The Animated Line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-400 origin-top -translate-x-1/2 z-0"
              style={{ scaleY: pathLength }}
            />

            {/* Timeline Items */}
            <div className="flex flex-col gap-16 md:gap-24 relative z-10">
              {experienceData.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full group">
                    
                    {/* Node/Dot */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-black border border-white/10 -translate-x-1/2 flex items-center justify-center group-hover:border-white/50 transition-colors duration-500 z-10"
                    >
                        <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-white transition-colors duration-500 shadow-[0_0_10px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
                    </motion.div>

                    {/* Content Container */}
                    <div className={`w-full md:w-1/2 flex flex-col pl-20 md:pl-0 pt-0.5 md:pt-0 ${isEven ? 'md:pr-20 md:items-end text-left md:text-right' : 'md:ml-auto md:pl-20 md:items-start text-left'}`}>
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="flex flex-col gap-2 max-w-md"
                      >
                        <span className="font-mono text-xs md:text-sm text-zinc-500 font-medium tracking-widest">{item.year}</span>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white/90">{item.title}</h3>
                        <p className="text-sm md:text-base text-zinc-400 font-light mt-1">{item.subtitle}</p>
                      </motion.div>
                    </div>

                  </div>
                );
              })}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
