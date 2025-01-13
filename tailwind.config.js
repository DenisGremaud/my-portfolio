/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/about/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/blog/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/projects/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
	  extend: {
		backgroundColor: {
		  background: {
			DEFAULT: '#ffffff',
			dark: '#171717',
		  }
		},
		textColor: {
		  base: {
			DEFAULT: '#1a202c',
			dark: '#e4e4e7',
		  }
		},
		colors: {
		  accent: '#3b82f6',
		}
	  },
	},
	plugins: [],
  }