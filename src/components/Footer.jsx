import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = ["Linked In", "Github", "Instagram"];
  
  const contactInfo = {
    email: "vedant.purkar05@gmail.com",
    phone: "+91 84469 95092",
    address: "Nashik, Maharashtra, India"
  };

  const shapes = [
    {
      color: "#7C3AED",
      svg: (
        <path
          d="M50 0C50 27.6 27.6 50 0 50C27.6 50 50 72.4 50 100C50 72.4 72.4 50 100 50C72.4 50 50 27.6 50 0Z"
          fill="currentColor"
        />
      ),
    },
    {
      color: "#BEF264",
      svg: (
        <>
          <circle cx="25" cy="25" r="15" fill="currentColor" />
          <circle cx="75" cy="25" r="15" fill="currentColor" />
          <circle cx="25" cy="75" r="15" fill="currentColor" />
          <circle cx="75" cy="75" r="15" fill="currentColor" />
        </>
      ),
    },
    {
      color: "#FFFFFF",
      svg: (
        <path d="M100 100H0C0 44.77 44.77 0 100 0V100Z" fill="currentColor" />
      ),
    },
    {
      color: "#8B5CF6",
      svg: <circle cx="50" cy="50" r="50" fill="currentColor" />,
    },
    // { color: "#F59E0B", svg: <path d="M100 100A50 50 0 0 0 0 100" fill="currentColor" /> },
    {
      color: "#F59E0B",
      svg: <path d="M50 0L100 100H0Z" fill="currentColor" />,
    },
    {
      color: "#EC4899",
      svg: (
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="15"
        />
      ),
    },
    {
      color: "#06B6D4",
      svg: (
        <path
          d="M0 20L25 40L50 20L75 40L100 20V80L75 60L50 80L25 60L0 80Z"
          fill="currentColor"
        />
      ),
    },

    // 4-petal flower
    {
      color: "#F472B6",svg: (<><circle cx="50" cy="25" r="18" fill="currentColor" />
          <circle cx="75" cy="50" r="18" fill="currentColor" />
          <circle cx="50" cy="75" r="18" fill="currentColor" />
          <circle cx="25" cy="50" r="18" fill="currentColor" />
          <circle cx="50" cy="50" r="10" fill="currentColor" />
        </>
      ),
    },
  ];

  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-12 pb-10 rounded-t-[3rem] font-titillium">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div className="select-none">
            <h2 
              className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-wider"
              style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}
            >
              vedant<br /> purkar
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            <div>
              <h4 className="uppercase font-black tracking-widest opacity-40 mb-6">Social</h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link}>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={`#${link.toLowerCase().replace(" ", "")}`} 
                      className="hover:text-gray-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="uppercase font-black tracking-widest opacity-40 mb-6">Contact</h4>
              <ul className="space-y-4 max-w-[200px]">
                <li><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></li>
                <li>{contactInfo.phone}</li>
                <li className="opacity-70">{contactInfo.address}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: UPDATED SHAPES --- */}
        <div className="flex justify-between items-center gap-1 md:gap-2 overflow-hidden py-6 border-t border-white/10">
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              // Added Hover Effect Here
              whileHover={{ 
                scale: 1.2, 
                rotate: 5,
                transition: { duration: 0.2 } 
              }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 h-24 md:h-40 flex items-center justify-center p-1 cursor-pointer" 
              style={{ color: shape.color }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full object-contain">
                {shape.svg}
              </svg>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] opacity-30">
          <p>© 2025 Vedant Purkar</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}