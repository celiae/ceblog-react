export default function Link(props) {
  let name = props.name;
  let creator = props.creator;
  let url = props.url;
  function goLink() {
    window.open(url);
  }
  return (
    <div>
      <div className="Framework" onClick={goLink}>
        <div className="FrameworkName">{name}</div>
        <div className="FrameworkCreator">{creator}</div>
      </div>
    </div>
  );
}
