import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

void motion;

const CLOUDINARY_CLOUD_NAME = "dh4xushgf";

function getOptimizedImageUrl(input, { width } = {}) {
  if (typeof input !== 'string') return input;
  const trimmed = input.trim();
  if (!trimmed) return trimmed;

  if (trimmed.startsWith('cld:')) {
    const publicId = trimmed.slice(4);
    const w = typeof width === 'number' && width > 0 ? `,w_${Math.round(width)}` : '';
    return `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto${w}/${publicId}`;
  }

  return trimmed;
}

const projectList = [
  {
    id: "01",
    client: "BRIDGELINK",
    url: "https://bridgelink.in/",
    images: ["cld:Screenshot_2026-01-06_at_18.54.33_kxfd1n", "cld:Screenshot_2026-01-06_at_18.58.32_c9n74q"]
  },
  {
    id: "02",
    client: "Sahara",
    url: "https://github.com/Thunderbeast5/Seizure",
    images: ["cld:sahara-a_pywz1p", "cld:sahara-b_ssazs2"]
  },
  {
    id: "03",
    client: "Pratibhara",
    url: "https://ai-for-her.onrender.com/",
    images: ["cld:prat-a_exd8db", "cld:prat-b_t5yaen"]
    
  },
  {
    id: "04",
    client: "Indic",
    url: "https://indic.in.net/",
    images: ["cld:indic-a_uigxa9", "cld:indic-a_uigxa9"]
  },
  {
    id: "05",
    client: "Chavan Jewellers",
    url: "https://chavanjewellers.in/",
    images: ["cld:chavan-a_awdar2", "cld:chavan-b_n8lmm3"]
  },
  {
    id: "06",
    client: "TEDx KKWIEER",
    url: "https://tedxkkwieer.onrender.com/",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  {
    id: "07",
    client: "Predictor Guru",
    url: "https://github.com/Thunderbeast5/Predictor-Guru",
    images: ["cld:pred-a_ktdsdb", "cld:pred-b_fupula"]
  },
  {
    id: "08",
    client: "Health Pulse",
    url: "https://github.com/Thunderbeast5/HealthPulse",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  {
    id: "09",
    client: "DSA Visualiser",
    url: "https://github.com/Thunderbeast5/Data-Structures-Visualiser",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  {
    id: "10",
    client: "Sorting Algorithm Visualizer",
    url: "https://github.com/Thunderbeast5/Sorting-Algorithm-Visualizer",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  
  // Scroll animation for header color fill
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"]
  });

  // Sharp transition from outline to solid black
  const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  // Show first 4 projects initially, all projects when showAll is true
  const visibleProjects = showAll ? projectList : projectList.slice(0, 4);

  return (
    <section 
      id="projects"
      ref={containerRef} 
      className="bg-[#E3E3E3] text-black py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 font-titillium min-h-screen scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div ref={headerRef} className="relative mb-16 sm:mb-24 md:mb-32 text-center select-none">
          {/* Outline text */}
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none"
            style={{ WebkitTextStroke: "1.5px #000000", color: "transparent" }}
          >
            Projects
          </h2>
          {/* Filled text that fades in on scroll */}
          <motion.h2 
            style={{ opacity: textFill }}
            className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none text-black"
          >
            Projects
          </motion.h2>
        </div>

        {/* --- STACKING CONTAINER --- */}
        <div className={`relative flex flex-col gap-8 sm:gap-12 md:gap-[20vh] ${showAll ? 'pb-12 sm:pb-20 md:pb-[30vh]' : 'pb-8 sm:pb-12 md:pb-[10vh]'}`}>
          {visibleProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

        {/* --- SHOW MORE BUTTON --- */}
        {!showAll && projectList.length > 4 && (
          <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
            <motion.button
              onClick={() => setShowAll(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase z-10 tracking-widest transition-all bg-white shadow-lg"
            >
              Show More Projects
            </motion.button>
          </div>
        )}

        {/* --- SHOW LESS BUTTON --- */}
        {showAll && (
          <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
            <motion.button
              onClick={() => {
                setShowAll(false);
                // Smooth scroll to top of projects section
                containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase tracking-widest transition-all bg-white shadow-lg"
            >
              Show Less
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  // Each card sticks at a slightly lower position than the previous one
  // Reduce offset on mobile for better visibility
  const topOffset = typeof window !== 'undefined' && window.innerWidth < 768 
    ? 60 + (index * 40) 
    : 100 + (index * 90);
  
  const hasUrl = typeof project.url === 'string' && project.url.trim().length > 0;
  const imageWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 900 : 1400;

  return (
    <div 
      className="sticky w-full h-full"
      style={{ top: `${topOffset}px` }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-12 border border-black/30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mb-6 sm:mb-8 md:mb-10"
      >
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">{project.id}</span>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase leading-tight">
                {project.client}
              </h3>
            </div>
          </div>
          
          {hasUrl ? (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap"
            >
              View Project
            </motion.a>
          ) : (
            <motion.button
              type="button"
              disabled
              className="px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-60 cursor-not-allowed"
            >
              Coming Soon
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-48 sm:h-56 md:h-64 lg:h-96">
          {project.images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2rem]">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src={getOptimizedImageUrl(img, { width: imageWidth })} 
                alt={`${project.client} project ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}