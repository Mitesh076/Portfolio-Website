import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const sections = [
    "home",
    "about",
    "skills",
    "education",
    "projects",
    "experience",
    "contact",
  ];

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
        threshold: 0.6,
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

  const navLinkClass = (section) =>
    `cursor-pointer transition-all duration-300 ${
      active === section
        ? "text-orange-400 border-b-2 border-orange-400"
        : "hover:text-orange-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#222256] via-[#3a2f6a] to-[#59323f] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <a href="#home">
          <img
            src="/MBLOGO1.png"
            alt="Logo"
            className="h-14 w-14 rounded-full object-cover"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-lg font-semibold text-white">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={navLinkClass(section)}
                onClick={() => setActive(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
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
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
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
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#222256] text-white">
          <ul className="flex flex-col items-center py-4 gap-5 text-lg font-semibold">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={navLinkClass(section)}
                  onClick={() => {
                    setActive(section);
                    setIsOpen(false);
                  }}
                >
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
