module.exports = {
	darkMode: 'media', // Ensure dark mode is controlled via the `class` attribute
	content: [
	  './app/**/*.{js,ts,jsx,tsx}',
	  './components/**/*.{js,ts,jsx,tsx}',
	  './pages/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
	  extend: {
		colors: {
			backgroundLight: '#f4f4f5', // Light background color
			backgroundDark: '#18181b', // Dark background color
			textLight: '#1a202c', // Light text
			textDark: '#e4e4e7', // Dark text
			accent: '#3b82f6', // Accent color for hover states
		},
	  },
	},
	plugins: [],
  };
  