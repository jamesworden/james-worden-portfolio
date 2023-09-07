import * as React from 'react';
import { useEffect } from 'react';
import { ToggleSwitch } from '../toggle-switch';
import { useState } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link, navigate } from 'gatsby';
import { PageState } from '../../page-state';
import { DarkModeSvg } from './dark-mode-svg';
import { WavyNavbarSvg } from './wavy-navbar-svg';
import { THEME_UTILS } from '../../util/theme-utils';

export interface NavbarProps {
	contactSectionId?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ contactSectionId }) => {
	const [darkModeEnabled, setDarkModeEnabled] = useState(false);

	useEffect(() => {
		setDarkModeEnabled(THEME_UTILS.isDarkModeEnabled);
	});

	const handleContact = () => {
		if (contactSectionId) {
			scrollTo(contactSectionId);
		} else {
			const pageState: PageState = {
				scrollToContact: true,
			};

			navigate('/', {
				state: pageState,
			});
		}
	};

	const handleToggle = () => {
		setDarkModeEnabled(!darkModeEnabled);
		THEME_UTILS.setDarkModeEnabled(!darkModeEnabled);
		THEME_UTILS.updateWebkitThemeColor();
	};

	return (
		<div className='flex flex-col sticky top-0 z-50'>
			<nav className='flex justify-around bg-rose-950 dark:bg-gray-950 transition'>
				<div className='flex justify-between max-w-screen-lg w-full px-safe-or-2 py-3'>
					<div className='flex'>
						<DarkModeSvg></DarkModeSvg>

						<div className='flex flex-col justify-around'>
							<ToggleSwitch
								value={darkModeEnabled}
								toggled={handleToggle}
							></ToggleSwitch>
						</div>
					</div>

					<div className='flex'>
						<div className='flex flex-col justify-around mr-4'>
							<Link
								to='/'
								className='text-xs md:text-sm uppercase px-3 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-900 dark:bg-gray-900 hover:bg-rose-800 dark:hover:bg-gray-800'
							>
								Home
							</Link>
						</div>

						<div className='flex flex-col justify-around mr-4'>
							<Link
								to='/projects'
								className='text-xs md:text-sm uppercase px-3 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-800 dark:bg-gray-800 hover:bg-rose-700 dark:hover:bg-gray-700'
							>
								Projects
							</Link>
						</div>

						<div className='flex flex-col justify-around'>
							<button
								className='text-xs md:text-sm uppercase px-3 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-700 dark:bg-gray-700 hover:bg-rose-600 dark:hover:bg-gray-600'
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
