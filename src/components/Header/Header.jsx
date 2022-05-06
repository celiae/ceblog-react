import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import Sidebar from "./Sidebar/Sidebar";
export default function MobileNav() {
  let navigate = useNavigate();
  function backToWelcome() {
    navigate("/");
  }
  function open() {
    const sidebar = document.querySelector("#Sidebar");
    sidebar.classList.add("open");
  }
  return (
    <div className="Header">
      <Sidebar />
      <div>
        <FontAwesomeIcon icon={faBars} onClick={open} />
      </div>
      <div>
        CeBlog <FontAwesomeIcon icon={faBlog} onClick={backToWelcome} />
      </div>
    </div>
  );
}
