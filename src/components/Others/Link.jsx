export default function Link(props) {
  let name = props.name;
  let url = props.url;
  function goLink() {
    window.open(url);
  }
  return (
    <div className="OtherBlog" onClick={goLink}>
      <h1>{name}</h1>
    </div>
  );
}
