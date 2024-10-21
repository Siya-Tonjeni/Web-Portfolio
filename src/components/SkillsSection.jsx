import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import figma from '../assets/Figma.png';
import tailwind from '../assets/tailwind.png';
import wordpress from '../assets/wordpress.png';

const logos = [
  { src: html, alt: 'HTML Logo' },
  { src: css, alt: 'CSS Logo' },
  { src: javascript, alt: 'JavaScript Logo' },
  { src: react, alt: 'React.js Logo' },
  { src: node , alt: 'Node.js Logo' },
  { src: figma, alt: 'Figma Logo' },
  { src: tailwind, alt: 'Figma Logo' },
  { src: wordpress, alt: 'Figma Logo' },

];

const SkillsSection = () => {
  return (
    <section className="py-10 bg-gray-50">
    <div className="container mx-auto px-6 font-epilogue">
     <h2 className="text-xl font-bold text-center mb-8">Skills I Have:</h2>
      <div className="overflow-hidden ">
        <div className="flex items-center space-x-12 animate-scroll">
          {logos.map((logo, index) => (
            <img 
              key={index} 
              src={logo.src} 
              alt={logo.alt} 
              className="h-16 w-auto"
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default SkillsSection;
