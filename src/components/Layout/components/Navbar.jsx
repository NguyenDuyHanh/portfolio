import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

  const base = "text-base py-1 px-2.5 cursor-pointer rounded-full transition-colors duration-500 ease-in-out";
  return (
    <div className="nav-bar hidden md:flex gap-10">
      <NavLink
        to="/"
        className={base}
      >
        {t('navbar.home')}
      </NavLink>
      <NavLink
        to="/about"
        className={base}
      >
         {t('navbar.about')}
      </NavLink>
      <NavLink
        to="/blog"
        className={base}
      >
        {t('navbar.blog')}
      </NavLink>
      <NavLink
        to="/project"
        className={base}
      >
        {t('navbar.project')}
      </NavLink>
      <NavLink
        to="/contact"
        className={base}
      >
        {t('navbar.contact')}
      </NavLink>
    </div>
  );
};

export default Navbar;
