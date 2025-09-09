import React from 'react';
import ServiceHero from '../components/services/ServiceHero';
import ServiceCategories from '../components/services/ServiceCategories';
import FeaturedServices from '../components/services/FeaturedServices';
import ServiceCTA from '../components/services/ServiceCTA';

const ServicesPage = () => {
  return (
    <div className="pt-20">
      <ServiceHero />
      <ServiceCategories />
      <FeaturedServices />
      <ServiceCTA />
    </div>
  );
};

export default ServicesPage;