import React from "react";
import { Link } from "./Link";

const NavLinks = ({ links, selectedPage, setSelectedPage }) => {
  return (
    <>
      {links.map((link, index) => (
        <Link
          key={`${index}-link`}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          page={link}
        />
      ))}
    </>
  );
};

export default NavLinks;
