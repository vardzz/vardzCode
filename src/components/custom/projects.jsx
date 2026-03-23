"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    { 
      id: "01.",
      title: "COURT CATCHER", 
      desc: "Revolutionizing how sports enthusiasts secure their playtime through high-speed cloud infrastructure.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClSmNfX1zatxMSQfhM2aGjIJqvt4J-ODvGzz9lr6B5vd7N4fta5pF0Rk_JwueH04IYngh-T56ysxGZwHcuK_eup1keagD1xenQXRfujNPqGTSfgg4c8kUmzHfcPEmxG3LHqYUf7wLvKI1aiA8BmzorG-bWMA0kK4Fo0wdhimJlyBvnlZBON0TiKtkDATNbUIrDt5JwGuYUzeK-1xj24y6GwkQ6GlhIPBTHbuwIQTwwaXKoou4yJQCfR0F7mQFUD-LUlw9FjZee1ALw"
    },
    { 
      id: "02.",
      title: "HORIZON AI", 
      desc: "A studio focused on making complex AI data tangible and visually breathtaking for engineers.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEEUF3Q3nqqLWXKAkeF8BR3ms00UOHnM0afy8tidSAPD6g3jD489Ivs38SOJ-HzsjNen7xY3BTMhvWpuu7JPW8wHy79gH0SPuzGXTUDrLmN2Xg7P1NWrD59rUjTPNEtLX9CKgf1oK3MSCmO-gHXNtFVhZQbl4RlmR25Uti14Wdp0eaHls2SLGwaLBJWerkcBLZ_1P8Z6btlpeR3e9dCLURM7Olhxo4sptV0Xi0MIgyjllUI3iAl1e3j-ZDsuvsA6u8v_x9bl4r6Lhv"
    },
    { 
      id: "03.",
      title: "DENTARA", 
      desc: "Closing the gap between dental practice and technology with a high-integrity patient data ecosystem.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvfrkF0ohKTPnNAVEL3DeCUBLn9DygwuqflIqPMWwNdShwiLxoJo-q3DR0x0DjdA1C0M8HKM0EpOcJser60D9I2v0mG2ayZBS0WcG-tF5V8OkQG17rVBnO_wxzvFLcQ2u24Bx6ge2EQjdt61j8gZMQzbESaA872TYnz7wrOFjZc0eYfpouSIGGCyKiyKoJWxG5IOhJs7JFvsv0dLfEB0oQ-_NlSSLnF8qwmzSVrPC03bP44qAu0SD5FUyYU0DbrC27r0C1YhHTsSWb"
    },
    { 
      id: "04.",
      title: "ELDERKEY", 
      desc: "Empathy-driven design meeting rigorous security standards for an inclusive digital safety net.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXTr7YcvLMyMHgyC5ckDenfpyuuFk9KZx0QpijpghsqTM00iIxtwfGpnnUV3qf442pKiqXZ2oPwM2YL87mSykDaMTHWmSmpqiRN4OqgJfs_r1jlSux6h4aJqWUumI8TEj_ingtsGCSG8GuEztILx319gXZSM3jt_dM9NCIV73s9Q3DR5O7JSIQiKIiiBHI1rr8nBx3r5oIohCUubzkbLmaTeEIAccy7JKsrmvrddYBjpFG-wbhHdaRJuWPb5A45KyBnrpNR5DO7cbA"
    }
  ];

  return (
    <section id="work" className="relative bg-black text-white py-32 md:py-48 overflow-hidden">
      {/* Background Dotted Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:32px_32px] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 md:mb-48 border-b border-white/10 pb-8"
        >
           <div>
             <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500 mb-6 block">Selected Works</span>
             <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">The Exhibition</h2>
           </div>
           
           <div className="hidden md:block">
             <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-zinc-500">A Curated Collection of Digital Excellence</span>
           </div>
        </motion.div>

        {/* Staggered Grid Projects */}
        <div className="space-y-32 md:space-y-64">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;

            return (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 1, ease: [0.2, 1, 0.3, 1] }}
                 className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-20 items-center group"
               >
                 {/* Image */}
                 <motion.div 
                   whileHover={{ scale: 1.02 }}
                   transition={{ duration: 0.8, ease: "easeOut" }}
                   className={`md:col-span-8 w-full aspect-video bg-zinc-900 overflow-hidden relative ${isEven ? 'order-1' : 'order-1 md:order-2'}`}
                 >
                    <Image 
                      src={proj.img}
                      alt={proj.title}
                      fill
                      className="object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                    />
                 </motion.div>

                 {/* Text Info */}
                 <div className={`md:col-span-4 flex flex-col justify-center space-y-6 ${isEven ? 'order-2' : 'order-2 md:order-1'}`}>
                    <motion.span 
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="text-[10px] font-bold text-zinc-500 tracking-[0.2em]"
                    >
                      {proj.id}
                    </motion.span>
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none"
                    >
                      {proj.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-zinc-400 font-light leading-relaxed"
                    >
                      {proj.desc}
                    </motion.p>
                    
                    <motion.a 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      href="#" 
                      className="inline-flex items-center gap-4 text-white text-[10px] tracking-[0.2em] font-bold uppercase hover:text-zinc-400 transition-colors pt-6 group/link"
                    >
                       View Project 
                       <span className="transform group-hover/link:translate-x-2 transition-transform">&rarr;</span>
                    </motion.a>
                 </div>

               </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
