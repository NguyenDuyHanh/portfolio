import { NavLink } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SectionHeader = ({
  title,
  actionText,
  actionTo,
}) => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-serif text-4xl font-bold text-(--text-primary)">
        {title}
      </h2>

      {actionText && actionTo && (
        <NavLink
          to={actionTo}
          className="flex items-center justify-center gap-1 text-base text-(--text-secondary) hover:text-(--text-primary) transition-colors"
        >
          <span>{actionText}</span>
          <span className="rotate-180 mt-1"><ArrowBackIcon /></span>
        </NavLink>
      )}
    </div>
  );
};

export default SectionHeader;
