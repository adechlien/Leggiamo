/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Light mode
				'light-bg': '#fcf6ef',
				'light-header': '#4a5759',
				'light-text': '#A9927D',
				'light-header-text': '#7D6852',

				// Dark mode
				// 'dark-bg': '#121B32',
				// 'dark-text': '#98CCF3'

				//Dark Mode Legacy
				'dark-bg': '#22332B',
				//'dark-header': '#152620',
				//'dark-header-text': '#d8f3dc',
				'dark-text': '#d8f3dc'
			},
			fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif'],
      }
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
