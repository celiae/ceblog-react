import { useNavigate } from "react-router-dom";
import { getBlogs } from "../../data/data";
import "./Home.css";
export default function Home() {
  let blogs = getBlogs();
  const navigate = useNavigate();

  function toLink(id) {
    console.log(id);
    navigate("/ceblog/" + id);
  }

  return (
    <div>
      <div className="Cards">
        {blogs.map((blog) => (
          <div onClick={() => toLink(blog.id)} className="Card" key="blog.id">
            <div className="CardHeader">
              <div className="CardDate">{blog.date}</div>
              <div className="CardTitle">{blog.title}</div>
            </div>
            <div className="CardFooter">
              <img className="CardImage" src={blog.image} />
            </div>
            <div className="CategoryBox">
              <div className="CategoryText">{blog.catagory}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
