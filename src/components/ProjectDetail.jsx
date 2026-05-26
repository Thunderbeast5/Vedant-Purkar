import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WaveButton } from './WaveButton';

export default function ProjectDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state?.project;

  // Scroll to top immediately on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Safe fallback if route accessed directly without navigation state
  if (!project) {
    return (
      <div className="min-h-screen bg-[#E3E3E3] text-black flex flex-col items-center justify-center font-titillium">
        <h2 className="text-2xl font-black mb-4 uppercase">Project Not Found</h2>
        <WaveButton onClick={() => navigate('/')}>
          Back To Home
        </WaveButton>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#E3E3E3] text-black font-titillium pt-24 pb-16 px-4 sm:px-6 md:px-12 relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* --- NAV BACK BUTTON --- */}
        <motion.button
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 mb-12 text-xs sm:text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          whileHover={{ x: -4 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </motion.button>

        {/* --- HERO HEADING --- */}
        <div className="relative mb-8 sm:mb-12 select-none">
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tight leading-none break-words"
            style={{ WebkitTextStroke: "1.5px #000000", color: "#000000" }}
          >
            {project.client}
          </h1>
          <div className="flex items-center gap-4 mt-4">
            <span className="text-xl sm:text-2xl font-black px-4 py-1 bg-black text-white rounded-full">
              {project.id}
            </span>
            <span className="text-sm sm:text-base font-bold text-gray-600 tracking-wider">
              PROJECT YEAR: {project.year}
            </span>
          </div>
        </div>

        {/* --- HERO IMAGE GRID --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 sm:mb-16"
        >
          {project.images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl md:rounded-[2.5rem] border border-black/10 h-64 sm:h-80 md:h-[28rem] shadow-lg bg-white/50">
              <img 
                src={img} 
                alt={`${project.client} showcase ${i + 1}`} 
                className="w-full h-full object-cover hover:scale-102 transition-transform duration-700" 
              />
            </div>
          ))}
        </motion.div>

        {/* --- STRUCTURAL DETAIL PANELS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT: CORE MISSION & SCOPE */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-black/20 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Overview</h2>
              <p className="text-lg sm:text-xl md:text-2xl font-extrabold text-black leading-snug mb-4">
                {project.tagline}
              </p>
              <p className="text-sm sm:text-base text-gray-800 font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.features && (
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 border border-black/20 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-6">Key Deliverables</h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="text-sm sm:text-base font-bold text-black/80">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* RIGHT: SYSTEM & METRICS */}
          <div className="space-y-6">
            {/* Tech Stack Box */}
            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-black/20 shadow-sm">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 bg-black/5 rounded-xl text-xs font-bold border border-black/10 uppercase tracking-wider text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributors Box */}
            {project.contributors && (
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-black/20 shadow-sm">
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-gray-500 mb-4">Contributors</h2>
                <div className="space-y-2">
                  {project.contributors.map((member, idx) => (
                    <p key={idx} className="text-xs sm:text-sm font-bold text-black uppercase tracking-wide">
                      // {member}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Action Callout */}
            {project.url && (
              <WaveButton
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center !px-0 py-4 rounded-2xl !border-2"
              >
                Launch Live Interface
              </WaveButton>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}