import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // REDUCED PADDING: Changed pt-16/pb-8 to py-8 (and py-12 on desktop)
    <footer className="bg-gray-900 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CHANGED GRID: Uses grid-cols-2 on mobile (instead of 1) to save vertical space */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1: Brand (Spans full width on very small screens, or just 1 col on larger mobile) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">
              HIM <span className="text-[#B22222]">Kwekwe</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed max-w-xs">
              Raising a generation of Kingdom-minded believers.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-bold mb-3 border-b border-gray-800 pb-1 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-[#B22222]">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#B22222]">About Us</Link></li>
              <li><Link to="/events" className="hover:text-[#B22222]">Events</Link></li>
              <li><Link to="/gallery" className="hover:text-[#B22222]">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#B22222]">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Ministries */}
          <div>
            <h4 className="text-base font-bold mb-3 border-b border-gray-800 pb-1 inline-block">Ministries</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#B22222]">Men's Fellowship</a></li>
              <li><a href="#" className="hover:text-[#B22222]">Ladies Ministry</a></li>
              <li><a href="#" className="hover:text-[#B22222]">Youth & Young Adults</a></li>
              <li><a href="#" className="hover:text-[#B22222]">Children's Church</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info (Spans full width on very small screens if needed) */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h4 className="text-base font-bold mb-3 border-b border-gray-800 pb-1 inline-block">Visit Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start">
                <MapPin className="text-[#B22222] mr-2 mt-0.5 flex-shrink-0" size={16} />
                <span>8493 Glenwood, Kwekwe</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#B22222] mr-2 flex-shrink-0" size={16} />
                <span>+263 77 272 8541</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#B22222] mr-2 flex-shrink-0" size={16} />
                <span>info@himkwekwe.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p className="text-center md:text-left mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} HIM Kwekwe. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;