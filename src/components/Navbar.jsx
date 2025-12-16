import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const base = "text-base py-1 px-2.5 cursor-pointer rounded-full transition-colors duration-500 ease-in-out";
  return (
    <div className="nav-bar hidden md:flex gap-10">
      <NavLink
        to="/"
        className={base}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={base}
      >
        About
      </NavLink>
      <NavLink
        to="/blog"
        className={base}
      >
        Blog
      </NavLink>
      <NavLink
        to="/project"
        className={base}
      >
        Project
      </NavLink>
      <NavLink
        to="/contact"
        className={base}
      >
        Contact
      </NavLink>
    </div>
  );
};

export default Navbar;
