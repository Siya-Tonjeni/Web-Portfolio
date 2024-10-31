import React from 'react';
import overviewImg from '../assets/overview-img.png';

const CaseStudyOverview = ({ overviewText, problemText }) => {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3">
          
          {/* Project Overview Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-600 mb-4 text-center md:text-left">
              Project Overview
            </h2>
            <p className="text-base sm:text-lg text-gray-700 w-full md:w-3/4 mx-auto md:mx-0">
              {overviewText}
            </p>
          </div>

          {/* Problem Statement Section */}
          <div className="mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-purple-600 mb-4 text-center md:text-left">
              The Problem Statement
            </h2>
            <p className="text-base sm:text-lg text-gray-700 w-full md:w-3/4 mx-auto md:mx-0">
              {problemText}
            </p>
          </div>

          {/* Image Section */}
          <div className="flex justify-center items-center mt-6">
            <img 
              src={overviewImg} 
              alt="Overview Illustrator" 
              className="w-3/4 sm:w-1/2 md:w-1/2 max-w-xs h-auto mx-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
