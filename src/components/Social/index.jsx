import { Tooltip } from "../ui/tooltip";
import { Button } from "../ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="social flex gap-4 items-center">
      <Tooltip title="GitHub">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:opacity-80 transition-opacity"
        >
          <a
            href="https://github.com/NguyenDuyHanh"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5 text-foreground" />
          </a>
        </Button>
      </Tooltip>

      <Tooltip title="Facebook">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:opacity-80 transition-opacity"
        >
          <a
            href="https://www.facebook.com/share/1ASxDcgsKX/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 text-[#1877F2]" />
          </a>
        </Button>
      </Tooltip>

      <Tooltip title="Instagram">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:opacity-80 transition-opacity"
        >
          <a
            href="https://www.instagram.com/_ndh_204?igsh=djBxbGNoajl5ejJo&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 text-[#E4405F]" />
          </a>
        </Button>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <Button
          variant="icon"
          asChild
          className="h-10 w-10 p-2 hover:opacity-80 transition-opacity"
        >
          <a
            href="https://www.linkedin.com/in/hanh-nguy%E1%BB%85n-21781733b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
          </a>
        </Button>
      </Tooltip>
    </div>
  );
};

export default Social;
