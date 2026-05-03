import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      title: "Bachelor Of Technology In Information Technology",
      college:
        "Madhuben & Bhanubhai Patel Institute Of Technology (MBIT), CVM University",
      year: "2022 - 2026 | Pursuing",
      image: "src/IMAGES/MBIT.png",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      college: "Jawahar Navodaya Vidyalaya Kathlal - Kheda ",
      year: "2020 - 2022 | Completed",
      image: "src/IMAGES/JNV.jpg",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      college: "Jawahar Navodaya Vidyalaya Kathlal - Kheda ",
      year: "2020 - 2022 | Completed",
      image: "src/IMAGES/JNV.jpg",
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
      <div className="text-center mb-16 text-white">
        <h2 className="text-5xl font-bold flex items-center justify-center gap-4">
          <FaGraduationCap className="text-yellow-400" />
          My <span className="text-yellow-400">Education</span>
        </h2>

        <p className="text-gray-300 mt-3 text-lg">
          Education is not the learning of facts, but the training of the mind
          to think.
        </p>
      </div>

      {/* Education Cards */}
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl"
          >
            {/* Image */}
            <img
              src={edu.image}
              alt="education"
              className="md:w-1/3 h-56 md:h-auto object-cover"
            />

            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-blue-900">{edu.title}</h3>

              <p className="text-gray-600 mt-2">{edu.college}</p>

              <p className="text-green-600 font-semibold mt-3">{edu.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
