import React, { useRef } from 'react';
import { DiReact, DiNodejs, DiGit, DiPython } from "react-icons/di";
import { TbBrandCpp, TbBrandReactNative } from "react-icons/tb";
import { SiMongodb, SiFirebase, SiTailwindcss, SiCloudinary } from "react-icons/si"
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaDocker } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion';

const SKILLS = [
  { name: "C++", icon: <TbBrandCpp className="size-5 md:size-6" /> },
  { name: "Python", icon: <DiPython className="size-5 md:size-6" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="size-5 md:size-6" /> },
  { name: "React", icon: <DiReact className="size-5 md:size-6" /> },
  { name: "React Native", icon: <TbBrandReactNative className="size-5 md:size-6" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="size-5 md:size-6" /> },
  { name: "Node.js", icon: <DiNodejs className="size-5 md:size-6" /> },
  { name: "Firebase", icon: <SiFirebase className="size-5 md:size-6" /> },
  { name: "Mongo DB", icon: <SiMongodb className="size-5 md:size-6" /> },
  { name: "Git", icon: <DiGit className="size-5 md:size-6" /> },
  { name: "Figma", icon: <IoLogoFigma className="size-5 md:size-6" /> },
  { name: "Github", icon: <FaGithub className="size-5 md:size-6" /> },
  { name: "Docker", icon: <FaDocker className="size-5 md:size-6" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="size-5 md:size-6" /> },
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
    <div className="flex overflow-hidden whitespace-nowrap py-2 md:py-4">
      <motion.div
        className="flex gap-4 md:gap-6 px-4"
        animate={{ x: baseVelocity > 0 ? [0, -1500] : [-1500, 0] }} // Increased range for smoother infinite feel
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 md:gap-3 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 md:px-6 md:py-3 shadow-lg"
          >
            <span className="text-black/80">{skill.icon}</span>
            <span className="text-sm md:text-lg font-bold text-black/80 uppercase tracking-tight">
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

  // Reduced the transform distance for mobile to keep items on screen
  const xLeft = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const xRight = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} className="relative bg-[#E3E3E3] pt-10 pb-24 md:pt-15 md:pb-40 overflow-hidden">

      <div className="mb-12 md:mb-22">
        <ScrollingRow items={SKILLS} baseVelocity={20} />
      </div>

      <div className="relative py-15">
        {/* Adjusted rotation and scale for mobile: -rotate-1 and scale-100 on small screens */}
        <div className="-rotate-1 md:-rotate-2 space-y-4 md:space-y-8 scale-100 md:scale-110 lg:scale-125">

          {/* Row 1 */}
          <motion.div style={{ x: xLeft }} className="flex gap-4">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-48 w-[300px] md:h-64 md:w-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[2px] border-white cursor-pointer"
              >
                <img src={item.img} className="h-full w-full object-cover" alt="Achievement" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4 md:p-6 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-lg md:text-2xl font-black uppercase mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div style={{ x: xRight }} className="flex gap-4 md:gap-8 translate-x-[-150px] md:translate-x-[-300px]">
            {[...ACHIEVEMENTS, ...ACHIEVEMENTS].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-48 w-[300px] md:h-64 md:w-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[2px] border-white cursor-pointer"
              >
                <img src={item.img} className="h-full w-full object-cover" alt="Achievement" />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4 md:p-6 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-lg md:text-2xl font-black uppercase mb-1 md:mb-2">{item.title}</h3>
                  <p className="text-white/80 text-xs md:text-sm font-medium">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}