import { FC } from "react";
import LinkList, { Link } from "./links";

import { SiTwitter, SiGithub, SiPixiv } from "react-icons/si";
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
    <>
      {/*<LinkList list={links} />*/}
      <a href="https://teraka.tumblr.com/">work</a>
      <a href="https://glacier-apparel-d4d.notion.site/Log-bac9ced73a6c473a8e7fa74304207899">
        log
      </a>
    </>
  );
};
export default Contents;
