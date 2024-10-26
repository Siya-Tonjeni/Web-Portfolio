import React from 'react';
import endImg from '../assets/end-img.png';

const CaseStudyLearning = ({challenges, learning}) => {
  return (
    <div className="bg-purple-600 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <img 
            src= {endImg} 
            alt="Illustration" 
            className="w-1/4  h-auto"
          />
        </div>

        <h2 className="text-4xl font-bold mb-4">Key Learnings</h2>
        <p className="text-lg leading-relaxed mb-4">
          {challenges}
        </p>
        <p className="text-lg leading-relaxed">
          {learning}
        </p>
      </div>
    </div>
  );
};

export default CaseStudyLearning;
