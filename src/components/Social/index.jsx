import { FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import { FacebookIcon, InstagramIcon, GithubIcon } from "../icons/SocialIcons";

const Social = () => {
  return (
    <div className="social flex gap-4 items-center">
      <Tooltip title="Facebook">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:text-blue-600 transition-colors"
        >
          <a
            href="https://www.facebook.com/share/1ASxDcgsKX/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-7 h-7" />
          </a>
        </Button>
      </Tooltip>

      <Tooltip title="Instagram">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:text-pink-500 transition-colors"
        >
          <a
            href="https://www.instagram.com/_ndh_204?igsh=djBxbGNoajl5ejJo&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-7 h-7" />
          </a>
        </Button>
      </Tooltip>

      <Tooltip title="GitHub">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:text-foreground transition-colors"
        >
          <a
            href="https://github.com/NguyenDuyHanh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="w-7 h-7" />
          </a>
        </Button>
      </Tooltip>
    </div>
  );
};

export default Social;
