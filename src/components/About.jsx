import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 overflow-hidden py-20">
      
      {/* --- Floating 3D Elements --- */}
      {/* Silver Blob (Top Left) */}
      <motion.img 
        src="/path-to-silver-blob.png" 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-32 md:w-48 opacity-80"
      />
      
      {/* Purple Flower (Middle Right) */}
      <motion.img 
        src="/path-to-flower.png" 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-32 md:w-48"
      />

      {/* Red Heart (Bottom Left) */}
      <motion.img 
        src="/path-to-heart.png" 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-[5%] w-24 md:w-40"
      />

      {/* --- Content --- */}
      <div className="relative z-10 text-center max-w-4xl">
        
        {/* Animated Heading: Hollow to Solid effect on Scroll or Hover */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-10 transition-all duration-700 hover:text-transparent hover:[-webkit-text-stroke:2px_white]"
          style={{ WebkitTextStroke: "0px white" }}
        >
          About Me
        </motion.h2>

        {/* About Paragraph */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 text-lg md:text-2xl font-medium text-gray-300 leading-relaxed"
        >
          <p>With over five years of experience in design,</p>
          <p>I specialize in branding, web design, and user experience.</p>
          <p>I love collaborating with businesses that want to stand out</p>
          <p>and showcase their best side.</p>
          <p className="text-white font-bold mt-6">Let's create something amazing together!</p>
        </motion.div>

        {/* Contact Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 rounded-full bg-gradient-to-r from-blue-600/20 via-purple-500/40 to-pink-500/20 backdrop-blur-xl border border-white/20 text-white font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(168,85,247,0.4)]"
        >
          Contact Me
        </motion.button>
      </div>

    </section>
  );
}