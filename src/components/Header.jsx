import { useState } from "react";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  return (
    <>
      {/* Header */}
      <div
        className={`flex justify-between items-center fixed top-0 right-0 left-0 z-50 h-(--height--header) bg-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow-md`}
      >
        <NavLink to="/" className="text-xl font-semibold">
          NguyenDuyHanh.Dev
        </NavLink>
        <Navbar />
        <div className="flex gap-4">
          {/* <Tooltip title="Light Mode">
          <IconButton aria-label="delete">
            <LightModeIcon sx={{ color: "#facc15" }} />
          </IconButton>
        </Tooltip> */}
          <Tooltip title="Dark Mode">
            <IconButton>
              <DarkModeIcon fontSize="small" sx={{ color: "#000" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Language">
            <IconButton>
              <TranslateIcon fontSize="small" sx={{ color: "#2769c5" }} />
            </IconButton>
          </Tooltip>
          <IconButton
            className="block md:hidden!"
            onClick={() => setVisibleMenu(true)}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
      {/* menu for mobile */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-300 ease-in-out md:hidden ${
          visibleMenu ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="mobile-menu flex flex-col text-gray-600 font-medium">
          <div className="flex items-center justify-between p-2 border-b border-gray-300">
            <h2 className="text-black">Menu</h2>
            <IconButton onClick={() => setVisibleMenu(false)}>
              <CloseIcon fontSize="medium" sx={{ color: "#000" }} />
            </IconButton>
          </div>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/"
            className="py-3 px-5 text-base text-black border-b border-gray-300 hover:bg-gray-100"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/about"
            className="py-3 px-5 text-base text-black border-b border-gray-300 hover:bg-gray-100"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/blog"
            className="py-3 px-5 text-base text-black border-b border-gray-300 hover:bg-gray-100"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/project"
            className="py-3 px-5 text-base text-black border-b border-gray-300 hover:bg-gray-100"
          >
            Project
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/contact"
            className="py-3 px-5 text-base text-black border-b border-gray-300 hover:bg-gray-100"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
