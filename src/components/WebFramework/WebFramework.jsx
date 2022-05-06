import Link from "./Link";
import "./WebFramework.css";
export default function WebFramework() {
  const frameworks = [
    {
      id: 0,
      name: "Vue.js",
      creator: "Evan You",
      url: "https://vuejs.org/",
    },
    {
      id: 1,
      name: "React.js",
      creator: "Facebook",
      url: "https://reactjs.org/",
    },
    {
      id: 2,
      name: "Angular",
      creator: "Google",
      url: "https://angular.io/",
    },
    {
      id: 3,
      name: "Django",
      creator: "Django",
      url: "https://www.djangoproject.com/",
    },
    {
      id: 4,
      name: "Laravel",
      creator: "Taylor Otwell",
      url: "https://laravel.com/",
    },
    {
      id: 5,
      name: "Express.js",
      creator: "TJ Holowaychuk",
      url: "https://expressjs.com/",
    },
  ];

  return (
    <div className="WebFrameworks">
      {frameworks.map((framework) => (
        <Link
          name={framework.name}
          creator={framework.creator}
          url={framework.url}
        />
      ))}
    </div>
  );
}
