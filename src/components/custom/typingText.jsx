"use client";

import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const TypingText = ({ text, className, delay = 0, speed = 0.03 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (isInView) {
      let currentIdx = 0;
      const interval = setInterval(() => {
        if (currentIdx <= text.length) {
          setDisplayedText(text.slice(0, currentIdx));
          currentIdx++;
        } else {
          clearInterval(interval);
        }
      }, speed * 1000);
      return () => clearInterval(interval);
    }
  }, [isInView, text, speed]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
      {isInView && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </p>
  );
};

export default TypingText;
