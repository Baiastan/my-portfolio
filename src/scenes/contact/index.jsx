import React from "react";
import LineGradient from "../../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="contact" className="py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        className="flex justify-end w-full"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/* xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px", */}
        <div>
          <p className="font-playfair font-semibold text-center text-4xl text-white">CONTACT ME FOR MORE INFORMATION</p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="mx-auto w-2/4" />
          </div>
        </div>
      </motion.div>
      {/* FORM AND IMAGE */}
      <div className="md:flex md:justify-between gap-16 mt-5">
        {isAboveMediumScreens ? (
          <motion.div
            className="basis-1/2 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div
              className="relative z-0 ml-20 before:absolute before:-top-8 before:-left-8
            before:w-full before:h-full before:border-2 before:border-white before:z-[-1]"
            >
              <img src="../../assets/contact.jpg" className="h-[345px]" alt="contact" />
            </div>
          </motion.div>
        ) : (
          <></>
        )}
        <motion.div
          initial="hidden"
          className="basis-1/2 mt-10 md:mt-0"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        ></motion.div>
      </div>
    </section>
  );
};

export default Contact;
