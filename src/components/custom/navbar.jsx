"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
const logo = '/icon.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    // Toggle mobile menu
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const navItems = ['About', 'Tech Stack', 'Projects', 'Experience', 'Socials'];

    return (
        <nav 
            className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-5 md:px-16 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            style={{ 
                background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, transparent 100%), repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)" 
            }}
        >
            <Link href="/" className="flex items-center gap-3 cursor-pointer group select-none">
                <div className="relative flex items-center justify-center">
                    <Image
                        src={logo}
                        alt="Vardz Logo"
                        width={120}
                        height={40}
                        className="w-10 md:w-12 h-auto object-contain"
                    />
                </div>
                <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gray-300 transition-colors leading-none pt-1">
                    Vardz
                </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex gap-8 items-center text-base font-medium text-gray-400">
                {navItems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-white transition-all cursor-pointer">
                        {item}
                    </a>
                ))}
            </div>

            {/* Mobile Nav Toggle */}
            <div className="md:hidden z-50 cursor-pointer" onClick={toggleMenu}>
                <div className="w-6 h-5 flex flex-col justify-between cursor-pointer">
                    <span className={`w-full h-[2px] bg-white transition-all transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                    <span className={`w-full h-[2px] bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-full h-[2px] bg-white transition-all transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-0 left-0 w-full h-screen backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden text-2xl border-b border-white/10 shadow-2xl"
                    style={{ 
                        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 0%, transparent 100%), repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)" 
                    }}
                >
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-400 hover:text-white transition-all cursor-pointer"
                        >
                            {item}
                        </a>
                    ))}
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
