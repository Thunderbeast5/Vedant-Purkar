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
    /* absolute top-0 z-50 places it on top of the Hero */
    /* mt-6 adds the margin from the very top of the screen */
    <nav className="absolute top-0 left-0 w-full z-50 bg-[#e3e3e3] font-sans  ">
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

          <div className="flex items-center sm:hidden ml-auto">
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