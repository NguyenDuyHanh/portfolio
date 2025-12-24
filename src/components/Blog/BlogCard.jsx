import { NavLink } from "react-router-dom";

const BlogCard = ({ imageSrc, to, date, title, minRead, content, tags }) => {
  return (
    <NavLink
      to={to}
      className="group flex flex-col rounded-2xl hover:-translate-y-1 hover:shadow-md dark:hover:shadow-sm dark:hover:shadow-gray-700 transition-transform duration-300 ease-in-out"
    >
      <div className="relative rounded-t-2xl overflow-hidden">
        <img src={imageSrc} alt="Blog Post" className="w-full h-full" />
        <div className="absolute top-4 left-4">
          <span className="py-1 px-3 rounded-full text-xs text-white bg-(--foreground) hover:bg-(--foreground-hover)">{tags}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 pt-5 pb-6 px-4 bg-(--bg-card) rounded-b-2xl">
        <div className="flex gap-3 text-(--text-secondary)">
          <span className="text-sm text-gray-500">{date}</span>
          <span className="text-sm text-gray-500">•</span>
          <span className="text-sm text-gray-500">{minRead} min read</span>
        </div>
        <h3 className="text-2xl font-semibold text-(--text-primary)">
          {title}
        </h3>
        <p className="text-base font-medium text-(--text-secondary) line-clamp-3">
          {content}
        </p>
      </div>
    </NavLink>
  );
};

export default BlogCard;
