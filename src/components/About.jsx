import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

void motion;

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
      id="about"
      className="relative min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-center px-6 overflow-hidden py-20 font-titillium scroll-mt-16"
    >
      {/* --- Floating 3D Elements --- */}
      <motion.div 
        style={{ y: yMove }}
        className="absolute top-10 left-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full blur-3xl opacity-30"
      />

      {/* --- Content --- */}
      <div className="relative z-10 text-center max-w-5xl w-full">
        {/* Scroll-Animated Heading */}
        <div className="relative mb-10 sm:mb-12 md:mb-16">
          {/* Outline text */}
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black font-titillium uppercase tracking-normal leading-none px-2"
            style={{ 
              WebkitTextStroke: "1.5px #000000", 
              color: "transparent" 
            }}
          >
            About Me
          </h2>
          {/* Filled text */}
          <motion.h2 
            style={{ opacity: textFill }}
            className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none text-black px-2"
          >
            About Me
          </motion.h2>
        </div>

        {/* Paragraph text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-3xl font-medium text-black leading-tight px-4 sm:px-6"
        >
          <p>With a strong foundation in AI and full-stack development,</p>
          <p>I specialize in building intuitive applications that push technological boundaries.</p>
          <p>I love collaborating on projects that turn complex problems</p>
          <p>into seamless user experiences and smarter decision-making.</p>
          <p className="text-black font-extrabold mt-6 sm:mt-7 md:mt-8">
            Let's create something amazing together!
          </p>
        </motion.div>

        {/* Contact Button */}
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
          className="mt-10 sm:mt-12 md:mt-16 px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 rounded-full bg-white/30 backdrop-blur-md border border-black/30 text-black font-bold uppercase tracking-widest shadow-2xl hover:bg-black hover:text-white transition-all duration-300 text-xs sm:text-sm md:text-base"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  );
}