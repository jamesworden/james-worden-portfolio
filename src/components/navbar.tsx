import * as React from 'react';
import '../styles/global.scss';
import { ToggleSwitch } from './toggle-switch';
import { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

export interface NavbarProps {
	contactSectionId?: string;
}

const DarkModeSvg = () => {
	return (
		<div className='flex mr-8 hidden xs:block flex relative'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='h-4 w-4 mt-2'
				viewBox='0 0 29.944 29.944'
			>
				<path
					id='Icon_feather-moon'
					data-name='Icon feather-moon'
					d='M31.5,19.185A13.5,13.5,0,1,1,16.815,4.5,10.5,10.5,0,0,0,31.5,19.185Z'
					transform='translate(-3.056 -3)'
					className='stroke-white fill-none stroke-2'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>

			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 23.112 22.908'
				className='h-4 w-4 stroke-white fill-none absolute left-4 bottom-4'
			>
				<path
					id='Icon_weather-stars'
					data-name='Icon weather-stars'
					d='M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z'
					transform='translate(-6.444 -5.076)'
				/>
			</svg>
		</div>
	);
};

/**
 * SVG Source: https://github.com/wcBurgess/Huddle-landing-page-with-tailwindCSS/blob/master/index.html
 */
const WavyNavbarSvg = () => {
	return (
		<svg
			className='max-h-6 sm:max-h-10 md:max-h-12 w-full'
			viewBox='0 0 1439 147'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			preserveAspectRatio='none'
		>
			<g fill='none'>
				<g transform='translate(-1.000000, -14.000000)'>
					<g className='fill-rose-950 dark:fill-gray-950 transition'>
						<path d='M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z'></path>
					</g>
					<g
						transform='translate(1.000000, 15.000000)'
						className='fill-rose-600 dark:fill-gray-600 transition'
					>
						<g transform='translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) '>
							<path
								d='M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496'
								opacity='0.100000001'
							></path>
							<path
								d='M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z'
								opacity='0.100000001'
							></path>
							<path
								d='M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z'
								opacity='0.200000003'
							></path>
						</g>
					</g>
				</g>
			</g>
		</svg>
	);
};

export const Navbar: React.FC<NavbarProps> = ({ contactSectionId }) => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(false);

	const handleContact = () => {
		if (contactSectionId) {
			scrollTo(contactSectionId);
		} else {
			// TODO: Switch to main page and then execute the function?
		}
	};

	const handleToggle = () => {
		const isDarkModeEnabled = !darkModeEnabled;
		setDarkModeEnabled(isDarkModeEnabled);

		isDarkModeEnabled
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	};

	const handleProjects = () => {};

	return (
		<div className='flex flex-col sticky top-0 z-50'>
			<nav className='flex justify-around bg-rose-950 dark:bg-gray-950 transition'>
				<div className='flex justify-between max-w-screen-lg w-full px-4 py-3'>
					<div className='flex'>
						<DarkModeSvg></DarkModeSvg>

						<div className='flex flex-col justify-around'>
							<ToggleSwitch toggled={handleToggle}></ToggleSwitch>
						</div>
					</div>

					<div className='flex'>
						<div className='flex flex-col justify-around mr-4'>
							<button
								className='text-xs md:text-sm uppercase px-3 md:px-6 py-2 tracking-widest bg-transparent text-white rounded-md tracking-widest transition hover:bg-rose-900 dark:hover:bg-gray-900'
								onClick={handleProjects}
							>
								Projects
							</button>
						</div>

						<div className='flex flex-col justify-around'>
							<button
								className='text-xs md:text-sm uppercase px-3 md:px-6 py-2 tracking-widest bg-transparent text-white rounded-md tracking-widest bg-rose-700 transition hover:bg-rose-600'
								onClick={handleContact}
							>
								Contact
							</button>
						</div>
					</div>
				</div>
			</nav>
			<WavyNavbarSvg></WavyNavbarSvg>
		</div>
	);
};
