import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { observer } from "mobx-react-lite";
import { motion } from "framer-motion";
import { activePillTransition } from "../../../animations";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Code2,
  Mail,
  Globe,
  Sun,
  Moon,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";

import { Tooltip } from "../../../components/ui/tooltip";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../../../components/ui/dropdown-menu";
import themeStore from "../../../stores/themeStore";

const navItems = [
  { id: "home", label: "navbar.home", icon: Home },
  { id: "about", label: "navbar.about", icon: User },
  { id: "experience", label: "navbar.experience", icon: Briefcase },
  { id: "projects", label: "navbar.project", icon: FolderGit2 },
  { id: "skills", label: "navbar.skill", icon: Code2 },
  { id: "contact", label: "navbar.contact", icon: Mail },
];

const HeaderNav = observer(() => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    isScrollingRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    const handleScrollEnd = () => {
      isScrollingRef.current = false;
      window.removeEventListener("scrollend", handleScrollEnd);
    };

    window.addEventListener("scrollend", handleScrollEnd, { once: true });

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      window.removeEventListener("scrollend", handleScrollEnd);
    }, 1000);
  };

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Floating Pill Header at Top Center */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl">
        <div className="flex items-center justify-between px-4 py-2 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-lg transition-all duration-300">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-2 font-extrabold text-sm text-foreground hover:opacity-80 transition-opacity cursor-pointer"
          >
            <img src="/logos/logo.svg" alt="NDH Logo" className="h-6 w-auto dark:invert transition-all" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-primary rounded-full shadow-sm"
                      transition={activePillTransition}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{t(item.label)}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons (Theme & Language Toggle) */}
          <div className="flex items-center gap-1">
            <Tooltip
              side="bottom"
              title={
                themeStore.theme === "light"
                  ? t("header.mode.dark")
                  : t("header.mode.light")
              }
            >
              <Button
                variant="icon"
                size="icon"
                onClick={() => themeStore.toggleTheme()}
                aria-label="Toggle theme"
                className="w-8 h-8 rounded-full"
              >
                {themeStore.theme === "light" ? (
                  <Moon className="w-4 h-4 text-foreground" />
                ) : (
                  <Sun className="w-4 h-4 text-yellow-400" />
                )}
              </Button>
            </Tooltip>

            <Tooltip side="bottom" title={t("header.language")}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="icon"
                    size="icon"
                    aria-label="Change language"
                    className="w-8 h-8 rounded-full"
                  >
                    <Globe className="w-4 h-4 text-[#2769c5]" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleChangeLanguage("vi")}>
                    <span className="fi fi-vn mr-2"></span>Tiếng Việt
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleChangeLanguage("en")}>
                    <span className="fi fi-us mr-2"></span>English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Tooltip>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="icon"
              size="icon"
              className="md:hidden w-8 h-8 rounded-full"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <MenuIcon className="w-5 h-5 text-foreground" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 bottom-0 w-64 bg-card text-card-foreground p-6 flex flex-col gap-4 shadow-xl transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <span className="font-bold text-sm text-foreground">Menu</span>
            <Button
              variant="icon"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <CloseIcon className="w-5 h-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{t(item.label)}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
});

export default HeaderNav;
