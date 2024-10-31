import React from 'react';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 font-epilogue text-center md:text-left">
          <p className="mb-4 sm:mb-8 text-sm sm:text-base font-bold">
            Web Developer | UX/UI Designer 
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-gray-900">
            Siyamtanda Tonjeni
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600">
            I am a creative Web Developer and UX/UI Designer passionate about building engaging, user-centered digital experiences. 
            Skilled in crafting responsive websites and intuitive interfaces that solve real-world problems.
          </p>
        </div>
        
        <div className="w-full mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative w-3/4 sm:w-1/2 md:w-full">
            <img src={heroImage} alt="Hero Section" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
