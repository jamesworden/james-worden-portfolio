import bobWordenThumbnail from '../images/bob-worden-thumbnail.png';
import jamesWordenResearchThumbnail from '../images/james-worden-research-thumbnail.png';
import harvardOfQueensThumbnail from '../images/harvard-of-queens-thumbnail.png';
import chessOfCardsThumbnail from '../images/chess-of-cards-thumbnail.png';
import jamesWordenPortfolioThumbnail from '../images/james-worden-portfolio-thumbnail.png';

enum Technology {
	GoogleCloudVision = 'Google Cloud Vision',
	GoogleStreetView = 'Google Street View',
	Netlify = 'Netlify',
	TypeScript = 'TypeScript',
	JavaScript = 'JavaScript',
	RXJS = 'RXJS',
	React = 'React',
	Angular = 'Angular',
	Gatsby = 'Gatsby',
	Wordpress = 'Wordpress',
	Plesk = 'Plesk',
	DigitalOcean = 'Digital Ocean',
	ServerlessFramework = 'Serverless Framework',
	Webpack = 'Webpack',
	CSS = 'CSS',
	TailwindCSS = 'TailwindCSS',
	HTML = 'HTML',
	AWSLambda = 'AWS Lambda',
	AWSS3 = 'AWS S3',
	AWSCodeDeploy = 'AWS Code Deploy',
	CSharp = 'C#',
	ReactThreeFiber = 'React Three Fiber',
}

interface ProjectCardButton {
	websiteUrl: string;
	displayText: string;
	buttonClassName: string;
}

export interface IProjectCard {
	displayNumber: string;
	technologyBadges: Technology[];
	displayWebsiteUrl: string;
	displayDate: string;
	description: string;
	image: any;
	buttons: ProjectCardButton[];
	githubUrl?: string;
	imageUrl?: string;
}

export const projectCards: IProjectCard[] = [
	{
		displayNumber: '01',
		description:
			"A website I created for my father who is an attorney; I made use of gatsby's dynamic page rendering to output blog posts using data from an external wordpress instance.",
		displayDate: 'December 2020',
		displayWebsiteUrl: 'bobworden.com',
		image: bobWordenThumbnail,
		technologyBadges: [
			Technology.React,
			Technology.Gatsby,
			Technology.TypeScript,
			Technology.CSS,
			Technology.Wordpress,
			Technology.Plesk,
			Technology.DigitalOcean,
			Technology.Netlify,
		],
		buttons: [
			{
				websiteUrl: 'https://www.bobworden.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
		],
		githubUrl: 'https://github.com/jamesworden/bob-worden',
		imageUrl: 'https://www.bobworden.com/',
	},
	{
		displayNumber: '02',
		description:
			"A tool that I created to assist myself in completing research with Dr. Erald Troja from St. John's University; I was able to aggregate data and statistics using my own API's that were featured in our collaborative research paper.",
		displayDate: 'March 2021',
		displayWebsiteUrl: 'research.jamesworden.com',
		image: jamesWordenResearchThumbnail,
		technologyBadges: [
			Technology.React,
			Technology.TypeScript,
			Technology.CSS,
			Technology.Webpack,
			Technology.GoogleCloudVision,
			Technology.GoogleStreetView,
			Technology.AWSLambda,
			Technology.ServerlessFramework,
		],
		buttons: [
			{
				websiteUrl: 'https://research.jamesworden.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
			{
				websiteUrl:
					'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hwqevicAAAAJ&citation_for_view=hwqevicAAAAJ:_kc_bZDykSQC',
				buttonClassName: 'text-rose-900 border border-rose-900 bg-gray-200',
				displayText: 'Research Paper',
			},
		],
		githubUrl: 'https://github.com/jamesworden/jamesworden-research',
		imageUrl: 'https://research.jamesworden.com/',
	},
	{
		displayNumber: '03',
		displayWebsiteUrl: 'harvardofqueens.com',
		description:
			"Students of St. John's University often refer to their school as the Harvard of Queens. This wordle clone uses a list of bars, buildings, phrases, that many students are familiar with.",
		displayDate: 'March 2022',
		image: harvardOfQueensThumbnail,
		technologyBadges: [
			Technology.JavaScript,
			Technology.HTML,
			Technology.CSS,
			Technology.Webpack,
			Technology.AWSS3,
			Technology.AWSLambda,
		],
		buttons: [
			{
				websiteUrl: 'https://harvardofqueens.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
		],
		githubUrl: 'https://github.com/jamesworden/harvard-of-queens-wordle',
		imageUrl: 'https://harvardofqueens.com/',
	},
	{
		displayNumber: '04',
		displayWebsiteUrl: 'chessofcards.com',
		description:
			'A two player game requiring the strategy of chess and the luck of playing cards. A timer forces players to make moves quickly and effectively.',
		displayDate: 'October 2022',
		technologyBadges: [
			Technology.CSharp,
			Technology.Angular,
			Technology.RXJS,
			Technology.CSS,
			Technology.TypeScript,
			Technology.AWSCodeDeploy,
			Technology.AWSS3,
		],
		image: chessOfCardsThumbnail,
		buttons: [
			{
				displayText: 'Show Me',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				websiteUrl: 'https://chessofcards.com/',
			},
		],
		imageUrl: 'https://chessofcards.com/',
	},
	{
		displayNumber: '05',
		description: 'Welcome to my updated portfolio.',
		displayDate: 'September 2023',
		image: jamesWordenPortfolioThumbnail,
		displayWebsiteUrl: 'jamesworden.com',
		technologyBadges: [
			Technology.React,
			Technology.Gatsby,
			Technology.TailwindCSS,
			Technology.AWSS3,
			Technology.ReactThreeFiber,
		],
		buttons: [],
		imageUrl: 'https://www.jamesworden.com/',
	},
];
