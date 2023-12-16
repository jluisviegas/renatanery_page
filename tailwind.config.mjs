/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				play: ['Playfair Display Variable', ...defaultTheme.fontFamily.sans],
				mont: ['Montserrat Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#E2DDD9',
				primaryDark: '#dbd3cf',
				secondary: '#c16e70',
				secondaryDark: '#9D174D',
				lightBlue: '#BFCDD9',
				darkBlue: '#475569',
				purpleDark: '#3b344f',
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
