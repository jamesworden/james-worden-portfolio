/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
	plugins: [require('@tailwindcss/typography')],
	theme: {
		extend: {
			zIndex: {
				'-1': '-1',
			},
		},
		screens: {
			xs: '348px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	// TailwindCSS classes that are maintained in TypeScript aren't automatically loaded.
	// into the browser. This safelist ensures classes are loaded even if they aren't detected.
	safelist: ['bg-rose-800', 'dark:bg-gray-800'],
};
