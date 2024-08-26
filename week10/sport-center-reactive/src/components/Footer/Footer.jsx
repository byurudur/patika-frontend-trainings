import React from 'react';
import Copyright from './Copyright';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <SocialLinks />
      <Copyright />
    </footer>
  );
};

export default Footer;
