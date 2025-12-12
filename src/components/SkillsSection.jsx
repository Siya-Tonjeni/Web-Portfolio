import React from "react";

// Core Skills
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import figma from "../assets/Figma.png";
import tailwind from "../assets/tailwind.png";
import wordpress from "../assets/wordpress.png";

// New Skills
// import reactnative from "../assets/reactnative.png";
// import nextjs from "../assets/nextjs.png";
// import mongodb from "../assets/mongodb.png";
// import express from "../assets/express.png";

const logos = [
  { src: html, alt: "HTML" },
  { src: css, alt: "CSS" },
  { src: javascript, alt: "JavaScript" },
  { src: react, alt: "React.js" },
  // { src: reactnative, alt: "React Native" },
  // { src: nextjs, alt: "Next.js" },
  { src: node, alt: "Node.js" },
  // { src: express, alt: "Express.js" },
  // { src: mongodb, alt: "MongoDB" },
  { src: tailwind, alt: "Tailwind CSS" },
  { src: figma, alt: "Figma" },
  { src: wordpress, alt: "WordPress" },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20">
      <div className="container mx-auto px-6 font-epilogue">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 text-[#383838]">
          Skills I Have
        </h2>

        {/* --- RESPONSIVE SCROLL WRAPPER --- */}
        <div className="overflow-hidden relative w-full">
          <div className="flex items-center gap-8 sm:gap-12 animate-scroll">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="
                  h-10 sm:h-12 md:h-16 
                  w-auto 
                  opacity-90 hover:opacity-100
                  transition-transform hover:scale-110 duration-300
                "
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
