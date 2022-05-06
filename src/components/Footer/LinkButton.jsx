import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./LinkButton.css";
export default function LinkButton(props) {
  const LinkButton = {
    textDecoration: "none",
    color: "var(--black)",
    fontSize: "1rem",
  };
  const ActiveLinkButton = {
    textDecoration: "none",
    color: "var(--blue)",
  };
  return (
    <div className="ButtonWrapper">
      <NavLink
        style={({ isActive }) => (isActive ? ActiveLinkButton : LinkButton)}
        to={props.path}
      >
        <div className="col">
          <FontAwesomeIcon icon={props.icon} />
          {props.msg}
        </div>
      </NavLink>
    </div>
  );
}
