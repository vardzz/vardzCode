"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-32 pb-6 md:pb-12 overflow-hidden relative border-t border-white/5">
       <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-16 mb-20 md:mb-32">
          
          {/* Collaborate */}
          <div>
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Collaborate</span>
            <a 
              href="mailto:hello@vardz.dev" 
              className="text-3xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter border-b border-transparent hover:border-white transition-all duration-500"
            >
              HELLO@VARDZ.DEV
            </a>
          </div>

          {/* Networks */}
          <div className="flex flex-col md:text-right gap-6">
            <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 block">Networks</span>
            <div className="flex gap-8 flex-wrap">
               {["Instagram", "LinkedIn", "Dribbble", "Behance"].map((net, i) => (
                 <a 
                   key={i} 
                   href="#" 
                   className="text-[10px] font-bold text-zinc-400 hover:text-white transition-colors duration-500 uppercase tracking-[0.2em]"
                 >
                   {net}
                 </a>
               ))}
            </div>
          </div>

       </div>

       {/* Massive Fluid Signature */}
       <div className="w-full text-center md:text-left select-none max-w-[100vw] flex justify-center overflow-hidden mix-blend-difference mb-8">
         <h1 className="text-[22vw] leading-[0.8] font-black tracking-[-0.08em] uppercase text-white w-full text-center">
            @VARDZ
         </h1>
       </div>

       {/* Bottom Details */}
       <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[8px] md:text-[10px] text-zinc-500 tracking-[0.2em] uppercase font-bold gap-4">
         <span>© 2026 ARCHITECT OF DIGITAL ETHER. ALL RIGHTS RESERVED.</span>
         <span>LOCATED IN THE PHILIPPINES</span>
       </div>
    </footer>
  );
}
