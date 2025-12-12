import React, {useEffect, useRef} from 'react';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import SkillsOverview from '../components/SkillsOverview';
import Projects from '../components/Projects';
import '../index.css';
import Footer from '../components/Footer';

const Homepage = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    if (window.location.hash === '#Projects') {
      targetRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
    return (
        <>
           <Navbar/> 
          <HeroSection />
          <SkillsSection/>
          <SkillsOverview/>
          <div ref={targetRef}>
          <Projects/>
          </div>
          <Footer/>
        </>
      );
}

export default Homepage;