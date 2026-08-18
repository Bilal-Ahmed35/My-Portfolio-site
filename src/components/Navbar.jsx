"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const BilalCV = "/CV/BilalAhmed_CV.pdf";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-md border-b border-white/10 shadow-lg py-2.5"
          : "bg-gradient-to-b from-[#050816]/90 to-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            src={logo}
            alt="Bilal Ahmed Logo"
            width={48}
            height={48}
            className="w-12 h-12 object-contain group-hover:scale-105 transition-transform"
          />
          <div className="w-[1.5px] h-7 bg-white/30"></div>
          <div className="flex flex-col leading-tight">
            <span className="text-white text-[17px] font-extrabold tracking-wide">
              Bilal <span className="text-[#915eff]">Ahmed</span>
            </span>
            <span className="text-secondary text-[11px] font-medium tracking-wider uppercase">
              Full-Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-white font-semibold"
                    : "text-gray-400"
                } hover:text-white text-[15px] font-medium transition-colors cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 border-l border-white/10 pl-6">
            <a
              href="https://github.com/Bilal-Ahmed35"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition p-1.5 rounded-lg hover:bg-white/5"
              title="GitHub Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.06.14 3.02.4 2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.87.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.38.81 1.12.81 2.26 0 1.63-.02 2.95-.02 3.35 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/bilalshah34/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition p-1.5 rounded-lg hover:bg-white/5"
              title="LinkedIn Profile"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.3 8.11h4.4V24H.3V8.11zM8.59 8.11h4.22v2.16h.06c.59-1.12 2.03-2.3 4.18-2.3 4.47 0 5.29 2.94 5.29 6.76V24h-4.4v-7.3c0-1.74-.03-3.98-2.43-3.98-2.43 0-2.8 1.9-2.8 3.86V24h-4.4V8.11z" />
              </svg>
            </a>

            <a
              href={BilalCV}
              download
              className="px-4 py-2 rounded-xl bg-[#915eff] hover:bg-[#7b4fe0] text-xs font-semibold text-white transition-all shadow-md shadow-[#915eff]/30 border border-[#915eff]"
            >
              Resume PDF
            </a>
          </div>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={BilalCV}
            download
            className="px-3 py-1.5 rounded-lg bg-[#915eff] text-xs font-semibold text-white transition"
          >
            Resume
          </a>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-tertiary border border-white/10"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-4/5 sm:w-2/3 bg-[#050816] border-l border-white/10 shadow-2xl transition-transform duration-300 z-50 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6 justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-white font-extrabold text-lg">Menu</span>
              <button
                onClick={() => setToggle(false)}
                className="p-2 rounded-lg bg-tertiary"
              >
                <img src={close} alt="close" className="w-5 h-5" />
              </button>
            </div>

            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(false);
                  }}
                  className="text-lg text-gray-300 hover:text-white font-medium cursor-pointer transition-all"
                >
                  <a href={`#${link.id}`} className="block w-full">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-white/10 pt-6 space-y-4">
            <a
              href={BilalCV}
              download
              className="w-full py-3 rounded-xl bg-[#915eff] text-white font-semibold text-center block text-sm shadow-md"
            >
              Download Resume
            </a>
            <div className="flex justify-center gap-6 text-gray-400">
              <a
                href="https://github.com/Bilal-Ahmed35"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bilalshah34/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href="mailto:bilalahmedshah35@gmail.com"
                className="hover:text-white"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
