import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projectList = [
  {
    id: "01",
    client: "Skyline Studios",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  },
  {
    id: "02",
    client: "Pixel Forge",
    images: ["/api/placeholder/600/400", "/api/placeholder/600/400"]
  }
];

export default function Projects() {
  const containerRef = useRef(null);
    const headerRef = useRef(null);
  
    // Scroll animation for header color fill
    const { scrollYProgress } = useScroll({
      target: headerRef,
      offset: ["start end", "end start"]
    });
  
    // Sharp transition from outline to solid black
    const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);
  
    return (
      <section 
        ref={containerRef} 
        className="bg-[#E3E3E3] text-black py-20 px-6 md:px-12 font-titillium overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Scroll Animation */}
          <div ref={headerRef} className="mb-20 text-center relative">
            {/* Outline text */}
            <h2 
              className="text-7xl md:text-[10rem] font-black uppercase tracking-wide leading-none mb-4"
              style={{ 
                WebkitTextStroke: "2px #000000", 
                color: "transparent" 
              }}
            >
              Projects
            </h2>
            
            {/* Filled text that fades in on scroll */}
            <motion.h2 
              style={{ opacity: textFill }}
              className="absolute inset-0 text-7xl md:text-[10rem] font-black uppercase tracking-wide leading-none text-black mb-4"
            >
              Projects
            </motion.h2>
          </div>

        {/* --- PROJECTS LIST --- */}
        <div className="flex flex-col gap-12">
          {projectList.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-black/10 shadow-sm"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-6">
          <span className="text-3xl md:text-5xl font-black opacity-20">{project.id}</span>
          <div>
            <p className="text-xs uppercase font-bold tracking-widest opacity-50">Client</p>
            <h3 className="text-xl md:text-2xl font-black uppercase">{project.client}</h3>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
          className="px-6 py-2 rounded-full border border-black text-xs font-bold uppercase tracking-widest transition-all"
        >
          Live Project
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64 md:h-96">
        {project.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-[2rem]">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src={img} 
              alt="Project Showcase" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}