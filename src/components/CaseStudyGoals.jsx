import React from 'react';

const CaseStudyGoals = ({ goals, problems }) => {
  return (
    <div className="bg-white py-8 px-6 md:py-12 md:px-20 rounded-lg shadow-md">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-purple-600">
        Project Goals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col items-center text-center px-4">
            <div className="bg-purple-500 text-white rounded-full p-4 mb-4">
              <img src={goal.icon} alt={goal.title} className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <p className="text-base sm:text-lg font-medium max-w-xs">{goal.description}</p>
          </div>
        ))}
      </div>

      <div className="py-8 md:py-12 px-4 md:px-20">
        <h2 className="text-purple-600 text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-6 text-center md:text-left">
          User Problems
        </h2>
        {problems.map((problem, index) => (
          <ul key={index} className="list-disc list-inside space-y-2 text-base sm:text-lg p-2 sm:p-4">
            <li>{problem}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyGoals;
