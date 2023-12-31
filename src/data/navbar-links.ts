import { navigate } from 'gatsby';
import { scrollTo } from '../util/scroll-to';
import { TRANSITION_DURATION_MS } from '../constants';
import { HouseSvg } from '../components/svgs/house-svg';
import { EssaySvg } from '../components/svgs/essay-svg';
import { HammerSvg } from '../components/svgs/hammer-svg';
import { SpeechBubbleSvg } from '../components/svgs/speech-bubble-svg';

export interface NavbarLink {
	svgElement: JSX.Element;
	label: string;
	onClick: (currentPath: string) => void;
	hotdogButtonClass: string;
}

export const navbarLinks: NavbarLink[] = [
	{
		hotdogButtonClass:
			'text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-900 dark:bg-gray-900 hover:bg-rose-800 dark:hover:bg-gray-800',
		label: 'Home',
		svgElement: HouseSvg,
		onClick: () => navigate('/'),
	},
	{
		hotdogButtonClass:
			'text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-800 dark:bg-gray-800 hover:bg-rose-700 dark:hover:bg-gray-700',
		label: 'Blog',
		svgElement: EssaySvg,
		onClick: () => navigate('/blog'),
	},
	{
		hotdogButtonClass:
			'text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-700 dark:bg-gray-700 hover:bg-rose-600 dark:hover:bg-gray-600',
		label: 'Projects',
		svgElement: HammerSvg,
		onClick: () => navigate('/projects'),
	},
	{
		hotdogButtonClass:
			'text-xs md:text-sm uppercase px-2 md:px-6 py-2 tracking-widest text-white rounded-md tracking-widest transition bg-rose-800 dark:bg-gray-800 hover:bg-rose-700 dark:hover:bg-gray-700',
		label: 'Contact',
		svgElement: SpeechBubbleSvg,
		onClick: (currentPath: string) => {
			let timeoutDuration = 0.5;

			if (currentPath !== '/') {
				navigate('/');
				timeoutDuration += TRANSITION_DURATION_MS * 1.5;
			}

			setTimeout(() => {
				scrollTo('contact-section');
			}, timeoutDuration);
		},
	},
];
