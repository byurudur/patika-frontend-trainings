import React from 'react';
import heroImage from '../../assets/hero-man.jpg'; // image folder

const HeroImage = () => {
  return (
    <img src={heroImage} alt="Sport Center" className="hero-image" />
  );
};

export default HeroImage;
