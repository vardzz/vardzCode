"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <footer className="w-full bg-black text-white pt-32 pb-6 md:pb-12 overflow-hidden relative border-t border-white/5">
       <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-16 mb-20 md:mb-32"
       >
          
          {/* Collaborate */}
          <motion.div variants={itemVariants}>
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Collaborate</span>
            <a 
              href="mailto:vardz@dev.com" 
              className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter border-b border-transparent hover:border-white transition-all duration-500"
            >
              VARDZ@DEV.COM
            </a>
          </motion.div>

          {/* Networks */}
          <motion.div variants={itemVariants} className="flex flex-col md:text-right gap-6">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 block">Networks</span>
            <div className="flex gap-8 flex-wrap">
               {["Instagram", "LinkedIn", "Facebook", "Github"].map((net, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   whileHover={{ scale: 1.1, color: "#ffffff" }}
                   className="text-[10px] font-bold text-zinc-400 transition-colors duration-500 uppercase tracking-[0.2em]"
                 >
                   {net}
                 </motion.a>
               ))}
            </div>
          </motion.div>

       </motion.div>

       {/* Massive Fluid Signature - Removed overflow-hidden and adjusted leading to fix clipping */}
       <motion.div 
         initial={{ opacity: 0, scale: 0.8, y: 100 }}
         whileInView={{ opacity: 1, scale: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
         className="w-full text-center md:text-left select-none max-w-[100vw] flex justify-center mix-blend-difference mb-8 px-4 py-8"
       >
         <h1 className="text-[22vw] leading-[0.85] font-black tracking-[-0.08em] uppercase text-white w-full text-center">
            @VARDZ
         </h1>
       </motion.div>

       {/* Bottom Details */}
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ delay: 1 }}
         className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold gap-4"
       >
         <span>© 2026 ARCHITECT OF DIGITAL ETHER. ALL RIGHTS RESERVED.</span>
         <span>LOCATED IN THE PHILIPPINES</span>
       </motion.div>
    </footer>
  );
}
