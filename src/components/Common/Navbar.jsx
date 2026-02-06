import React, { useState } from 'react';
import logo from '../../assets/images/logo.webp'; 
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // <--- 1. Import Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 2. Ensure these paths match your Routes in App.jsx
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' }, // You'll create this page later
    { name: 'FAQ', path: '/faq' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' }, // <--- Matches "/gallery" route
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            {/* 3. Use Link instead of <a> for the Logo */}
            <Link to="/">
              <img className="h-14 w-auto" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              // 4. Use Link component here
              <Link
                key={link.name}
                to={link.path} // Note: use 'to' instead of 'href'
                className="text-gray-800 hover:text-[#B22222] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ... Mobile Menu Button code (unchanged) ... */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              // 5. Use Link component here for Mobile too
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu when clicked
                className="block px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 hover:text-[#B22222]"
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