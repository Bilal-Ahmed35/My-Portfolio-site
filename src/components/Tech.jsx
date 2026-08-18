"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "All"
      ? skillCategories
      : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Proficiency</p>
        <h2 className={styles.sectionHeadText}>Skills & Technologies.</h2>
      </motion.div>

      <p className="mt-3 text-secondary text-base max-w-3xl leading-relaxed mb-8">
        Proven experience building production applications using modern web
        stacks, REST APIs, database systems, and AI APIs. Filter by domain to
        view specific technical capabilities.
      </p>

      {/* Category Tabs (Default Selected: All) */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeCategory === cat
                ? "bg-[#915eff] text-white shadow-lg shadow-[#915eff]/40 scale-105"
                : "bg-tertiary border border-white/10 text-gray-400 hover:text-white hover:border-white/30"
            }`}
          >
            {cat} {activeCategory === cat && "✓"}
          </button>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <AnimatePresence mode="wait">
        <div
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayedCategories.map((catGroup, idx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="bg-tertiary border border-white/10 p-6 rounded-2xl flex flex-col justify-between hover:border-[#915eff]/50 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-[#915eff]" />
                    <h3 className="text-xl font-bold text-white">
                      {catGroup.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#915eff] bg-[#915eff]/10 px-2.5 py-1 rounded-full border border-[#915eff]/30">
                    {catGroup.skills.length} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  {catGroup.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 bg-black-100/80 border border-white/10 rounded-xl hover:border-[#915eff] hover:bg-black-100 transition-all duration-200 group shadow-md"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={`${skill.name} icon`}
                          className="w-5 h-5 object-contain group-hover:scale-110 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#915eff]" />
                      )}
                      <span className="text-xs font-semibold text-gray-200 group-hover:text-white">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
