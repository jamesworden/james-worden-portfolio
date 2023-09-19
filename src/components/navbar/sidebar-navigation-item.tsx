import React from 'react';
import { motion } from 'framer-motion';

interface SidebarNavigationItemProps {}

export const SidebarNavigationItem: React.FC<SidebarNavigationItemProps> = () => {
	const variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return <motion.li variants={variants}>This is a menu item.</motion.li>;
};
