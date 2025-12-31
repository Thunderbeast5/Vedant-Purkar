import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = ["Instagram", "Facebook", "Artstation", "Deviantart"];
  
  const contactInfo = {
    email: "alex@3dturner.com",
    phone: "+1 (555) 123-4567",
    address: "123 Creative Lane, Suite 45, Design City, CA 90210"
  };

  const shapes = [
    { color: "#7C3AED", type: "cross" }, // Purple Cross
    { color: "#BEF264", type: "dots" },  // Lime Dots
    { color: "#FFFFFF", type: "arc" },   // White Arc
    { color: "#8B5CF6", type: "circle" }, // Purple Circle
    { color: "#FFFFFF", type: "zigzag" }, // White Zigzag
    { color: "#F59E0B", type: "semi" },   // Orange Semicircle
    { color: "#FFFFFF", type: "tri" },    // White Triangle
    { color: "#EC4899", type: "ring" }    // Pink Ring
  ];

  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-20 pb-10 rounded-t-[3rem] font-titillium">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION: BRANDING & LINKS --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          
          {/* Logo / Name */}
          <div className="select-none">
            <h2 
              className="text-6xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter"
              style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}
            >
              vedant<br /> purkar
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-16 md:gap-32">
            {/* Social Links */}
            <div>
              <h4 className="text-xs uppercase font-black tracking-widest opacity-40 mb-6">Social</h4>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link}>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      href={`#${link.toLowerCase()}`} 
                      className="text-sm font-bold hover:text-gray-400 transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xs uppercase font-black tracking-widest opacity-40 mb-6">Contact</h4>
              <ul className="space-y-4 max-w-[200px]">
                <li>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold hover:underline">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="text-sm font-bold">{contactInfo.phone}</li>
                <li className="text-sm font-bold opacity-70 leading-relaxed">
                  {contactInfo.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: GEOMETRIC SHAPES --- */}
        <div className="flex justify-between items-center gap-2 overflow-hidden py-8 border-t border-white/10">
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex-1 h-16 md:h-24 flex items-center justify-center"
            >
              {/* Simplified Geometric Visuals */}
              <div 
                className="w-full h-full max-w-[80px]" 
                style={{ 
                  backgroundColor: shape.type === "ring" ? "transparent" : shape.color,
                  border: shape.type === "ring" ? `12px solid ${shape.color}` : "none",
                  borderRadius: shape.type === "circle" || shape.type === "ring" ? "999px" : 
                                shape.type === "semi" ? "100px 100px 0 0" : 
                                shape.type === "dots" ? "10px" : "0px",
                  clipPath: shape.type === "tri" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : 
                            shape.type === "arc" ? "circle(50% at 100% 100%)" : "none"
                }} 
              />
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