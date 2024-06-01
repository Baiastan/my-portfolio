import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">
      {/* IMAGE SECION */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div
            className="w-[400px] relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
          before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-white before:z-[-1]"
          >
            <img
              alt="profile"
              src="assets/my-photo.jpg"
              className="z-10 w-full border-1 rounded-t-[200px]
              max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="assets/my-photo.jpg"
            className="z-10 w-full border-1
          max-w-[400px] md:max-w-[600px]"
          />
        )}
      </div>
      {/* MAIN SECTION */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Baiastan {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[25px]
              before:-top-[120px] before:z-[-1]"
            >
              Zhuz
            </span>
          </p>
          <p className="mt-10 mb-7 text-l text-center md:text-start">
            Experienced Software Engineer with over 5 years of demonstrated history in developing diverse web
            applications. Skilled in collaborating with fast-paced teams focused on quick turnarounds.
          </p>
        </motion.div>
        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <a
            href="https://calendly.com/baiastan-zhuzupbekov/15-min-phone-call"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue
             hover:text-yellow transition duration-500"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
