import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import Social from "../../../components/Social";
import Button from "../../../components/Button/Button.jsx";

const Hero = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center gap-2 pt-10 py-15 md:pt-5 md:pb-30">
      <h1 className="text-5xl md:text-8xl font-serif font-bold text-(--text-primary) text-center">
        Hanh Nguyễn
      </h1>
      <p className="mt-4 max-w-2xl text-lg md:text-2xl text-(--text-primary) text-center">
        {t("hero.description")}
      </p>
      <p className="text-lg md:text-2xl text-(--text-primary) text-center">
        {t("hero.welcome")}
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mt-10">
        <Button name={t("hero.showcase")} onClick={() => navigate({pathname: "/showcase"})} />
        <Social />
      </div>
    </section>
  );
};

export default Hero;
