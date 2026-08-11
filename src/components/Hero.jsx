import React from "react";
import { motion } from "framer-motion";
import ProfilePicture from "../assets/Pictures/myPicture.png";
import BilalCV from "../assets/CV/BilalAhmed_CV.pdf";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen pt-28 pb-16 mx-auto flex items-center justify-center bg-[#050816] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#915eff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline & Intro */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#915eff]/10 border border-[#915eff]/30 text-xs font-semibold text-[#915eff] mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Open to Full-Time Opportunities</span>
          </div>

          {/* Name & Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-4">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915eff] via-purple-400 to-indigo-400">Bilal Ahmed</span>
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-gray-200 mb-4 leading-snug">
            Full-Stack Developer building modern web applications with React, Next.js & Node.js.
          </p>

          <p className="text-secondary text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            I build responsive, scalable web applications with modern frontend technologies, robust backend APIs, database integration, authentication, and AI-powered features.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl bg-[#915eff] hover:bg-[#7b4fe0] text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#915eff]/30 hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <span>↓</span>
            </a>

            <a
              href={BilalCV}
              download
              className="px-6 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-all duration-200 hover:border-white/40 flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://github.com/Bilal-Ahmed35"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-tertiary border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#915eff] hover:bg-[#915eff]/20 transition-all"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.38.81 1.12.81 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/bilalshah34/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-tertiary border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#915eff] hover:bg-[#915eff]/20 transition-all"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.11h4.4V24H.3V8.11zM8.59 8.11h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24h-4.4V8.11z" />
              </svg>
            </a>

            <a
              href="mailto:bilalahmedshah35@gmail.com"
              className="w-10 h-10 rounded-xl bg-tertiary border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-[#915eff] hover:bg-[#915eff]/20 transition-all"
              title="Email"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13 22 6.01V6H2zm0 12h20V9l-10 7L2 9v9z" />
              </svg>
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-6 border-t border-white/10 w-full">
            <p className="text-xs uppercase tracking-wider text-secondary font-semibold mb-3">
              Core Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-semibold bg-tertiary border border-white/10 text-gray-300 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Profile Showcase Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-3xl p-1 bg-gradient-to-b from-[#915eff] via-purple-600 to-indigo-900 shadow-2xl shadow-[#915eff]/20">
            <div className="w-full h-full rounded-[23px] overflow-hidden bg-[#050816] relative flex flex-col justify-end">
              <img
                src={ProfilePicture}
                alt="Bilal Ahmed - Full-Stack Developer"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent" />
              <div className="relative z-10 p-6">
                <span className="px-2.5 py-1 text-[11px] font-bold bg-[#915eff] text-white rounded uppercase tracking-wider">
                  Software Engineer
                </span>
                <h3 className="text-xl font-bold text-white mt-2">Bilal Ahmed</h3>
                <p className="text-xs text-secondary mt-0.5">
                  React • Next.js • Node.js • MERN Stack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center">
        <a href="#projects" className="flex flex-col items-center gap-2 text-xs text-secondary hover:text-white transition">
          <span>Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2 h-2 rounded-full bg-[#915eff]"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
