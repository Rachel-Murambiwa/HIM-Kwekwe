import React from 'react';
import Gallery from '../components/Home/Gallery'; // Import your existing component

const GalleryPage = () => {
  return (
    <div className="pt-5"> {/* pt-5 adds padding so it doesn't hide behind navbar */}
      <Gallery />
    </div>
  );
};

export default GalleryPage;