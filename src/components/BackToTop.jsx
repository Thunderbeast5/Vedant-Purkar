import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { startWave } from '../utils/waveEffect';

export default function BackToTop({ showAfter = 300 }) {
  const [isVisible, setIsVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnter = () => {
    if (btnRef.current) startWave(btnRef.current, 1);
  };

  const handleLeave = () => {
    if (btnRef.current) startWave(btnRef.current, -1);
  };

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={handleClick}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      aria-label="Back to top"
      className={
        `fixed bottom-6 right-6 z-[99] rounded-full border border-black/20 bg-white/70 backdrop-blur-md shadow-lg transition-all duration-200 hover:bg-white/90 hover:shadow-xl active:scale-95 overflow-hidden group ` +
        `${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`
      }
    >
      <svg
        className="wave-fill absolute inset-0 w-full h-full pointer-events-none z-[1]"
        style={{ borderRadius: "inherit" }}
      />
      <span className="flex h-11 w-11 items-center justify-center relative z-[2]">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-black group-hover:text-white transition-colors duration-200"
        >
          <path
            d="M12 5L5 12M12 5L19 12M12 5V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </button>
  );
}
