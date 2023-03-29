import React from "react";
import LineGradient from "../../components/LineGradient";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import Skill from "./Skill";

const skills = [
  "Javascript",
  "Node",
  "TypeScript",
  "Java",
  "React",
  "Redux",
  "Context API",
  "React Hooks",
  "HTML5",
  "CSS3",
  "Sass",
  "Less",
  "Git",
  "Material UI",
  "Bootstrap",
  "Recharts",
  "SQL",
  "NoSQL",
  "Selenium",
  "Cucumber",
  "Jest",
  "Unit Testing",
  "OOP",
  "Postman",
  "Firebase",
  "REST API",
  "JSON",
  "Frontend",
  "Backend",
  "Responsive Web Design",
  "MongoDB",
  "Express",
  "GitHub",
  "CI/CD",
  "Jenkins",
  "NPM",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">MY SKILLS</p>
          <LineGradient width="w-1/2" />
          <p className="mt-10 mb-7"></p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-white before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/technical-skills.png"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="md:flex md:justify-start mt-10 gap-5 flex flex-wrap"
      >
        {/* EXPERIENCE */}

        {skills.map((skill) => (
          <Skill skill={skill} key={skill} />
        ))}
      </motion.ul>
    </section>
  );
};

export default MySkills;

// ● Javascript | Node | TypeScript | Java | React | Redux | Context API | React Hooks | HTML5 | CSS3 | Sass | Less | Git
// ● Material UI | Bootstrap | Recharts | SQL | NoSQL | Selenium | Cucumber | Jest | Unit Testing | OOP | Postman | Firebase ● REST API | JSON | Frontend | Responsive Web Design | MongoDB | Express.js | GitHub | CI/CD | Jenkins | NPM
