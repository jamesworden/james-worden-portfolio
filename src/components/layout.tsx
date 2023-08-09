import * as React from 'react';
import '../styles/global.scss';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { ToggleSwitch } from './toggle-switch';
import { useState } from 'react';

export interface ILayoutPageProps {
	children: JSX.Element | JSX.Element[];
	contactSectionId?: string;
}

export const Layout: React.FC<ILayoutPageProps> = ({ children, contactSectionId }) => {
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
		<main className='bg-gray-100 dark:bg-gray-900 transition dark:text-gray-100'>
			<nav className='flex justify-around bg-rose-950 dark:bg-gray-950 transition sticky top-0 z-50'>
				{/* https://github.com/wcBurgess/Huddle-landing-page-with-tailwindCSS/blob/master/index.html */}
				<svg
					className='absolute mt-[56px] max-h-4 sm:max-h-8 md:max-h-12 w-full'
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
				<div className='flex justify-between max-w-screen-lg w-full px-4 py-3'>
					<div className='flex'>
						<div className='flex mr-3'>
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
								className='h-4 w-4 stroke-white fill-none'
							>
								<path
									id='Icon_weather-stars'
									data-name='Icon weather-stars'
									d='M6.444,19.416a2.827,2.827,0,0,0,1.98-.9A2.82,2.82,0,0,0,9.24,16.5a2.912,2.912,0,0,0,2.784,2.916A2.912,2.912,0,0,0,9.24,22.332a2.771,2.771,0,0,0-.816-2.016A2.827,2.827,0,0,0,6.444,19.416Zm2.8-8.64a5.515,5.515,0,0,0,3.852-1.764,5.493,5.493,0,0,0,1.584-3.936A5.493,5.493,0,0,0,16.26,9.012a5.569,5.569,0,0,0,3.864,1.764,5.562,5.562,0,0,0-2.748.852A5.767,5.767,0,0,0,15.4,13.7a5.643,5.643,0,0,0-.72,2.8,5.521,5.521,0,0,0-1.584-3.948A5.479,5.479,0,0,0,9.24,10.776ZM13.224,23.7a4.286,4.286,0,0,0,4.092-4.284A4.287,4.287,0,0,0,21.4,23.7a4.287,4.287,0,0,0-4.08,4.284,4.133,4.133,0,0,0-1.188-2.964A4.2,4.2,0,0,0,13.224,23.7ZM21.4,18.012a4.266,4.266,0,0,0,4.068-4.3A4.286,4.286,0,0,0,29.556,18a4.286,4.286,0,0,0-4.092,4.284A4.244,4.244,0,0,0,21.4,18.012Z'
									transform='translate(-6.444 -5.076)'
								/>
							</svg>
						</div>

						<div className='flex flex-col justify-around'>
							<ToggleSwitch toggled={handleToggle}></ToggleSwitch>
						</div>
					</div>

					<div className='flex'>
						{/* <div className='flex flex-col justify-around mr-4'>
							<button className='text-xs md:text-sm uppercase md:px-8 py-2 tracking-widest bg-transparent text-white rounded-md tracking-widest md:bg-rose-700 transition hover:bg-rose-600'>
								Blog
							</button>
						</div> */}

						<div className='flex flex-col justify-around mr-4'>
							<button
								className='text-xs md:text-sm uppercase md:px-8 py-2 tracking-widest bg-transparent text-white rounded-md tracking-widest transition hover:bg-rose-900 dark:hover:bg-gray-900'
								onClick={handleProjects}
							>
								Projects
							</button>
						</div>

						<div className='flex flex-col justify-around'>
							<button
								className='text-xs md:text-sm uppercase md:px-8 py-2 tracking-widest bg-transparent text-white rounded-md tracking-widest bg-rose-700 transition hover:bg-rose-600'
								onClick={handleContact}
							>
								Contact
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div className='m-auto max-w-screen-lg flex flex-col px-4 relative'>{children}</div>

			<footer className='w-full bg-rose-950 dark:bg-gray-950 flex justify-around'>
				<div className='max-w-screen-lg flex p-4 w-full m-auto'>
					<a
						className='mr-8 flex flex-col justify-around'
						href='https://www.linkedin.com/in/jameswordenny/'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 36 36'
						>
							<path
								id='Icon_simple-linkedin'
								data-name='Icon simple-linkedin'
								d='M30.67,30.678H25.34V22.324c0-1.992-.041-4.556-2.778-4.556-2.779,0-3.2,2.167-3.2,4.409v8.5H14.026V13.5h5.121v2.342h.069a5.618,5.618,0,0,1,5.055-2.775c5.4,0,6.4,3.555,6.4,8.183v9.429ZM8.005,11.149a3.1,3.1,0,1,1,3.1-3.1A3.093,3.093,0,0,1,8.005,11.149Zm2.673,19.528H5.332V13.5h5.346ZM33.338,0H2.657A2.625,2.625,0,0,0,0,2.593V33.406A2.624,2.624,0,0,0,2.657,36H33.333A2.634,2.634,0,0,0,36,33.407V2.593A2.635,2.635,0,0,0,33.333,0Z'
								className='fill-white'
							/>
						</svg>
					</a>

					<a
						className='mr-8 flex flex-col justify-around'
						href='https://github.com/jamesworden'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='32'
							viewBox='0 0 36 35.109'
						>
							<path
								id='Icon_simple-github'
								data-name='Icon simple-github'
								d='M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445'
								transform='translate(0 -0.446)'
								className='fill-white'
							/>
						</svg>
					</a>

					<a
						className='mr-8 flex flex-col justify-around'
						href='mailto:james@jamesworden.com'
						target='_blank'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='32'
							height='23'
							viewBox='0 0 37.141 25.713'
						>
							<g
								id='Icon_ionic-ios-mail'
								data-name='Icon ionic-ios-mail'
								transform='translate(-3.375 -7.875)'
							>
								<path
									id='Path_5'
									data-name='Path 5'
									d='M40.212,10.369l-9.607,9.785a.173.173,0,0,0,0,.25l6.723,7.16a1.159,1.159,0,0,1,0,1.643,1.164,1.164,0,0,1-1.643,0l-6.7-7.133a.183.183,0,0,0-.259,0L27.1,23.734a7.188,7.188,0,0,1-5.125,2.161,7.333,7.333,0,0,1-5.232-2.223l-1.571-1.6a.183.183,0,0,0-.259,0l-6.7,7.133a1.164,1.164,0,0,1-1.643,0,1.159,1.159,0,0,1,0-1.643l6.723-7.16a.19.19,0,0,0,0-.25L3.679,10.369a.176.176,0,0,0-.3.125V30.073A2.865,2.865,0,0,0,6.232,32.93H37.659a2.865,2.865,0,0,0,2.857-2.857V10.494A.179.179,0,0,0,40.212,10.369Z'
									transform='translate(0 0.658)'
									className='fill-white'
								/>
								<path
									id='Path_6'
									data-name='Path 6'
									d='M21.716,24.222a4.854,4.854,0,0,0,3.491-1.464L39.215,8.5a2.806,2.806,0,0,0-1.768-.625H5.994A2.787,2.787,0,0,0,4.226,8.5L18.234,22.758A4.854,4.854,0,0,0,21.716,24.222Z'
									transform='translate(0.23)'
									className='fill-white'
								/>
							</g>
						</svg>
					</a>
				</div>
			</footer>
		</main>
	);
};
