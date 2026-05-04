import React from "react";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "BrainyBeam Technologies Pvt. Ltd.",
      role: "MERN Stack Developer | Internship",
      date: "May 2025 - June 2025",
      location: "Ahmedabad",
      companyLink: "https://brainybeam.com/index.html",
      locationLink: "https://www.google.com/maps?q=Ahmedabad,Gujarat",
      logo: "BB.png",
    },
    {
      company: "Jinarth Infotech",
      role: "Web Developer | Internship",
      date: "Dec 2025 - Apr 2026",
      location: "Anand",
      companyLink: "https://www.jinarthinfotech.com/",
      locationLink: "https://www.google.com/maps?q=Anand,Gujarat",
      logo: "JI.png",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-24 px-5 md:px-20
       border-t border-b border-[#59323f]
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center text-white mb-5">
        <h2 className="text-5xl font-bold text-orange-400 flex justify-center items-center gap-3">
          <FaBriefcase className="" />
          Experience
        </h2>
        {/* 🔥 Tagline */}
        <p className="mt-4 text-gray-300 justify-center flex text-lg  mx-auto">
          Every experience adds a new layer of learning, shaping skills through
          real-world challenges.
        </p>
      </div>

      {/* Separator */}
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-16 rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Timeline Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-white/30"
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative grid md:grid-cols-2 items-center mb-16"
            >
              {/* RIGHT SIDE */}
              <div className="flex justify-start md:pr-6 ">
                {!isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-[90%]
                    flex flex-col md:flex-row
                    bg-[#111132]
                    rounded-xl overflow-hidden
                    border border-[#3a2f6a]
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300"
                  >
                    {/* Logo */}
                    <div className="w-full md:w-1/3 flex justify-center items-center bg-white p-4">
                      <img src={exp.logo} alt="logo" className="w-20 h-20 " />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-center text-center md:text-left text-white">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        className=" font-bold text-lg hover:underline hover:text-orange-400"
                      >
                        {exp.company}
                      </a>

                      <p className="font-semibold mt-1">{exp.role}</p>
                      <p className="text-green-400 text-sm mt-1">{exp.date}</p>

                      <a
                        href={exp.locationLink}
                        target="_blank"
                        className="flex items-center justify-center md:justify-start gap-2 text-sm mt-2 text-gray-300 hover:text-orange-400"
                      >
                        <FaMapMarkerAlt /> {exp.location}
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* LEFT SIDE */}
              <div className="flex justify-end md:pl-6">
                {isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full md:w-[90%]
                    flex flex-col md:flex-row
                    bg-[#111132]
                    rounded-xl overflow-hidden
                    border border-[#3a2f6a]
                    shadow-lg hover:shadow-2xl
                    transition-all duration-300"
                  >
                    {/* Logo Section */}
                    <div className="w-full md:w-1/3 flex justify-center items-center bg-white p-4">
                      <img src={exp.logo} alt="logo" className="" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col justify-center text-center md:text-left text-white">
                      <a
                        href={exp.companyLink}
                        target="_blank"
                        className=" font-bold text-lg hover:underline hover:text-orange-400"
                      >
                        {exp.company}
                      </a>

                      <p className="font-semibold mt-1">{exp.role}</p>
                      <p className="text-green-400 text-sm mt-1">{exp.date}</p>

                      <a
                        href={exp.locationLink}
                        target="_blank"
                        className="flex items-center justify-center md:justify-start gap-2 text-sm mt-2 text-gray-300 hover:text-orange-400"
                      >
                        <FaMapMarkerAlt /> {exp.location}
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* DOT */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <div className="w-5 h-5 bg-orange-400 rounded-full border-4 border-[#222256] shadow-[0_0_20px_rgba(255,165,0,1)]"></div>
              </div>

              {/* CONNECTOR */}
              {isLeft ? (
                <div className="hidden md:block absolute top-1/2 left-1/2 w-20 h-0.5 bg-white/40 -translate-y-1/2"></div>
              ) : (
                <div className="hidden md:block absolute top-1/2 right-1/2 w-20 h-0.5 bg-white/40 -translate-y-1/2"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
