import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import heroImage1 from '../../assets/images/hero1.jpg';
import heroImage2 from '../../assets/images/hero2.jpg';
import heroImage3 from '../../assets/images/hero3.jpg';
import heroImage4 from '../../assets/images/hero4.jpg';
import heroImage5 from '../../assets/images/hero6.jpg'; // Optional 5th Image

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    { image: heroImage1 },
    { image: heroImage2 },
    { image: heroImage3 },
    { image: heroImage4 },
    { image: heroImage5 } 
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    // CHANGE 1: Set height to h-[85vh] so it is big and tall on all screens
    <div className="relative h-[85vh] w-full bg-gray-900 group overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* THE IMAGE: 
             - Changed 'object-contain' to 'object-cover' 
             - This fixes the mobile view by forcing the image to fill the whole height
             - No more black bars! 
          */}
          <img
            src={slide.image}
            alt="Hero Slide"
            className="w-full h-full object-cover"
          />

          {/* Optional: A slight dark overlay to ensure white text (nav arrows) is visible */}
          <div className="absolute inset-0 bg-black/20" /> 
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight size={40} />
      </button>

      {/* REMOVED: Red button and Yellow dots are completely gone */}

    </div>
  );
};

export default Hero;