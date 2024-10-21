import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import './index.css'; // Tailwind CSS import

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
};

export default App;
