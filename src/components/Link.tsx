import React from "react";

type Props = {
    url: string;
    text: string;
}

const Link: React.FC<Props> = ({ url, text }) => {
    // Figuer out a better hover color 
    return <a href={url} className="underline hover:text-pink-400">{text}</a>
}

export default Link;