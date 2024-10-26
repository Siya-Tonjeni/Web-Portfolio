import React from 'react';

const CaseStudyDevice = ({ videoDemo, imageDevice }) => {
  return (
    <div className="container mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold text-center mb-10 text-purple-600">Device Design</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="flex justify-center items-center">
          <video 
            src={videoDemo} 
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {imageDevice.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Case study ${index + 1}`} 
              className="w-full h-auto rounded-lg shadow-lg" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDevice;
