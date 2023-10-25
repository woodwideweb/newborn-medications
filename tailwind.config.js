/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito", "sans-serif"]
			},
			width: {
				"full-plus": "calc(100% + 2rem)"
			},
			screens: {
				xs: "395px",
				"lg+": "1180px"
			}
		},
	},
	plugins: [],
}
