import React from "react";
import SocialMediaIcons from "../../components/SocialMediaIcons";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="h-30 bg-red pt-10 pb-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Baiastan Zhuzupbekov
          </p>
          <p className="font-playfair text-md text-yellow">
            {`©${year} Zhuz. All Rights Reserved`}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
