import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

const projectsData = [
  {
    name: "Be Fit",
    link: "https://befit-va2m.onrender.com/",
  },
  {
    name: "BGMI CLONE",
    link: "https://bgmi-web-clone.netlify.app/",
  },
  {
    name: "Crypto Wave",
    link: "https://crytpo-wave-frontend.onrender.com/",
  },
  {
    name: "Spotify Clone",
    link: "https://spotifyycloneweb.netlify.app/",
  },
  {
    name: "Weather App",
    link: "https://weather-check-karo-app.netlify.app/",
  },
  {
    name: "Servive Nest",
    link: "https://smart-home-nextjs14.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="section py-20 bg-gray-900 text-white flex items-center justify-center"
    >
      <div className="flex flex-col max-w-6xl w-full px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gradient">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-purple-600 to-indigo-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className="space-y-4">
                <motion.h3
                  className="text-2xl font-semibold"
                  whileHover={{ scale: 1.05 }}
                >
                  {project.name}
                </motion.h3>

                {/* Live Icon with External Link */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg font-semibold text-indigo-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-indigo-300 hover:text-indigo-500 transition-colors"
                    >
                      <FaEye className="mr-2" /> Live
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
