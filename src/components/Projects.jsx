import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const projectList = [
  {
    id: "01",
    client: "Skyline Studios",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    id: "02",
    client: "Pixel Forge",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  },
  {
    id: "03",
    client: "Metaform Creations",
    images: ["/api/placeholder/400/300", "/api/placeholder/400/300"]
  }
];

export default function Projects() {
  const containerRef = useRef(null);

  // Scroll Progress for the Header Fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });

  const headClip = useTransform(smoothProgress, [0.1, 0.5], ["0%", "100%"]);
  const headMask = useTransform(headClip, (v) => `linear-gradient(to right, black ${v}, transparent ${v})`);

  return (
    <section 
      ref={containerRef} 
      className="bg-[#E3E3E3] text-black py-32 px-6 md:px-12 font-titillium overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER WITH FILL --- */}
        <div className="relative mb-24 text-center select-none">
          <h2 
            className="text-7xl md:text-[10rem] font-black uppercase tracking-normal leading-none"
            style={{ WebkitTextStroke: "2px #000000", color: "transparent" }}
          >
            Projects
          </h2>
          <motion.h2 
            style={{ WebkitMaskImage: headMask, maskImage: headMask }}
            className="absolute inset-0 text-7xl md:text-[10rem] font-black uppercase tracking-normal leading-none text-black"
          >
            Projects
          </motion.h2>
        </div>

        {/* --- PROJECTS LIST --- */}
        <div className="flex flex-col gap-10">
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
      className="group relative bg-white/40 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-black/10 shadow-sm"
    >
      {/* Card Header */}
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
          className="px-6 py-2 rounded-full border border-black text-xs font-bold uppercase tracking-widest transition-colors duration-300"
        >
          Live Project
        </motion.button>
      </div>

      {/* Image Grid (Mimicking the video layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-64 md:h-96">
        {project.images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded-[2rem] h-full">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
              src={img} 
              alt={project.client} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}