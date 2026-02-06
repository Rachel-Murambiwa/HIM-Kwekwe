import React from 'react';
import { MapPin, Calendar, Handshake } from 'lucide-react';

const InfoCards = () => {
  const cards = [
    {
      icon: <MapPin size={40} className="text-[#B22222]" />,
      title: "Visit us.",
      description: "Connect with believers in the City of Kwekwe.",
      link: "Click Here"
    },
    {
      icon: <Calendar size={40} className="text-[#B22222]" />,
      title: "Upcoming Events",
      description: "Register for 90 days of prayer and fasting for Zimbabwe.",
      link: "Click Here"
    },
    {
      icon: <Handshake size={40} className="text-[#B22222]" />,
      title: "Get Involved",
      description: "You are important, we value your contribution.",
      link: "Click Here"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 -mt-24"> 
          {/* Note: -mt-24 pulls this section UP to overlap the Hero if you want that modern look. 
              Remove '-mt-24' if you want it to sit normally below. */}
          
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-xl p-8 text-center border-b-4 border-[#B22222] hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-50 rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <a 
                href="#" 
                className="text-[#B22222] font-bold uppercase text-sm tracking-wider hover:underline"
              >
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCards;