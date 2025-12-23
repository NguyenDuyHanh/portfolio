import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CopyrightIcon from "@mui/icons-material/Copyright";

import Social from "../../Social";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="px-4 pt-20 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-(--bg-light) dark:bg-(--bg-dark) border-t-[0.5px] border-(--border-color-light) dark:border-(--border-color-dark)">
      <div className="flex flex-col">
        <div className="flex flex-col pb-15 md:flex-row justify-between gap-10 md:gap-0 border-b-[0.5px] border-(--border-color-light) dark:border-(--border-color-dark)">
          <div className="flex flex-col">
            <NavLink
              to="/"
              className="text-2xl font-semibold text-(--text-primary-light) dark:text-(--text-primary-dark)"
            >
              NguyenDuyHanh.Dev
            </NavLink>
            <div className="text-xl font-semibold mt-4 mb-1 text-(--text-primary-light) dark:text-(--text-primary-dark)">
              {t("footer.professional_summary.title")}
            </div>
            <p className="mb-5 md:mb-8 max-w-xl font-medium text-lg text-(--text-secondary-light) dark:text-(--text-secondary-dark)">
              {t("footer.professional_summary.description")}
            </p>
            <Social />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl text-(--text-primary-light) dark:text-(--text-primary-dark)">
              {t("footer.explore.title")}
            </p>
            <div className="flex flex-col gap-4 text-lg text-(--text-secondary-light) dark:text-(--text-secondary-dark) mt-5 cursor-pointer">
              <NavLink to="/project">{t("footer.explore.project")}</NavLink>
              <NavLink to="/blog">{t("footer.explore.blog")}</NavLink>
              <NavLink to="/about">{t("footer.explore.about_me")}</NavLink>
              <NavLink to="/showcase">{t("footer.explore.showcase")}</NavLink>
            </div>
          </div>
          <div>
            <p className="font-semibold text-xl text-(--text-primary-light) dark:text-(--text-primary-dark)">
              {t("footer.connect.title")}
            </p>
            <div className="flex flex-col gap-4 text-lg text-(--text-secondary-light) dark:text-(--text-secondary-dark) mt-5 cursor-pointer">
              <NavLink to="/contact">{t("footer.connect.contact")}</NavLink>
              <NavLink to="/resume">{t("footer.connect.resume")}</NavLink>
              <NavLink to="/">{t("footer.connect.email")}</NavLink>
            </div>
          </div>
        </div>
        <div className="text-center py-6 text-(--text-primary-light) dark:text-(--text-primary-dark)">
            <CopyrightIcon />
            2025 - {t("footer.copyright.reserved")} NguyenDuyHanh.Dev -{" "}
            {t("footer.copyright.distributed")} Nguyen Duy Hanh
        </div>
      </div>
    </footer>
  );
};

export default Footer;
