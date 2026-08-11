import React from "react";
import BilalCV from "../assets/CV/BilalAhmed_CV.pdf";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#03050e] border-t border-white/10 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-xl font-extrabold text-white">
            Bilal <span className="text-[#915eff]">Ahmed</span>
          </span>
          <p className="text-secondary text-sm mt-1">
            Full-Stack Developer building modern web applications.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-secondary">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#education" className="hover:text-white transition">Education</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a
            href={BilalCV}
            download
            className="text-[#915eff] font-semibold hover:underline"
          >
            Resume PDF
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          <p>© {currentYear} Bilal Ahmed. All rights reserved.</p>
          <p className="mt-0.5">Built with React, Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
