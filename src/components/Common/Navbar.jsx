import React, { useState } from 'react';
import logo from '../../assets/images/logo.webp'; // Path to your logo
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Events', href: '/events' },
    { name: 'Institute', href: '/institute' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              className="h-14 w-auto" 
              src={logo} 
              alt="Heartfelt International Ministries Logo" 
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 hover:text-[#B22222] font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Dropdown Link */}
            <div className="relative group cursor-pointer flex items-center text-gray-800 hover:text-[#B22222] font-medium transition-colors">
              <span>More</span>
              <ChevronDown size={18} className="ml-1" />
            </div>

            {/* Donate Button */}
            <a
              href="/donate"
              className="bg-gradient-to-r from-[#FF0000] to-[#B22222] text-white px-6 py-2 rounded-full font-bold shadow-lg hover:brightness-110 transition-all"
            >
              Donate / Partner
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#B22222] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#B22222]"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3">
              <a
                href="/donate"
                className="block text-center bg-[#B22222] text-white px-6 py-3 rounded-md font-bold"
              >
                Donate / Partner
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;