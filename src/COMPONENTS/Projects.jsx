import React from "react";
import { FaCode, FaEye, FaLaptopCode } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Instagram MERN",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200",
      description:
        "Full Stack Instagram Clone built using MERN Stack with authentication and image upload functionality.",
      view: "#",
      code: "#",
    },
    {
      title: "Flipkart MERN",
      image:
        "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200",
      description:
        "Full Stack Flipkart Clone with Admin Dashboard and integrated payment gateway using MERN.",
      view: "#",
      code: "#",
    },
    {
      title: "ResumeGen",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200",
      description:
        "Online Resume Generator that allows users to create professional resumes quickly.",
      view: "#",
      code: "#",
    },
    {
      title: "React UI Projects",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200",
      description:
        "Collection of modern UI components built with React and TailwindCSS.",
      view: "#",
      code: "#",
    },
    {
      title: "E-Commerce UI",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200",
      description:
        "Responsive ecommerce website UI with product pages and shopping cart functionality.",
      view: "#",
      code: "#",
    },
    {
      title: "JavaScript Projects",
      image:
        "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=1200",
      description:
        "Collection of JavaScript projects including calculators and mini apps.",
      view: "#",
      code: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      border-t border-b border-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center mb-16 text-white">
        <h2 className="text-5xl font-bold flex items-center justify-center gap-3">
          <FaLaptopCode />
          Projects <span className="text-yellow-400">Made</span>
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Title Strip */}
            <div className="bg-yellow-400 px-4 py-2 font-bold text-lg">
              {project.title}
            </div>

            {/* Description */}
            <div className="p-5">
              <p className="text-gray-700 mb-5">{project.description}</p>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.view}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <FaEye /> View
                </a>

                <a
                  href={project.code}
                  className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  <FaCode /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
