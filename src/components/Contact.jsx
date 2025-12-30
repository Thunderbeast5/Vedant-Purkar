import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Contact() {
  const containerRef = useRef(null);
  const headerRef = useRef(null);

  // 1. Setup Scroll Animation for the heading fill
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start end", "end start"]
  });

  // 2. Maps the scroll progress to the opacity fill (0 to 1)
  const textFill = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="bg-[#E3E3E3] text-black py-32 px-6 md:px-12 font-titillium min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start">
        
        {/* --- LEFT SIDE: TEXT CONTENT WITH SCROLL REVEAL --- */}
        <div className="space-y-8">
          <div ref={headerRef} className="relative">
            {/* Outline text (Base Layer) */}
            <h2 
              className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter"
              style={{ 
                WebkitTextStroke: "2px #000000", 
                color: "transparent" 
              }}
            >
              Let's <br /> Get In <br /> Touch
            </h2>

            {/* Filled text (Animated Layer) */}
            <motion.h2 
              style={{ opacity: textFill }}
              className="absolute inset-0 text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter text-black"
            >
              Let's <br /> Get In <br /> Touch
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a 
              href="mailto:alex@3dturner.com" 
              className="text-xl md:text-2xl font-bold border-b-2 border-black pb-1 hover:opacity-60 transition-opacity"
            >
              alex@3dturner.com
            </a>
          </motion.div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                <label className="block text-xs uppercase font-black tracking-widest opacity-40 mb-2">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent w-full outline-none text-lg font-medium" 
                  placeholder="Your Name"
                />
              </div>
              <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                <label className="block text-xs uppercase font-black tracking-widest opacity-40 mb-2">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent w-full outline-none text-lg font-medium" 
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
              <label className="block text-xs uppercase font-black tracking-widest opacity-40 mb-2">Message</label>
              <textarea 
                rows="4" 
                className="bg-transparent w-full outline-none text-lg font-medium resize-none" 
                placeholder="What's on your mind?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 rounded-full border-2 border-black text-sm font-black uppercase tracking-[0.2em] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}