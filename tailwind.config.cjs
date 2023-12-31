const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		extend: {
			fontFamily: {
				'poppins': ["Poppins", `"sans-serif"`]
			},
			screens: {
				xs: "320px",
				...defaultTheme.screens
			},
			colors: {
				primary: "#DE369D",
			}
		},
	},
	plugins: [],
}
