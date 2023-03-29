import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/baiastan-zhuzupbekov/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin className="text-4xl" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://leetcode.com/baystan196/"
        target="_blank"
        rel="noreferrer"
      >
        <SiLeetcode className="text-2xl mt-1" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Baiastan"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="text-3xl mt-1" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
