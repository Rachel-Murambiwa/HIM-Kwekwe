import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal pages
import { MapPin, Calendar, Handshake, ArrowRight } from 'lucide-react';

const GetInvolvedSection = () => {
  
  // --- UPDATED DATA ARRAY ---
  const actions = [
    {
      icon: <MapPin size={40} className="text-[#B22222]" />,
      title: "Visit us.",
      description: "Connect with believers in the City of Kwekwe.",
      btnText: "Get Directions",
      // Google Maps Search Link for HIM Kwekwe
      url: "",
      external: true // Mark as external so it opens in new tab
    },
    {
      icon: <Calendar size={40} className="text-[#B22222]" />,
      title: "Upcoming Events",
      description: "Register for 90 days of prayer and fasting for Zimbabwe.",
      btnText: "View Calendar",
      url: "/events", // Internal Route
      external: false
    },
    {
      icon: <Handshake size={40} className="text-[#B22222]" />,
      title: "Get Involved",
      description: "You are important, we value your contribution.",
      btnText: "Contact Us",
      url: "/contact", // Internal Route
      external: false
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {actions.map((item, index) => (
        <div 
          key={index} 
          className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
        >
          <div className="bg-red-50 p-4 rounded-full mb-6 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
          
          {/* --- SMART LINK RENDERING --- */}
          {item.external ? (
            // OPTION A: External Link (Google Maps)
            <a 
              href='https://maps.app.goo.gl/n5bekD3NYkff2keu8'
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#B22222] font-bold flex items-center hover:text-[#8B0000] transition-colors"
            >
              {item.btnText} <ArrowRight size={16} className="ml-2" />
            </a>
          ) : (
            // OPTION B: Internal Link (React Router)
            <Link 
              to={item.url}
              className="text-[#B22222] font-bold flex items-center hover:text-[#8B0000] transition-colors"
            >
              {item.btnText} <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
          
        </div>
      ))}
    </div>
  );
};

export default GetInvolvedSection;