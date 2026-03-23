"use client";

import React from "react";
import Navbar from "@/components/custom/navbar";
import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import TechStack from "@/components/custom/techStack";
import Experience from "@/components/custom/Experience";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Portfolio() {
  return (
    <div className="relative h-screen w-full bg-black text-white selection:bg-white selection:text-black font-sans overflow-hidden">
      <Navbar />
      <ScrollArea className="h-full w-full">
        <main>
          <Hero />
          <TechStack variant="icons" />
          <About />
          <TechStack variant="names" />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </ScrollArea>
    </div>
  );
}
