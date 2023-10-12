export default function classnames(...strings: Array<string>): string {
    // return strings.reduce((string, current) => string + " " + current, "")
    return strings.join(" ")
}