import { FC } from "react";

import { SiTwitter, SiGithub, SiPixiv } from "react-icons/si";

import {GoLinkExternal} from "react-icons/go";
import Link from "./Link";
import Cursor from "../sketch/Cursor";
const Contents: FC = () => {
  const links: Link[] = [
    {
      name: "github",
      link: "https://github.com/terakawakohei",
      icon: <SiGithub />,
    },
    /*   {
      name: "twitter",
      link: "https://twitter.com/xxriver000",
      icon: <SiTwitter />,
    },

    {
      name: "pixiv",
      link: "https://www.pixiv.net/users/6349894",
      icon: <SiPixiv />,
    },*/
  ];
  return (
    <div >
<div className="gradient">
    <h1 >odayakalife</h1>
  </div>

      <a href="https://teraka.tumblr.com/" target="_blank">gallery<GoLinkExternal size={"1.5rem"}/></a>
      <a href="https://glacier-apparel-d4d.notion.site/Log-bac9ced73a6c473a8e7fa74304207899" target="_blank">
        illust-log<GoLinkExternal size={"1.5rem"}/>
      </a>
    </div>
  );
};
export default Contents;
