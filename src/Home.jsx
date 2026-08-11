import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Tech from "./components/Tech";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <div className="relative z-0 bg-[#050816] text-white overflow-x-hidden selection:bg-[#915eff] selection:text-white">
      <Navbar />
      <Hero />
      <Works />
      <Tech />
      <WhyWorkWithMe />
      <About />
      <Education />
      <Experience />
      <div className="relative z-0">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
