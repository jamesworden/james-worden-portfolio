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
			maxWidth: {
				'2xs': '16rem',
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						':not(pre) > code': {
							background: '#d1d5db !important',
							paddingLeft: '0.5rem !important',
							paddingRight: '0.5rem !important',
							marginLeft: '0.125rem !important',
							marginRight: '0.125rem !important',
							borderRadius: '0.3rem !important',
							color: 'black !important',
							textShadow: 'none !important',
							fontWeight: 'semibold !important',
						},
						pre: {
							marginBottom: '0 !important',
						},
						'p:has(sub)': {
							marginTop: '0 !important',
							textAlign: 'center',
						},
						ul: {
							margin: '0 !important',
						},
						'p:has(+ ul), p:has(+ h1), p:has(+ h2), p:has(+ h3), p:has(+ h4), p:has(+ h5), p:has(+ h6)':
							{
								marginBottom: '0 !important',
							},
					},
				},
				dark: {
					css: {
						':not(pre) > code': {
							backgroundColor: '#374151 !important',
							paddingLeft: '0.5rem !important',
							paddingRight: '0.5rem !important',
							marginLeft: '0.125rem !important',
							marginRight: '0.125rem !important',
							borderRadius: '0.3rem !important',
							color: 'white !important',
							textShadow: 'none !important',
							fontWeight: 'semibold !important',
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
		'opacity-0',
		'opacity-80',
		'group-hover:opacity-80',
		'bg-gray-600',
		'group-hover:opacity-100',
		'group',
		'-left-6',
		'no-underline',
		'not-italic',
	],
};
