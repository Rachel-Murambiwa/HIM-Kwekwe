import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';

const ServiceTimes = () => {
  // You can update these times to match the specific Kwekwe Zone schedule
  const services = [
    {
      day: "Sunday Service",
      time: "09:00 AM - 01:00 PM",
      description: "Main Worship Service & The Word",
      highlight: true // This will make the card stand out
    },
    {
      day: "Wednesday",
      time: "05:30 PM - 07:30 PM",
      description: "Midweek Service & Bible Study",
      highlight: false
    },
    {
      day: "Friday",
      time: "05:30 PM - 07:30 PM",
      description: "Prayer & Intercession",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Worship With Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invite you to experience Spirit-led, transformative encounters through our weekly services. There is a place for you here.
          </p>
        </div>

        {/* Times Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-[#B22222] border-[#B22222] text-white shadow-xl scale-105 z-10' 
                  : 'bg-white border-gray-100 text-gray-800 hover:border-[#FFD700] hover:shadow-lg'
              }`}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mb-6 mx-auto">
                <Clock size={24} className={service.highlight ? "text-white" : "text-[#B22222]"} />
              </div>
              
              <h3 className="text-2xl font-bold text-center mb-2">{service.day}</h3>
              <p className={`text-center font-medium mb-4 ${service.highlight ? 'text-red-100' : 'text-gray-500'}`}>
                {service.time}
              </p>
              
              <div className={`h-1 w-16 mx-auto mb-4 rounded-full ${service.highlight ? 'bg-[#FFD700]' : 'bg-gray-200'}`} />
              
              <p className={`text-center ${service.highlight ? 'text-gray-100' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Location / Directions Block */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between border border-gray-200">
          <div className="flex items-start mb-6 md:mb-0">
            <div className="p-3 bg-[#B22222] rounded-full text-white mr-4 mt-1">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Get Directions</h3>
              <p className="text-gray-600 mt-2 max-w-md">
                We are located in the heart of Kwekwe. Click the button to find us on Google Maps.
              </p>
            </div>
          </div>
          <a 
            href="https://maps.app.goo.gl/n5bekD3NYkff2keu8" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-[#B22222] border-2 border-[#B22222] font-bold rounded-full hover:bg-[#B22222] hover:text-white transition-colors"
          >
            View on Map
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServiceTimes;