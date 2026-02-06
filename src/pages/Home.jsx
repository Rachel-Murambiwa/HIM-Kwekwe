import React from 'react';
import Hero from '../components/Home/Hero';
import InfoCards from '../components/Home/InfoCards';
import WelcomeSection from '../components/Home/WelcomeSection';
import ServiceTimes from '../components/Home/ServiceTimes';

const Home = () => {
  return (
    <>
      <Hero />
      <InfoCards />
      <WelcomeSection />
      <ServiceTimes />
    </>
  );
};

export default Home;