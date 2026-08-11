import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { educationData } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Academic Background</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-8 max-w-4xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="bg-tertiary p-8 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-[#915eff]/50 transition-all duration-300 shadow-xl"
          >
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#915eff] to-violet-600" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div>
                <span className="px-3 py-1 bg-[#915eff]/10 text-[#915eff] text-xs font-bold rounded-full uppercase tracking-wider border border-[#915eff]/30">
                  Degree Program
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {edu.degree}
                </h3>
                <p className="text-secondary text-base font-medium mt-1">
                  📍 {edu.institution}
                </p>
              </div>

              <div className="md:text-right">
                <span className="inline-block px-4 py-2 bg-black-100/80 text-white font-mono text-sm font-semibold rounded-xl border border-white/10">
                  {edu.period}
                </span>
              </div>
            </div>

            <p className="text-secondary text-base leading-relaxed mb-6">
              {edu.description}
            </p>

            {edu.highlights && (
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Key Academic Highlights:
                </h4>
                <ul className="space-y-2">
                  {edu.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-[#915eff] font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
