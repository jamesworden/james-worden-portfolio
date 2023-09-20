import { Variants, motion } from 'framer-motion';
import React from 'react';
import { SidebarNavigationItem } from './sidebar-navigation-item';

interface SidebarNavigationProps {}

const variants: Variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

export const SidebarNavigation: React.FC<SidebarNavigationProps> = ({}) => {
	return (
		<motion.ul variants={variants} className='absolute z-2'>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
			<li>Test</li>
		</motion.ul>
	);
};
