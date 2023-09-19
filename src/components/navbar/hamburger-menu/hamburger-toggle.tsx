import React, { useRef } from 'react';
import { Variants, motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/use-dimensions';
import { HamburgerToggleButton } from './hamburger-toggle-button';
import { SidebarNavigation } from './sidebar-navigation';

interface HamburgerToggleProps {
	toggled: () => void;
}

const sidebarVariants: Variants = {
	open: (height: number = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: 'circle(18px at 27px 23px)',
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	},
};

export const HamburgerToggle: React.FC<HamburgerToggleProps> = ({ toggled }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const containerRef = useRef(null);
	const height = useDimensions(containerRef);

	return (
		<motion.nav
			className='h-100 flex flex-col justify-around'
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			custom={height}
			ref={containerRef}
		>
			<motion.div
				className='top-0 left-0 bottom-0 absolute bg-rose-950 dark:bg-gray-950 w-full h-screen z-2 max-w-sm'
				variants={sidebarVariants}
			></motion.div>

			<SidebarNavigation></SidebarNavigation>

			<HamburgerToggleButton toggled={() => toggleOpen()} />
		</motion.nav>
	);
};
