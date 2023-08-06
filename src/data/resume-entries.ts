import { IResumeEntry, ResumeEntryPlacement } from '../components/resume-timeline';
import angularCsharpLogos from '../images/angular-csharp-logos.png';
import testAutomationLogos from '../images/test-automation-logos.png';
import undergradResearcher from '../images/undergrad-researcher.png';

export const resumeEntries: IResumeEntry[] = [
	{
		bulletPoints: [
			'Architected the user interface portion of a dashboard that displays charts relying on web socket updates.',
			'Was an integral part of our ‘Grid View’ initiative, converting many UI components into grids for higher data density.',
			'Updated our codebase from Angular 13 to 15, replacing packages in favor of the Angular CDK suite.',
		],
		company: 'Trimble MAPS',
		dateRange: '02/2023 – Current',
		jobTitle: 'Software Engineer II',
		location: 'Princeton, NJ',
		placement: ResumeEntryPlacement.Right,
		startMonthAndYear: 'February 2023',
		image: angularCsharpLogos,
	},
	{
		bulletPoints: [
			'Updated our codebase from Angular 11 to 13, drastically improving performance across four applications.',
			'Documented and completed an epic for improving the front-end unit test suite; this includes having migrating our test runner to Jest and removing, updating, and installing NPM packages for compatibility with one another.',
			'Created a microservice in our C# back-end that uses web sockets and a message bus to process and distribute data.',
		],
		company: 'Trimble MAPS',
		dateRange: '06/2022 – 2/2023',
		jobTitle: 'Software Engineer I',
		location: 'Princeton, NJ',
		placement: ResumeEntryPlacement.Left,
		startMonthAndYear: 'June 2022',
		image: angularCsharpLogos,
	},
	{
		bulletPoints: [
			'Helped design the architecture for a Playwright test automation codebase, testing four applications nightly.',
			'Wrote hundreds of automated end-to-end and API tests using Cypress, Playwright, and Postman.',
			'Discovered and thoroughly reported bugs on a regular basis using Jira.',
		],
		company: 'Trimble MAPS',
		dateRange: '06/2021 – 06/2022',
		jobTitle: 'SDET Intern',
		location: 'Princeton, NJ',
		placement: ResumeEntryPlacement.Right,
		startMonthAndYear: 'June 2021',
		image: testAutomationLogos,
	},
	{
		bulletPoints: [
			'Independently developed an API to retrieve incremental GPS coordinates between a given origin and destination address using Amazon Web Services, NodeJS, and Google Maps.',
			'Extracted text from Google Street View images using Google Cloud Vision to validate GPS locations.',
			'Continuously searching for innovative methods to prevent location spoofing.',
		],
		company: "St. John's University",
		dateRange: '03/2021 – 09/2021',
		jobTitle: 'Undergraduate Researcher',
		location: 'Queens, NY',
		placement: ResumeEntryPlacement.Left,
		startMonthAndYear: 'March 2021',
		image: undergradResearcher,
	},
];
