import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";
import LinkButton from "./LinkButton";
export default function MobileFooter() {
  const Links = [
    { path: "/ceblog/otherblog", msg: "Others", icon: faBlog },
    { path: "/ceblog/webframework", msg: "Frame", icon: faCode },
    { path: "/ceblog/about", msg: "About", icon: faInfo },
    { path: "/ceblog/", msg: "Home", icon: faHome },
  ];

  return (
    <div className="MobileFooter">
      {Links.map((link) => (
        <LinkButton path={link.path} msg={link.msg} icon={link.icon} />
      ))}
    </div>
  );
}
