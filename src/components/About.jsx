import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { WaveButton } from './WaveButton';
import { WaveHeading } from './WaveHeading';

void motion;

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative md:min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-center px-6 overflow-hidden py-10 md:py-20 font-titillium scroll-mt-16"
    >
      {/* Floating blob */}
      <motion.div
        style={{ y: yMove }}
        className="absolute top-10 left-[5%] w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-gray-400 to-gray-300 rounded-full blur-3xl opacity-30"
      />

      <div className="relative z-10 text-center max-w-5xl w-full">

        {/* Wave-fill heading */}
        <div className="mb-6 sm:mb-12 md:mb-16 px-2">
          <WaveHeading
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none"
            startOffset={0.25}
            endOffset={0.55}
          >
            About Me
          </WaveHeading>
        </div>

        {/* Body text */}
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 sm:mt-12 md:mt-16"
        >
          <WaveButton
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 text-xs sm:text-sm md:text-base"
          >
            Contact Me
          </WaveButton>
        </motion.div>
      </div>
    </section>
  );
}