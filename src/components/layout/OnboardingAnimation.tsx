"use client";
import React, { useState, useEffect } from 'react';

export default function OnboardingAnimation() {
  const [isVisible, setIsVisible] = useState(true);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  
  useEffect(() => {
    // Use sessionStorage to only play once per session
    const hasPlayed = sessionStorage.getItem('onboardingPlayed');
    if (hasPlayed) {
      setIsVisible(false);
      return;
    }

    const timeout1 = setTimeout(() => setIsGlowing(true), 500);
    const timeout2 = setTimeout(() => setIsSlidingUp(true), 1500);
    const timeout3 = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('onboardingPlayed', 'true');
    }, 2300);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center transition-transform duration-[800ms] ease-[cubic-bezier(0.87,0,0.13,1)] ${
        isSlidingUp ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-md px-6">
        <div 
          className={`transition-all duration-700 ease-out ${
            isSlidingUp 
              ? 'scale-75 opacity-0' 
              : isGlowing 
                ? 'scale-110 opacity-100 drop-shadow-[0_0_20px_rgba(244,237,228,0.4)]' 
                : 'scale-90 opacity-20'
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/assets/vardz-logo-white.png" 
            alt="Vardz Logo" 
            className="w-28 sm:w-32 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
