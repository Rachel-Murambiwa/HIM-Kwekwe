import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png'; // Use if you have a logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Vision */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              HIM <span className="text-[#B22222]">Kwekwe</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Raising a generation of Kingdom-minded believers. Join us as we impact our city and nation for Christ.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#B22222] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/" className="hover:text-[#B22222] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#B22222] transition-colors">About Us</Link></li>
              <li><Link to="/events" className="hover:text-[#B22222] transition-colors">Upcoming Events</Link></li>
              <li><Link to="/gallery" className="hover:text-[#B22222] transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#B22222] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Ministries */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Ministries</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-[#B22222] transition-colors">Men's Fellowship</a></li>
              <li><a href="#" className="hover:text-[#B22222] transition-colors">Ladies Ministry</a></li>
              <li><a href="#" className="hover:text-[#B22222] transition-colors">Youth & Young Adults</a></li>
              <li><a href="#" className="hover:text-[#B22222] transition-colors">Children's Church</a></li>
              <li><a href="#" className="hover:text-[#B22222] transition-colors">Praise & Worship</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-800 pb-2 inline-block">Visit Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start">
                <MapPin className="text-[#B22222] mr-3 mt-1" size={20} />
                <span>
                  123 Church Street,<br />
                  Kwekwe, Zimbabwe
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-[#B22222] mr-3" size={20} />
                <span>+263 77 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-[#B22222] mr-3" size={20} />
                <span>info@himkwekwe.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Heartfelt International Ministries Kwekwe. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;