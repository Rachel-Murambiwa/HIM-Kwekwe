import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import marchover from '../../assets/images/marchover.jpg';
import anniversary from '../../assets/images/anniversary.jpeg';
import m633 from '../../assets/images/m633.jpeg';
import pioneers from '../../assets/images/pio2.jpeg';
import music from '../../assets/images/mega.jpeg';

const EventsContent = () => {
  // --- 1. EVENTS DATA ---
  const allEvents = [
    {
      id: 1,
      title: "Inaugural Service: Life Unplugged",
      date: "2026-02-07",
      time: "03:30 PM - 06:30 PM",
      location: "Main Sanctuary, Glenwood",
      description: "Join us for our inaugural service where we explore the theme of 'Life Unplugged' with Apostle T. and Pastor C. Vutabwashe",
      image: pioneers,
      category: "Online"
    },
    {
      id: 2,
      title: "Generation M633 Midlands Invasion",
      date: "2026-02-21",
      time: "09:00 AM - 03:00 PM",
      location: "Kwekwe City Zone Sanctuary",
      description: "Equipping the next generation of leaders for Kingdom impact.",
      image: m633,
      category: "Service"
    },
    {
      id: 3,
      title: "Kwekwe City Zone Anniversary",
      date: "2026-02-06",
      time: "06:00 PM",
      location: "Kwekwe City Zone Sanctuary",
      description: "Oh what a joy it is to celebrate 15 years of God's faithfulness in Kwekwe City Zone! Join us for a day of thanksgiving and celebration.",
      image: anniversary,
      category: "Celebration"
    },
    {
      id: 4,
      title: "Marchover Night 2025",
      date: "2025-12-31",
      time: "09:00 PM",
      location: "Main Sanctuary",
      description: "Crossing over into the new year with prayer, praise, and prophecy.",
      image: marchover,
      category: "Service"
    },
    {
      id: 5,
      title: "Mid-Week Bible Study",
      date: "2026-02-11",
      time: "05:30 PM",
      location: "Online (Zoom)",
      description: "Deep dive into the Word of God. Series: Walking in Faith.",
      image: "https://via.placeholder.com/600x400?text=Bible+Study",
      category: "Online"
    },
    {
      id: 6,
      title: "Mega Worship Conference 2026",
      // FIXED: Must be a single valid date for sorting to work. 
      // You can add a separate 'displayDate' field if you want to show the range text.
      date: "2026-02-11", 
      time: "", // Empty time is now handled safely
      location: "Richland City Mhondoro",
      description: "A weekend of worship, prayer, and prophecy.",
      image: music,
      category: "Conference"
    }
  ];

  // --- 2. AUTOMATIC SORTING ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = allEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const pastEvents = allEvents
    .filter(event => new Date(event.date) < today)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
              <div key={event.id} className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full min-h-[650px]">
                
                {/* BIG IMAGE (h-96) */}
                <div className="h-96 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-[#FFD700] text-gray-900 text-sm font-bold px-4 py-2 rounded-full uppercase shadow-md">
                    {event.category}
                  </div>
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  {/* DATE */}
                  <div className="text-[#B22222] font-extrabold text-sm mb-3 uppercase tracking-wider">
                    {formatDate(event.date)}
                  </div>
                  
                  {/* TITLE */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>
                  
                  {/* DETAILS (Conditional Rendering) */}
                  <div className="space-y-4 text-gray-600 text-lg mb-6">
                    {/* Only show TIME if it is not empty */}
                    {event.time && (
                      <div className="flex items-center">
                        <Clock size={20} className="mr-3 text-[#B22222]" />
                        {event.time}
                      </div>
                    )}

                    {/* Only show LOCATION if it is not empty */}
                    {event.location && (
                      <div className="flex items-center">
                        <MapPin size={20} className="mr-3 text-[#B22222]" />
                        {event.location}
                      </div>
                    )}
                  </div>

                  <p className="text-gray-500 text-base mb-6 flex-grow border-t border-gray-200 pt-6 leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-90 hover:opacity-100 transition-opacity duration-300">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full grayscale hover:grayscale-0 transition-all duration-500 min-h-[650px]">
                
                {/* BIG IMAGE (h-96) */}
                <div className="h-96 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-center">
                  <div className="text-[#B22222] font-bold text-sm mb-3 uppercase tracking-wider">
                    {formatDate(event.date)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{event.title}</h3>
                  <p className="text-gray-600 text-base line-clamp-4 leading-relaxed">
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