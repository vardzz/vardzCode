"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/custom/navbar";
import Hero from "@/components/custom/hero";
import About from "@/components/custom/about";
import TechStack from "@/components/custom/techStack";
import Experience from "@/components/custom/Experience";
import Projects from "@/components/custom/projects";
import Footer from "@/components/custom/footer";
import LoadingScreen from "@/components/custom/loadingScreen";

import TechGrid from "@/components/custom/TechGrid";
import SmoothScroll from "@/components/custom/SmoothScroll";
import ScrollReveal from "@/components/custom/ScrollReveal";

export default function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onFinished={() => setLoading(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-foreground selection:text-background font-sans transition-colors duration-700 ease-in-out">
        <Navbar />
        <main>
          <Hero />
          
          <ScrollReveal width="100%">
            <TechStack variant="icons" />
          </ScrollReveal>

          <ScrollReveal width="100%">
            <About />
          </ScrollReveal>

          <ScrollReveal width="100%">
            <TechGrid />
          </ScrollReveal>

          <ScrollReveal width="100%">
            <TechStack variant="names" />
          </ScrollReveal>

          <ScrollReveal width="100%">
            <Experience />
          </ScrollReveal>

          <ScrollReveal width="100%">
            <Projects />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
