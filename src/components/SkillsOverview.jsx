import React from 'react';
import uxImage from '../assets/design.png'; 
import webDevImage from '../assets/web-developer.png';

const SkillsOverview = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          
          <div className="flex flex-col items-center">
            <img 
              src={uxImage} 
              alt="UX/UI Design" 
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">UX/UI Design</h3>
            <p className="text-gray-600 w-1/2">
              Designing intuitive, user-friendly interfaces with a focus on seamless user experiences.
            </p>
          </div>
    
          <div className="flex flex-col items-center">
            <img 
              src={webDevImage} 
              alt="Web Development" 
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Web Developer</h3>
            <p className="text-gray-600 w-1/2">
              Building responsive, high-performance websites using modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsOverview;
