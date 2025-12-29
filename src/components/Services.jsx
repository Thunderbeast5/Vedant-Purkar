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

  return (
    <section 
      ref={containerRef} 
      className="bg-[#E3E3E3] text-black py-20 px-6 md:px-12 font-titillium overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center">
           <h2 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-4">
            Services
          </h2>
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
      className="relative py-12 flex flex-col md:flex-row items-start md:items-center gap-8 border-b border-black/10"
    >
      {/* Animated Bottom Border (Mimicking video style) */}
      <motion.div 
        style={{ scaleX, transformOrigin: "left" }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-black z-10"
      />

      {/* Service Number */}
      <div className="text-4xl md:text-6xl font-black opacity-20 leading-none min-w-[80px]">
        {service.id}
      </div>

      {/* Service Content */}
      <div className="flex-1">
        <h3 className="text-2xl md:text-4xl font-black uppercase mb-3">
          {service.title}
        </h3>
        <p className="text-lg md:text-xl text-black/70 max-w-2xl font-medium leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}