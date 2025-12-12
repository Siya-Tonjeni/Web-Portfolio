import React from "react";
import { Link } from "react-router-dom";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.PNG";
import project6 from "../assets/project6.JPG";
import project7 from "../assets/mixie-1.png";
import project8 from "../assets/delf.png";
import project9 from "../assets/king-1.png";

const Projects = () => {
  const projectData = [
    { slug: "mixie", title: "Mixie", artist: "UX/UI Design", image: project7 },
    { slug: "deft", title: "Deft.Co", artist: "Web Development", image: project8 },
    { slug: "kingsley", title: "Kingsley", artist: "UX/UI Design", image: project9 },
    { slug: "shopping-cart", title: "Shopping Cart", artist: "Web Development", image: project1 },
    { slug: "yellow-guards", title: "Yellow Guards - Security Company", artist: "Web Development", image: project2 },
    { slug: "funda-nam", title: "Funda Nam - Educational App", artist: "UX/UI Design", image: project5 },
    { slug: "livefeed", title: "LiveFeed - Real Time App List", artist: "Web Development", image: project3 },
    { slug: "falco-holmz", title: "Falco Holmz - Artist Portfolio", artist: "Web Development", image: project4 },
    { slug: "fanta", title: "Fanta - Product Page", artist: "UX/UI Design", image: project6 },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14">
          My Latest Work
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-md bg-gray-100 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">

                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Card bottom */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{project.artist}</p>
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
