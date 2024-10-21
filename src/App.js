import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import './index.css'; // Tailwind CSS import

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection/>
    </>
  );
};

export default App;
