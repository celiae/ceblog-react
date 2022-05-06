import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Link from "./Link";
import Search from "./Search";
export default function Sidebar() {
  const links = [
    {
      url: "https://wiki.archlinux.org",
      msg: "ArchLinux",
    },
    {
      url: "https://www.github.com/celiae",
      msg: "Github",
    },
    {
      url: "https://reactjs.org",
      msg: "React",
    },
    {
      url: "http://celiae.dns.army",
      msg: "Code-Server",
    },
  ];
  function close() {
    const sidebar = document.querySelector("#Sidebar");
    sidebar.classList.remove("open");
  }
  return (
    <div className="Sidebar" id="Sidebar">
      <div className="close" onClick={close}>
        <FontAwesomeIcon icon={faClose} />
      </div>
      <div className="links">
        {links.map((link) => (
          <Link url={link.url} msg={link.msg} />
        ))}
      </div>
      <Search />
    </div>
  );
}
