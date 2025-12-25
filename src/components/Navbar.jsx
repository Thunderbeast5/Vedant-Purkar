import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Always show at the very top
      if (currentScrollY <= 10) {
        setIsVisible(true);
      } 
      // 2. Hide if scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu if user scrolls down
      } 
      // 3. Show if scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'ABOUT', href: '#' },
    { name: 'CUSTOMERS', href: '#' },
    { name: 'PROJECT', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    <nav 
      className={`
        fixed left-0 w-full z-50 bg-transparent font-sans transition-all duration-300 ease-in-out
        ${isVisible ? 'top-0  translate-y-0' : '-translate-y-full top-0 mt-0'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-12">
          
          <div className="flex-1 hidden sm:flex items-center justify-between">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black text-s font-bold tracking-[0.3em] hover:opacity-40 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center sm:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black p-1">
              {isOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-[#e3e3e3] border-t border-gray-300">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-black text-xs font-bold tracking-widest">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;