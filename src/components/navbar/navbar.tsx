import * as React from 'react';
import { ToggleSwitch } from '../inputs/toggle-switch';
import { Link, navigate } from 'gatsby';
import { PageState } from '../../page-state';
import { DarkModeSvg } from './dark-mode-svg';
import { WavyNavbarSvg } from './wavy-navbar-svg';
import { DarkTheme, useTheme, useThemeUpdate } from '../../contexts/theme-context';

export interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = () => {
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const isDarkModeOn = theme === DarkTheme;

	const scrollToContact = () => {
		const pageState: PageState = {
			scrollToContact: true,
		};
		navigate('/', {
			state: pageState,
		});
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

					<div className='flex'>
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
