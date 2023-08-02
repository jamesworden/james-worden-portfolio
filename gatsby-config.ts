import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `james-worden`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				postCssPlugins: [require('tailwindcss')],
			},
		},
		{
			resolve: `gatsby-omni-font-loader`,
			options: {
				enableListener: true,
				preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
				web: [
					{
						name: `Cardo`,
						file: `https://fonts.googleapis.com/css2?family=Cardo&display=swap`,
					},
					{
						name: `Lato`,
						file: `https://fonts.googleapis.com/css2?family=Lato&display=swap`,
					},
				],
			},
		},
		'gatsby-plugin-smoothscroll',
	],
};

export default config;
