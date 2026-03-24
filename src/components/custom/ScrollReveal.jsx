"use client";

import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, width = "fit-content" }) {
  return (
    <div style={{ position: "relative", width }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
          visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1, 
            filter: "blur(0px)",
            transition: { 
              duration: 0.8, 
              delay, 
              ease: [0.22, 1, 0.36, 1] 
            } 
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
