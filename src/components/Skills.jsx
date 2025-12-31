import React, { useRef } from 'react';
import { DiReact, DiNodejs, DiGit, DiPython } from "react-icons/di";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiFirebase, SiTailwindcss, SiCloudinary } from "react-icons/si"
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaDocker } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion';

const SKILLS = [
  { name: "C++", icon: <TbBrandCpp size={24} /> },
  { name: "Python", icon: <DiPython size={24} /> },
  { name: "JavaScript", icon: <IoLogoJavascript size={24} /> },
  { name: "React", icon: <DiReact size={24} /> },
  { name: "React Native", icon: <TbBrandReactNative size={24} /> },
  { name: "Tailwind", icon: <SiTailwindcss size={24} /> },
  { name: "Node.js", icon: <DiNodejs size={24} /> },
  { name: "Firebase", icon: <SiFirebase size={24} /> },
  { name: "Mongo DB", icon: <SiMongodb size={24} /> },
  { name: "Git", icon: <DiGit size={24} /> },
  { name: "Figma", icon: <IoLogoFigma size={24} /> },
  { name: "Github", icon: <FaGithub size={24} /> },
  { name: "Docker", icon: <FaDocker size={24} /> },
  { name: "Cloudinary", icon: <SiCloudinary size={24} /> },
];

const ACHIEVEMENTS = [
  { img: "https://picsum.photos/400/250?random=1", title: "Achievement One", desc: "Short description here" },
  { img: "https://picsum.photos/400/250?random=2", title: "Achievement Two", desc: "Short description here" },
  { img: "https://picsum.photos/400/250?random=3", title: "Achievement Three", desc: "Short description here" },
  { img: "https://picsum.photos/400/250?random=4", title: "Achievement Four", desc: "Short description here" },
  { img: "https://picsum.photos/400/250?random=5", title: "Achievement Five", desc: "Short description here" },
];

const ScrollingRow = ({ items, baseVelocity = -5 }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-4">
      <motion.div
        className="flex gap-6 px-4"
        animate={{ x: baseVelocity > 0 ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-6 py-3 shadow-lg"
          >
            <span className="text-black/80">{skill.icon}</span>
            <span className="text-lg font-bold text-black/80 uppercase tracking-tight">
              {skill.name}
            </span>
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
    <section ref={containerRef} className="relative bg-[#E3E3E3] pt-15 pb-40 overflow-hidden">

      <div className="mb-22">
        <ScrollingRow items={SKILLS} baseVelocity={20} />
      </div>

      <div className="relative py-5">
        <div className="-rotate-2 space-y-8 scale-110 md:scale-125">

          {/* Row 1 */}
          <motion.div style={{ x: xLeft }} className="flex gap-4">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-64 w-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[2px] border-white cursor-pointer"
              >
                <img src={item.img} className="h-full w-full object-cover" alt="Achievement" />
                
                {/* Hover Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-2xl font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div style={{ x: xRight }} className="flex gap-8 translate-x-[-300px]">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-64 w-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[2px] border-white cursor-pointer"
              >
                <img src={item.img} className="h-full w-full object-cover" alt="Achievement" />
                
                {/* Hover Overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-2xl font-black uppercase mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm font-medium">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}