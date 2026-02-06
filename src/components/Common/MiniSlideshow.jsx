import React, { useState, useEffect } from 'react';

const MiniSlideshow = ({ images, interval = 4000 }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Don't run interval if there is less than 2 images
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  // Safeguard: If no images provided, show nothing
  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full bg-gray-200">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          // 'object-top' ensures faces aren't cut off in portrait view
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
    </div>
  );
};

export default MiniSlideshow;