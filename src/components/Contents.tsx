import { FC , useEffect, useState } from "react";
import LinkList, { Link } from "./links";

import { SiTwitter, SiGithub, SiPixiv } from "react-icons/si";

import {GoLinkExternal} from "react-icons/go";
const Contents: FC = () => {
let position: React.CSSProperties = {
       }
  useEffect(() => {
    //ここの処理が初回に行われる

    position={
    position:"absolute",
    top: Math.floor(Math.random() * window.innerHeight),
    left : Math.floor(Math.random() * window.innerWidth),
    }


  
  }, []);
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
// const position: React.CSSProperties = {
//     position:"absolute",
//     top: Math.floor(Math.random() * window.innerHeight),
//    left : Math.floor(Math.random() * window.innerWidth),


// };

  return (
    <>
      {/*<LinkList list={links} />*/}
      <a href="https://teraka.tumblr.com/"  style={position} target="_blank">gallery<GoLinkExternal size={"1.5rem"}/></a>
      <a href="https://glacier-apparel-d4d.notion.site/Log-bac9ced73a6c473a8e7fa74304207899"  style={position} target="_blank">
        illust-log<GoLinkExternal size={"1.5rem"}/>
      </a>
    </>
  );
};
export default Contents;
