import React from "react";

type Props = {
    url: string;
    text: string;
}

const Link: React.FC<Props> = ({ url, text }) => {
    // Obviously, pink 400 is a bad hover color. Do you have any suggestions?
    return <a href={url} className="underline hover:text-pink-400">{text}</a>
}

export default Link;