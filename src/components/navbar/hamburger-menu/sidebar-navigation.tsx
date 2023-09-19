import { Variants, motion } from 'framer-motion';
import React from 'react';

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
			{/* {[0, 1, 2, 3].map((i) => (
				<SidebarNavigationItem key={i} />
			))} */}
		</motion.ul>
	);
};
