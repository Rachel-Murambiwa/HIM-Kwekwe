import React from 'react';
import { MapPin, Phone, Mail, Send, Facebook } from 'lucide-react';

const ContactContent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We would love to hear from you. We have two vibrant zones in Kwekwe ready to welcome you home.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 h-fit">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B22222] focus:border-transparent outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B22222] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B22222] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Zone / Subject</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B22222] focus:border-transparent outline-none transition-all bg-white">
                  <option>General Inquiry</option>
                  <option>Prayer Request</option>
                  <option>Kwekwe City Zone</option>
                  <option>Mbizo Zone</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#B22222] focus:border-transparent outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#B22222] text-white font-bold py-4 rounded-lg shadow-lg hover:bg-red-800 transition-transform transform hover:scale-[1.02] flex items-center justify-center">
                <Send size={20} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN: Two Zones with their own Maps */}
          <div className="flex flex-col space-y-10">
            
            {/* === ZONE 1 GROUP === */}
            <div className="space-y-4">
              {/* Zone 1 Card */}
              <div className="bg-[#B22222] rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MapPin size={100} />
                </div>
                <h3 className="text-xl font-bold mb-4 border-b border-red-400 pb-2">Kwekwe City Zone</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 mt-1 text-red-200" />
                    <p className="text-red-50">8493 Glenwood,<br/>Kwekwe, Zimbabwe</p>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="mr-3 mt-1 text-red-200" />
                    <p className="text-red-50">+263 71 412 8046</p>
                  </div>
                  <div className="flex items-start">
                    <Facebook size={20} className="mr-3 mt-1 text-red-200" />
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-red-50 hover:text-white underline">
                      @HIMGlenwood
                    </a>
                  </div>
                </div>
              </div>

              {/* Map 1: Glenwood */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-56 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d33267.87921941645!2d29.755123352163167!3d-18.93560657826234!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19346b006d326c87%3A0xc033f1da9662eeb2!2sHeartfelt%20Kwekwe%20City%20Zone!5e0!3m2!1sen!2sgh!4v1770405871802!5m2!1sen!2sgh" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* === ZONE 2 GROUP === */}
            <div className="space-y-4">
              {/* Zone 2 Card */}
              <div className="bg-gray-900 rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MapPin size={100} />
                </div>
                <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2 text-[#FFD700]">Mbizo Zone</h3>
                
                <div className="space-y-4 relative z-10">
                  <div className="flex items-start">
                    <MapPin size={20} className="mr-3 mt-1 text-[#FFD700]" />
                    <p className="text-gray-300">Chiedza Primary School, Mbizo,<br/>Kwekwe, Zimbabwe</p>
                  </div>
                  <div className="flex items-start">
                    <Phone size={20} className="mr-3 mt-1 text-[#FFD700]" />
                    <p className="text-gray-300">+263 77 272 8541</p>
                  </div>
                  <div className="flex items-start">
                    <Facebook size={20} className="mr-3 mt-1 text-[#FFD700]" />
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white underline">
                      @HIMZone2
                    </a>
                  </div>
                </div>
              </div>

              {/* Map 2: City/Mbizo */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-56 border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5666478711446!2d29.831045825201166!3d-18.906296582263625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19346a4aead9e8db%3A0xd556c4cee18d28b3!2sChiedza%20Primary%20School%2C%20Kwekwe%2C%20Zimbabwe!5e0!3m2!1sen!2sgh!4v1770407130609!5m2!1sen!2sgh" 
                  className="w-full h-full border-0"
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactContent;