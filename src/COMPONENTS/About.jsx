import React from "react";
import { FaUser, FaFileDownload } from "react-icons/fa";

function About() {
  return (
    <div id="about">
      {/* Top Header */}
      <div
        className="w-full flex justify-center md:px-20 px-5 py-5 
        bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
        text-white shadow-lg border-t border-[#59323f]"
      >
        <h1 className="flex gap-4 font-bold text-3xl md:text-5xl text-white">
          <FaUser className="text-orange-400" />{" "}
          <span className="text-orange-400">About</span>
        </h1>
      </div>

      {/* Main Section */}
      <div
        className="w-full flex flex-col md:flex-row items-center 
        justify-between md:px-20 px-5 py-10 
        bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
        text-white shadow-lg"
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center mt-5 md:mt-10">
          <img
            className="h-60 w-60 md:h-96 md:w-96 object-cover shadow-xl rounded-2xl border-4 border-white/20"
            src="/src/IMAGES/P2.jpg"
            alt="profile"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 mt-10 md:ml-10 text-center md:text-left">
          <h1 className="font-bold text-3xl md:text-5xl">I'm Mitesh</h1>

          <h1 className="font-semibold text-2xl md:text-3xl mt-3">
            Web Developer
          </h1>

          <p className="text-lg md:text-xl mt-5 leading-relaxed">
            I’m Mitesh, a passionate Web Developer specializing in building
            modern, responsive, and user-friendly web applications. I enjoy
            turning ideas into clean, efficient code using the MERN stack.
            Currently pursuing my B.Tech in Information Technology at MBIT (CVM
            University), I focus on improving my skills every day through
            real-world projects and continuous learning.
          </p>

          {/* Email Link */}
          <h1 className="font-semibold text-lg md:text-xl mt-3">
            <span className="text-orange-500">Email : </span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=miteshbharvad733@gmail.com&su=Portfolio visited Queries"
              className="hover:underline hover:text-blue-300"
            >
              miteshbharvad733@gmail.com
            </a>
          </h1>

          {/* Location Link */}
          <h1 className="font-semibold text-lg md:text-xl mt-3">
            <span className="text-orange-500">Place : </span>
            <a
              href="https://www.google.com/maps?q=Anand,Gujarat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-blue-300"
            >
              Anand, Gujarat
            </a>
          </h1>

          {/* Resume Button */}
          <div className="w-full flex justify-center md:justify-start">
            <a
              href="/MITESH.pdf" // 👉 put your resume in public folder
              download
              className="flex items-center gap-3 p-3 px-5 border-2 rounded-full 
              hover:bg-orange-500 bg-[#0a0826] mt-6
              shadow-[#0a0826] shadow-md
              text-white font-semibold text-lg md:text-xl"
            >
              Resume <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
