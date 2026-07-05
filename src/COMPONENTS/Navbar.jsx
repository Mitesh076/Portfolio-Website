import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Sections list (must match your IDs in page)
  const sections = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "experience",
    "contact",
  ];

  // Scroll Active Feature
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, // adjust for accuracy
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Dynamic Class
  const navLinkClass = (section) =>
    `cursor-pointer transition-all duration-300 ${
      active === section
        ? "text-orange-400 border-b-4 border-orange-400"
        : "hover:text-orange-400 hover:border-b-4 hover:border-orange-400"
    }`;

  return (
    <nav
      className="w-full flex items-center justify-between md:px-20 px-5 py-5 
      bg-linear-to-r from-[#222256] via-[#3a2f6a] to-[#59323f]
      text-white fixed top-0 left-0 z-50 shadow-lg"
    >
      {/* Logo */}
      <div className="ml-5">
        <img
          className="h-16 rounded-full"
          src="/public/MBLOGO1.png"
          alt="logo"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:block">
        <ul className="flex gap-10 text-2xl font-bold">
          {sections.map((section) => (
            <li
              key={section}
              className={navLinkClass(section)}
              onClick={() => setActive(section)}
            >
              <a href={`/#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Button */}
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="w-full sm:hidden bg-[#222256]/90 backdrop-blur-md py-5 px-10 absolute top-20 left-0 shadow-lg">
          <ul className="flex flex-col gap-5 text-xl font-bold">
            {sections.map((section) => (
              <li
                key={section}
                onClick={() => {
                  setActive(section);
                  setIsOpen(false);
                }}
              >
                <a className={navLinkClass(section)} href={`/#${section}`}>
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
