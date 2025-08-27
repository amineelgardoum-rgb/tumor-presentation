import { FaGithub, FaLinkedin} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { MdMail } from "react-icons/md";
// import { XLogo } from "../XLogo";
export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/amineelgardoum-rgb",
      hoverColor:"hover:text-white",
      shadow:"hover:[filter:drop-shadow(0_0_5px_white)_drop-shadow(0_0_15px_white)_drop-shadow(0_0_25px_white)]"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/amine-el-gardoum-491a82333",
      hoverColor:"hover:text-blue-600",
      shadow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_15px_blue)_drop-shadow(0_0_25px_blue)]"
    },
    {
      name: "X(Twitter)",
      icon: <BsTwitterX />,
      link: "https://x.com/AMINE44467019",
      hoverColor:"hover:text-blue-600",
      shadow:"hover:[filter:drop-shadow(0_0_5px_blue)_drop-shadow(0_0_15px_blue)_drop-shadow(0_0_25px_blue)]"
    },
    { name: "Email", 
      icon: <MdMail />,
      link: "mailto:amineotako64@gmail.com",
      hoverColor:"hover:text-red-600",
      shadow:"hover:[filter:drop-shadow(0_0_5px_red)_drop-shadow(0_0_15px_red)_drop-shadow(0_0_25px_red)]"
     },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-transparent z-20 py-12 mb-10 text-green-300"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-x-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Link to my ${social.name} profile`}
                className={`text-white text-5xl cursor-none
                          transition-all duration-500 ease-in-out
                          ${social.hoverColor}
                          hover:scale-110
                          ${social.shadow}
                          hover:-translate-y-2`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
