/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Light mode
				'light-bg': '#fcf6ef',
				'light-header': '#4a5759',
				'light-text': '#A9927D',
				'light-header-text': '#fcf6ef',

				// Dark mode
				'dark-bg': '#22332B',
				'dark-header': '#1d2e28',
				'dark-header-text': '#d8f3dc',
				'dark-text': '#d8f3dc'
			}
		},
	},
	plugins: [],
}
