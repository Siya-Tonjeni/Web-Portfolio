import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const CaseStudyHeader = ({ title, description, tools, imageHeader, link }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/#Projects'); 
  };

  return (
    <header className="bg-purple-600 py-6 md:py-12">
      <div className="container mx-auto px-4">
        <IoIosArrowBack 
          onClick={handleRedirect} 
          className="w-10 h-10 text-white text-3xl hover:text-4xl cursor-pointer mb-4 md:mb-0"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-base md:text-lg text-white mb-8">{description}</p>
            
            {/* Tools Used Section */}
            <div className="inline-block py-2 px-4">
              <span className="text-base md:text-lg text-white font-semibold">Tools Used:</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                {tools.map((tool, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-purple-500 text-white rounded-full p-2 mb-2 md:mb-5">
                      <img src={tool} alt={tool.title} className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visit Project Button */}
            <div className="mt-4 md:mt-6">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-purple-500 py-2 px-4 md:px-6 rounded-full hover:bg-purple-600 hover:text-white transition duration-300"
              >
                Visit The Project
              </a>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={imageHeader} 
              alt={`${title} Mockups`} 
              className="w-full max-w-xs md:max-w-full rounded-lg shadow-lg" 
            />
          </div>

        </div>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
