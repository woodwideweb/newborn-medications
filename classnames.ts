// my knock-off version of classnames because I wanted it but didn't feel like getting a filter suspension to install the real thing
// also, I wanted to see if I still remembered how to write anything but python and jsx
// answer: not really. It took me forever to figure this out
// Does this look okay? I feel like it works for my purposes...
function classnames(...strings: Array<string>): string {
    return strings.reduce((string, current) => string + " " + current, "")
}

export default classnames;