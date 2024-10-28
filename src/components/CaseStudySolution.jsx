import React from 'react';

const CaseStudySolution = ({ solutions }) => {

  return (
    <section className="bg-white rounded-lg mt-8 w-50 py-12 px-20">
      <h2 className="text-center text-purple-600 text-5xl font-bold mb-6">Possible Solutions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {solutions.map((solution, index) => (
          <div key={index} className="bg-purple-50 p-6 rounded-md shadow-md">
            <p className="text-gray-900 text-lg">
              {solution.textBefore} <span className="text-purple-600 font-semibold">{solution.emphasis}</span> {solution.textAfter}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudySolution;
