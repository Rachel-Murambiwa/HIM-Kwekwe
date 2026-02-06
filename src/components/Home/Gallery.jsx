import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

// --- IMAGE IMPORTS ---
// Make sure these filenames match exactly what is in your folder!
import img1 from '../../assets/images/gallery/gallery1.jpg';
import img2 from '../../assets/images/gallery/gallery2.jpg';
import img3 from '../../assets/images/gallery/gallery3.jpg';
import img4 from '../../assets/images/gallery/gallery4.jpg';
import img5 from '../../assets/images/gallery/gallery5.jpg';
import img6 from '../../assets/images/gallery/gallery6.jpg';

const galleryImages = [
  {
    id: 1,
    url: img1, // Using the imported variable
    category: "Worship",
    caption: "Sunday Service Worship"
  },
  {
    id: 2,
    url: img2,
    category: "Conference",
    caption: "Annual Youth Conference"
  },
  {
    id: 3,
    url: img3,
    category: "Community",
    caption: "Community Outreach"
  },
  {
    id: 4,
    url: img4,
    category: "Fellowship",
    caption: "Men's Fellowship"
  },
  {
    id: 5,
    url: img5,
    category: "Youth",
    caption: "Students Ministry"
  },
  {
    id: 6,
    url: img6,
    category: "Prayer",
    caption: "Intercession Night"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-[#B22222] font-bold uppercase tracking-wider mb-2">
            Moments of Grace
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group relative h-72 cursor-pointer overflow-hidden rounded-xl shadow-lg"
            >
              <img 
                src={image.url} 
                alt={image.caption}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <ZoomIn size={32} className="mb-2 text-[#FFD700]" />
                <p className="font-bold text-lg">{image.caption}</p>
                <span className="text-sm text-gray-300 uppercase tracking-widest">{image.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Full Screen View) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)} // Click outside to close
        >
          {/* Close Button */}
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#B22222] transition-colors"
          >
            <X size={40} />
          </button>

          {/* Large Image */}
          <div 
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg shadow-2xl relative"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <img 
              src={selectedImage.url} 
              alt={selectedImage.caption} 
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center">
              <h3 className="text-xl font-bold">{selectedImage.caption}</h3>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;