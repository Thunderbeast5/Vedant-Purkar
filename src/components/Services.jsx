import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "3D Modeling",
    description: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    id: "02",
    title: "3D Rendering",
    description: "High-quality photorealistic renders that showcase designs with realistic lighting, textures, and shadows."
  },
  {
    id: "03",
    title: "3D Animation",
    description: "Dynamic animations to bring characters, products, or environments to life for marketing, gaming, or storytelling."
  },
  {
    id: "04",
    title: "Product Design",
    description: "Precise 3D modeling and rendering for showcasing or prototyping consumer products."
  },
  {
    id: "05",
    title: "3D Printing Models",
    description: "Custom 3D designs prepared and optimized for 3D printing technology."
  }
];

export default function Services() {
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
      ref={containerRef} 
      className="bg-[#E3E3E3] text-black py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-12 font-titillium overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Scroll Animation */}
        <div ref={headerRef} className="mb-8 sm:mb-12 md:mb-20 text-center relative">
          {/* Outline text */}
          <h2 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black uppercase tracking-wide leading-none mb-4"
            style={{ 
              WebkitTextStroke: "1.5px #000000", 
              color: "transparent" 
            }}
          >
            Services
          </h2>

          {/* Filled text that fades in on scroll */}
          <motion.h2 
            style={{ opacity: textFill }}
            className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-black uppercase tracking-wide leading-none text-black mb-4"
          >
            Services
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }) {
  const itemRef = useRef(null);

  // Individual scroll progress for each service line
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 90%", "start 60%"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative py-4 sm:py-6 md:py-12 flex flex-col md:flex-row items-start md:items-center gap-3 sm:gap-4 md:gap-8 border-b border-black/10"
    >
      {/* Animated Bottom Border (Mimicking video style) */}
      <motion.div 
        style={{ scaleX, transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-10"
      />

      {/* Service Number */}
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-black leading-none min-w-[80px] sm:min-w-[100px] md:min-w-[120px]">
        {service.id}
      </div>

      {/* Service Content */}
      <div className="flex-1">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase mb-2 sm:mb-3">
          {service.title}
        </h3>
        <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl font-medium leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}