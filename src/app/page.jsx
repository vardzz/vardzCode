"use client";

import React from "react";
import Navbar from "@/components/custom/navbar";
import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import TechStack from "@/components/custom/techStack";
import Experience from "@/components/custom/Experience";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/footer";

export default function Portfolio() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-foreground selection:text-background font-sans transition-colors duration-700 ease-in-out">
      <Navbar />
      <main>
        <Hero />
        <TechStack variant="icons" />
        <About />
        <TechStack variant="names" />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
