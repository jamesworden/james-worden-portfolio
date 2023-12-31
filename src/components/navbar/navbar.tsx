import React from 'react';
import { ToggleSwitch } from '../inputs/toggle-switch';
import { WavyNavbarSvg } from '../svgs/wavy-navbar-svg';
import { DarkTheme, useTheme, useThemeUpdate } from '../../contexts/theme-context';
import { HamburgerMenu } from './hamburger-menu/hamburger-menu';
import { NavbarLink } from '../../data/navbar-links';

export interface NavbarProps {
	currentPath: string;
	navbarLinks: NavbarLink[];
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, navbarLinks }) => {
	const theme = useTheme();
	const toggleTheme = useThemeUpdate();
	const isDarkModeOn = theme === DarkTheme;

	return (
		<div className='flex flex-col sticky top-0 z-50'>
			<nav className='flex justify-around bg-rose-950 dark:bg-gray-950 transition'>
				<div className='flex justify-between max-w-screen-xl w-full px-safe-or-2 py-3'>
					<div className='flex flex-col justify-around'>
						<ToggleSwitch value={isDarkModeOn} toggled={toggleTheme}></ToggleSwitch>
					</div>

					<div className='md:hidden flex flex-col justify-around'>
						<HamburgerMenu
							currentPath={currentPath}
							navbarLinks={navbarLinks}
						></HamburgerMenu>
					</div>

					<div className='hidden md:flex gap-x-4'>
						{navbarLinks.map((navbarLink, i) => (
							<div key={i} className='flex flex-col justify-around'>
								<button
									className={navbarLink.hotdogButtonClass}
									onClick={() => navbarLink.onClick(currentPath)}
								>
									{navbarLink.label}
								</button>
							</div>
						))}
					</div>
				</div>
			</nav>
			<WavyNavbarSvg></WavyNavbarSvg>
		</div>
	);
};
