import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  
  // Track scroll progress within this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform for text: starts as outline (0), becomes solid (1)
  const textFill = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  // Movement for floating 3D shapes
  const yMove = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-center px-6 overflow-hidden py-20 font-titillium"
    >
      
      {/* --- Floating Abstract 3D Elements --- */}
      {/* Top Left Blob */}
      <motion.div 
        style={{ y: yMove }}
        className="absolute top-20 left-[10%] w-32 h-32 bg-gradient-to-br from-gray-400 to-gray-200 rounded-full blur-2xl opacity-50"
      />
      
      {/* Bottom Right Blob */}
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        className="absolute bottom-20 right-[10%] w-48 h-48 bg-gradient-to-tr from-blue-200 to-purple-200 rounded-full blur-3xl opacity-40"
      />

      {/* --- Content --- */}
      <div className="relative z-10 text-center max-w-5xl">
        
        {/* Scroll-Animated Heading */}
        <div className="relative mb-12">
          {/* Base Outline Layer */}
          <h2 
            className="text-7xl md:text-9xl font-black font-titillium uppercase tracking-tighter"
            style={{ 
              WebkitTextStroke: "2px #000", 
              color: "transparent" 
            }}
          >
            About Me
          </h2>
          
          {/* Solid Fill Layer (Controlled by Scroll) */}
          <motion.h2 
            style={{ opacity: textFill }}
            className="absolute inset-0 text-7xl md:text-9xl font-black uppercase tracking-tighter text-black"
          >
            About Me
          </motion.h2>
        </div>

        {/* About Paragraph with Staggered Fade-in */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-xl md:text-3xl font-medium text-black/70 leading-tight"
        >
          <p>With over five years of experience in design,</p>
          <p>I specialize in branding, web design, and user experience.</p>
          <p>I love collaborating with businesses that want to stand out</p>
          <p>and showcase their best side.</p>
          <p className="text-black font-extrabold mt-8">Let's create something amazing together!</p>
        </motion.div>

        {/* Glass-morphism Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-16 px-12 py-5 rounded-full bg-white/40 backdrop-blur-md border border-black/10 text-black font-bold uppercase tracking-widest shadow-xl hover:bg-white/60 transition-colors"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
}