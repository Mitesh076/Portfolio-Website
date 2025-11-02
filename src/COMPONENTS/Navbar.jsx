import React from "react";

function Navbar() {
  return (
    <>
      <nav className="w-full  flex flex-wrap justify-between md:px-20 px-5 pt-5 pb-5 bg-slate-100">
        <div>
          <img className="h-20" src="/src/IMAGES/MBLOGO1.png" alt="" />
        </div>
        <div className="sm:block  hidden">
          <ul className="flex flex-wrap gap-15 mt-5 text-2xl font-bold text-center content-center">
            <li className="hover:text-purple-400 hover:border-b-purple-400  hover:border-b-4 ">
              <a href="/#home">Home</a>
            </li>
            <li className="hover:text-purple-400  hover:border-b-purple-400  hover:border-b-4   ">
              <a href="/#about">About</a>
            </li>
            <li className="hover:text-purple-400   hover:border-b-purple-400  hover:border-b-4  ">
              <a href="/#skills">Skills</a>
            </li>
            <li className="hover:text-purple-400   hover:border-b-purple-400  hover:border-b-4  ">
              <a href="/#education">Education</a>
            </li>
            <li className="hover:text-purple-400   hover:border-b-purple-400  hover:border-b-4  ">
              <a href="/#work">Work</a>
            </li>
            <li className="hover:text-purple-400  hover:border-b-purple-400  hover:border-b-4   ">
              <a href="/#experience">Experience</a>
            </li>
            <li className="hover:text-purple-400  hover:border-b-purple-400  hover:border-b-4   ">
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div class="block md:hidden">
          <button id="menu-btn" class="text-gray-800 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m0 6H4"
              />
            </svg>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
