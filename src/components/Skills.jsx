import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Cpu, Globe, Layers, Layout, 
  Settings, Zap, Box 
} from 'lucide-react';

const SKILLS = [
  { name: "React", icon: <Layout size={24} /> },
  { name: "Tailwind", icon: <Zap size={24} /> },
  { name: "Vite", icon: <Cpu size={24} /> },
  { name: "Spline", icon: <Box size={24} /> },
  { name: "Three.js", icon: <Globe size={24} /> },
  { name: "Node.js", icon: <Settings size={24} /> },
  { name: "Framer", icon: <Layers size={24} /> },
  { name: "JS/TS", icon: <Code2 size={24} /> },
];

const ACHIEVEMENTS = [
  "https://picsum.photos/400/250?random=1",
  "https://picsum.photos/400/250?random=2",
  "https://picsum.photos/400/250?random=3",
  "https://picsum.photos/400/250?random=4",
  "https://picsum.photos/400/250?random=5",
];

const ScrollingRow = ({ items, baseVelocity = -5 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div 
        className="flex gap-6 px-4"
        animate={{ x: baseVelocity > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, i) => (
          <div key={i} className="flex items-center gap-3 rounded-full bg-white border border-gray-200 px-6 py-3 shadow-sm">
            <span className="text-black">{skill.icon}</span>
            <span className="text-lg font-bold text-black uppercase tracking-tight">{skill.name}</span>
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

  const xLeft = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [500, -500]);

  return (
    /* Increased py-40 gives the tilted/scaled content space so it doesn't clip */
    <section ref={containerRef} className="relative bg-[#E3E3E3]  pt-15 pb-40 overflow-hidden">
      
      {/* 1. Skill Icons Slider */}
      <div className="mb-32">
        <ScrollingRow items={SKILLS} baseVelocity={20} />
      </div>

      {/* 2. Achievement Carousels */}
      {/* Added a wrapper div with extra padding to prevent clipping during the 2-degree rotation */}
      <div className="relative py-5">
        <div className="-rotate-2 space-y-8 scale-110 md:scale-125"> 
          
          {/* Row 1: Left to Right */}
          <motion.div style={{ x: xLeft }} className="flex gap-4">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
              <div key={i} className="flex-shrink-0">
                <img 
                  src={img} 
                  className="h-64 w-[450px] rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[2px] border-white"
                  alt="Achievement" 
                />
              </div>
            ))}
          </motion.div>

          {/* Row 2: Right to Left */}
          <motion.div style={{ x: xRight }} className="flex gap-8 translate-x-[-300px]">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
              <div key={i} className="flex-shrink-0">
                <img 
                  src={img} 
                  className="h-64 w-[450px] rounded-3xl object-cover shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[2px] border-white"
                  alt="Achievement" 
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}