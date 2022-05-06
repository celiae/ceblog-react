import "./Linux.css";
export default function Linux(props) {
  let blog = props.blog;
  return (
    <div className="Commands">
      {blog.shell.map((command) => (
        <div key={command.id}>
          <div className="CommandText">{command.text}</div>
          <div className="Command">
            <code className="Code">{command.code}</code>
          </div>
        </div>
      ))}
    </div>
  );
}
