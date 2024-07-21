import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My skillset</p>
        <h2 className={`${styles.sectionHeadText}`}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-around gap-10">
        {technologies.map((technology) => (
          <div className="w-48 h-48" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
