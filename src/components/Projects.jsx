import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.jpg";
import { motion } from "framer-motion";

const projectsData = [
  {
    name: "Crypto Wave",
    description:
      "This project helps you to get live cryptocurrency data from around the world.",
    github: "https://github.com/5ujay/crypto-wave",
    image: project1,
  },
  {
    name: "BGMI CLONE",
    description:
      "I love the BGMI (PUBG) game, so I thought let's make a clone of their website in React.",
    github: "https://github.com/5ujay/bgmi-clone",
    image: project2,
  },
  {
    name: "Fitness Guide App",
    description:
      "A React Native fitness guide app, featuring detailed workout videos to effectively train every major muscle group.",
    github: "https://github.com/5ujay/native-fitness-app",
    image: project3,
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="section py-10 flex items-center justify-center text-white"
    >
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }} // Start slightly below and invisible
              whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
              transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered effect
              className="btn text-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
