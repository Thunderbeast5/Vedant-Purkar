import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#' },
    { name: 'CUSTOMERS', href: '#' },
    { name: 'PROJECT', href: '#' },
    { name: 'CONTACT', href: '#' },
  ];

  return (
    // bg-transparent and text-black applied here
    <nav className="bg-transparent w-full font-sans py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Container for links - using justify-between for even spacing */}
          <div className="flex-1 hidden sm:flex items-center justify-between">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-black text-sm font-bold tracking-[0.2em] hover:opacity-60 transition-opacity duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button (Hamburger) - switched to black */}
          <div className="flex items-center sm:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-black text-sm font-bold text-center tracking-widest border-b border-gray-50"
              >
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