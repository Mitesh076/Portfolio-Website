import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full flex items-center justify-between md:px-20 px-5 py-5 
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      text-white fixed top-0 left-0 z-50 shadow-lg"
    >
      {/* Logo */}
      <div className="ml-5">
        <img className="h-16" src="/src/IMAGES/MBLOGO1.png" alt="" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <ul className="flex gap-10 text-2xl font-bold">
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#home">Home</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#about">About</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#skills">Skills</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#education">Education</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#work">Work</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#experience">Experience</a>
          </li>
          <li className="hover:text-purple-400 hover:border-purple-400 hover:border-b-4">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden focus:outline-none mr-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m0 6H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="w-full sm:hidden bg-[#222256]/90 backdrop-blur-md py-5 px-10 absolute top-20 left-0 shadow-lg">
          <ul className="flex flex-col gap-5 text-xl font-bold">
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#home">
                Home
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#about">
                About
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#skills">
                Skills
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#education">
                Education
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#work">
                Work
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#experience">
                Experience
              </a>
            </li>
            <li onClick={() => setIsOpen(false)}>
              <a className="hover:text-purple-300" href="/#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
