import React, { useRef } from 'react';
import { DiReact, DiNodejs, DiGit, DiPython, DiJava } from "react-icons/di";
import { TbBrandCpp, TbBrandReactNative, TbDatabase } from "react-icons/tb";
import { SiMongodb, SiFirebase, SiTailwindcss, SiCloudinary, SiSpringboot, SiPostman, SiExpress } from "react-icons/si"
import { IoLogoFigma, IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaDocker } from "react-icons/fa";
import { motion, useScroll, useTransform } from 'framer-motion';

void motion;

const CLOUDINARY_CLOUD_NAME = "dh4xushgf";

function getOptimizedImageUrl(input, { width } = {}) {
  if (typeof input !== 'string') return input;
  const trimmed = input.trim();
  if (!trimmed) return trimmed;

  // Local images - return as is
  if (trimmed.startsWith('/')) {
    return trimmed;
  }

  // Cloudinary images - legacy support
  if (trimmed.startsWith('cld:')) {
    const publicId = trimmed.slice(4);
    const w = typeof width === 'number' && width > 0 ? `,w_${Math.round(width)}` : '';
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto${w}/${publicId}`;
  }

  return trimmed;
}

const SKILLS = [
  { name: "C++", icon: <TbBrandCpp className="size-5 md:size-6" /> },
  { name: "Python", icon: <DiPython className="size-5 md:size-6" /> },
  { name: "Java", icon: <DiJava className="size-5 md:size-6" /> },
  { name: "JavaScript", icon: <IoLogoJavascript className="size-5 md:size-6" /> },
  { name: "React", icon: <DiReact className="size-5 md:size-6" /> },
  { name: "React Native", icon: <TbBrandReactNative className="size-5 md:size-6" /> },
  { name: "Node.js", icon: <DiNodejs className="size-5 md:size-6" /> },
  { name: "Express.js", icon: <SiExpress className="size-5 md:size-6" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="size-5 md:size-6" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="size-5 md:size-6" /> },
  { name: "Firebase", icon: <SiFirebase className="size-5 md:size-6" /> },
  { name: "Mongo DB", icon: <SiMongodb className="size-5 md:size-6" /> },
  { name: "JPA", icon: <TbDatabase className="size-5 md:size-6" /> },
  { name: "Postman", icon: <SiPostman className="size-5 md:size-6" /> },
  { name: "Git", icon: <DiGit className="size-5 md:size-6" /> },
  { name: "Figma", icon: <IoLogoFigma className="size-5 md:size-6" /> },
  { name: "Github", icon: <FaGithub className="size-5 md:size-6" /> },
  { name: "Docker", icon: <FaDocker className="size-5 md:size-6" /> },
  { name: "Cloudinary", icon: <SiCloudinary className="size-5 md:size-6" /> },
];

const ACHIEVEMENTS_TOP = [
  {
    img: "/imgs/python.jpeg",
    title: "Winner – Python Mini Project Competition",
    desc: "Won first place for designing and implementing a Python-based mini project."
  },
  
  {
    img: "/imgs/nasa.jpeg",
    title: "Global Finalist – NASA Space Apps Challenge 2024",
    desc: "Selected as a Global Finalist among thousands of teams worldwide at NASA Space Apps Challenge 2024."
  },
  {
    img: "/imgs/innov.jpeg",
    title: "Winner – Innover National-Level Hackathon",
    desc: "Secured first place at Innover, a national-level hackathon, for innovative problem-solving and technical implementation."
  },
  {
    img: "/imgs/kumbh.jpeg",
    title: "Kumbhathon Innvotion Incubation Foundation",
    desc: "Selected for incubation at Kumbhathon Innvotion Incubation Foundation for a promising project idea."
  }
];

const ACHIEVEMENTS_BOTTOM = [
  
  {
    
    img: "/imgs/nasa.jpeg",
    title: "Runner-Up – NASA Space Apps Challenge 2024 (Local Event)",
    desc: "Achieved runner-up position at the local-level NASA Space Apps Challenge 2024."
  
  },

  {
    img: "/imgs/iot.jpeg",
    title: "Runner-Up – Java and IoT Mini Project Competition",
    desc: "Secured runner-up position in a mini project competition focused on Java and IoT technologies."
  },
  
  {
    img: "/imgs/kumbh.jpeg",
    title: "Completed Startup Course",
    desc: "Completed a Startup & Entrepreneurship course under Sudhir Kadam, gaining practical knowledge in startups and innovation."
  },
   {
    img: "/imgs/osci.jpeg",
    title: "Open Source Contributor OSCI'25 and GSSoC'25",
    desc: "Contributed to open source projects during OSCI'25 and GSSoC'25, enhancing coding skills and collaboration experience."
  }
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
  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 500 : 800;

  return (
    <section id="skills" ref={containerRef} className="relative bg-[#E3E3E3] pt-10 pb-24 md:pt-15 md:pb-40 overflow-hidden scroll-mt-16">

      <div className="mb-12 md:mb-22">
        <ScrollingRow items={SKILLS} baseVelocity={20} />
      </div>

      <div className="relative py-15">
        {/* Adjusted rotation and scale for mobile: -rotate-1 and scale-100 on small screens */}
        <div className="-rotate-1 md:-rotate-2 space-y-4 md:space-y-8 scale-100 md:scale-110 lg:scale-125">

          {/* Row 1 */}
          <motion.div style={{ x: xLeft }} className="flex gap-4">
            {[...ACHIEVEMENTS_TOP, ...ACHIEVEMENTS_TOP].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-32 w-[200px] md:h-44 md:w-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[2px] border-white cursor-pointer"
              >
                <img
                  src={getOptimizedImageUrl(item.img, { width: imageWidth })}
                  className="h-full w-full object-cover"
                  alt="Achievement"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-3 md:p-4 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-sm md:text-lg font-black uppercase mb-1">{item.title}</h3>
                  <p className="text-white/80 text-[10px] md:text-xs font-medium leading-snug">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 */}
          <motion.div style={{ x: xRight }} className="flex gap-4 md:gap-8 translate-x-[-90px] md:translate-x-[-160px]">
            {[...ACHIEVEMENTS_BOTTOM, ...ACHIEVEMENTS_BOTTOM].map((item, i) => (
              <motion.div 
                key={i} 
                className="group relative flex-shrink-0 h-32 w-[200px] md:h-44 md:w-[320px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border-[2px] border-white cursor-pointer"
              >
                <img
                  src={getOptimizedImageUrl(item.img, { width: imageWidth })}
                  className="h-full w-full object-cover"
                  alt="Achievement"
                  loading="lazy"
                  decoding="async"
                />
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-3 md:p-4 backdrop-blur-sm transition-opacity duration-300"
                >
                  <h3 className="text-white text-sm md:text-lg font-black uppercase mb-1">{item.title}</h3>
                  <p className="text-white/80 text-[10px] md:text-xs font-medium leading-snug">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}