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
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						code: {
							backgroundColor: '#d1d5db',
							paddingLeft: '0.5rem',
							paddingRight: '0.5rem',
							marginLeft: '0.125rem',
							marginRight: '0.125rem',
							borderRadius: '0.15rem',
						},
						pre: {
							marginBottom: '0 !important',
						},
						'p:has(sub)': {
							marginTop: '0 !important',
						},
					},
				},
				dark: {
					css: {
						':not(pre) > code': {
							backgroundColor: '#374151',
							paddingLeft: '0.5rem',
							paddingRight: '0.5rem',
							marginLeft: '0.125rem',
							marginRight: '0.125rem',
							borderRadius: '0.15rem',
						},
					},
				},
			}),
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
	safelist: [
		'bg-rose-800',
		'bg-gray-800',
		'dark:bg-gray-800',
		'text-gray-800',
		'text-gray-400',
		'text-lg',
		'text-xs',
	],
};
