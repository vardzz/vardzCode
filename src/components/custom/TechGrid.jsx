"use client";

import React from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/components/custom/techStack";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

export default function TechGrid() {
  return (
    <section className="bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <p className="tracking-[0.3em] text-xs text-zinc-500 font-medium uppercase mb-2">
            THE ARSENAL
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-foreground">
            TECH STACK
          </h2>
        </div>

        {/* The Grid with spacing */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {TECH_STACK.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }) {
  const Icon = tech.icon;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial="initial"
          whileHover="hover"
          className="group relative aspect-square flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#0A0A0A] cursor-pointer overflow-hidden border border-black/40 dark:border-white/40 hover:border-black dark:hover:border-white rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10"
        >
          {/* Default Monochrome State & Hover Brand Color State */}
          <motion.div className="flex flex-col items-center justify-center text-black dark:text-zinc-500 h-full w-full">
            <motion.div 
              variants={{
                initial: { opacity: 1, scale: 1 },
                hover: { scale: 1.05 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center mb-2"
            >
                {/* Monochrome Base Icon (Black/Zinc) */}
                <Icon 
                    size={42} 
                    className="transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Brand Color Hover Icon (Always Brand color) */}
                <Icon 
                    size={42} 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.color}`}
                />
            </motion.div>

            {/* Tech Name Reveal on Hover (Black in light mode, Zinc in dark) */}
            <motion.p 
              variants={{
                initial: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute bottom-6 text-[10px] font-bold tracking-[0.2em] uppercase text-black dark:text-zinc-400"
            >
              {tech.name}
            </motion.p>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="border-black/10 dark:border-white/10 shadow-2xl rounded-[2.5rem] p-16">
        <DialogTitle className="sr-only">Tech Details: {tech.name}</DialogTitle>
        <div className="flex flex-col items-center text-center space-y-6">
          <div className={`${tech.color} drop-shadow-sm`}>
             <Icon size={80} />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-4xl font-black tracking-tighter text-foreground">
              {tech.name}
            </h3>
            <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] font-bold">
              {tech.category}
            </p>
          </div>

          <div className="pt-6 border-t border-black/5 dark:border-white/5 w-full">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
              {tech.experience}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
