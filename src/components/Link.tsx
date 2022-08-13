import { FC } from "react";

export type Link = {
  name: string;
  link: string;
  icon: Object;
};
type Props = {
  list: Link[];
};
const LinkList: FC<Props> = (props) => {
  const links = props.list;
  return (
    <>
      <div>
        {links.map((l) => {
          return <a href={l.link}>{l.icon}</a>;
        })}
      </div>
    </>
  );
};
export default Link;
