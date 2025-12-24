import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const RepoItem = ({ name, description, language, stars, forks, href }) => {
  return (
    <div
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        rounded-2xl border border-(--border-color)
        hover:border-(--border-color-hover)
        bg-(--bg-primary) p-6 
        transition-all duration-300 cursor-pointer
      "
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-semibold text-(--text-primary)">
          {name}
        </h3>
        {language && <span className="text-xs text-(--text-secondary)">{language}</span>}
      </div>

      <p className="text-base text-(--text-secondary) line-clamp-1 md:line-clamp-2 mb-4">{description}</p>

      <div className="flex items-center gap-5 text-base text-(--text-secondary)">
        <div className="flex items-center gap-1">
          <StarBorderIcon fontSize="small" className="text-yellow-400" />
          <span>{stars}</span>
        </div>

        <div className="flex items-center gap-1">
          <DeviceHubIcon fontSize="small" className="text-blue-600" />
          <span>{forks}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
