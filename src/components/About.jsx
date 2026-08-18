"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, description, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
      className="w-full sm:w-[280px] bg-tertiary border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-[#915eff]/50 transition-all duration-300 shadow-xl group"
    >
      <div>
        <div className="w-14 h-14 rounded-2xl bg-[#915eff]/10 border border-[#915eff]/30 flex items-center justify-center mb-6 group-hover:bg-[#915eff] transition-all duration-300">
          <img
            src={icon}
            alt={title}
            loading="lazy"
            className="w-8 h-8 object-contain"
          />
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#915eff] transition">
          {title}
        </h3>

        <p className="text-secondary text-xs sm:text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Software Engineering Background</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-base sm:text-lg max-w-4xl leading-relaxed space-y-4"
      >
        <p>
          I'm a <strong className="text-white">Software Engineering student</strong> at Usman Institute of Technology and a dedicated <strong className="text-white">Full-Stack Developer</strong>. My focus is building robust, scalable web applications using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL.
        </p>
        <p>
          I enjoy working across the complete software development lifecycle — from designing intuitive, accessible frontends to architecting RESTful microservices, database schemas, authentication systems, and cloud deployments.
        </p>
        <p>
          Beyond freelance and client projects with Hydrafox Designs, I actively hone my engineering speed and problem-solving through tech hackathons (like ReImagine) and building practical tools (such as AI-powered ATS resume software and collaborative workspace tools). I am currently seeking full-time opportunities where I can contribute to high-impact products and collaborate with experienced engineering teams.
        </p>
      </motion.div>

      {/* Services / Core Capabilities */}
      <div className="mt-16 flex flex-wrap gap-6 justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
