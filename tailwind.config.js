/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			zIndex: {
				'-1': '-1',
			},
		},
	},
	plugins: [],
};
