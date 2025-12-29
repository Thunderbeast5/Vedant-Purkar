import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Sharp transition from outline to solid black
  const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  const yMove = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      ref={containerRef} 
      /* Changed justify-center to justify-start and added pt-32 to move header up */
      className="relative min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-start px-6 overflow-hidden pt-32 pb-20 font-titillium"
    >
      
      {/* --- Floating 3D Elements --- */}
      <motion.div 
        style={{ y: yMove }}
        className="absolute top-10 left-[5%] w-40 h-40 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full blur-3xl opacity-30"
      />

      {/* --- Content --- */}
      <div className="relative z-10 text-center max-w-5xl">
        
        {/* Scroll-Animated Heading */}
        <div className="relative mb-16">
          {/* - Added 'tracking-normal' or 'tracking-wide' to fix word gap 
              - Added '#000000' for absolute black stroke
          */}
          <h2 
            className="text-7xl md:text-[10rem] font-black font-titillium uppercase tracking-normal leading-none"
            style={{ 
              WebkitTextStroke: "2px #000000", 
              color: "transparent" 
            }}
          >
            About Me
          </h2>
          
          {/* - Forced 'text-black' (#000) 
              - Matches the same tracking for perfect overlay 
          */}
          <motion.h2 
            style={{ opacity: textFill }}
            className="absolute inset-0 text-7xl md:text-[10rem] font-black uppercase tracking-normal leading-none text-black"
          >
            About Me
          </motion.h2>
        </div>

        {/* Paragraph text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-xl md:text-3xl font-medium text-black leading-tight"
        >
          <p>With over five years of experience in design,</p>
          <p>I specialize in branding, web design, and user experience.</p>
          <p>I love collaborating with businesses that want to stand out</p>
          <p>and showcase their best side.</p>
          <p className="text-black font-extrabold mt-8">Let's create something amazing together!</p>
        </motion.div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 px-12 py-5 rounded-full bg-white/30 backdrop-blur-md border border-black/30 text-black font-bold uppercase tracking-widest shadow-2xl hover:bg-black hover:text-white transition-all duration-300"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
}