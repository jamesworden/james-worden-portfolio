import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
	siteMetadata: {
		title: `james-worden`,
		siteUrl: `https://www.jamesworden.com`,
	},
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
				ignore: [`**/\.*`, `**\.ts`],
				fastHash: true,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [`gatsby-remark-autolink-headers`],
			},
		},
	],
};

export default config;
