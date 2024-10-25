import React from 'react';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import SkillsOverview from '../components/SkillsOverview';
import Projects from '../components/Projects';
import '../index.css';

const Homepage = () => {
    return (
        <>
          <Navbar />
          <HeroSection />
          <SkillsSection/>
          <SkillsOverview/>
          <Projects/>
        </>
      );
}

export default Homepage;