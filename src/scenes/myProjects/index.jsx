import LineGradient from "../../components/LineGradient";
import { motion } from "framer-motion";
import { Project } from "./Project";
import { projects } from "./data";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">PROJECTS</p>
          <div className="flex justify-center mt-5 mb-10">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {projects.map(
            ({ title, description, image, link, sourceCode, techStack }) => (
              <Project
                title={title}
                image={image}
                link={link}
                sourceCode={sourceCode}
                techStack={techStack}
                description={description}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
