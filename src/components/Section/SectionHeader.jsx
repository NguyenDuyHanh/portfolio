import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SectionHeader = ({
  title,
  actionText,
  actionTo,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-serif text-4xl font-bold text-(--text-primary-light) dark:text-(--text-primary-dark)">
        {title}
      </h2>

      {actionText && actionTo && (
        <NavLink
          to={actionTo}
          className="flex items-center justify-center gap-1 text-base text-(--text-secondary-light) dark:text-(--text-secondary-dark) hover:text-(--text-primary-light) dark:hover:text-(--text-primary-dark) transition-colors"
        >
          <span>{actionText}</span>
          <span className="rotate-180 mt-1"><ArrowBackIcon /></span>
        </NavLink>
      )}
    </div>
  );
};

export default SectionHeader;
