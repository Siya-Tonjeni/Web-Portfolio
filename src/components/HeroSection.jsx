import React from 'react';
import heroImage from '../assets/hero-image.png'

const HeroSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 font-epilogue">
          <p className="mb-8 text-m font-bold">Web Developer | UX/UI Designer </p>
          <h1 className="text-8xl font-bold text-gray-900">Siyamtanda Tonjeni</h1>
          <p className="mt-4 text-lg text-gray-600">
            I am a creative Web Developer and UX/UI Designer passionate about building engaging, user-centered digital experiences. 
            Skilled in crafting responsive websites and intuitive interfaces that solve real-world problems.
          </p>
        </div>
        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <div className="relative">
            <img src={heroImage} alt='Hero Section'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
