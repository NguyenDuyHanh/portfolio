import { useTranslation } from "react-i18next";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";

import Button from "./button/Button";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center gap-2 py-15 md:py-30">
      <h1 className="text-5xl md:text-8xl font-serif font-bold text-(--text-primary-light) dark:text-(--text-primary-dark) text-center">
        Hanh Nguyễn
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-2xl text-(--text-primary-light) dark:text-(--text-primary-dark) text-center">
        {t("hero.description")}
      </p>
      <p className="text-lg md:text-2xl text-(--text-primary-light) dark:text-(--text-primary-dark) text-center">
        {t("hero.welcome")}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-10">
        <Button name={t("hero.showcase")} />
        <div className="social flex gap-4">
          <Tooltip title="Facebook">
            <IconButton
              href="https://www.facebook.com/share/1ASxDcgsKX/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlinedIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Instagram">
            <IconButton
              href="https://www.instagram.com/_ndh_204?igsh=djBxbGNoajl5ejJo&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Tooltip>
          <Tooltip title="GitHub">
            <IconButton
              href="https://github.com/NguyenDuyHanh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default Hero;
