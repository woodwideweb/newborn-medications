import React from "react";
import Header from "./Header";
import cx from "../../classnames";
import Paragraph from "./Paragraph";
import "../../base.css";

type Props = {
  children: React.ReactNode;
  title: string;
  bg: "slate-light" | "slate-dark" | "white";
};

const TextBlock: React.FC<Props> = ({ children, title, bg }) => {
  let textColor: "text-black" | "text-white" = "text-white";
  let backgroundClass = "bg-white";
  if (bg === "white") {
    textColor = "text-black";
  }
  if (bg === "slate-light") {
    backgroundClass = "bg-slate-500";
  } else if (bg === "slate-dark") {
    backgroundClass = "bg-slate-600";
  }

  return (
    <section
      className={cx(
        "p-6 sm:p-10 md:py-14 lg:py-16 lg+:py-18 xl:flex xl:justify-center",
        backgroundClass,
        textColor
      )}
    >
      <div className="xl:w-[1173px] 2xl:w-[1400px]">
        <Header textColor={textColor}>{title}</Header>
        <Paragraph>{children}</Paragraph>
      </div>
    </section>
  );
};

export default TextBlock;
