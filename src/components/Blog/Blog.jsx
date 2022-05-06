import { useParams } from "react-router-dom";
import { getBlog } from "../../data/data";
import Linux from "./Linux/Linux";
import Algorithm from "./Algorithm/Algorithm";
import NP from "./NP/NP";
export default function Blog() {
  let params = useParams();
  let blog = getBlog(params.blogId);
  let blogContent = "";

  const Blog = {
    minHeight: "100vh",
  };
  const Title = {
    fontFamily: "RobotoMono Italic",
    fontSize: "1.3rem",
    textAlign: "center",
    color: "var(--light)",
    background: "var(--blue)",
    height: "5rem",
    display: "grid",
    placeItems: "center",
  };
  const Hero = {
    display: "grid",
  };
  const HeroImage = {
    width: "100%",
  };
  const Description = {
    padding: "2rem",
    textAlign: "start",
  };
  const GoLink = {
    height: "10rem",
    background: "var(--dark)",
    display: "grid",
    padding: "1rem",
  };
  const url = {
    background: "var(--light)",
    width: "60%",
    height: "2rem",
    display: "grid",
    placeItems: "center",
    borderLeft: "6px solid var(--blue)",
  };
  const button = {
    background: "var(--light)",
    width: "80%",
    height: "4rem",
    display: "grid",
    placeItems: "center",
    color: "var(--blue)",
    borderRadius: "10px",
    fontSize: "2rem",
    fontWeight: "800",
  };

  if (blog.catagory === "linux") {
    blogContent = <Linux blog={blog} />;
  } else if (blog.catagory === "algorithm") {
    blogContent = <Algorithm blog={blog} />;
  } else if (blog.catagory === "np") {
    blogContent = <NP blog={blog} />;
  } else {
    blogContent = "Blog not found";
  }
  return (
    <div style={Blog}>
      <div style={Hero}>
        <img style={HeroImage} src={blog.image} alt="Picture Not Found" />
        <h1 style={Title}>{blog.title}</h1>
        <div style={GoLink}>
          <div style={url}>{blog.link}</div>
          <div style={button}>CHECK IT OUT</div>
        </div>
      </div>
      {blogContent}
    </div>
  );
}
