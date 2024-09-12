import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--theme-primary)'
			},
			boxShadow: {
				right: '-1px 0 8px 1px rgba(0, 0, 0, 0.3)'
			},
			colors: {
				theme: {
					primary: 'var(--theme-primary)',
					secondary: 'var(--theme-secondary)'
				}
			},
			screens: {
				'sm': '400px'
			}
		},
	},
	plugins: [],
}
