import bobWordenThumbnail from '../images/bob-worden-thumbnail.png';
import jamesWordenResearchThumbnail from '../images/james-worden-research-thumbnail.png';
import harvardOfQueensThumbnail from '../images/harvard-of-queens-thumbnail.png';
import chessOfCardsThumbnail from '../images/chess-of-cards-thumbnail.png';

interface ProjectCardButton {
	websiteUrl: string;
	displayText: string;
	buttonClassName: string;
}

export interface IProjectCard {
	displayNumber: string;
	technologyBadges: string[];
	displayWebsiteUrl: string;
	displayDate: string;
	description: string;
	image: any;
	buttons: ProjectCardButton[];
	githubUrl?: string;
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
			'React',
			'Gatsby',
			'TypeScript',
			'CSS',
			'Wordpress',
			'Plesk',
			'Digital Ocean',
			'Netlify',
		],
		buttons: [
			{
				websiteUrl: 'https://www.bobworden.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
		],
		githubUrl: 'https://github.com/jamesworden/bob-worden',
	},
	{
		displayNumber: '02',
		description:
			"A tool that I created to assist myself in completing research with Dr. Erald Troja from St. John's University; I was able to aggregate data and statistics using my own API's that were featured in our collaborative research paper.",
		displayDate: 'March 2021',
		displayWebsiteUrl: 'research.jamesworden.com',
		image: jamesWordenResearchThumbnail,
		technologyBadges: ['React', 'TypeScript', 'CSS', 'Webpack', 'GCP', 'AWS', 'Serverless'],
		buttons: [
			{
				websiteUrl: 'https://research.jamesworden.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
			{
				websiteUrl:
					'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=hwqevicAAAAJ&citation_for_view=hwqevicAAAAJ:_kc_bZDykSQC',
				buttonClassName: 'text-rose-900 border border-rose-900',
				displayText: 'Research Paper',
			},
		],
		githubUrl: 'https://github.com/jamesworden/jamesworden-research',
	},
	{
		displayNumber: '03',
		displayWebsiteUrl: 'harvardofqueens.com',
		description:
			"Students of St. John's University often refer to their school as the Harvard of Queens. This wordle clone uses a list of bars, buildings, phrases, that many students are familiar with.",
		displayDate: 'March 2022',
		image: harvardOfQueensThumbnail,
		technologyBadges: ['JavaScript', 'HTML', 'CSS', 'Webpack', 'AWS'],
		buttons: [
			{
				websiteUrl: 'https://harvardofqueens.com/',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				displayText: 'Show Me',
			},
		],
		githubUrl: 'https://github.com/jamesworden/harvard-of-queens-wordle',
	},
	{
		displayNumber: '04',
		displayWebsiteUrl: 'chessofcards.com',
		description:
			'A two player game requiring the strategy of chess and the luck of playing cards. A timer forces players to make moves quickly and effectively.',
		displayDate: 'October 2022',
		technologyBadges: ['C#', 'Angular', 'RXJS', 'CSS', 'TypeScript', 'AWS'],
		image: chessOfCardsThumbnail,
		buttons: [
			{
				displayText: 'Show Me',
				buttonClassName: 'bg-rose-900 hover:bg-rose-800 text-white',
				websiteUrl: 'https://chessofcards.com/',
			},
		],
	},
];
