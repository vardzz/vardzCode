"use client";

import React from "react";
import Navbar from "@/components/custom/navbar";
import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import TechStack from "@/components/custom/techstack";
import Experience from "@/components/custom/experience";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/footer";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <TechStack />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
