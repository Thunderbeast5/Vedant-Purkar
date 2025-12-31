import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

void motion;

export default function Contact() {
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
      id="contact"
      ref={containerRef}
      className="bg-[#E3E3E3] text-black pt-12 sm:pt-20 md:pt-32 pb-4 sm:pb-6 md:pb-4 px-4 sm:px-6 md:px-12 font-titillium min-h-fit md:min-h-screen flex items-center scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-32 items-start">
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          <div ref={headerRef} className="relative">
            <h2 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-wide"
              style={{ 
                WebkitTextStroke: "1.5px #000000", 
                color: "transparent" 
              }}
            >
              Let's <br /> Get In <br /> Touch
            </h2>

            <motion.h2 
              style={{ opacity: textFill }}
              className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.85] tracking-wide text-black"
            >
              Let's <br /> Get In <br /> Touch
            </motion.h2>
          </div>

          <div className="pt-3 sm:pt-4 border-b-2 border-black inline-block">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ delay: 0.4, duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:vedant.purkar05@gmail.com" 
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold pb-1 hover:opacity-60 transition-opacity break-all"
              >
                vedant.purkar05@gmail.com
              </a>
            </motion.div>
          </div>
        </div>

        {/* --- RIGHT SIDE: CONTACT FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form className="space-y-6 sm:space-y-8 md:space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                <label className="block text-[10px] sm:text-xs uppercase font-black tracking-widest opacity-40 mb-2">Name</label>
                <input 
                  type="text" 
                  className="bg-transparent w-full outline-none text-base sm:text-lg font-medium" 
                  placeholder="Your Name"
                />
              </div>
              <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
                <label className="block text-[10px] sm:text-xs uppercase font-black tracking-widest opacity-40 mb-2">Email</label>
                <input 
                  type="email" 
                  className="bg-transparent w-full outline-none text-base sm:text-lg font-medium" 
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div className="relative border-b border-black/20 pb-2 focus-within:border-black transition-colors">
              <label className="block text-[10px] sm:text-xs uppercase font-black tracking-widest opacity-40 mb-2">Message</label>
              <textarea 
                rows="4" 
                className="bg-transparent w-full outline-none text-base sm:text-lg font-medium resize-none" 
                placeholder="What's on your mind?"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 sm:py-4 md:py-5 rounded-full border-2 border-black text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}