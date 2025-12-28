import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const SpeakersSection = () => {
  const [showMore, setShowMore] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 },
    show: shouldReduceMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const speakers = [
    {
      name: "DR. SAMEER",
      surname: "KASHYAP",
      role: "Astro-Physicist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800"
    },
    {
      name: "ANANYA",
      surname: "SHARMA",
      role: "Climate Activist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800"
    },
    {
      name: "VIKRAM",
      surname: "MEHTA",
      role: "AI Researcher",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800"
    },
    {
      name: "SARA",
      surname: "WALKER",
      role: "Quantum Biologist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800"
    }
  ];

  const moreSpeakers = [
    {
      name: "PRIYA",
      surname: "DESAI",
      role: "Neuroscientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
    },
    {
      name: "RAHUL",
      surname: "SINGH",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
    },
    {
      name: "MAYA",
      surname: "PATEL",
      role: "Marine Biologist",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800"
    },
    {
      name: "ARJUN",
      surname: "REDDY",
      role: "Space Architect",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"
    }
  ];

  return (
    <section id="speakers" className="bg-white py-24 scroll-mt-[120px]">
      <style>{`
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slideLeft 20s linear infinite;
        }
        .animate-slide-right {
          animation: slideRight 20s linear infinite;
        }
        .animate-slide-left:hover,
        .animate-slide-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <h2 className="text-sm font-bold text-[#EB0028] uppercase tracking-[0.4em] mb-2">The Lineup</h2>
          <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">
            Our <span className="text-[#EB0028]">Speakers</span>
          </h3>
          <p className="text-gray-500 mt-4 text-xl font-light italic">Inspiring minds, one talk at a time.</p>
          <div className="w-20 h-1.5 bg-[#EB0028] mt-6 rounded-full"></div>
        </motion.div>
      </div>

      {/* Sliding Speakers Container - Full Width */}
      <motion.div
        className="max-w-[1920px] mx-auto"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* First Row - Sliding Left */}
        <div className="relative overflow-hidden mb-12 -mx-6 md:-mx-12">
          <div className="flex animate-slide-left">
            {[...speakers, ...speakers].map((speaker, index) => (
              <div key={index} className="group cursor-pointer flex-shrink-0 w-[300px] mx-6">
                {/* THE VERTICAL OVAL IMAGE */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[100px] mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-200">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                  {/* Red Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#EB0028]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Speaker Details */}
                <div className="text-center">
                  <h4 className="text-2xl font-black text-gray-900 leading-none tracking-tighter uppercase">
                    {speaker.name} <span className="text-[#EB0028]">{speaker.surname}</span>
                  </h4>
                  <div className="w-8 h-1 bg-gray-200 mx-auto my-3 transition-all duration-500 group-hover:w-16 group-hover:bg-[#EB0028]"></div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Sliding Right (appears when showMore is true) */}
        {showMore && (
          <div className="relative overflow-hidden mb-12 -mx-6 md:-mx-12">
            <div className="flex animate-slide-right">
              {[...moreSpeakers, ...moreSpeakers].map((speaker, index) => (
                <div key={index} className="group cursor-pointer flex-shrink-0 w-[300px] mx-6">
                  {/* THE VERTICAL OVAL IMAGE */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-[100px] mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-red-200">
                  <img 
                    src={speaker.image} 
                    alt={speaker.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  />
                    {/* Red Overlay on Hover */}
                    <div className="absolute inset-0 bg-[#EB0028]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Speaker Details */}
                  <div className="text-center">
                    <h4 className="text-2xl font-black text-gray-900 leading-none tracking-tighter uppercase">
                      {speaker.name} <span className="text-[#EB0028]">{speaker.surname}</span>
                    </h4>
                    <div className="w-8 h-1 bg-gray-200 mx-auto my-3 transition-all duration-500 group-hover:w-16 group-hover:bg-[#EB0028]"></div>
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      {speaker.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* View All Button */}
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          className="mt-20 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <button 
            onClick={() => setShowMore(!showMore)}
            className="border-2 border-black text-black px-12 py-4 rounded-full font-bold hover:bg-[#EB0028] hover:border-[#EB0028] hover:text-white transition-all duration-300 uppercase tracking-widest text-sm shadow-lg"
          >
            {showMore ? 'Show Less' : 'View All Speakers'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;