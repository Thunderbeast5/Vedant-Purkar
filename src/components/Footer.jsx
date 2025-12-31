import React from 'react';

export default function Footer() {
  return (
    <div className=" bg-black text-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-8 font-titillium">
          {/* Name */}
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none font-titillium">
              <span className="text-transparent" style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white'
              }}>ALEX</span>
            </h1>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
              <span className="text-transparent" style={{
                WebkitTextStroke: '2px white',
                textStroke: '2px white'
              }}>TURNER</span>
            </h1>
          </div>

          {/* Contact Info */}
          <div className="flex gap-16 text-sm">
            <div>
              <h3 className="font-bold mb-3">SOCIAL</h3>
              <ul className="space-y-1 text-gray-400">
                <li>Instagram</li>
                <li>Facebook</li>
                <li>Artstation</li>
                <li>Deviantart</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">CONTACT</h3>
              <ul className="space-y-1 text-gray-400">
                <li>alex@3dturner.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Creative Lane, Suite 45</li>
                <li>Design City, CA 90210</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Geometric Shapes Row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {/* Purple blob shape */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M20,50 Q20,20 40,20 L60,20 Q80,20 80,40 L80,60 Q80,80 60,80 L30,80 Q20,80 20,70 Z" fill="#8b5cf6"/>
            </svg>
          </div>

          {/* Two lime circles */}
          <div className="flex gap-2">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lime-400"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-lime-400"></div>
          </div>

          {/* White curved shape */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M30,20 Q50,20 70,40 Q90,60 70,80 L30,80 Q10,80 10,60 Q10,40 30,20 Z" fill="white"/>
            </svg>
          </div>

          {/* Purple circle */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-600"></div>

          {/* White angular shapes */}
          <div className="flex gap-2">
            <div className="relative w-12 h-20 md:w-16 md:h-24 bg-white transform -skew-x-12"></div>
            <div className="relative w-12 h-20 md:w-16 md:h-24 bg-white transform skew-x-12"></div>
          </div>

          {/* Orange butterfly/bow shape */}
          <div className="relative w-24 h-20 md:w-32 md:h-24">
            <svg viewBox="0 0 100 80" className="w-full h-full">
              <circle cx="25" cy="40" r="25" fill="#fb923c"/>
              <circle cx="75" cy="40" r="25" fill="#fb923c"/>
            </svg>
          </div>

          {/* White triangle */}
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon points="50,20 90,80 10,80" fill="white"/>
            </svg>
          </div>

          {/* Pink donut */}
          <div className="relative w-24 h-24 md:w-32 md:h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="#ec4899"/>
              <circle cx="50" cy="50" r="20" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}