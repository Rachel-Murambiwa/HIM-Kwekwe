import React from 'react';
import { Heart, Star, Shield, Users, Target, BookOpen } from 'lucide-react';

const AboutContent = () => {
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
            Heartfelt International Ministries (HIM) was birthed from a divine mandate given to our founders, Apostle T. and Pastor C. Vutabwashe. What began as a small gathering has grown into a global movement, impacting lives across continents with the message of the Kingdom.
          </p>
          <p>
            The <strong>Kwekwe Zone</strong> stands as a testament to this expanding vision. Established to be a beacon of light in the Midlands province, HIM Kwekwe has grown into a vibrant community where families are restored, leaders are raised, and the presence of God is tangible.
          </p>
          <p>
            Under the leadership of our Zonal Pastors, we continue to run with the vision: raising a generation of Kingdom-minded believers who excel in the marketplace and in ministry.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#B22222]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Target className="text-[#B22222] mr-3" />
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To spread the Gospel of Jesus Christ to the ends of the earth, nurturing disciples who are rooted in faith and empowered to demonstrate the power of God in their generation.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[#FFD700]">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Star className="text-[#FFD700] mr-3" />
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To raise a generation of Kingdom-minded believers who are distinct, excellent, and influential in every sphere of life—spiritually, socially, and economically.
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

    </div>
  );
};

export default AboutContent;