import { ReactNode } from "react";
import style from "./Heading.module.css";

type HeadingProp = {
  tag?: keyof JSX.IntrinsicElements;
  styleHeading: string;
  children: ReactNode;
};
const Heading = ({ tag: Tag = "h1", styleHeading, children }: HeadingProp) => {
  return <Tag className={style[styleHeading]}>{children}</Tag>;
};

export default Heading;
