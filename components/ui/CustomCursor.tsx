"use client";

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor = () => {
    const [cursorVariant, setCursorVariant] = useState('default'); // default, button, text
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Physics constants - "Liquid/Floaty" feel
    const springConfig = { damping: 20, stiffness: 400, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            // Only move if NOT hovering a magnetic element (handled by snap logic below)
            // Actually, for smoothness, we always update the target, but the snap logic overrides it visually via variants/state
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check for buttons/links or explicit magnetic elements
            const magneticElement = target.closest('a, button, [data-magnetic="true"]');
            const textElement = target.closest('p, span, h1, h2, h3, h4, h5, h6, input, textarea');

            if (magneticElement) {
                setCursorVariant('button');
                // Optional: Snap to center logic would go here if we wanted the cursor to *lock* to the button
                // For now, we'll just expand the cursor to indicate interactability which is the standard "Antigravity" feel
            } else if (textElement && window.getComputedStyle(textElement).cursor === 'text') {
                setCursorVariant('text');
            } else {
                setCursorVariant('default');
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    const variants = {
        default: {
            height: 32,
            width: 32,
            x: "-50%",
            y: "-50%",
            backgroundColor: "transparent",
            border: "1px solid white",
            mixBlendMode: "difference" as any,
        },
        button: {
            height: 64,
            width: 64,
            x: "-50%",
            y: "-50%",
            backgroundColor: "white",
            border: "none",
            mixBlendMode: "difference" as any,
        },
        text: {
            height: 32,
            width: 4,
            x: "-50%",
            y: "-50%",
            backgroundColor: "white",
            border: "none",
            borderRadius: 0,
            mixBlendMode: "difference" as any,
        }
    };

    return (
        <>
            {/* Main Trailing Cursor */}
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] transition-colors duration-200"
                variants={variants}
                animate={cursorVariant}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28
                }}
                style={{
                    left: cursorXSpring,
                    top: cursorYSpring,
                }}
            />

            {/* Center Dot (always visible for precision) */}
            <motion.div
                className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    left: cursorX,
                    top: cursorY,
                    x: "-50%",
                    y: "-50%",
                }}
            />
        </>
    );
};
