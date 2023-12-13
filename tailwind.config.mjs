/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				play: ['Playfair Display Variable', ...defaultTheme.fontFamily.sans],
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#E2DDD9',
				primaryDark: '#dbd3cf',
				secondary: '#c16e70',
				accent: '#757871',
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
