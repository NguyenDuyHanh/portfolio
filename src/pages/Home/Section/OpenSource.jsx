import { useTranslation } from "react-i18next";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import RepoItem from "../../../components/RepoItem";


const repos = [
  {
    name: "online-guestbook",
    description:
      "Đây là phiên bản Lưu bút Online hiện đại, được viết lại bằng Next.js 16 (App Router)...",
    language: "JavaScript",
    stars: 36,
    forks: 13,
    href: "https://github.com/username/online-guestbook",
  },
  {
    name: "autoparking-server",
    description:
      "A smart parking system using ESP32, React, and Node.js that enables automatic parking...",
    language: "JavaScript",
    stars: 5,
    forks: 1,
    href: "https://github.com/username/autoparking-server",
  },
  {
    name: "prismo-photo",
    description: "An online photobooth",
    language: "JavaScript",
    stars: 5,
    forks: 1,
    href: "https://github.com/username/prismo-photo",
  },
];

const OpenSource = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-10 md:mt-30 pt-20">
      <h2 className="mb-15 md:mb-25 flex items-center justify-center gap-3 text-4xl font-semibold text-(--text-primary-light) dark:text-(--text-primary-dark)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="lucide lucide-github h-10 w-10"
          aria-hidden="true"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
        {t("openSource.title")}
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((repo, index) => (
          <RepoItem key={index} {...repo} />
        ))}
      </div>

      <div className="mt-10 md:mt-20 flex justify-center">
        <a
          href="https://github.com/NguyenDuyHanh"
          target="_blank"
          className="
            flex items-center gap-2 rounded-lg
            border border-(--border-color-light) dark:border-(--border-color-dark) px-6 py-3
            text-base text-(--text-primary-light) dark:text-(--text-primary-dark)
            bg-(--bg-light) dark:bg-(--bg-dark)
            hover:opacity-80 transition-opacity duration-300
          "
        >
          <span>{t("openSource.view_all")}</span> 
          <ArrowBackIcon className="rotate-180" />
        </a>
      </div>
    </section>
  );
};

export default OpenSource;
