import React from "react";
import { motion } from "framer-motion";
import "./Skill.css";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skill = ({ skill }) => {
  return (
    <motion.li variants={projectVariant}>
      <p className="font-playfair hover:scale-110 transition duration-500 custom-class">
        {skill}
      </p>
    </motion.li>
  );
};

export default Skill;

// display: inline-block;
//     padding: 8px 5px;
//     background-color: #313131;
//     color: #999;
//     border-width: 1px 1px 2px 1px;
//     border-style: solid;
//     border-color: #222;
//     border-radius: 3px;
//     text-transform: uppercase;
//     font-family: MontSerrat,Tahoma,Arial,sans-serif;
//     font-weight: 700;
//     font-size: .75em;
//     line-height: 1em;
//     box-shadow: 1px 1px 0 rgba(0,0,0,.25);
//     margin: 3px;
//     opacity: 1;
//     cursor: pointer;
//     position: relative;
//     overflow: hidden;
// }
