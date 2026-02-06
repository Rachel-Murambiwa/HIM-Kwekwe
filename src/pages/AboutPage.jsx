import React from 'react';
import AboutContent from '../components/About/AboutContent';

const AboutPage = () => {
  return (
    <div className="pt-0"> {/* No top padding needed because AboutContent starts with a Hero section */}
      <AboutContent />
    </div>
  );
};

export default AboutPage;