import React from "react";

type Props = {
    url: string;
    text: string;
}

const Link: React.FC<Props> = ({ url, text }) => {
    // note that this works while trying to make a custom style for this does not
    // needs investigated if I do a major project in Astro again
    return <a href={url} className="underline [text-decoration-style:dotted] hover:text-cyan-400">{text}</a>
}

export default Link;