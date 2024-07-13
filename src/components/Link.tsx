import React from "react";
import "../../base.css";

type Props = {
  url: string;
  text: string;
};

const Link: React.FC<Props> = ({ url, text }) => {
  return (
    <a href={url} className="underline-dotted  hover:text-cyan-400">
      {text}
    </a>
  );
};

export default Link;
