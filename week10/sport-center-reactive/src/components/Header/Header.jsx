import React from 'react';
import NavBar from './NavBar';
import JoinUsButton from './JoinUsButton';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <JoinUsButton />
    </header>
  );
};

export default Header;
