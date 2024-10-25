import React from 'react';
import overviewImg from '../assets/overview-img.png';

const CaseStudyOverview = ({ overviewText, problemText }) => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <div className="mb-8">
            <h2 className="text-5xl font-bold text-purple-600 mb-4">Project Overview</h2>
            <p className="text-lg text-gray-700 w-1/2 h-auto">{overviewText}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-purple-600 mb-4">The Problem Statement</h2>
            <p className="text-lg text-gray-700 w-1/2 h-auto">{problemText}</p>
          </div>

          <div class="flex justify-center items-center">
            <img src= {overviewImg} alt="Overview Illustrator" class="w-1/2 max-w-xs h-auto mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
