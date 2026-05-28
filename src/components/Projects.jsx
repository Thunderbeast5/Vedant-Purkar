// import React, { useRef, useState, useMemo } from 'react';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// // Prevent vite/webpack warnings about "void motion" if necessary
// void motion;

// // --- HELPER FUNCTIONS ---

// function getOptimizedImageUrl(input) {
//   return input;
// }

// // --- DATA ---
// // Added 'year' property to enable time-based sorting
// const projectList = [
//   {
//     id: "01",
//     client: "Sahara",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Seizure",
//     images: ["/projs/shara1.png", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "02",
//     client: "BRIDGELINK",
//     year: 2025,
//     url: "https://bridgelink.in/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "02",
//     client: "Sahara",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Seizure",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "03",
//     client: "Pratibhara",
//     year: 2025,
//     url: "https://ai-for-her.onrender.com/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "04",
//     client: "Indic",
//     year: 2025,
//     url: "https://indic.in.net/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "05",
//     client: "Chavan Jewellers",
//     year: 2025,
//     url: "https://chavanjewellers.in/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "06",
//     client: "TEDx KKWIEER",
//     year: 2025,
//     url: "https://tedxkkwieer.onrender.com/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "07",
//     client: "Predictor Guru",
//     year: 2024,
//     url: "https://github.com/Thunderbeast5/Predictor-Guru",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "08",
//     client: "Health Pulse",
//     year: 2024,
//     url: "https://github.com/Thunderbeast5/HealthPulse",
//     images: ["/imgs/python.jpeg", "/imgs/python.jpeg"]
//   },
//   {
//     id: "09",
//     client: "DSA Visualiser",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Data-Structures-Visualiser",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"]
//   },
//   {
//     id: "10",
//     client: "Sorting Algorithm Visualizer",
//     year: 2023,
//     url: "https://github.com/Thunderbeast5/Sorting-Algorithm-Visualizer",
//     images: ["/imgs/python.jpeg", "/imgs/python.jpeg"]
//   },
// ];

// // --- MAIN COMPONENT ---

// export default function Projects() {
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
  
//   const [showAll, setShowAll] = useState(false);
//   const [sortOption, setSortOption] = useState('Best'); // Options: 'Best', 'Newest', 'Oldest'
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Scroll animation for header color fill
//   const { scrollYProgress } = useScroll({
//     target: headerRef,
//     offset: ["start end", "end start"]
//   });

//   const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

//   // --- SORTING LOGIC ---
//   const sortedProjects = useMemo(() => {
//     // Create a shallow copy to avoid mutating original array
//     let sorted = [...projectList];

//     if (sortOption === 'Newest') {
//       sorted.sort((a, b) => b.year - a.year);
//     } else if (sortOption === 'Oldest') {
//       sorted.sort((a, b) => a.year - b.year);
//     } 
//     // If 'Best', we leave it as the original default order
    
//     return sorted;
//   }, [sortOption]);

//   // Determine which projects to actually render
//   const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

//   return (
//     <section 
//       id="projects"
//       ref={containerRef} 
//       className="bg-[#E3E3E3] text-black pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 font-titillium min-h-screen scroll-mt-16"
//     >
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- SECTION HEADER --- */}
//         <div ref={headerRef} className="relative mb-12 sm:mb-16 md:mb-20 text-center select-none">
//           {/* Outline text */}
//           <h2 
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none"
//             style={{ WebkitTextStroke: "1.5px #000000", color: "transparent" }}
//           >
//             Projects
//           </h2>
//           {/* Filled text that fades in on scroll */}
//           <motion.h2 
//             style={{ opacity: textFill }}
//             className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none text-black"
//           >
//             Projects
//           </motion.h2>
//         </div>

//         {/* --- SORT CONTROLS --- */}
//         <div className="flex justify-end mb-8 sm:mb-12 relative z-20">
//           <div className="relative inline-block text-left">
//             <motion.button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center gap-2 px-6 py-2 rounded-full border border-black text-xs sm:text-sm font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-colors"
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Sort By: {sortOption}</span>
//               <svg 
//                 className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </motion.button>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-black shadow-xl overflow-hidden"
//                 >
//                   <div className="py-2">
//                     {['Best', 'Newest', 'Oldest'].map((option) => (
//                       <button
//                         key={option}
//                         onClick={() => {
//                           setSortOption(option);
//                           setIsDropdownOpen(false);
//                           // Optional: Reset showAll to false when resorting? 
//                           // setShowAll(false); 
//                         }}
//                         className={`block w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors ${
//                           sortOption === option ? 'bg-black text-white hover:bg-black' : 'text-black'
//                         }`}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* --- STACKING CONTAINER --- */}
//         <div className={`relative flex flex-col gap-8 sm:gap-12 md:gap-[20vh] ${showAll ? 'pb-8 sm:pb-12 md:pb-16' : 'pb-4 sm:pb-6 md:pb-8'}`}>
//           {/* AnimatePresence allows cards to fade in/out when sorting changes.
//             mode="popLayout" ensures smooth reordering.
//           */}
//           <AnimatePresence mode="popLayout">
//             {visibleProjects.map((project, index) => (
//               <ProjectCard 
//                 key={project.id} // IMPORTANT: Key must be unique (ID) not Index for correct reordering animation
//                 project={project} 
//                 index={index}
//                 showAll={showAll}
//               />
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* --- SHOW MORE BUTTON --- */}
//         {!showAll && projectList.length > 4 && (
//           <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
//             <motion.button
//               onClick={() => setShowAll(true)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
//               className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase z-10 tracking-widest transition-all bg-white shadow-lg"
//             >
//               Show More Projects
//             </motion.button>
//           </div>
//         )}

//         {/* --- SHOW LESS BUTTON --- */}
//         {showAll && (
//           <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
//             <motion.button
//               onClick={() => {
//                 setShowAll(false);
//                 containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
//               className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase tracking-widest transition-all bg-white shadow-lg"
//             >
//               Show Less
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// // --- PROJECT CARD COMPONENT ---

// function ProjectCard({ project, index, showAll }) {
//   // Each card sticks at a slightly lower position than the previous one
//   const topOffset = typeof window !== 'undefined' && window.innerWidth < 768 
//     ? 60 + (index * 40) 
//     : 100 + (index * 90);
  
//   const hasUrl = typeof project.url === 'string' && project.url.trim().length > 0;
//   const imageWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 900 : 1400;

//   return (
//     <motion.div
//       layout // Activates Framer Motion layout animations for smooth reordering
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className={showAll ? "w-full" : "sticky w-full"}
//       style={showAll ? { zIndex: index } : { top: `${topOffset}px`, zIndex: index }} // Ensure z-index follows order
//     >
//       <div 
//         className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-12 border border-black/30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mb-6 sm:mb-8 md:mb-10"
//       >
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
//           <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
//             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">{project.id}</span>
//             <div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase leading-tight">
//                 {project.client}
//               </h3>
//               {/* Optional: Show Year */}
//               <p className="text-xs font-bold text-gray-500 mt-1">{project.year}</p>
//             </div>
//           </div>
          
//           {hasUrl ? (
//             <motion.a
//               href={project.url}
//               target="_blank"
//               rel="noreferrer"
//               whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
//               whileTap={{ scale: 0.95 }}
//               className="px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black text-[10px] sm:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap"
//             >
//               View Project
//             </motion.a>
//           ) : (
//             <motion.button
//               type="button"
//               disabled
//               className="px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-60 cursor-not-allowed"
//             >
//               Coming Soon
//             </motion.button>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-48 sm:h-56 md:h-64 lg:h-96">
//           {project.images.map((img, i) => (
//             <div key={i} className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2rem]">
//               <motion.img 
//                 whileHover={{ scale: 1.05 }}
//                 src={getOptimizedImageUrl(img, { width: imageWidth })} 
//                 alt={`${project.client} project ${i + 1}`}
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-full object-cover transition-all duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// import React, { useRef, useState, useMemo } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// void motion;

// function getOptimizedImageUrl(input) {
//   return input;
// }

// // --- EXTENDED DATA TO SUPPORT DETAILS PAGE ---
// // --- EXTENDED DATA TO SUPPORT DETAILS PAGE ---
// const projectList = [
//   {
//     id: "01",
//     client: "Sahara",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Seizure",
//     images: ["/projs/shara1.png", "/imgs/placeholder2.jpeg"],
//     tagline: "Mobile healthcare tracking ecosystem for underserved rural communities.",
//     description: "Sahara is a dedicated healthcare management application built to monitor and track childhood health metrics in rural environments. It provides operational efficiency for field coordinates, enabling seamless logging and tracking even under constrained network environments.",
//     techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     contributors: ["Vedant Purkar (Lead Developer)"],
//     features: ["Offline-first medical logging and local data synchronization", "Dynamic health chart visualization for tracking development milestones", "Simplified community worker portal with minimalist UI layouts"]
//   },
//   {
//     id: "02",
//     client: "BRIDGELINK",
//     year: 2025,
//     url: "https://bridgelink.in/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Real-time professional student-alumni networking and mentorship platform.",
//     description: "BridgeLink bridges the gap between undergraduates and alumni by providing a secure, centralized hub for mentorship, professional referrals, and targeted career preparation pathways.",
//     techStack: ["React.js", "Firebase", "Tailwind CSS", "Framer Motion"],
//     contributors: ["Vedant Purkar (Full-Stack Developer)"],
//     features: ["Real-time dynamic instant messaging architecture", "Algorithmic mentor-matching based on professional background fields", "Verified institutional onboarding flows for professional alumni"]
//   },
//   {
//     id: "03",
//     client: "Pratibhara",
//     year: 2025,
//     url: "https://ai-for-her.onrender.com/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "AI-driven digital platform empowering entrepreneurs through tailored mentorship.",
//     description: "Pratibhara leverages multi-agent workflows and integrated Generative AI engines to supply early-stage business leaders with actionable growth roadmaps, localized market insights, and dynamic operational strategies.",
//     techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Generative AI API", "LangChain"],
//     contributors: ["Vedant Purkar (AI & Web Engineer)"],
//     features: ["Multi-agent automated system architecture for deep market analysis", "Interactive AI conversational chatbot for personalized legal and strategic advice", "Fluid, high-performance UI workflows utilizing sophisticated layouts"]
//   },
//   {
//     id: "04",
//     client: "Indic",
//     year: 2025,
//     url: "https://indic.in.net/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Localized web localization tools and high-impact digital experiences.",
//     description: "Indic provides streamlined, modern web utilities focused on enhancing regional web accessibility, delivering rapid content translation services, and performant user interface elements.",
//     techStack: ["React.js", "Tailwind CSS", "Node.js", "Framer Motion"],
//     contributors: ["Vedant Purkar"],
//     features: ["Highly responsive global state management layout modules", "Sub-millisecond interactive translation caching protocols", "Minimalist glassmorphic layout theme matching premium aesthetic guidelines"]
//   },
//   {
//     id: "05",
//     client: "Chavan Jewellers",
//     year: 2025,
//     url: "https://chavanjewellers.in/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Premium digital storefront and immersive catalog for high-end luxury jewelry.",
//     description: "A tailored commercial platform built to host high-resolution product inventory, featuring graceful product filters, intuitive client interaction points, and smooth transition mechanics.",
//     techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Figma"],
//     contributors: ["Vedant Purkar (Frontend Lead)"],
//     features: ["Premium high-fidelity interface with smooth infinite gallery carousels", "Advanced client-side search indexing and fine-grain facet filtering", "Optimized image loading pipelines built for ultra-high-resolution assets"]
//   },
//   {
//     id: "06",
//     client: "TEDx KKWIEER",
//     year: 2025,
//     url: "https://tedxkkwieer.onrender.com/",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Official interactive media hub and ticket portal for TEDx KKWIEER.",
//     description: "The primary digital face of the TEDx university conference, built to handle massive traffic bursts while executing high-impact typography and heavy fluid-scroll animation sequences.",
//     techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
//     contributors: ["Vedant Purkar (Website Manager)"],
//     features: ["Sophisticated scroll-driven color filling and outline-to-solid title mechanics", "Interactive speaker profile card grids using performance-optimized layer bounds", "Responsive mobile menu setups engineered with resilient fallback mechanics"]
//   },
//   {
//     id: "07",
//     client: "Predictor Guru",
//     year: 2024,
//     url: "https://github.com/Thunderbeast5/Predictor-Guru",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Data-driven analytical forecasting system using machine learning engines.",
//     description: "An intuitive mathematical dashboard engineered to ingest trend datasets and construct precise predictive metrics, accompanied by a robust charting interface.",
//     techStack: ["Python", "Flask", "React.js", "Tailwind CSS", "Chart.js"],
//     contributors: ["Vedant Purkar"],
//     features: ["Advanced machine learning model integration for processing custom arrays", "Asynchronous data retrieval polling layers ensuring real-time UI synchronization", "Clean analytical data layout modules with easy-to-export reporting hooks"]
//   },
//   {
//     id: "08",
//     client: "Health Pulse",
//     year: 2024,
//     url: "https://github.com/Thunderbeast5/HealthPulse",
//     images: ["/imgs/python.jpeg", "/imgs/python.jpeg"],
//     tagline: "Desktop health monitoring suite and patient diagnostics ledger.",
//     description: "A secure standalone internal healthcare utility engineered to parse diagnostics arrays, calculate immediate health risk parameters, and organize records.",
//     techStack: ["Python", "Tkinter", "SQLite", "NumPy"],
//     contributors: ["Vedant Purkar"],
//     features: ["Lightweight, dependency-optimized localized analytical database runtime", "Real-time anomaly checks on vitals using standard vector arrays", "Automated custom export routines for generation of static health files"]
//   },
//   {
//     id: "09",
//     client: "DSA Visualiser",
//     year: 2025,
//     url: "https://github.com/Thunderbeast5/Data-Structures-Visualiser",
//     images: ["/imgs/placeholder1.jpeg", "/imgs/placeholder2.jpeg"],
//     tagline: "Interactive algorithmic rendering sandbox for core data structures.",
//     description: "An educational platform built to map structural memory layouts to interactive visuals, helping engineering students intuitively map complex pointers, graphs, and tree operations.",
//     techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
//     contributors: ["Vedant Purkar"],
//     features: ["Step-by-step frame execution layers for traversal animations", "Interactive state modification graphs allowing users to add/delete live nodes", "Precise operational time-complexity tickers responding directly to live operations"]
//   },
//   {
//     id: "10",
//     client: "Sorting Algorithm Visualizer",
//     year: 2023,
//     url: "https://github.com/Thunderbeast5/Sorting-Algorithm-Visualizer",
//     images: ["/imgs/python.jpeg", "/imgs/python.jpeg"],
//     tagline: "Dynamic spatial computational engine tracking sorting performance.",
//     description: "A performance-focused visual sandbox tracing spatial index modifications for foundational sorting routines, accompanied by audio cues or discrete sorting metrics.",
//     techStack: ["Python", "Pygame", "Matplotlib"],
//     contributors: ["Vedant Purkar"],
//     features: ["Real-time comparative execution clocks tracing array mutation steps", "Highly configurable random generation fields with customizable element scaling", "Visual comparison of multi-track complexity equations running in lockstep"]
//   }
// ];

// export default function Projects() {
//   const containerRef = useRef(null);
//   const headerRef = useRef(null);
  
//   const [showAll, setShowAll] = useState(false);
//   const [sortOption, setSortOption] = useState('Best');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const { scrollYProgress } = useScroll({
//     target: headerRef,
//     offset: ["start end", "end start"]
//   });

//   const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

//   const sortedProjects = useMemo(() => {
//     let sorted = [...projectList];
//     if (sortOption === 'Newest') {
//       sorted.sort((a, b) => b.year - a.year);
//     } else if (sortOption === 'Oldest') {
//       sorted.sort((a, b) => a.year - b.year);
//     } 
//     return sorted;
//   }, [sortOption]);

//   const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

//   return (
//     <section 
//       id="projects"
//       ref={containerRef} 
//       className="bg-[#E3E3E3] text-black pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 font-titillium min-h-screen scroll-mt-16"
//     >
//       <div className="max-w-7xl mx-auto">
        
//         {/* --- SECTION HEADER --- */}
//         <div ref={headerRef} className="relative mb-12 sm:mb-16 md:mb-20 text-center select-none">
//           <h2 
//             className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none"
//             style={{ WebkitTextStroke: "1.5px #000000", color: "transparent" }}
//           >
//             Projects
//           </h2>
//           <motion.h2 
//             style={{ opacity: textFill }}
//             className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none text-black"
//           >
//             Projects
//           </motion.h2>
//         </div>

//         {/* --- SORT CONTROLS --- */}
//         <div className="flex justify-end mb-8 sm:mb-12 relative z-20">
//           <div className="relative inline-block text-left">
//             <motion.button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="flex items-center gap-2 px-6 py-2 rounded-full border border-black text-xs sm:text-sm font-bold uppercase tracking-widest bg-white hover:bg-black hover:text-white transition-colors"
//               whileTap={{ scale: 0.95 }}
//             >
//               <span>Sort By: {sortOption}</span>
//               <svg 
//                 className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} 
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </motion.button>

//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                   transition={{ duration: 0.2 }}
//                   className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-black shadow-xl overflow-hidden"
//                 >
//                   <div className="py-2">
//                     {['Best', 'Newest', 'Oldest'].map((option) => (
//                       <button
//                         key={option}
//                         onClick={() => {
//                           setSortOption(option);
//                           setIsDropdownOpen(false);
//                         }}
//                         className={`block w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors ${
//                           sortOption === option ? 'bg-black text-white hover:bg-black' : 'text-black'
//                         }`}
//                       >
//                         {option}
//                       </button>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* --- STACKING CONTAINER --- */}
//         <div className={`relative flex flex-col gap-8 sm:gap-12 md:gap-[20vh] ${showAll ? 'pb-8 sm:pb-12 md:pb-16' : 'pb-4 sm:pb-6 md:pb-8'}`}>
//           <AnimatePresence mode="popLayout">
//             {visibleProjects.map((project, index) => (
//               <ProjectCard 
//                 key={project.id} 
//                 project={project} 
//                 index={index}
//                 showAll={showAll}
//               />
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* --- TOGGLE BUTTONS --- */}
//         {!showAll && projectList.length > 4 && (
//           <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
//             <motion.button
//               onClick={() => setShowAll(true)}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
//               className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase z-10 tracking-widest transition-all bg-white shadow-lg"
//             >
//               Show More Projects
//             </motion.button>
//           </div>
//         )}

//         {showAll && (
//           <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
//             <motion.button
//               onClick={() => {
//                 setShowAll(false);
//                 containerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//               }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
//               className="px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-full border-2 border-black text-xs sm:text-sm font-bold uppercase tracking-widest transition-all bg-white shadow-lg"
//             >
//               Show Less
//             </motion.button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// function ProjectCard({ project, index, showAll }) {
//   const navigate = useNavigate();
//   const topOffset = typeof window !== 'undefined' && window.innerWidth < 768 
//     ? 60 + (index * 40) 
//     : 100 + (index * 90);
  
//   const hasUrl = typeof project.url === 'string' && project.url.trim().length > 0;
//   const imageWidth = typeof window !== 'undefined' && window.innerWidth < 768 ? 900 : 1400;

//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//       className={showAll ? "w-full" : "sticky w-full"}
//       style={showAll ? { zIndex: index } : { top: `${topOffset}px`, zIndex: index }}
//     >
//       <div 
//         className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-12 border border-black/30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mb-6 sm:mb-8 md:mb-10"
//       >
//         <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
//           <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
//             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">{project.id}</span>
//             <div>
//               <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase leading-tight">
//                 {project.client}
//               </h3>
//               <p className="text-xs font-bold text-gray-500 mt-1">{project.year}</p>
//             </div>
//           </div>
          
//           {/* --- ULTRA FLUID ACTION BUTTONS --- */}
//           <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            
//             {/* View Details Button */}
//             <motion.button
//               onClick={() => navigate(`/project/${project.id}`, { state: { project } })}
//               whileTap={{ scale: 0.95 }}
//               className="group relative px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black text-[10px] sm:text-xs font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap bg-white text-black transition-colors duration-300 ease-out hover:text-white"
//             >
//               {/* Sliding fill background */}
//               <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
//               {/* Target text container layer to keep rendering above back-fill */}
//               <span className="relative z-10">View Details</span>
//             </motion.button>

//             {/* Visit Project Button */}
//             {hasUrl ? (
//               <motion.a
//                 href={project.url}
//                 target="_blank"
//                 rel="noreferrer"
//                 whileTap={{ scale: 0.95 }}
//                 className="group relative px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black text-[10px] sm:text-xs font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap bg-white text-black transition-colors duration-300 ease-out hover:text-white"
//               >
//                 {/* Sliding fill background */}
//                 <span className="absolute inset-0 w-full h-full bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
//                 <span className="relative z-10">Visit Project</span>
//               </motion.a>
//             ) : (
//               <button
//                 type="button"
//                 disabled
//                 className="px-4 sm:px-5 md:px-6 py-2 rounded-full border border-black/40 text-[10px] sm:text-xs font-bold uppercase tracking-widest whitespace-nowrap opacity-60 cursor-not-allowed text-black"
//               >
//                 Coming Soon
//               </button>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 h-48 sm:h-56 md:h-64 lg:h-96">
//           {project.images.map((img, i) => (
//             <div key={i} className="overflow-hidden rounded-xl sm:rounded-2xl md:rounded-[2rem]">
//               <motion.img 
//                 whileHover={{ scale: 1.05 }}
//                 src={getOptimizedImageUrl(img, { width: imageWidth })} 
//                 alt={`${project.client} project ${i + 1}`}
//                 loading="lazy"
//                 decoding="async"
//                 className="w-full h-full object-cover transition-all duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { WaveButton } from "./WaveButton";
import { WaveHeading } from "./WaveHeading";
import projectList, { getOptimizedImageUrl } from "../data/projectList";

export default function Projects() {
  const containerRef = useRef(null);

  const [showAll, setShowAll] = useState(false);
  const [sortOption, setSortOption] = useState("Best");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const sortedProjects = useMemo(() => {
    let sorted = [...projectList];
    if (sortOption === "Newest") sorted.sort((a, b) => b.year - a.year);
    else if (sortOption === "Oldest") sorted.sort((a, b) => a.year - b.year);
    return sorted;
  }, [sortOption]);

  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 4);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="bg-[#E3E3E3] text-black pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 md:px-12 font-titillium min-h-screen scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* --- SECTION HEADER --- */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center select-none">
          <WaveHeading
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-black uppercase tracking-normal leading-none"
            startOffset={0.25}
            endOffset={0.55}
          >
            Projects
          </WaveHeading>
        </div>

        {/* --- SORT CONTROLS --- */}
        <div className="flex justify-end mb-8 sm:mb-12 relative z-20">
          <div className="relative inline-block text-left">
            <WaveButton
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-6 py-2 text-xs sm:text-sm"
            >
              <span className="flex items-center gap-2">
                <span>Sort By: {sortOption}</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </WaveButton>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-2xl bg-white border border-black shadow-xl overflow-hidden"
                >
                  <div className="py-2">
                    {["Best", "Newest", "Oldest"].map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortOption(option);
                          setIsDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black/5 transition-colors ${
                          sortOption === option ? "bg-black text-white hover:bg-black" : "text-black"
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- STACKING CONTAINER --- */}
        <div
          className={`relative flex flex-col gap-8 sm:gap-12 md:gap-[20vh] ${
            showAll ? "pb-8 sm:pb-12 md:pb-16" : "pb-4 sm:pb-6 md:pb-8"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                showAll={showAll}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* --- TOGGLE BUTTONS --- */}
        {!showAll && projectList.length > 4 && (
          <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <WaveButton
                onClick={() => setShowAll(true)}
                className="!px-8 sm:!px-10 md:!px-12 !py-3 sm:!py-3.5 md:!py-4 !border-2 text-xs sm:text-sm shadow-lg"
              >
                Show More Projects
              </WaveButton>
            </motion.div>
          </div>
        )}

        {showAll && (
          <div className="flex justify-center -mt-4 sm:-mt-6 md:-mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <WaveButton
                onClick={() => {
                  setShowAll(false);
                  containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="!px-8 sm:!px-10 md:!px-12 !py-3 sm:!py-3.5 md:!py-4 !border-2 text-xs sm:text-sm shadow-lg"
              >
                Show Less
              </WaveButton>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── WaveButton ───────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index, showAll }) {
  const navigate = useNavigate();

  const topOffset =
    typeof window !== "undefined" && window.innerWidth < 768
      ? 60 + index * 40
      : 100 + index * 90;

  const hasUrl = typeof project.url === "string" && project.url.trim().length > 0;
  const imageWidth = typeof window !== "undefined" && window.innerWidth < 768 ? 900 : 1400;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={showAll ? "w-full" : "sticky w-full"}
      style={showAll ? { zIndex: index } : { top: `${topOffset}px`, zIndex: index }}
    >
      <div className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-[3rem] p-4 sm:p-6 md:p-8 lg:p-12 border border-black/30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] mb-6 sm:mb-8 md:mb-10">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black">
              {project.id}
            </span>
            <div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black uppercase leading-tight">
                {project.client}
              </h3>
              <p className="text-xs font-bold text-gray-500 mt-1">{project.year}</p>
            </div>
          </div>

          {/* --- ACTION BUTTONS --- */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">

            {/* View Details */}
            <WaveButton onClick={() => navigate(`/project/${project.id}`, { state: { project } })}>
              View Details
            </WaveButton>

            {/* Visit Project / Coming Soon */}
            {hasUrl ? (
              <WaveButton href={project.url} target="_blank" rel="noreferrer">
                Visit Project
              </WaveButton>
            ) : (
              <WaveButton disabled>Coming Soon</WaveButton>
            )}
          </div>
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
      </div>
    </motion.div>
  );
}