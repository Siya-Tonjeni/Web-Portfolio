// import React from 'react';

// const CaseStudyHeader = ({ title, description, tools, imageHeader }) => {
//   return (
//     <header className="bg-purple-600 py-12">
//       <div className="container mx-auto px-4 flex flex-col items-center text-center">
//         <div className="w-full md:w-1/2">
//           <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
//           <p className="text-lg text-white mb-8">{description}</p>
//           <div className="bg-white inline-block rounded-lg py-2 px-4">
//             <span className="text-sm text-purple-600 font-semibold">Tools Used:</span>
//             <span className="ml-2 text-purple-600">{tools}</span>
//           </div>
//         </div>
//         <div className="mt-12">
//           <img src={imageHeader} alt={`${title} Mockups`} className="max-w-full" />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default CaseStudyHeader;


import React from 'react';

const CaseStudyHeader = ({ title, description, tools, imageHeader , link}) => {
  return (
    <header className="bg-purple-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
            <p className="text-lg text-white mb-8">{description}</p>
            <div className="inline-block rounded-lg py-2 px-4">
              <span className="text-lg text-white font-semibold">Tools Used:</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-purple-500 text-white rounded-full p-2 mb-5">
              <img src={tool} alt={tool.title} className="w-12 h-12" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-purple-500 py-2 px-6 rounded-full hover:bg-purple-600 transition duration-300"
        >
          Visit The Project
        </a>
      </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img src={imageHeader} alt={`${title} Mockups`} className="max-w-full rounded-lg shadow-lg" />
          </div>

        </div>
      </div>
    </header>
  );
};

export default CaseStudyHeader;
