import React from 'react';
import HeroTitle from './HeroTitle';
import HeroImage from './HeroImage';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <HeroTitle />
      <HeroImage />
    </section>
  );
};

export default HeroSection;
