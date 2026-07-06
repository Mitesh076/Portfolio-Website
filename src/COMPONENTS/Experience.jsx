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
      logo: "/BB.png",
    },
    {
      company: "Jinarth Infotech",
      role: "Web Developer | Internship",
      date: "Dec 2025 - Apr 2026",
      location: "Anand",
      companyLink: "https://www.jinarthinfotech.com/",
      locationLink: "https://www.google.com/maps?q=Anand,Gujarat",
      logo: "/JI.png",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-16 border-y border-[#59323f] bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center text-white">
        <h2 className="flex justify-center items-center gap-3 text-3xl sm:text-4xl md:text-5xl font-bold text-orange-400">
          <FaBriefcase />
          Experience
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Every experience adds a new layer of learning, shaping skills through
          real-world challenges.
        </p>

        <div className="w-24 h-1 bg-orange-400 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto mt-16">
        {/* Desktop Timeline */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-white/30"
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative grid grid-cols-1 md:grid-cols-2 items-center mb-12 md:mb-20"
            >
              {/* LEFT COLUMN */}
              <div
                className={`flex ${
                  isLeft ? "md:justify-end" : "md:justify-start"
                } justify-center md:pr-10`}
              >
                {isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className="w-full max-w-xl bg-[#111132] border border-[#3a2f6a] rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 bg-white flex justify-center items-center p-6">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-24 h-24 object-contain"
                        />
                      </div>

                      <div className="sm:w-2/3 p-6 text-white text-center sm:text-left">
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold hover:text-orange-400 transition"
                        >
                          {exp.company}
                        </a>

                        <p className="mt-2 font-medium">{exp.role}</p>

                        <p className="text-green-400 text-sm mt-2">
                          {exp.date}
                        </p>

                        <a
                          href={exp.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center sm:justify-start items-center gap-2 mt-3 text-gray-300 hover:text-orange-400 transition"
                        >
                          <FaMapMarkerAlt />
                          {exp.location}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* RIGHT COLUMN */}
              <div
                className={`flex ${
                  !isLeft ? "md:justify-start" : "md:justify-end"
                } justify-center md:pl-10`}
              >
                {!isLeft && (
                  <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    className="w-full max-w-xl bg-[#111132] border border-[#3a2f6a] rounded-2xl overflow-hidden shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3 bg-white flex justify-center items-center p-6">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-24 h-24 object-contain"
                        />
                      </div>

                      <div className="sm:w-2/3 p-6 text-white text-center sm:text-left">
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-bold hover:text-orange-400 transition"
                        >
                          {exp.company}
                        </a>

                        <p className="mt-2 font-medium">{exp.role}</p>

                        <p className="text-green-400 text-sm mt-2">
                          {exp.date}
                        </p>

                        <a
                          href={exp.locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex justify-center sm:justify-start items-center gap-2 mt-3 text-gray-300 hover:text-orange-400 transition"
                        >
                          <FaMapMarkerAlt />
                          {exp.location}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Desktop Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-orange-400 border-4 border-[#222256] shadow-[0_0_18px_rgba(255,165,0,0.9)]"></div>
              </div>

              {/* Desktop Connector */}
              {isLeft ? (
                <div className="hidden md:block absolute top-1/2 right-[50%] w-10 h-0.5 bg-white/40"></div>
              ) : (
                <div className="hidden md:block absolute top-1/2 left-[50%] w-10 h-0.5 bg-white/40"></div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
