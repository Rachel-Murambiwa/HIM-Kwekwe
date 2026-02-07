import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

const EventsContent = () => {
  // --- 1. YOUR EVENTS DATA ---
  // Add all your events here. The code will sort them automatically.
  // format: YYYY-MM-DD
  const allEvents = [
    {
      id: 1,
      title: "Easter Sunday Service",
      date: "2026-04-05", // Future date
      time: "09:00 AM",
      location: "Main Sanctuary, Glenwood",
      description: "Join us for a powerful resurrection Sunday service with special performances.",
      image: "https://via.placeholder.com/600x400?text=Easter+Service",
      category: "Service"
    },
    {
      id: 2,
      title: "Youth Leadership Summit",
      date: "2026-06-12", // Future date
      time: "10:00 AM",
      location: "Zone 2 Auditorium",
      description: "Equipping the next generation of leaders for Kingdom impact.",
      image: "https://via.placeholder.com/600x400?text=Youth+Summit",
      category: "Conference"
    },
    {
      id: 3,
      title: "Community Clean-up",
      date: "2025-12-10", // Past date (Example)
      time: "08:00 AM",
      location: "Kwekwe City Centre",
      description: "Demonstrating God's love by keeping our city clean and green.",
      image: "https://via.placeholder.com/600x400?text=Clean+Up",
      category: "Outreach"
    },
    {
      id: 4,
      title: "Crossover Night 2025",
      date: "2025-12-31", // Past date
      time: "09:00 PM",
      location: "Main Sanctuary",
      description: "Crossing over into the new year with prayer, praise, and prophecy.",
      image: "https://via.placeholder.com/600x400?text=Crossover+Night",
      category: "Service"
    },
    {
      id: 5,
      title: "Mid-Week Bible Study",
      date: "2026-02-11", // Change this to a near future date to test sorting
      time: "05:30 PM",
      location: "Online (Zoom)",
      description: "Deep dive into the Word of God. Series: Walking in Faith.",
      image: "https://via.placeholder.com/600x400?text=Bible+Study",
      category: "Online"
    }
  ];

  // --- 2. AUTOMATIC SORTING LOGIC ---
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

  // Filter Upcoming: Date is Today or Future
  const upcomingEvents = allEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date)); // Sort: Soonest first

  // Filter Past: Date is before Today
  const pastEvents = allEvents
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort: Most recent first

  // Helper to format date nicely (e.g., "Sun, Apr 05, 2026")
  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-white min-h-screen">
      
      {/* HERO SECTION */}
      <section className="bg-gray-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Events <span className="text-[#B22222]">Calendar</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Stay connected with what is happening at HIM Kwekwe. Join us for our upcoming services and conferences.
        </p>
        <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-8 rounded-full"></div>
      </section>

      {/* --- SECTION 1: UPCOMING EVENTS --- */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-10">
          <Calendar className="text-[#B22222] mr-3" size={32} />
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
        </div>

        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
                
                {/* Image */}
                <div className="h-48 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-gray-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Date Badge */}
                  <div className="text-[#B22222] font-bold text-sm mb-2 uppercase tracking-wide">
                    {formatDate(event.date)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 text-sm mb-4">
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-gray-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-gray-400" />
                      {event.location}
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm mb-6 flex-grow border-t border-gray-100 pt-4">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border-dashed border-2 border-gray-300">
            <p className="text-gray-500 text-lg">No upcoming events scheduled at the moment.</p>
          </div>
        )}
      </section>

      {/* --- SECTION 2: PAST EVENTS --- */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-10 opacity-70">
            <Clock className="text-gray-600 mr-3" size={32} />
            <h2 className="text-3xl font-bold text-gray-700">Past Events</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80 hover:opacity-100 transition-opacity duration-300">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full grayscale hover:grayscale-0 transition-all duration-500">
                {/* Image */}
                <div className="h-40 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="p-6">
                  <div className="text-gray-500 font-bold text-sm mb-1 uppercase">
                    {formatDate(event.date)}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {pastEvents.length === 0 && (
             <p className="text-gray-500 text-center italic">No past events found.</p>
          )}
        </div>
      </section>

    </div>
  );
};

export default EventsContent;