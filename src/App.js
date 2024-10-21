import React from 'react';
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import SkillsOverview from './components/SkillsOverview';
import './index.css'; 

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillsSection/>
      <SkillsOverview/>
    </>
  );
};

export default App;
