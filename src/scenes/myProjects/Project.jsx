import { motion } from "framer-motion";
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export const Project = ({ title, sourceCode, image, link, techStack }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  return (
    <motion.div variants={projectVariant} className="relative h-[335px] m-1">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="text-md font-semibold">Tech Stack</p>
        <ul className="flex justify-center flex-col">
          {techStack.map((el, i) => (
            <li key={`${el}-${i}`}>{el}</li>
          ))}
        </ul>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-red hover:text-yellow mt-10"
          >
            link to website
          </a>
        )}
        <a
          href={sourceCode}
          target="_blank"
          rel="noreferrer"
          className={`text-red hover:text-yellow ${!link ? "mt-10" : ""}`}
        >
          link to source code
        </a>
      </div>
      <img src={image} alt={title} className="w-full h-full" />
    </motion.div>
  );
};
