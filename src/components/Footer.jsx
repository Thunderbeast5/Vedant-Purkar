import React from 'react';
import { motion } from 'framer-motion';
import { WaveHeading } from './WaveHeading';

void motion;

export default function Footer() {
  const socialLinks = [
    { label: "Linked In", href: "https://www.linkedin.com/in/vedant-purkar-1b613728b/" },
    { label: "Github", href: "https://github.com/Thunderbeast5" },
    { label: "Instagram", href: "https://www.instagram.com/veeeedanttttt" },
  ];
  
  const contactInfo = {
    email: "vedant.purkar05@gmail.com",
    phone: "+91 84469 95092",
    address: "Nashik, Maharashtra, India"
  };

  const shapes = [
    { src: "f1.webp", alt: "shape 1" },
    { src: "f2.webp", alt: "shape 2" },
    { src: "f3.webp", alt: "shape 3" },
    { src: "f4.webp", alt: "shape 4" },
    { src: "f5.webp", alt: "shape 5" },
    { src: "f6.webp", alt: "shape 6" },
    { src: "f7.webp", alt: "shape 7" },
    { src: "f8.webp", alt: "shape 8" },
  ];

  return (
    <footer className="bg-black text-white px-4 sm:px-6 md:px-12 pt-8 sm:pt-10 md:pt-12 pb-6 sm:pb-8 md:pb-10 rounded-t-2xl sm:rounded-t-3xl md:rounded-t-[3rem] font-titillium">
      <div className="max-w-7xl mx-auto">
        
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
          <div className="select-none">
            <WaveHeading
              className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black uppercase leading-[0.85] tracking-wider"
              strokeColor="#ffffff"
              fillColor="#ffffff"
              startOffset={0.05}
              endOffset={0.3}
            >
              vedant<br /> purkar
            </WaveHeading>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-32 w-full md:w-auto">
            <div>
              <h4 className="uppercase font-black tracking-widest opacity-40 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">Social</h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a 
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-gray-400 transition-colors inline-block"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="uppercase font-black tracking-widest opacity-40 mb-4 sm:mb-5 md:mb-6 text-xs sm:text-sm">Contact</h4>
              <ul className="space-y-3 sm:space-y-4 max-w-[280px] sm:max-w-[200px] text-sm sm:text-base">
                <li>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="hover:underline break-all"
                  >
                    {contactInfo.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${contactInfo.phone}`} className="hover:underline">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="opacity-70">{contactInfo.address}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: SHAPES --- */}
        <div className="flex justify-between items-center gap-1 sm:gap-1.5 md:gap-2 overflow-hidden py-4 sm:py-5 md:py-6 border-t border-white/10">
          {shapes.map((shape, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ 
                scale: 1.15,
                rotate: 5,
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex-1 h-16 sm:h-20 md:h-32 lg:h-40 flex items-center justify-center p-1 cursor-pointer"
            >
              <img
                src={`/footer/${shape.src}`}
                alt={shape.alt}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-5 md:pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] sm:tracking-[0.3em] opacity-30 text-center sm:text-left">
          <p>© 2026 Vedant Purkar</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}