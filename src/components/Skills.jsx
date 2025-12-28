import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code2, Cpu, Globe, Layers, Layout, 
  Settings, Zap, Box 
} from 'lucide-react'; // Example icons

// Data structure with Icons
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
        {/* Triple the items for a smooth continuous loop */}
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

  // Increased range for a "wider" feel (-400 to 400 makes them slide faster/further)
  const xLeft = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [500, -500]);

  return (
    <section ref={containerRef} className="relative bg-[#E3E3E3] py-10 overflow-hidden">
      
      {/* 1. Skill Icons Slider (Continuous) */}
      <div className="mb-24">
        <ScrollingRow items={SKILLS} baseVelocity={-20} />
      </div>
/Users/vedant/Desktop/Projects/tedxkkwieer/src/components/SpeakersSection.jsx
      {/* 2. Achievement Carousels (Tilted 2 degrees) */}
      <div className="-rotate-2 space-y-6 scale-125"> 
        {/* Scale-125 makes it feel wider and bleed off the edges */}
        
        {/* Row 1: 5 Images moving Left to Right */}
        <motion.div style={{ x: xLeft }} className="flex gap-6">
          {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
            <div key={i} className="flex-shrink-0">
              <img 
                src={img} 
                className="h-64 w-[450px] rounded-2xl object-cover shadow-2xl border-[3px] border-white"
                alt="Achievement" 
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2: 5 Images moving Right to Left */}
        <motion.div style={{ x: xRight }} className="flex gap-6 translate-x-[-200px]">
          {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((img, i) => (
            <div key={i} className="flex-shrink-0">
              <img 
                src={img} 
                className="h-64 w-[450px] rounded-2xl object-cover shadow-2xl border-[3px] border-white"
                alt="Achievement" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}