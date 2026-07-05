import React, { useState } from "react";
import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaPython,
  FaBootstrap,
  FaJs,
  FaPhp,
  FaLaptopCode,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import {
  SiExpress,
  SiRedux,
  SiFirebase,
  SiMui,
  SiChakraui,
  SiReactrouter,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiKotlin,
  SiMongodb,
  SiPostman,
  SiGit,
  SiGithub,
  SiNetlify,
  SiVercel,
  SiRender,
  SiOpenai,
  SiTensorflow,
} from "react-icons/si";

// ✅ Categorized Skills
const skillCategories = {
  frontend: [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    { name: "ReactJS", icon: <FaReact />, link: "https://react.dev/" },
    { name: "Redux", icon: <SiRedux />, link: "https://redux.js.org/" },
    {
      name: "React Router",
      icon: <SiReactrouter />,
      link: "https://reactrouter.com/",
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss />,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap />,
      link: "https://getbootstrap.com/",
    },
    { name: "MaterialUI", icon: <SiMui />, link: "https://mui.com/" },
    { name: "ChakraUI", icon: <SiChakraui />, link: "https://chakra-ui.com/" },
  ],
  backend: [
    { name: "SQL", icon: <FaDatabase />, link: "https://www.mysql.com/" },
    { name: "MongoDB", icon: <SiMongodb />, link: "https://www.mongodb.com/" },
    { name: "NodeJS", icon: <FaNodeJs />, link: "https://nodejs.org/" },
    { name: "ExpressJS", icon: <SiExpress />, link: "https://expressjs.com/" },
  ],
  languages: [
    {
      name: "C",
      icon: <SiC />,
      link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    { name: "C++", icon: <SiCplusplus />, link: "https://isocpp.org/" },
    { name: "Python", icon: <FaPython />, link: "https://www.python.org/" },
    {
      name: "OOP",
      icon: <FaCode />,
      link: "https://en.wikipedia.org/wiki/Object-oriented_programming",
    },
  ],
  tools: [
    {
      name: "VS Code",
      icon: <VscVscode />,
      link: "https://code.visualstudio.com/",
    },
    {
      name: "MongoDB Compass",
      icon: <SiMongodb />,
      link: "https://www.mongodb.com/products/compass",
    },
    {
      name: "MongoDB Atlas",
      icon: <SiMongodb />,
      link: "https://www.mongodb.com/atlas",
    },
    { name: "Postman", icon: <SiPostman />, link: "https://www.postman.com/" },
    { name: "Git", icon: <SiGit />, link: "https://git-scm.com/" },
    { name: "GitHub", icon: <SiGithub />, link: "https://github.com/" },

    { name: "Netlify", icon: <SiNetlify />, link: "https://www.netlify.com/" },
    { name: "Vercel", icon: <SiVercel />, link: "https://vercel.com/" },
    {
      name: "OpenAI API",
      icon: <SiOpenai />,
      link: "https://platform.openai.com/",
    },
  ],
};

function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section
      id="skills"
      className="w-full md:px-20 px-5 py-16
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      text-white shadow-lg border-t border-b border-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center mb-5">
        <h2 className="text-5xl font-bold flex items-center justify-center gap-4">
          <FaLaptopCode className="text-orange-400" />
          <span className="text-orange-400">Skills</span>
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Technologies and tools I work with
        </p>
      </div>

      {/* Separator */}
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-16 rounded-full"></div>

      {/* Tabs */}
      <div className="flex justify-center gap-5 mb-12 flex-wrap">
        {Object.keys(skillCategories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-6 py-2 rounded-full font-semibold capitalize
              transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-[#0a0826] hover:bg-orange-400"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl mx-auto flex justify-center">
        <div
          className="
    grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
    gap-10 justify-items-center"
        >
          {skillCategories[activeTab].map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0a0826] rounded-2xl p-10 flex flex-col items-center justify-center
            border border-[#3a2f6a] shadow-md shadow-black/40
            hover:border-[#59323f] hover:shadow-[0_0_25px_#59323f] hover:-translate-y-2
            transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl text-blue-400 mb-4">{skill.icon}</div>

              <p className="text-white text-xl font-semibold">{skill.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
