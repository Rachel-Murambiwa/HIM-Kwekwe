import React, { useState } from 'react';
import logo from '../../assets/images/logo.webp'; 
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* 1. LOGO */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <Link to="/">
              <img className="h-14 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* 2. DESKTOP MENU (Hidden on Mobile) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path} 
                className="text-gray-800 hover:text-[#B22222] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. MOBILE HAMBURGER BUTTON (Visible ONLY on Mobile) */}
          {/* This was missing in your previous code! */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#B22222] focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* 4. MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu when clicked
                className="block px-3 py-3 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#B22222] rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;