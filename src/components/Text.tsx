import React from "react";
import Header from "./Header";
import cx from "../../classnames"

type Props = {
    children: React.ReactNode;
    // this is the header content... is this okay?
    title: string;
    bg: "slate-light" | "slate-dark" | "white"
}

const Text: React.FC<Props> = ({ children, title, bg }) => {
    let textColor: "text-black" | "text-white" = "text-white"
    let backgroundClass = "bg-white"
    if (bg === "white") {
        textColor = "text-black"
    }
    if (bg === "slate-light") {
        backgroundClass = "bg-slate-500"
    } else if (bg === "slate-dark") {
        backgroundClass = "bg-slate-600"
    }

    // The purpose of the flexbox code is to center the text on large screens. Is there a better way to do it?
    // Not sure about the extralight thing either... might be a little thing, but it feels to thick at large screens
    return <section className={cx("font-extralight p-6 sm:p-10 md:py-14 lg:py-16 lg+:py-18 sm:text-[16.5px] lg:text-lg xl:text-xl xl:flex xl:justify-center", backgroundClass, textColor)}>
        {/* There's an exact width here because it's never going to be at a screen smaller than this */}
        <div className="xl:w-[1173px] 2xl:w-[1400px]">
            <Header textColor={textColor}>{title}</Header>
            {children}
        </div>
    </section>
}

export default Text