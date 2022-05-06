import { faArchway } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Welcome.css";
export default function Welcome() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="Welcome">
        <div className="Upper">
          <div className="Icon">
            <FontAwesomeIcon icon={faArchway} style={{ fontSize: "10rem" }} />
          </div>
          <div
            className="Go"
            onClick={() => {
              navigate("/ceblog");
            }}
          >
            LET'S GO
          </div>
        </div>
        <div className="Lower">
          <div
            className="Github"
            onClick={() => {
              window.open("https://www.github.com/celiae");
            }}
          >
            GO GITHUB
          </div>
        </div>
      </div>
      <Footer style={{ position: "relative" }} />
    </div>
  );
}
