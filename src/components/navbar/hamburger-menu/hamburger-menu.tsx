import React from 'react';
import { Variants, motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/use-dimensions';
import { HamburgerToggleButton } from './hamburger-toggle-button';
import { SidebarNavigation } from './sidebar-navigation';

interface HamburgerMenuProps {
	toggled: () => void;
}

interface Dimensions {
	height: number;
	width: number;
}

const sidebarVariants: Variants = {
	open: (dimensions: Dimensions) => ({
		clipPath: `circle(${dimensions.height * 2 + 200}px at 40px 0px)`,
		transition: {
			type: 'spring',
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: (dimensions: Dimensions) => ({
		clipPath: `circle(18px at ${dimensions.width - 27}px -18px)`,
		transition: {
			delay: 0.5,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	}),
};

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggled }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const dimensions = useDimensions();

	return (
		<motion.nav
			className='h-100 flex flex-col justify-around w-[22px]'
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
		>
			<motion.div
				className='transition top-12 right-0 bottom-0 absolute bg-rose-950 dark:bg-gray-950 w-full h-screen max-w-xs'
				custom={dimensions}
				variants={sidebarVariants}
			></motion.div>

			<SidebarNavigation></SidebarNavigation>

			<HamburgerToggleButton toggled={() => toggleOpen()} />
		</motion.nav>
	);
};
