import React from 'react';
import { Heart, Star, Shield, Users, Target, BookOpen, Quote, Video, Image as ImageIcon } from 'lucide-react';
import MiniSlideshow from '../Common/MiniSlideshow'; 

// --- YOUR SAVED IMAGES ---
import men from '../../assets/images/men1.jpg';
import pioneers from '../../assets/images/pio1.jpg';
import cmd1 from '../../assets/images/cmd1.jpg';
import cmd2 from '../../assets/images/cmd2.jpg';
import wof from '../../assets/images/wof1.jpg';
import cmd3 from '../../assets/images/cmd3.jpg';
import cmd4 from '../../assets/images/cmd4.jpg';
import cmd5 from '../../assets/images/cmd5.jpg';
import cmd6 from '../../assets/images/cmd6.jpg';
import pioneers2 from '../../assets/images/pio3.jpg';
import cmd7 from '../../assets/images/cmd7.jpg';
import cmd8 from '../../assets/images/cmd8.jpg';
import men2 from '../../assets/images/men2.jpg';
import men3 from '../../assets/images/men3.jpg';
import men4 from '../../assets/images/men4.jpg';
// --- CONFIGURATION ---

const tributeImages = [
  "https://via.placeholder.com/400x600?text=Preaching+Moments",
  "https://via.placeholder.com/400x600?text=Family+Time",
  "https://via.placeholder.com/400x600?text=Community+Outreach",
  "https://via.placeholder.com/400x600?text=Worship+Moments",
];

const values = [
  {
    icon: <Heart size={32} />,
    title: "Love",
    desc: "We believe in walking in love towards God and towards one another."
  },
  {
    icon: <Star size={32} />,
    title: "Excellence",
    desc: "We do everything with a spirit of excellence, honoring God with our best."
  },
  {
    icon: <Shield size={32} />,
    title: "Integrity",
    desc: "We uphold transparency, honesty, and accountability in all our dealings."
  },
  {
    icon: <Users size={32} />,
    title: "Family",
    desc: "We are more than a church; we are a family united by the blood of Jesus."
  },
  {
    icon: <Target size={32} />,
    title: "Purpose",
    desc: "We help believers discover and walk in their God-given destiny."
  },
  {
    icon: <BookOpen size={32} />,
    title: "The Word",
    desc: "We stand firmly on the uncompromised, life-changing Word of God."
  }
];

// --- MINISTRIES DATA ---
const ministries = [
  {
    title: "Men on Fire",
    desc: "Empowering men to take their place as Kingdom leaders in family and society.",
    images: [men, men2, men3, men4] // Array of Images (Slideshow)
  },
  {
    title: "Women on Fire",
    desc: "Raising virtuous women who are fervent in prayer and influential in their world.",
    image: wof 
  },
  {
    title: "Pioneers",
    desc: "A vibrant community of youth and young adults blazing a trail for the Gospel.",
    images: [pioneers, pioneers2] // Array of Images (Slideshow)
  },
  {
    title: "Children's Ministry",
    desc: "Nurturing the next generation in the ways of the Lord with fun and biblical truth.",
    images: [cmd1, cmd2, cmd3, cmd4, cmd5, cmd6, cmd7, cmd8] // Array of Images (Slideshow)
  },
  {
    title: "Super Singles",
    desc: "A community for singles to grow, connect, and thrive in their walk with God.",
    image: "https://via.placeholder.com/500x700?text=Super+Singles"
  },
  {
    title: "The Elderly",
    desc: "Honoring our wisdom keepers with fellowship, care, and spiritual support.",
    image: "https://via.placeholder.com/500x700?text=The+Elderly"
  }
];

const AboutContent = () => {
  return (
    <div className="bg-white">
      
      {/* 1. HERO / TITLE SECTION */}
      <section className="bg-gray-900 py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About <span className="text-[#B22222]">HIM Kwekwe</span>
        </h1>
        <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Heartfelt International Ministries (HIM) was birthed from a divine mandate given to our founders. What began as a small gathering has grown into a global movement.
          </p>
          <p>
            The <strong>Kwekwe Zone</strong> stands as a testament to this expanding vision. Established to be a beacon of light in the Midlands province, HIM Kwekwe has grown into a vibrant community.
          </p>
        </div>
      </section>

      {/* --- LEGACY TRIBUTE SECTION --- */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* A. Main Tribute Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row mb-12">
            
            {/* Main Portrait */}
            <div className="md:w-1/3 bg-gray-200 min-h-[400px] relative">
              <img 
                src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/46521068_1847562952008653_4454021174900293632_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qAgEcxj7_VkQ7kNvwFeGjy6&_nc_oc=AdkRZl9cldZ-lXylxChVthjm5YqxzEZ2vsGrBBtBXBdUN4qmIBjJesU4tAwQbkRSZOk&_nc_zt=23&_nc_ht=scontent-los2-1.xx&_nc_gid=FCSTcSOt4k_tuAEql0FRFA&oh=00_AfuC5P2M_-2MKqRuyCulhrSRd4JI82soQqHPyz7PasDAYg&oe=69ADFFA8" 
                alt="Pastor H. Utahwashe" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Tribute Text */}
            <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="bg-[#B22222] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  In Loving Memory
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Pastor H. Utahwashe
              </h3>
              <p className="text-[#FFD700] font-medium mb-6">
                Promoted to Glory: July 2021
              </p>

              <div className="relative">
                <Quote className="text-gray-200 absolute -top-4 -left-2 transform -scale-x-100" size={48} />
                <p className="text-gray-600 italic relative z-10 pl-6 leading-relaxed mb-6">
                  "A general in the faith, a father to many, and a true servant of God. 
                  His legacy lives on in the lives he touched and the foundation he helped build for HIM Kwekwe. 
                  We honor his life and his dedication to the Kingdom."
                </p>
              </div>
            </div>
          </div>

          {/* B. Multimedia Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 items-start">
            
            {/* Video Column */}
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 flex flex-col">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center px-2">
                <Video size={20} className="text-[#B22222] mr-2" />
                Sermon Highlight
              </h4>
              <div className="w-full bg-black rounded-2xl overflow-hidden shadow-lg h-64 md:h-80">
                <iframe 
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FHeartfeltTV%2Fvideos%2F3183375725271317%2F&show_text=false&width=560&t=0" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 'none', overflow: 'hidden' }} 
                  scrolling="no" 
                  frameBorder="0" 
                  allowFullScreen={true} 
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                  title="Tribute Video"
                >
                </iframe>
              </div>
            </div>

            {/* Photo Slideshow Column */}
            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 flex flex-col">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center px-2">
                <ImageIcon size={20} className="text-[#B22222] mr-2" />
                Cherished Moments
              </h4>
              <div className="relative w-full rounded-2xl overflow-hidden shadow-lg h-[500px] group">
                  <div className="h-full w-full">
                      <MiniSlideshow images={tributeImages} interval={4000} />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 z-20 pointer-events-none">
                    <p className="text-white text-xl font-bold text-center mb-1">
                      Celebrating a life well lived
                    </p>
                    <p className="text-[#FFD700] text-sm text-center font-medium tracking-wide uppercase">
                      Forever in our hearts
                    </p>
                  </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border-l-4 border-[#B22222]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="text-[#B22222] mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To spread the Gospel of Jesus Christ to the ends of the earth, nurturing disciples who are rooted in faith.
              </p>
            </div>
            <div className="bg-gray-50 p-10 rounded-2xl shadow-lg border-l-4 border-[#FFD700]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="text-[#FFD700] mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To raise a generation of Kingdom-minded believers who are distinct, excellent, and influential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
          <p className="mt-4 text-gray-600">The principles that guide everything we do.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 hover:bg-gray-50 rounded-xl transition-colors">
              <div className="w-16 h-16 bg-red-50 text-[#B22222] rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MINISTRIES SECTION */}
      <section id="ministries" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-[#B22222] font-bold uppercase tracking-wider mb-2">Get Involved</h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Ministries</h2>
            <div className="w-24 h-1 bg-[#B22222] mx-auto mt-4 rounded-full"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              We are a family of believers. Find where you belong and start serving today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ministries.map((ministry, index) => (
              <div 
                key={index} 
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
              >
                
                {/* --- SMART RENDERING: Slideshow OR Image --- */}
                {ministry.images ? (
                  // CASE 1: Array of images
                  <div className="absolute inset-0 h-full w-full">
                    <MiniSlideshow images={ministry.images} interval={3500 + (index * 500)} />
                  </div>
                ) : (
                  // CASE 2: Single image
                  <img 
                    src={ministry.image} 
                    alt={ministry.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Dark Gradient Overlay - FIXED WITH Z-10 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none z-10"></div>

                {/* Content - FIXED WITH Z-20 */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none z-20">
                  <div className="w-12 h-1 bg-[#B22222] mb-4 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{ministry.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {ministry.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutContent;