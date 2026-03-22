"use client";

import React from 'react';

const Footer = () => {
  const networks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/vardzz' },
    { name: 'Instagram', href: 'https://instagram.com/vardzz' },
    { name: 'Facebook', href: 'https://facebook.com/Changeiscomingtoday' },
    { name: 'Discord', href: 'https://discord.com/users/vardzz_' },
  ];

  return (
    <footer className="w-full bg-black text-white pt-32 md:pt-48 pb-8 px-6 md:px-16 lg:px-20 flex flex-col relative z-20 overflow-hidden">
      
      {/* Typographic Hero */}
      <div className="w-full flex items-center justify-center select-none pointer-events-none mb-16 md:mb-20">
        <h1 
          className="font-black text-white text-center"
          style={{ 
            fontSize: 'clamp(4.5rem, 22.5vw, 25rem)', 
            lineHeight: '0.85',
            letterSpacing: '-0.07em',
            marginLeft: '-0.06em', 
            paddingBottom: '0.08em',
            paddingRight: '0.05em'
          }}
        >
          @vardz
        </h1>
      </div>

      {/* Bottom Bar: Networks */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end gap-8 pt-6">
        
        {/* Label */}
        <div className="flex w-full md:w-auto justify-center md:justify-start">
          <span className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] select-none">
            Networks
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
          {networks.map((net) => (
            <a 
              key={net.name}
              href={net.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-zinc-400 hover:text-white text-sm md:text-base font-medium transition-colors duration-500"
            >
              <span className="inline-block transition-transform duration-500 group-hover:-translate-y-1">
                {net.name}
              </span>
            </a>
          ))}
        </div>

      </div>
      
    </footer>
  );
};

export default Footer;