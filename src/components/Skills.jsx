import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiCplusplus,
  SiNetlify,
  SiRender,
  SiAppwrite,
} from "react-icons/si";
import { motion } from "framer-motion";

// List of skills in ascending order
const skillsData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaHtml5 /> }, // Icon for Bootstrap (HTML5 is used here as placeholder)
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Netlify", icon: <SiNetlify /> },
  { name: "Render", icon: <SiRender /> },
  { name: "Web Development", icon: <FaReact /> }, // Placeholder for Web Development icon (React icon used here)
  { name: "Frontend Development", icon: <FaReact /> }, // Placeholder for Frontend Development
  { name: "gitHub", icon: <FaGithub /> },
  { name: "Appwrite", icon: <SiAppwrite /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "NeonDB", icon: <FaDatabase /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="section flex items-center justify-center min-h-screen text-white bg-gradient-to-r from-purple-600 to-indigo-900"
    >
      <div className="flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 0.5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-6">
          {skillsData
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-voilet-700 rounded-lg p-4 shadow-lg transform transition-all hover:scale-110 hover:shadow-2xl"
              >
                <div className="icon text-6xl mb-2">{skill.icon}</div>
                <p className="text-lg font-medium">{skill.name}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
