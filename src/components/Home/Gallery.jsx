import React, { useState, useEffect, useMemo } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Check } from 'lucide-react';

// --- AUTOMATIC IMPORT ---
const imageModules = import.meta.glob('../../assets/images/gallery/*/*.{png,jpg,jpeg,svg}', { eager: true });

// --- PROCESS DATA ---
const allImages = [];
const yearsSet = new Set();

Object.keys(imageModules).forEach((path) => {
  const parts = path.split('/');
  const year = parts[parts.length - 2];
  yearsSet.add(year);

  allImages.push({
    id: path,
    url: imageModules[path].default,
    year: parseInt(year)
  });
});

// SORT: Newest Year First
allImages.sort((a, b) => b.year - a.year);

// Sort years for filter buttons
const sortedYears = Array.from(yearsSet).sort((a, b) => b - a);

const Gallery = () => {
  const [selectedYears, setSelectedYears] = useState([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // FIX: Initialize with a smart check to avoid "Mobile Flash" on Desktop
  const [numColumns, setNumColumns] = useState(() => {
    if (typeof window !== 'undefined') {
       if (window.innerWidth >= 1024) return 3;
       if (window.innerWidth >= 768) return 2;
    }
    return 1; 
  });

  // Handle Screen Resize
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setNumColumns(3); // Desktop
      else if (window.innerWidth >= 768) setNumColumns(2); // Tablet
      else setNumColumns(1); // Mobile
    };
    
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Filter Images (Optimized)
  const visibleImages = useMemo(() => {
    return selectedYears.length === 0
      ? allImages
      : allImages.filter(img => selectedYears.includes(String(img.year)));
  }, [selectedYears]);

  // Distribute Images into Columns (Left -> Right -> Left...)
  const columnImages = useMemo(() => {
    const cols = Array.from({ length: numColumns }, () => []);
    visibleImages.forEach((img, index) => {
      const colIndex = index % numColumns;
      cols[colIndex].push(img);
    });
    return cols;
  }, [visibleImages, numColumns]);

  // Toggle Selection
  const toggleYear = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter(y => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  // Lightbox Controls
  const openLightbox = (img) => {
    const index = visibleImages.findIndex(i => i.id === img.id);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % visibleImages.length);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') setLightboxOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <section id="gallery" className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-[#B22222] font-bold uppercase tracking-wider mb-2">Moments of Grace</h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Gallery</h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedYears([])}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all border-2 
              ${selectedYears.length === 0 ? 'bg-[#B22222] text-white border-[#B22222]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#B22222]'}`}
          >
            All Years
          </button>
          {sortedYears.map((year) => {
            const isActive = selectedYears.includes(year);
            return (
              <button
                key={year}
                onClick={() => toggleYear(year)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border-2 flex items-center gap-2
                  ${isActive ? 'bg-[#B22222] text-white border-[#B22222]' : 'bg-white text-gray-600 border-gray-200 hover:border-[#B22222]'}`}
              >
                {isActive && <Check size={14} />} {year}
              </button>
            );
          })}
        </div>

        {/* --- MANUAL MASONRY GRID --- */}
        {/* Added w-full to ensure it stretches on large screens */}
        <div className="flex gap-4 items-start w-full">
          {columnImages.map((col, colIndex) => (
            // Added min-w-0 to prevent flex overflow bugs
            <div key={colIndex} className="flex-1 flex flex-col gap-4 min-w-0">
              {col.map((image) => (
                <div 
                  key={image.id}
                  onClick={() => openLightbox(image)}
                  className="relative group cursor-pointer rounded-xl overflow-hidden shadow-md bg-white w-full"
                >
                  <img 
                    src={image.url} 
                    alt="Gallery"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn size={32} className="text-white drop-shadow-md" />
                  </div>

                  {/* Year Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {image.year}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {visibleImages.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No images found for the selected years.</p>
        )}

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-6 text-white hover:text-[#B22222] transition-colors z-50 bg-black/20 p-2 rounded-full" onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          <button onClick={prevImage} className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#B22222] transition-colors p-2 md:p-3 rounded-full bg-black/20 hover:bg-white/10 z-50">
            <ChevronLeft size={32} />
          </button>
          <div className="w-full h-full p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={visibleImages[currentImageIndex].url} alt="Full view" className="max-h-[90vh] max-w-[95vw] object-contain rounded-sm shadow-2xl" />
          </div>
          <button onClick={nextImage} className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#B22222] transition-colors p-2 md:p-3 rounded-full bg-black/20 hover:bg-white/10 z-50">
            <ChevronRight size={32} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {currentImageIndex + 1} / {visibleImages.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;