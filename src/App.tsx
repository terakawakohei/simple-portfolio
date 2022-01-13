import React from "react";
import logo from "./portfolio-icon.png";
import "./App.css";
import "./css/appContent.css";
import LinkList, { Link } from "./components/links";
import { SiTwitter, SiGithub, SiPixiv } from "react-icons/si";
function App() {
  const links: Link[] = [
    {
      name: "github",
      link: "http",
      icon: <SiGithub />,
    },
    {
      name: "twitter",
      link: "https://twitter.com/xxriver000",
      icon: <SiTwitter />,
    },

    {
      name: "pixiv",
      link: "https",
      icon: <SiPixiv />,
    },
  ];
  console.log(typeof links[0].icon);
  return (
    <div className="App">
      <header className="content">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>odayakalife</p>
        {/* <p>this is my portfolio</p> */}
        <LinkList list={links} />
      </header>
    </div>
  );
}

export default App;
