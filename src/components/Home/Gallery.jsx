import React, { useState } from 'react';
import { X, ZoomIn, Filter } from 'lucide-react';

// --- AUTOMATIC GROUPING ---
// 1. Get all images from subfolders (e.g., gallery/2024/img.jpg)
const imageModules = import.meta.glob('../../assets/images/gallery/*/*.{png,jpg,jpeg,svg}', { eager: true });

// 2. Process images into groups by Year
const galleryData = {};

Object.keys(imageModules).forEach((path) => {
  // Path looks like: "../../assets/images/gallery/2024/pic.jpg"
  const parts = path.split('/');
  const year = parts[parts.length - 2]; // This grabs "2024"
  
  if (!galleryData[year]) {
    galleryData[year] = [];
  }
  
  galleryData[year].push({
    url: imageModules[path].default,
    id: path
  });
});

// 3. Sort years (Newest first)
const sortedYears = Object.keys(galleryData).sort((a, b) => b - a);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterYear, setFilterYear] = useState('All'); // Default to showing everything

  // Decide which years to display based on the dropdown selection
  const visibleYears = filterYear === 'All' 
    ? sortedYears 
    : [filterYear];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-12">
          <h4 className="text-[#B22222] font-bold uppercase tracking-wider mb-2">
            Moments of Grace
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- FILTER DROPDOWN --- */}
        <div className="flex justify-center mb-12">
          <div className="relative inline-block w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Filter className="text-[#B22222]" size={20} />
            </div>
            <select
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 text-base border-2 border-gray-200 focus:outline-none focus:border-[#B22222] sm:text-sm rounded-lg shadow-sm bg-white hover:border-gray-300 transition-colors cursor-pointer appearance-none"
            >
              <option value="All">Show All Years</option>
              {sortedYears.map((year) => (
                <option key={year} value={year}>
                  {year} Collection
                </option>
              ))}
            </select>
            {/* Custom Arrow Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* --- LOOP THROUGH VISIBLE YEARS --- */}
        {visibleYears.map((year) => (
          <div key={year} className="mb-16 animate-fade-in-up">
            
            {/* Year Header */}
            <div className="flex items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 border-l-4 border-[#B22222] pl-4">
                {year}
              </h3>
              <div className="flex-grow h-px bg-gray-200 ml-4"></div>
            </div>

            {/* Grid for this Year */}
            {galleryData[year] && galleryData[year].length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData[year].map((image) => (
                  <div 
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className="group relative h-64 cursor-pointer overflow-hidden rounded-xl shadow-lg bg-white"
                  >
                    <img 
                      src={image.url} 
                      alt={`Gallery ${year}`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                      <ZoomIn size={40} className="text-[#FFD700]" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No images found for this year.</p>
            )}

          </div>
        ))}

        {/* Fallback if no years exist at all */}
        {sortedYears.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">
              No images found. Please add folders (e.g., "2024") to <code>src/assets/images/gallery/</code>
            </p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-[#B22222] transition-colors"
          >
            <X size={40} />
          </button>

          <div 
            className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.url} 
              alt="Full view" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Gallery;