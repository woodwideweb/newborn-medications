import React from "react";
// this is my knock-off version, hence the wierd path
import cx from "../../classnames"

type Props = {
    children: React.ReactNode;
    textColor?: "text-white" | "text-black";
}


const Header: React.FC<Props> = ({ children, textColor = "text-black" }) => {
    let afterBg = "after:bg-black"
    if (textColor === "text-white") {
        afterBg = "after:bg-white"
    }

    return <h2 className={cx("bg-slate-500 w-fit font-light text-lg sm:text-xl lg:text-2xl xl:text-[26px] pb-4 sm:pb-6 after:block after:h-[1px] after:w-full-plus after:mt-0", afterBg, textColor)}>{children}</h2>
}
1176

export default Header;