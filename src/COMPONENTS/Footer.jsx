import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0b0b2b] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Name */}
        <div className="text-xl font-bold">Mitesh | Portfolio</div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-yellow-400 transition">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            <FaLinkedin />
          </a>

          <a href="#" className="hover:text-yellow-400 transition">
            <FaTwitter />
          </a>
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="bg-yellow-400 text-black p-3 rounded-full hover:scale-110 transition"
        >
          <FaArrowUp />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} Mitesh. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
