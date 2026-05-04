import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      title: "Bachelor Of Technology In Information Technology",
      college:
        "Madhuben & Bhanubhai Patel Institute Of Technology (MBIT), CVM University",
      link: "https://mbit.edu.in/",
      year: "2022 - 2026 | Pursuing",
      image: "/MBIT.png",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      college: "Jawahar Navodaya Vidyalaya Kathlal - Kheda",
      link: "https://navodaya.gov.in/nvs/nvs-school/KHEDA/en/about_us/About-JNV/",
      year: "2020 - 2022 | Completed",
      image: "JNV.jpg",
    },
    {
      title: "Secondary School Certificate (SSC)",
      college: "Jawahar Navodaya Vidyalaya Kathlal - Kheda",
      link: "https://navodaya.gov.in/nvs/nvs-school/KHEDA/en/about_us/About-JNV/",
      year: "2018 - 2020 | Completed",
      image: "JNV.jpg",
    },
  ];

  return (
    <section
      id="education"
      className="w-full py-20 px-5 md:px-20
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      border-t border-b border-[#59323f]"
    >
      {/* Heading */}
      <div className="text-center mb-5 text-white">
        <h2 className="text-5xl font-bold flex items-center justify-center gap-4">
          <FaGraduationCap className="text-orange-400" />
          <span className="text-orange-400">Education</span>
        </h2>

        <p className="text-gray-300 mt-3 text-lg">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
      </div>

      {/* Separator */}
      <div className="w-24 h-1 bg-orange-400 mx-auto mb-16 rounded-full"></div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-[#0a0826] rounded-xl overflow-hidden border border-[#3a2f6a] shadow-lg hover:shadow-[0_0_25px_#59323f] hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/4 flex justify-center items-center bg-white p-4">
              <img
                src={edu.image}
                alt="education"
                className="w-28 h-28 md:w-32 md:h-32 object-contain"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col justify-center text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">{edu.title}</h3>

              <a
                href={edu.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 mt-2 hover:text-orange-400 hover:underline"
              >
                {edu.college}
              </a>

              <p className="text-green-400 font-semibold mt-3">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
