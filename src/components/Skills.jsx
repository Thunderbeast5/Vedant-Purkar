import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Mock data - Replace with your actual icons/images
const SKILLS = ["React", "Tailwind", "Vite", "Spline", "Three.js", "Node.js", "Framer Motion", "JavaScript"];
const ACHIEVEMENTS = [
    "https://picsum.photos/200/300", // Replace with your achievement images
    "https://picsum.photos/200/300", // Replace with your achievement images
    "https://picsum.photos/200/300", // Replace with your achievement images
    "https://picsum.photos/200/300", // Replace with your achievement images
    
];

const ScrollingRow = ({ items, baseVelocity = -5 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4">
      <motion.div 
        className="flex gap-8 px-4"
        animate={{ x: baseVelocity > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {/* Render items twice for a seamless loop */}
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 backdrop-blur-sm">
            <span className="text-xl font-bold text-white">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Achievements move horizontally based on scroll
  const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="relative bg-[#E3E3E3] py-24 overflow-hidden">
      {/* <div className="mb-16 px-6">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-black md:text-6xl">
          Skills & <br /> Milestones
        </h2>
      </div> */}

      {/* 1. Continuous Skills Slider */}
      <div className="mb-10">
        <ScrollingRow items={SKILLS} baseVelocity={-20} />
      </div>

      {/* 2. Achievement Carousels (Tilted 2 degrees) */}
      <div className="-rotate-1 space-y-4 scale-110">
        {/* Row 1: Moves Left to Right on scroll */}
        <motion.div style={{ x: xLeft }} className="flex gap-6">
          {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
            <img 
              key={i} 
              src={img} 
              className="h-60 w-90 rounded-2xl object-cover shadow-2xl border-2 border-white"
              alt="Achievement" 
            />
          ))}
        </motion.div>

        {/* Row 2: Moves Right to Left on scroll */}
        <motion.div style={{ x: xRight }} className="flex gap-6">
          {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
            <img 
              key={i} 
              src={img} 
              className="h-60 w-90 rounded-2xl object-cover shadow-2xl border-2 border-white"
              alt="Achievement" 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}