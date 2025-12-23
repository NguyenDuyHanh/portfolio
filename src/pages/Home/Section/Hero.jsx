import { useTranslation } from "react-i18next";

import Social from "../../../components/Social";
import Button from "../../../components/Button/Button.jsx";

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
        <Social />
      </div>
    </section>
  );
};

export default Hero;
