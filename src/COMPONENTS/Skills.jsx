import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaAndroid,
  FaBootstrap,
  FaJs,
  FaPhp,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiExpress,
  SiRedux,
  SiFirebase,
  SiMui,
  SiChakraui,
  SiTailwindcss,
  SiSass,
  SiKotlin,
} from "react-icons/si";

const skills = [
  { name: "ReactJS", icon: <FaReact /> },
  { name: "ExpressJS", icon: <SiExpress /> },
  { name: "NodeJS", icon: <FaNodeJs /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android", icon: <FaAndroid /> },

  { name: "MaterialUI", icon: <SiMui /> },
  { name: "ChakraUI", icon: <SiChakraui /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <FaBootstrap /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "HTML5", icon: <FaHtml5 /> },

  { name: "CSS3", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Kotlin", icon: <SiKotlin /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Python", icon: <FaPython /> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="
      w-full justify-center md:px-20 px-5 py-16
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      text-white shadow-lg
      border-t border-b border-[#59323f]
      "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white flex items-center justify-center gap-4">
          <FaLaptopCode className="text-orange-400" />
          My <span className="text-orange-400">Skills</span>
        </h2>

        <p className="text-gray-300 mt-3 text-lg">
          Technologies and tools I work with
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            bg-[#0a0826]
            rounded-2xl
            p-10
            flex flex-col items-center justify-center
            border border-[#3a2f6a]
            shadow-md shadow-black/40

            hover:border-[#59323f]
            hover:shadow-[0_0_25px_#59323f]
            hover:-translate-y-2

            transition-all duration-300
            "
          >
            {/* Icon */}
            <div className="text-6xl text-blue-400 mb-4 drop-shadow-[0_0_10px_rgba(96,165,250,0.7)]">
              {skill.icon}
            </div>

            {/* Text */}
            <p className="text-white text-xl font-semibold tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
