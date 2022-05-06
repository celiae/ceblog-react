import "./NP.css";
export default function NP(props) {
  let blog = props.blog;
  return (
    <div className="np">
      {blog.headers.map((header) => (
        <div className="Function">
          <div className="Name">{header.name}</div>
          <div className="Description">{header.msg}</div>
        </div>
      ))}
    </div>
  );
}
