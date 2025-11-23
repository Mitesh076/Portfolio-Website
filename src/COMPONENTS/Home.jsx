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

function HOME() {
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
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full min-h-screen flex items-center pt-28 md:pt-0"
    >
      <div className="w-full flex flex-col md:flex-row  md:p-20 px-5">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 md:ml-10 text-center md:mt-30 md:text-left">
          <h1 className="font-bold text-4xl md:text-7xl text-white mt-3">
            Hi, I am
          </h1>

          <h1 className="font-bold text-4xl md:text-7xl text-orange-400 mt-3">
            Mitesh Bharvad
          </h1>

          <h1 className="font-bold text-3xl md:text-5xl text-white mt-3">
            I am a <span ref={typedRef} className="text-red-400"></span>
          </h1>

          {/* ABOUT BUTTON */}
          <div className="w-full flex justify-center md:justify-start md:py-2">
            <button
              className="flex items-center gap-3 p-4 border-2 md:w-48 shadow-blue-600 shadow-xl rounded-full 
              hover:bg-blue-600 bg-blue-800 mt-5 text-white font-semibold text-xl md:text-2xl"
            >
              <span>About Me</span>
              <FaLocationArrow />
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="w-full flex flex-wrap justify-center md:justify-start gap-5 md:gap-8 mt-5">
            {[
              <FaGithubSquare />,
              <IoLogoLinkedin />,
              <IoMdMailUnread />,
              <FaFacebookSquare />,
              <FaInstagram />,
            ].map((Icon, index) => (
              <div
                key={index}
                className="p-4 md:p-5 border-2 rounded-full shadow-blue-600 shadow-xl 
                hover:bg-blue-600 bg-blue-800 text-white text-4xl md:text-6xl"
              >
                {Icon}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-15">
          <img
            className="h-72 w-72 md:h-160 md:w-160 object-cover shadow-xl rounded-full border-4 border-white/20"
            src="/src/IMAGES/P1.jpg"
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
}

export default HOME;
