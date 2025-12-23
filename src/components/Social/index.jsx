import { Tooltip } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const Social = () => {
  return (
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
      <NavLink to="/resume">
        <Tooltip title="Resume">
          <IconButton>
            <AssignmentIndIcon fontSize="large" />
          </IconButton>
        </Tooltip>
      </NavLink>
    </div>
  );
};

export default Social;
