import React from 'react';
import MiniSlideshow from '../Common/MiniSlideshow';

// --- IMAGE IMPORTS ---
// 1. Founders
import generals from '../../assets/images/generals.jpg';
import generals2 from '../../assets/images/image.png';
import generals3 from '../../assets/images/apostle1.jpg';
import generals4 from '../../assets/images/pastorc1.jpg';
import generals5 from '../../assets/images/apostle2.jpg';
import generals6 from '../../assets/images/generals2.jpg';

// 2. Zonal Pastor
import pastorS from '../../assets/images/pastorS.jpeg';
import pastorS2 from '../../assets/images/pastors2.jpg';
import pastorS3 from '../../assets/images/pastors3.jpeg';
import pastorS4 from '../../assets/images/pastors4.jpg';
import pastorS5 from '../../assets/images/pastors5.jpg'; 
import pastorS6 from '../../assets/images/pastors6.jpg';
import pastorS7 from '../../assets/images/pastors7.jpg';
import pastorS8 from '../../assets/images/pastors8.jpg';

// --- SLIDESHOW ARRAYS ---
const founderImages = [
  generals, generals2, generals3, generals4, generals5, generals6
];

const zonalImages = [
  pastorS, pastorS2, pastorS3, pastorS4, pastorS5, pastorS6, pastorS7, pastorS8
];

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Text */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h4 className="text-[#B22222] font-bold uppercase tracking-wider mb-3">
            Our Vision & Mission
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Raising a Generation of Kingdom-Minded Believers
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Heartfelt International Ministries is a global Christian movement dedicated to 
            raising a generation of believers rooted in faith, empowered by the Holy Spirit, 
            and committed to impacting their world for Christ.
          </p>
        </div>

        {/* --- 2-COLUMN LEADERSHIP GRID (Centered) --- */}
        {/* FIX: Changed to max-w-5xl mx-auto so they are centered. 
                 Changed grid to specifically use 2 columns. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          
          {/* CARD 1: FOUNDERS */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
            <div className="h-[500px] relative">
              <MiniSlideshow images={founderImages} interval={5000} />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end z-20">
                <div className="p-8 text-left w-full">
                  <div className="w-12 h-1 bg-[#B22222] mb-3 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Apostle T. & Pastor C. Vutabwashe</h3>
                  <p className="text-[#FFD700] text-sm font-bold tracking-wide mt-1 uppercase">Founders & Visionaries</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: ZONAL PASTOR */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 border-t-4 border-[#B22222]">
            <div className="h-[500px] relative">
               <MiniSlideshow images={zonalImages} interval={4500} />
               
               {/* Gradient Overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end z-20">
                <div className="p-8 text-left w-full">
                  <div className="w-12 h-1 bg-[#FFD700] mb-3 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-white leading-tight">Pastor S. Utahwashe</h3>
                  <p className="text-[#FFD700] text-sm font-bold tracking-wide mt-1 uppercase">Kwekwe City Zone Pastor</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;