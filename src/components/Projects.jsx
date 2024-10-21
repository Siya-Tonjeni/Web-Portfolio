import React from 'react';
import project1 from '../assets/project1.png'; 
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.PNG';
import project6 from '../assets/project6.JPG';

const Projects = () => {
  const projectData = [
    {
      title: 'Shopping Cart',
      artist: 'Web Development',
      image: project1,
    },
    {
      title: 'Yellow Guards - Security Company',
      artist: 'Web Development',
      image: project2,
    },
    {
        title: 'Fund Nam - Educational App',
        artist: 'UX/UI Design ',
        image: project5,
      },
    {
      title: 'LiveFeed - Real Time App List',
      artist: 'Web Development',
      image: project3,
    },
    {
      title: 'Falco Holmz - Artist Portfolio',
      artist: 'Web Development',
      image: project4,
    },
    {
      title: 'Fanta - Product Page',
      artist: 'UX/UI Design',
      image: project6,
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-12">My Latest Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={project.image}
                alt={project.title}
                className="mb-4 w-full h-64 object-cover"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
