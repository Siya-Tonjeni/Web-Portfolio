import React from 'react';

const CaseStudyGoals = ({ goals, problems}) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md">
      <h2 className="text-5xl font-bold text-center mb-10 text-purple-600">Project Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {goals.map((goal, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="bg-purple-500 text-white rounded-full p-5 mb-5">
              <img src={goal.icon} alt={goal.title} className="w-12 h-12" />
            </div>
            <p className="text-lg font-medium">{goal.description}</p>
          </div>
        ))}
      </div>

      <h2 className="text-purple-600 text-4xl font-bold mt-9 mb-6">User Problems</h2>
      {problems.map((problem, index) => (
        <ul key={index} className="list-disc list-inside space-y-2 text-lg p-4">
        <li>{problem}</li>
        </ul>
      ))}
    </div>
  );
};

export default CaseStudyGoals;
