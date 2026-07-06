import React from "react";
import { FaCode, FaLaptopCode, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "PLACEMENT PORTAL",
      image: "/PP.png",
      description:
        " 🚀 A centralized web-based Placement Management System designed to streamline campus placement activities by single platform.",
      code: "https://github.com/Mitesh076/Placement-portal.git",
    },
    {
      title: "PORTFOLIO WEBSITE",
      image: "/PWSS.png",
      description:
        "🚀 A modern, responsive developer portfolio website built to showcase my skills, projects, and experience as a Full Stack Developer.",
      code: "https://github.com/Mitesh076/Portfolio-Website.git",
      demo: "https://mitesh-bharvad.vercel.app/",
    },
    {
      title: "QUICKMART",
      image: "/QMSS.png",
      description:
        "🚀 QuickMart is a modern and responsive E-Commerce Web Application inspired by platforms like Amazon. It provides users with a seamless online shopping experience.",
      code: "https://github.com/Mitesh076/QUICKMART.git",
    },
    {
      title: "FLAT-PARTNER",
      image: "/FPSS.png",
      description:
        "🚀 Flat Partner is a smart web application that helps users find flats, roommates, or rental spaces based on their preferences. Users can post available flats with detailed facilities and search for properties that match their requirements.",
      code: "https://github.com/Mitesh076/Flat-Partner.git",
    },
    {
      title: "COLLEGE FEEDBACK SYSTEM ",
      image: "/2.png",
      description:
        "🚀 The College Feedback System is a web-based application designed to collect, manage, and analyse feedback from students about faculty, courses, and campus infrastructure.",
      code: "https://github.com/Mitesh076/college-feedback-system.git",
    },
    {
      title: "CURRENCY CONVERTER",
      image: "/CC.png",
      description:
        " 🚀A modern, responsive currency converter built using HTML, CSS, and JavaScript.Convert currencies instantly with a clean UI and smooth user experience.",
      code: "https://github.com/Mitesh076/Currency-Converter.git",
      demo: "https://currency-converter-inky-three.vercel.app/",
    },
    {
      title: "TEXTUTILS",
      image: "/TU.png",
      description:
        "🚀 TextUtils is a simple and efficient web application that allows users to analyze and manipulate text with various utilities like case conversion, text summary, and reading time estimation..",
      code: "https://github.com/Mitesh076/TEXTUTILS.git",
    },
    {
      title: "TODO",
      image: "/TDSS.png",
      description:
        "🚀 A simple and efficient To-Do Application that helps users manage daily tasks, stay organized, and improve productivity.",
      code: "https://github.com/Mitesh076/TODO.git",
    },
    {
      title: "INTERHSHIP",
      image: "/INTERNSHIP.png",
      description:
        "🚀 This project is a Frontend-based Internship Management System designed to manage and display internship-related details of a company. It focuses on creating a clean, responsive, and user-friendly interface using HTML, CSS, and JavaScript.",
      code: "https://github.com/Mitesh076/INTERNSHIP.git",
    },
  ];
  return (
    <section
      className="w-full py-24 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      border-t border-b border-[#59323f]"
    >
      {/* Heading */}
      <div id="projects" className="text-center mb-5 text-white">
        <h2 className="text-5xl font-bold flex items-center justify-center gap-3">
          <FaLaptopCode className="text-orange-400" />
          <span className="text-orange-400">Projects</span>
        </h2>

        {/* 🔥 Subtitle Line */}
        <p className="text-gray-300 mt-4 text-lg max-w-2xl mx-auto">
          Turning ideas into real-world applications through clean code,
          creative design, and problem-solving.
        </p>
      </div>
      {/* Separator */}
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-16 rounded-full"></div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
            bg-white/10 backdrop-blur-md
            rounded-2xl overflow-hidden
            border border-white/10
            shadow-xl

            hover:scale-105
            hover:shadow-[0_0_25px_rgba(255,165,0,0.3)]
            transition duration-300
            "
          >
            {/* Image */}
            <div className="w-full h-52">
              <img
                src={project.image}
                alt={project.title}
                className="h-full  p-2 object-contain  object-bottom "
              />
            </div>

            {/* Content */}
            <div className="p-5 mt-0 text-white">
              <h3 className="text-xl font-bold text-orange-400 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              {/* Code Button */}
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-2
                border border-orange-400 text-orange-400
                px-4 py-2 rounded-lg

                hover:bg-orange-400 hover:text-black
                transition duration-300
                "
              >
                <FaCode /> View Code
              </a>

              {/* demo Button */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" inline-flex items-center gap-2 ml-2
                border border-orange-400 text-black
                px-4 py-2 rounded-lg
                bg-orange-400

                hover:text-black
                duration-300 hover:bg-orange-600 transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
