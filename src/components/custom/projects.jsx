"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      id: "01.",
      title: "COURT CATCHER", 
      desc: "Revolutionizing how sports enthusiasts secure their playtime through high-speed cloud infrastructure.",
      img: "/projects/court-catcher-mockup.png",
      imgSecondary: "/projects/court-catcher-logo.png",
      isMobile: true
    },
    { 
      id: "02.",
      title: "HORIZON AI", 
      desc: "A studio focused on making complex AI data tangible and visually breathtaking for engineers.",
      img: "/projects/horizon.png"
    },
    { 
      id: "03.",
      title: "DENTARA", 
      desc: "Closing the gap between dental practice and technology with a high-integrity patient data ecosystem.",
      img: "/projects/dentara.png"
    },
    { 
      id: "04.",
      title: "ELDERKEY", 
      desc: "Empathy-driven design meeting rigorous security standards for an inclusive digital safety net.",
      img: "/projects/elderkey.png"
    }
  ];

  return (
    <section id="work" className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 md:mb-48"
        >
           <div>
             <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Selected Works</span>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Exhibition</h2>
           </div>
           
           <div className="hidden md:block">
             <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500">A Curated Collection of Digital Excellence</span>
           </div>
        </motion.div>

        {/* Staggered Grid Projects */}
        <div className="space-y-32 md:space-y-64">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
                 className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center group"
               >
                 {/* Image / Mockup Display */}
                 {proj.isMobile ? (
                   <div className={`md:col-span-8 w-full flex items-center justify-center gap-6 md:gap-16 py-10 relative ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
                     {/* Background Glow - Refined for clarity */}
                     <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
                     
                     {/* First Phone (Mockup) */}
                     <motion.div 
                       whileHover={{ y: -15, scale: 1.05 }}
                       transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
                       className="relative w-[45%] md:w-[280px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-zinc-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7)] z-10 group/phone"
                     >
                        <Image 
                          src={proj.img} 
                          alt={`${proj.title} Mockup`}
                          fill 
                          quality={100}
                          priority
                          unoptimized={true}
                          className="object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
                        />
                     </motion.div>

                     {/* Second Phone (Logo) */}
                     <motion.div 
                       initial={{ y: 40 }}
                       whileInView={{ y: 60 }}
                       whileHover={{ y: 45, scale: 1.05 }}
                       transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
                       className="relative w-[45%] md:w-[280px] aspect-[9/19] bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-zinc-800 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.7)] z-20 group/phone"
                     >
                        <Image 
                          src={proj.imgSecondary} 
                          alt={`${proj.title} Brand`}
                          fill 
                          quality={100}
                          priority
                          unoptimized={true}
                          className="object-cover grayscale brightness-50 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700"
                        />
                     </motion.div>
                   </div>
                 ) : (
                   <motion.div 
                     whileHover={{ scale: 1.02 }}
                     transition={{ duration: 0.8, ease: "easeOut" }}
                     className={`md:col-span-8 w-full aspect-video bg-zinc-900 overflow-hidden relative cursor-pointer ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                   >
                      <Image 
                        src={proj.img}
                        alt={proj.title}
                        fill
                        quality={100}
                        priority
                        unoptimized={true}
                        className="object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                      />
                   </motion.div>
                 )}

                 {/* Text Info */}
                 <div className={`md:col-span-4 flex flex-col justify-center space-y-6 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                    <motion.span 
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]"
                    >
                      {proj.id}
                    </motion.span>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
                    >
                      {proj.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-zinc-400 font-light leading-relaxed"
                    >
                      {proj.desc}
                    </motion.p>
                    
                    <motion.a 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      href="#" 
                      className="inline-flex items-center gap-4 text-white text-[10px] tracking-[0.2em] font-bold uppercase hover:text-zinc-400 transition-colors pt-6 group/link cursor-pointer"
                    >
                       View Project 
                       <span className="transform group-hover/link:translate-x-2 transition-transform">&rarr;</span>
                    </motion.a>
                 </div>

               </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
