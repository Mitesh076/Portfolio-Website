import React from "react";
import Navbar from "./COMPONENTS/Navbar";

import About from "./COMPONENTS/About";
import Home from "./COMPONENTS/Home";
import Skills from "./COMPONENTS/Skills";
import Education from "./COMPONENTS/Education";
import Projects from "./COMPONENTS/Projects";
import Experience from "./COMPONENTS/Experience";
import Contact from "./COMPONENTS/Contact";
import Footer from "./COMPONENTS/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
