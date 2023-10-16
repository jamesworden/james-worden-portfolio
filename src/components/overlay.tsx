import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useHamburgerMenu, useHamburgerMenuUpdate } from '../contexts/hamburger-menu-context';

export const Overlay = () => {
	const hamburgerMenu = useHamburgerMenu();
	const toggleHamburgerMenu = useHamburgerMenuUpdate();

	return (
		<AnimatePresence>
			{hamburgerMenu.isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
					className='fixed top-0 left-0 right-0 bottom-0 bg-gray-950 z-30 cursor-pointer'
					onClick={() => toggleHamburgerMenu()}
				></motion.div>
			)}
		</AnimatePresence>
	);
};
