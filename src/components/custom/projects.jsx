"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

function ProjectItem({ proj, idx, onOpen }) {
  const isEven = idx % 2 === 0;
  const itemRef = React.useRef(null);

  // Individual scroll progress for each item
  const { scrollYProgress: itemScroll } = useScroll({
    target: itemRef,
    offset: ["start end", "end start"]
  });

  // Sophisticated Parallax & Reveal Transforms
  const y = useTransform(itemScroll, [0, 1], [100, -100]);
  const opacity = useTransform(itemScroll, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(itemScroll, [0, 0.2], [0.95, 1]);
  const blurValue = useTransform(itemScroll, [0, 0.2], [8, 0]);

  return (
    <motion.div 
      ref={itemRef}
      style={{ 
        opacity, 
        scale,
        filter: useTransform(blurValue, (v) => `blur(${v}px)`)
      }}
      className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center group"
    >
      {/* Image Display with Parallax */}
      <div className={`md:col-span-8 w-full relative ${isEven ? 'order-1' : 'order-1 md:order-2'}`}>
        <motion.div style={{ y }} className="relative w-full">
          {proj.isMobile ? (
            <div className="flex items-center justify-center gap-6 md:gap-16 py-10 relative">
              <div className="absolute inset-0 bg-blue-500/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-10" />
              
              <motion.div 
                whileHover={{ y: -25, scale: 1.05, rotate: -2 }}
                onClick={() => onOpen({ url: proj.img, isMobile: true })}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-[45%] md:w-[280px] aspect-[9/19] bg-muted rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-muted shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] z-10 group/phone cursor-pointer"
              >
                <Image src={proj.img} alt={proj.title} fill unoptimized priority className="object-cover grayscale brightness-50 transition-all duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110" />
              </motion.div>

              <motion.div 
                whileHover={{ y: -25, scale: 1.05, rotate: 2 }}
                onClick={() => onOpen({ url: proj.imgSecondary, isMobile: true })}
                className="relative w-[45%] md:w-[280px] aspect-[9/19] bg-muted rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] border-muted shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)] z-20 group/phone cursor-pointer md:translate-y-20 translate-y-10"
              >
                <Image src={proj.imgSecondary} alt={proj.title} fill unoptimized priority className="object-cover grayscale brightness-50 transition-all duration-700 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110" />
              </motion.div>
            </div>
          ) : (
            <motion.div 
              whileHover={{ y: -15, scale: 1.02 }}
              onClick={() => onOpen({ url: proj.img, isMobile: false })}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full aspect-video bg-muted overflow-hidden relative cursor-pointer rounded-2xl md:rounded-3xl shadow-2xl group/image"
            >
              <Image src={proj.img} alt={proj.title} fill unoptimized priority className="object-cover grayscale brightness-50 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Text Info */}
      <div className={`md:col-span-4 flex flex-col justify-center space-y-6 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
        <span className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]">{proj.id}</span>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none">{proj.title}</h3>
        <h4 className="text-lg text-zinc-400 font-light leading-relaxed">{proj.desc}</h4>
        <button 
          onClick={() => onOpen({ url: proj.img, isMobile: proj.isMobile })}
          className="inline-flex items-center gap-4 text-foreground text-[10px] tracking-[0.2em] font-bold uppercase hover:text-muted-foreground transition-colors pt-6 group/link w-fit"
        >
          View Project <span className="transform group-hover/link:translate-x-2 transition-transform">&rarr;</span>
        </button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedImg, setSelectedImg] = useState(null);
  const containerRef = React.useRef(null);

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
    <section id="work" ref={containerRef} className="relative bg-background text-foreground py-32 md:py-48 overflow-hidden transition-colors duration-300 ease-in-out">
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(var(--foreground)_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 md:mb-48"
        >
           <div>
             <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-muted-foreground mb-6 block">Selected Works</span>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Exhibition</h2>
           </div>
        </motion.div>

        {/* Project List */}
        <div className="space-y-32 md:space-y-64">
          {projects.map((proj, idx) => (
            <ProjectItem key={idx} proj={proj} idx={idx} onOpen={(p) => setSelectedImg(p)} />
          ))}
        </div>
      </div>

      {/* Project Dialog */}
      <Dialog open={!!selectedImg} onOpenChange={(open) => !open && setSelectedImg(null)}>
        <DialogContent showCloseButton={false} className="max-w-[95vw] md:max-w-[85vw] border-none bg-transparent p-0 overflow-hidden shadow-none flex items-center justify-center">
          <DialogTitle className="sr-only">Project Image View</DialogTitle>
          <DialogDescription className="sr-only">Detailed view of the selected project asset.</DialogDescription>
          {selectedImg && (
            <div className={`relative ${selectedImg.isMobile ? 'h-[85vh] aspect-[9/19]' : 'w-full h-auto aspect-video'} flex items-center justify-center`}>
              <div className="relative w-full h-full rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl">
                <Image 
                  src={selectedImg.url} 
                  alt="Project View" 
                  fill 
                  className="object-cover" 
                  priority 
                  unoptimized 
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
