import React from "react";

import { IoMdMailUnread } from "react-icons/io";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { motion, useScroll } from "framer-motion";

function Footer() {
  const { scrollYProgress } = useScroll();

  return (
    <footer className="bg-[#0b0b2b] text-white pt-10 px-5 md:px-20 relative">
      {/* 🔥 Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-orange-400 origin-left z-50"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* 🧠 BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400">
            Mitesh | Portfolio
          </h2>
        </div>

        {/* 🔗 QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-2 text-sm ">
            <a href="#home" className="hover:text-orange-400 hover:underline ">
              Home
            </a>
            <a href="#about" className="hover:text-orange-400 hover:underline">
              About
            </a>
            <a href="#skills" className="hover:text-orange-400 hover:underline">
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-orange-400 hover:underline"
            >
              Education
            </a>
            <a href="#work" className="hover:text-orange-400 hover:underline">
              Work
            </a>
            <a
              href="#experience"
              className="hover:text-orange-400 hover:underline"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="hover:text-orange-400 hover:underline"
            >
              Contact
            </a>
          </div>
        </div>

        {/* 🌐 SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Connect
          </h3>

          <div className="flex gap-5 text-2xl">
            <a
              href="https://github.com/mitesh076"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/mitesh-bharvad-7133021b5"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.facebook.com/share/1EXEnMBuTm/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/bharvad__76?igsh=MTkyMmFjYTlhcWU2ZQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 hover:scale-110 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 📞 CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-orange-400">
            Contact
          </h3>

          <div className="flex flex-col gap-3 text-sm text-gray-300">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=miteshbharvad733@gmail.com&su=Portfolio visited Queries"
              className="flex items-center gap-2 hover:text-orange-400 hover:underline"
            >
              <FaEnvelope /> miteshbharvad733@gmail.com
            </a>

            <a
              href="tel:+919081611867"
              className="flex items-center gap-2 hover:text-orange-400 hover:underline"
            >
              <FaPhone /> +91 XXXXX XXXXX
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-0.5 bg-white/10 my-8"></div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Mitesh. All Rights Reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="bg-orange-400 text-black p-3 rounded-full
          hover:bg-orange-500 hover:scale-110
          transition-all duration-300"
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
