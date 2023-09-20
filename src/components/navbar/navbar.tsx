import React, { useState } from 'react';
import { ToggleSwitch } from '../inputs/toggle-switch';
import { Link, navigate } from 'gatsby';
import { DarkModeSvg } from './dark-mode-svg';
import { WavyNavbarSvg } from './wavy-navbar-svg';
import { DarkTheme, useTheme, useThemeUpdate } from '../../contexts/theme-context';
import { scrollTo } from '../../util/scroll-to';
import { TRANSITION_DURATION_MS } from '../../constants';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';

export interface NavbarProps {
	currentPath: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const isDarkModeOn = theme === DarkTheme;

	const scrollToContact = () => {
		if (currentPath !== '/') {
			navigate('/');

			setTimeout(() => {
				scrollTo('contact-section');
			}, TRANSITION_DURATION_MS * 1.2);
		}
	};

	const handleHamburgerToggle = () => {
		setHamburgerOpen(!hamburgerOpen);
	};

	return (
		<div className='flex flex-col sticky top-0 z-50'>
			<nav className='flex justify-around bg-rose-950 dark:bg-gray-950 transition'>
				<div className='flex justify-between max-w-screen-xl w-full px-safe-or-2 py-3'>
					<div className='flex'>
						<DarkModeSvg></DarkModeSvg>

						<div className='flex flex-col justify-around'>
							<ToggleSwitch value={isDarkModeOn} toggled={toggleTheme}></ToggleSwitch>
						</div>
					</div>

					<div className='md:hidden flex flex-col justify-around'>
						<HamburgerMenu toggled={() => handleHamburgerToggle()}></HamburgerMenu>
					</div>

					<div className='hidden md:flex'>
						<div className='flex flex-col justify-around mr-2 md:mr-4'>
							<Link
								to='/'
								className='text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-900 dark:bg-gray-900 hover:bg-rose-800 dark:hover:bg-gray-800'
							>
								Home
							</Link>
						</div>

						<div className='flex flex-col justify-around mr-2 md:mr-4'>
							<Link
								to='/blog'
								className='text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-800 dark:bg-gray-800 hover:bg-rose-700 dark:hover:bg-gray-700'
							>
								Blog
							</Link>
						</div>

						<div className='flex flex-col justify-around mr-2 md:mr-4'>
							<Link
								to='/projects'
								className='text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-700 dark:bg-gray-700 hover:bg-rose-600 dark:hover:bg-gray-600'
							>
								Projects
							</Link>
						</div>

						<div className='flex flex-col justify-around mr-2 md:mr-4'>
							<button
								className='text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-800 dark:bg-gray-800 hover:bg-rose-700 dark:hover:bg-gray-700'
								onClick={scrollToContact}
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
