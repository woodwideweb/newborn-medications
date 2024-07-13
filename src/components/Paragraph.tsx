import React from "react";
import "../../base.css";

type Props = {
  children: React.ReactNode;
};

const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <p className="font-light pb-4 sm:text-[16.5px] lg:text-lg xl:text-xl">
      {children}
    </p>
  );
};

export default Paragraph;
