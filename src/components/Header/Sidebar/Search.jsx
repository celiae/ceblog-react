import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
export default function Search() {
  return (
    <div
      style={{
        display: "grid",
        height: "2.5rem",
        gridTemplateColumns: "auto auto",
      }}
    >
      <input
        type="search"
        style={{ fontSize: "1rem" }}
        placeholder="Search..."
      />
      <div
        style={{
          background: "var(--blue)",
          color: "var(--dark)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <FontAwesomeIcon icon={faSearchengin} />
      </div>
    </div>
  );
}
