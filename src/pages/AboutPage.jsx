import React from 'react';
import AboutHero from '../components/about/AboutHero';
import CompanyValues from '../components/about/CompanyValues';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyValues />
    </div>
  );
};

export default AboutPage;