import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import heroImage1 from '../../assets/images/hero1.jpg';
import heroImage2 from '../../assets/images/hero2.jpg';
import heroImage3 from '../../assets/images/hero3.jpg';

const Hero = () => {
  const [current, setCurrent] = useState(0);

  
const slides = [
  {
    image: heroImage1,
  },
  {
    image: heroImage2,
  },
  {
    image: heroImage3,
  }
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
    // CHANGE 1: Use 'h-[85vh]' (85% of screen height). 
    // This creates a tall viewing area that fits portrait photos perfectly.
    <div className="relative h-[85vh] w-full bg-gray-900 group overflow-hidden">
      
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* LAYER 1: Blurred Background (Fills the screen) */}
          {/* This ensures there is no empty space if the image is narrow */}
          <div className="absolute inset-0">
             <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover blur-xl opacity-50 scale-110"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
          </div>

          {/* LAYER 2: The Actual Image (Fully Visible) */}
          {/* 'object-contain' ensures the WHOLE image shows, no cropping */}
          <img
            src={slide.image}
            alt={slide.title}
            className="relative w-full h-full object-contain z-10 drop-shadow-2xl"
          />

          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 
              className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg transition-all duration-700 transform ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {slide.title}
            </h1>
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-gray-100 font-medium mb-6 md:mb-8 max-w-2xl drop-shadow-md transition-all duration-700 delay-100 transform ${
                index === current ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {slide.subtitle}
            </p>
            <button 
              className={`bg-[#B22222] hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all duration-500 hover:scale-105 ${
                index === current ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'
              }`}
            >
              {slide.cta}
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronLeft size={40} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <ChevronRight size={40} />
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full shadow-md transition-all duration-300 ${
              index === current ? 'bg-[#FFD700] w-8' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );

};

export default Hero;