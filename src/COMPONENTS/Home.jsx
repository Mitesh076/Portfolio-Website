import React, { useEffect, useRef, useState } from "react";
import {
  FaLocationArrow,
  FaGithubSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import Typed from "typed.js";

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "MERN Stack Developer", "Programmer"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 800,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x59323f,
          backgroundColor: 0x222256,
        }),
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // 🔥 Social Links (UPDATE YOUR LINKS HERE)
  const socialLinks = [
    {
      icon: <FaGithubSquare />,
      link: "https://github.com/mitesh076",
    },
    {
      icon: <IoLogoLinkedin />,
      link: "https://linkedin.com/in/mitesh-bharvad-7133021b5",
    },
    {
      icon: <IoMdMailUnread />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=miteshbharvad733@gmail.com&su=Portfolio visited Queries",
    },
    {
      icon: <FaFacebookSquare />,
      link: "https://www.facebook.com/share/1EXEnMBuTm/",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/bharvad__76?igsh=MTkyMmFjYTlhcWU2ZQ==",
    },
  ];

  return (
    <div
      id="home"
      ref={vantaRef}
      className="w-full min-h-screen flex items-center py-24 px-5 md:px-20 "
    >
      <div className="w-full flex flex-col md:flex-row md:p-15 px-5">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 md:ml-10 text-center md:mt-25 md:text-left">
          <h1 className="font-bold text-4xl md:text-5xl text-white mt-3">
            Hi, I am
          </h1>

          <h1 className="font-bold text-4xl md:text-5xl text-orange-400 mt-3">
            Mitesh Bharvad
          </h1>

          <h1 className="font-bold text-3xl md:text-3xl text-white mt-3">
            I am a <span ref={typedRef} className="text-red-400"></span>
          </h1>

          {/* ✅ ABOUT BUTTON (SCROLL) */}
          <div className=" w-full flex justify-center md:justify-start md:py-2">
            <a href="#about">
              <button
                className="flex items-center gap-3 p-4 border-2 md:w-48 shadow-[#0a0826] shadow-xl rounded-full 
                hover:bg-orange-500 bg-[#0a0826] mt-5 text-white font-semibold text-xl md:text-2xl"
              >
                <span>About Me</span>
                <FaLocationArrow />
              </button>
            </a>
          </div>

          {/* ✅ SOCIAL ICONS */}
          <div className=" flex flex-wrap justify-center md:justify-start gap-5 md:gap-8 mt-5">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="p-4 md:p-5 border-2 rounded-full shadow-[#0a0826] shadow-xl 
                  hover:bg-orange-500 bg-[#0a0826] text-white text-4xl cursor-pointer"
                >
                  {item.icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className=" md:w-1/2 flex justify-center mt-10 md:mt-15">
          <img
            className="h-72 w-72 md:h-120 md:w-120 object-cover shadow-xl rounded-full border-4 border-white/20"
            src="/P1.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
