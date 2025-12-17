import { useState } from "react";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import Navbar from "./Navbar";
import themeStore from "../../../stores/themeStore";

const Header = observer(() => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <>
      {/* Header */}
      <div
        className={`flex justify-between items-center fixed top-0 right-0 left-0 z-50 h-(--height--header) bg-white text-black dark:bg-black dark:text-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] shadow-md`}
      >
        <NavLink to="/" className="text-xl font-semibold">
          NguyenDuyHanh.Dev
        </NavLink>
        <Navbar />
        <div className="flex gap-4">
          <Tooltip
            title={themeStore.theme === "light" ? "Dark Mode" : "Light Mode"}
          >
            <IconButton onClick={() => themeStore.toggleTheme()}>
              {themeStore.theme === "light" ? (
                <DarkModeIcon fontSize="small" className="text-gray-800" />
              ) : (
                <LightModeIcon fontSize="small" className="text-yellow-400" />
              )}
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
            <MenuIcon fontSize="medium" className="text-black dark:text-white"/>
          </IconButton>
        </div>
      </div>

      {/* menu for mobile */}
      <div
        className={`fixed inset-0 h-full bg-white dark:bg-black transition-transform duration-300 ease-in-out md:hidden ${
          visibleMenu ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="mobile-menu flex flex-col font-medium text-black dark:text-white">
          <div className="flex items-center justify-between p-2 border-b border-gray-300">
            <h2 className="text-black dark:text-white">Menu</h2>
            <IconButton onClick={() => setVisibleMenu(false)}>
              <CloseIcon fontSize="medium" className="text-black dark:text-white" />
            </IconButton>
          </div>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/about"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/blog"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/project"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            Project
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/contact"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
});

export default Header;
