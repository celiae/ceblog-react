export default function Link(props) {
  let url = props.url;
  let msg = props.msg;
  function goLink() {
    window.open(url);
  }
  return (
    <div
      style={{
        marginBottom: "5px",
        background: "var(--lightblue)",
        height: "3.5rem",
        borderRight: "1rem solid var(--blue)",
        color: "var(--black)",
        fontFamily: "Roboto_Mono",
        display: "grid",
        placeItems: "center",
        textAlign: "right",
        fontWeight: "800",
      }}
      onClick={goLink}
    >
      {msg}
    </div>
  );
}
