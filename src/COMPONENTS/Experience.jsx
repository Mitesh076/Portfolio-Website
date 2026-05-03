import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      company: "Self Employed",
      role: "Full Stack Developer",
      date: "Oct 2021 - Present",
    },
    {
      company: "Mapstreak Flyseas",
      role: "Web Developer | Internship",
      date: "June 2021 - Dec 2021",
    },
    {
      company: "The Spark Foundation",
      role: "Website Developer | Internship",
      date: "May 2021 - June 2021",
    },
    {
      company: "The Spark Foundation",
      role: "Mobile Application Developer | Internship",
      date: "April 2021 - May 2021",
    },
    {
      company: "Frshr Technologies",
      role: "WordPress Developer | Internship",
      date: "April 2021",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-24 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center text-white mb-20">
        <h2 className="text-5xl font-bold flex justify-center items-center gap-3">
          <FaBriefcase />
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white/40"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`mb-16 flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Card */}
            <div
              className="relative w-full md:w-5/12
              bg-[#f7931e] text-black
              p-6 rounded-xl shadow-xl
              transform transition duration-500
              hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold">{exp.company}</h3>
              <p className="font-semibold">{exp.role}</p>
              <p className="text-sm">{exp.date}</p>

              {/* Arrow */}
              <div
                className={`absolute top-6 ${
                  index % 2 === 0
                    ? "-right-3 border-l-[#f7931e]"
                    : "-left-3 border-r-[#f7931e]"
                }
                w-0 h-0 border-y-10 border-y-transparent
                ${index % 2 === 0 ? "border-l-15" : "border-r-15"}`}
              ></div>
            </div>

            {/* Timeline Dot */}
            <div
              className="absolute left-1/2 transform -translate-x-1/2
              w-6 h-6 bg-[#f7931e] border-4 border-white rounded-full
              shadow-[0_0_15px_rgba(255,165,0,0.9)]"
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
