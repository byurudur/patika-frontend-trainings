import React from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Contact from './components/Contact/Contact';
import OurClasses from './components/OurClasses/OurClasses.jsx';

const App = () => {
  return (
    <div className="App">
      <Header />
      <OurClasses/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default App;
