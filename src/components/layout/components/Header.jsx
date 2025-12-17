import { useState } from "react";
import * as React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { observer } from "mobx-react-lite";
import { NavLink } from "react-router-dom";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import TranslateIcon from "@mui/icons-material/Translate";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Navbar from "./Navbar";
import themeStore from "../../../stores/themeStore";

const Header = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setAnchorEl(null);
  }

  const { t } = useTranslation();

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
            title={
              themeStore.theme === "light"
                ? t("header.mode.dark")
                : t("header.mode.light")
            }
          >
            <IconButton onClick={() => themeStore.toggleTheme()}>
              {themeStore.theme === "light" ? (
                <DarkModeIcon fontSize="small" className="text-gray-800" />
              ) : (
                <LightModeIcon fontSize="small" className="text-yellow-400" />
              )}
            </IconButton>
          </Tooltip>

          <Tooltip title="Language" placement="right">
            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <TranslateIcon fontSize="small" sx={{ color: "#2769c5" }} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={() => handleChangeLanguage("vn")}>
                <span className="fi fi-vn mr-2"></span>Tiếng Việt
              </MenuItem>
              <MenuItem onClick={() => handleChangeLanguage("en")}>
                <span className="fi fi-us mr-2"></span>English
              </MenuItem>
            </Menu>
          </Tooltip>
          <IconButton
            className="block md:hidden!"
            onClick={() => setVisibleMenu(true)}
          >
            <MenuIcon
              fontSize="medium"
              className="text-black dark:text-white"
            />
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
              <CloseIcon
                fontSize="medium"
                className="text-black dark:text-white"
              />
            </IconButton>
          </div>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
             {t('navbar.home')}
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/about"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            {t('navbar.about')}
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/blog"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            {t('navbar.blog')}
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/project"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            {t('navbar.project')}
          </NavLink>
          <NavLink
            onClick={() => setVisibleMenu(false)}
            to="/contact"
            className="py-3 px-5 text-base border-b border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500"
          >
            {t('navbar.contact')}
          </NavLink>
        </div>
      </div>
    </>
  );
});

export default Header;
