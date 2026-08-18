"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const FeaturedProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-tertiary border border-white/10 rounded-3xl overflow-hidden hover:border-[#915eff]/50 transition-all duration-300 shadow-2xl flex flex-col lg:flex-row group"
    >
      {/* Screenshot / Preview */}
      <div className="lg:w-1/2 relative overflow-hidden bg-black-100 min-h-[260px] sm:min-h-[320px]">
        <img
          src={typeof project.image === "string" ? project.image : project.image?.src || project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tertiary via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-tertiary opacity-90 lg:opacity-60" />

        <div className="absolute top-4 left-4 z-10 flex gap-2">
          {project.featured && (
            <span className="px-3 py-1 bg-[#915eff] text-white text-xs font-bold rounded-full shadow">
              Featured
            </span>
          )}
          <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-white text-xs font-medium rounded-full border border-white/20">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#915eff] transition-colors">
            {project.name}
          </h3>
          <p className="text-sm font-semibold text-[#915eff] mt-1 mb-3">
            {project.tagline}
          </p>

          <p className="text-secondary text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Features List */}
          {project.keyFeatures && (
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-wider text-white font-bold">Key Engineering Highlights:</p>
              <ul className="space-y-1.5">
                {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                    <span className="text-[#915eff] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                className="px-2.5 py-1 text-xs font-medium bg-black-100 text-gray-300 rounded-md border border-white/5"
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
          {project.case_study_link && (
            <Link
              href={project.case_study_link}
              className="px-4 py-2.5 rounded-xl bg-[#915eff] hover:bg-[#7b4fe0] text-white text-xs font-bold transition shadow-md shadow-[#915eff]/30"
            >
              Case Study Page 📖
            </Link>
          )}

          {project.live_website_link && (
            <a
              href={project.live_website_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition"
            >
              Live Demo ↗
            </a>
          )}

          {project.source_code_link && (
            <a
              href={project.source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl border border-white/20 hover:border-white/40 text-gray-300 hover:text-white text-xs font-semibold transition"
            >
              GitHub 💻
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const StandardProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="bg-tertiary border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#915eff]/50 transition-all duration-300 group shadow-lg"
    >
      <div>
        <div className="relative w-full h-[180px] rounded-xl overflow-hidden mb-4 bg-black-100">
          <img
            src={typeof project.image === "string" ? project.image : project.image?.src || project.image}
            alt={project.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-0.5 bg-black/70 backdrop-blur-md text-white text-[11px] font-medium rounded-full border border-white/20">
              {project.category}
            </span>
          </div>
        </div>

        <h4 className="text-xl font-bold text-white group-hover:text-[#915eff] transition">
          {project.name}
        </h4>
        <p className="text-xs font-semibold text-[#915eff] mt-0.5 mb-2">
          {project.tagline}
        </p>

        <p className="text-secondary text-xs sm:text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className="px-2 py-0.5 text-[11px] bg-black-100 text-gray-300 rounded"
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/10">
        {project.case_study_link && (
          <Link
            href={project.case_study_link}
            className="px-3 py-1.5 rounded-lg bg-[#915eff] text-white text-xs font-semibold hover:bg-[#7b4fe0] transition"
          >
            Case Study
          </Link>
        )}
        {project.live_website_link && (
          <a
            href={project.live_website_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition"
          >
            Live Demo ↗
          </a>
        )}
        {project.source_code_link && (
          <a
            href={project.source_code_link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-white/20 text-gray-300 hover:text-white text-xs font-medium transition"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "AI", "Frontend"];

  // Filter projects by selected category
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === filter.toLowerCase());

  const featuredList = filteredProjects.filter((p) => p.featured);
  const secondaryList = filteredProjects.filter((p) => !p.featured);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Real-World Applications</p>
        <h2 className={styles.sectionHeadText}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mt-3 mb-10">
        <p className="text-secondary text-base max-w-3xl leading-relaxed">
          Production-grade applications built with React, Next.js, Node.js, databases, and AI APIs. Click the filter buttons to explore by domain.
        </p>

        {/* Filter Buttons (Default Selected: All) */}
        <div className="flex flex-wrap gap-2 shrink-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                filter === cat
                  ? "bg-[#915eff] text-white shadow-lg shadow-[#915eff]/40 scale-105"
                  : "bg-tertiary border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
              }`}
            >
              {cat} {filter === cat && "✓"}
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Projects Presentation */}
      <AnimatePresence mode="wait">
        <div key={filter} className="space-y-12">
          {/* Main / Featured Project Cards */}
          {featuredList.length > 0 && (
            <div className="space-y-10">
              {featuredList.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          )}

          {/* Secondary Cards / Grid view */}
          {secondaryList.length > 0 && (
            <div className={featuredList.length > 0 ? "mt-12" : ""}>
              {filter === "All" && (
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                  More Projects
                </h3>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryList.map((project, index) => (
                  <StandardProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center text-secondary bg-tertiary rounded-2xl border border-white/10">
              <p className="text-lg font-semibold">No projects found for "{filter}".</p>
              <button
                onClick={() => setFilter("All")}
                className="mt-4 px-4 py-2 bg-[#915eff] text-white text-xs font-bold rounded-xl"
              >
                Reset to All
              </button>
            </div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
