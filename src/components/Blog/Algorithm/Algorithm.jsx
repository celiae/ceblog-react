import "./Algorithm.css";
export default function Algorithm(props) {
  let blog = props.blog;
  return (
    <div className="np">
      <div className="Info">
        <div className="Creator">
          <div>
            <div>CREATOR</div>
            <div>{blog.creator}</div>
          </div>
        </div>
        <div className="Complex">
          <div className="Tc">
            <div>TC</div>
            <div>{blog.complexity.time}</div>
          </div>
          <div className="Sc">
            <p>Sc</p>
            <p>{blog.complexity.space}</p>
          </div>
        </div>
      </div>
      <div className="Description">Some descrption about algorithm</div>
    </div>
  );
}
