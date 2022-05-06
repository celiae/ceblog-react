import Link from "./Link";
import "./Others.css";
export default function Others() {
  const OtherBlogs = [
    {
      id: "0",
      name: "ArchLinuxStudio",
      url: "https://archlinuxstudio.github.io",
    },
    {
      id: "1",
      name: "",
      url: "",
    },
    {
      id: "2",
      name: "",
      url: "",
    },
    {
      id: "3",
      name: "",
      url: "",
    },
    {
      id: "4",
      name: "",
      url: "",
    },
  ];
  return (
    <div className="others">
      {OtherBlogs.map((OtherBlog) => (
        <Link name={OtherBlog.name} url={OtherBlog.url} />
      ))}
    </div>
  );
}
