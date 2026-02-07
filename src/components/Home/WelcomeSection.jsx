import React from 'react';
import MiniSlideshow from '../Common/MiniSlideshow';

// --- IMAGE IMPORTS ---
// 1. Founders
import generals from '../../assets/images/generals.jpg';
import generals2 from '../../assets/images/image.png';
import generals3 from '../../assets/images/apostle1.jpg';
import generals4 from '../../assets/images/pastorc1.jpg';
import generals5 from '../../assets/images/apostle2.jpg';
// 2. Zonal Pastor
import pastorS from '../../assets/images/pastorS.jpeg';
import pastorS2 from '../../assets/images/pastors2.jpg';
import pastorS3 from '../../assets/images/pastors3.jpeg';
import pastorS4 from '../../assets/images/pastors4.jpeg';
// 3. Resident Pastor / First Lady (Using your 'first.jpeg' as placeholder)
import murambiwa from '../../assets/images/mbizo.jpeg'; 
import murambiwa2 from '../../assets/images/mbizo2.jpeg';
import murambiwa3 from '../../assets/images/mbizo3.jpeg'; // Placeholder for Resident Pastor / First Lady

// --- SLIDESHOW ARRAYS ---

const founderImages = [
  generals,
  generals2,
  generals3,
  generals4,
  generals5
];

const zonalImages = [
  pastorS,
  pastorS2,
  pastorS3,
  pastorS4,
];

const residentImages = [
    murambiwa,
    murambiwa2,
    murambiwa3, 
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

        {/* --- 3-COLUMN LEADERSHIP GRID --- */}
        {/* Changed from md:grid-cols-2 to lg:grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          
          {/* CARD 1: FOUNDERS */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
            <div className="h-[500px] relative">
              <MiniSlideshow images={founderImages} interval={5000} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end z-20">
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-white leading-tight">Apostle T. & Pastor C. Vutabwashe</h3>
                  <p className="text-[#FFD700] text-sm font-medium mt-1">Founders & Visionaries</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: ZONAL PASTOR */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#B22222]">
            <div className="h-[500px] relative">
               <MiniSlideshow images={zonalImages} interval={4500} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end z-20">
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-white leading-tight">Pastor S. Utahwashe</h3>
                  <p className="text-[#FFD700] text-sm font-medium mt-1">Kwekwe City Zone Pastor</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: RESIDENT PASTOR / FIRST LADY */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300 border-t-4 border-[#FFD700]">
            <div className="h-[500px] relative">
               <MiniSlideshow images={residentImages} interval={4800} />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end z-20">
                <div className="p-6 text-left">
                  {/* Update Name/Title Here */}
                  <h3 className="text-xl font-bold text-white leading-tight">Pastors N. and M. Murambiwa</h3>
                  <p className="text-[#FFD700] text-sm font-medium mt-1">Mbizo Zone Pastors</p>
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