"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full bg-black text-white pt-20 pb-10 px-6 md:px-16 overflow-hidden">
      
      {/* Top Section: Back to Top & Networks */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 relative z-10">

        {/* Networks Section */}
        <div className="flex flex-col items-center md:items-end text-right">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white mb-2">
            Networks
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-4 text-[10px] md:text-xs text-gray-400">
            {networks.map((net, index) => (
              <React.Fragment key={net.name}>
                <a 
                  href={net.href} 
                  className="hover:text-white transition-colors duration-300"
                >
                  {net.name}
                </a>
                {index < networks.length - 1 && (
                  <span className="md:hidden">/</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Branding Section: @vardz */}
      <div className="mt-20 md:mt-32 w-full select-none pointer-events-none overflow-hidden">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-[20vw] md:text-[22vw] font-bold tracking-tighter leading-none text-white text-center translate-y-[2%] md:translate-y-[5%] overflow-hidden"
        >
          @vardz
        </motion.h1>
      </div>

    </footer>
  );
};

export default Footer;
