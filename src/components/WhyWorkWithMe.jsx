import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { whyWorkWithMeData } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const WhyWorkWithMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Value & Strengths</p>
        <h2 className={styles.sectionHeadText}>Why Work With Me.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {whyWorkWithMeData.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            className="bg-tertiary p-6 rounded-2xl border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#915eff]/10 border border-[#915eff]/30 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:bg-[#915eff] transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#915eff] transition">
                {item.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(WhyWorkWithMe, "why-me");
