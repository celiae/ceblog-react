import "./About.css";
export default function About() {
  const contents = [
    `
    与CSDN以及其他博客不同,这是开发者自己为自己搭建的网站.
    浏览这里的内容,以其开发者个人成长为主线,能看出的不只是
    知识本身,更是作为一个孩子的成长路程.
    `,
    `
    相比通过搜索引擎得到的碎片化信息,一个网站更能展现出一个
    更具特色的世界.我也许会走弯路,会作无用功,但前车之鉴,后事
    之师.重复的问题不会再想一遍,这是我的目标,也是Ceblog存在
    的意义.
    `,
  ];

  const usages = [
    `
    个人博客
    `,
    `
    其他博客
    `,
    `
    经典框架
    `,
    `
    边学边做
    `,
  ];

  contents.map((content) => {
    content = content.replace(/\s +/g, "");
    content = content.replace(/[\r\n]+/g, "");
  });

  console.log(contents[0]);

  return (
    <div className="about">
      <h1>关于Ceblog</h1>
      <div className="Usages">
        {usages.map((usage) => (
          <div className="Usage">{usage}</div>
        ))}
      </div>
      {contents.map((content) => (
        <p>{content}</p>
      ))}
    </div>
  );
}
