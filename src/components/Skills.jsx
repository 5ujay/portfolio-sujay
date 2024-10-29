import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "ReactJS", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "Git & GitHub", icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="section flex items-center justify-center min-h-screen text-white"
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex flex-col items-center bg-purple-600 rounded-lg p-4 transition-transform transform hover:scale-105"
            >
              <div className="icon text-5xl mb-2">{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
