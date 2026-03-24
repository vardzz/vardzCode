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
    <section className="bg-background py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
          className="mb-10 text-center md:text-left"
        >
          <p className="tracking-[0.3em] text-[10px] text-zinc-500 font-medium uppercase mb-1">
            THE ARSENAL
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground">
            TECH STACK
          </h2>
        </motion.div>

        {/* The Grid with spacing and scroll animation */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3 md:gap-4"
        >
          {TECH_STACK.map((tech, index) => (
            <TechCard key={index} tech={tech} />
          ))}
        </motion.div>
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
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.2, 1, 0.3, 1] } }
          }}
          initial="initial"
          whileHover="hover"
          className="group relative aspect-square flex flex-col items-center justify-center bg-[#FAFAFA] dark:bg-[#0A0A0A] cursor-pointer overflow-hidden border border-black/40 dark:border-white/40 hover:border-black dark:hover:border-white rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-white/10"
        >
          {/* Default Monochrome State & Hover Brand Color State */}
          <motion.div className="flex flex-col items-center justify-center text-black dark:text-zinc-500 h-full w-full">
            <motion.div 
              variants={{
                initial: { opacity: 1, scale: 1 },
                hover: { scale: 1.15 }
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex items-center justify-center mb-2"
            >
                {/* Monochrome Base Icon (Black/Zinc) */}
                <Icon 
                    size={32} 
                    className="transition-opacity duration-300 group-hover:opacity-0"
                />
                {/* Brand Color Hover Icon (Always Brand color) */}
                <Icon 
                    size={32} 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.color}`}
                />
            </motion.div>

            {/* Tech Name Reveal on Hover */}
            <motion.p 
              variants={{
                initial: { opacity: 0, y: 10 },
                hover: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="absolute bottom-3 text-[10px] font-extrabold tracking-[0.2em] uppercase text-black dark:text-zinc-400"
            >
              {tech.name}
            </motion.p>
          </motion.div>
        </motion.div>
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="border-black/10 dark:border-white/10 shadow-2xl rounded-[2.5rem] p-0 overflow-hidden">
        <DialogTitle className="sr-only">Tech Details: {tech.name}</DialogTitle>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.2, 1, 0.3, 1] }}
          className="p-16 flex flex-col items-center text-center space-y-6"
        >
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className={`${tech.color} drop-shadow-sm`}
          >
             <Icon size={80} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-1"
          >
            <h3 className="text-4xl font-black tracking-tighter text-foreground">
              {tech.name}
            </h3>
            <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
              {tech.category}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="pt-6 border-t border-black/5 dark:border-white/5 w-full"
          >
            <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold tracking-wide">
              {tech.experience}
            </p>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
