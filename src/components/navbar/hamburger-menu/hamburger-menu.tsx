import React from 'react';
import { Variants, motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/use-dimensions';
import { HamburgerToggleButton } from './hamburger-toggle-button';
import headshot from '../../../images/headshot.jpg';
import { navbarLinks } from '../../../data/navbar-links/navbar-links';

const MD_BREAKPOINT_IN_PIXELS = 768;

interface HamburgerMenuProps {
	currentPath: string;
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
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	}),
};

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ currentPath }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	const dimensions = useDimensions();

	if (dimensions.width > MD_BREAKPOINT_IN_PIXELS && isOpen) {
		toggleOpen();
	}

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
			>
				<div className='p-6 flex'>
					<div className='flex justify-end'>
						<div className='relative mr-4'>
							<img
								alt='Headshot'
								src={headshot}
								className='h-16 w-16 rounded-full overflow-hidden object-cover'
							/>
						</div>
					</div>

					<div className='flex flex-col mt-2'>
						<span className='text-white text-lg'>James Worden</span>
						<span className='text-gray-300 text-xs'>Software Engineer</span>
					</div>
				</div>

				<ul className='w-full px-6 mt-8'>
					<li className='text-gray-200 list-none'>
						<div className='flex flex-col gap-y-6'>
							{navbarLinks.map((navbarLink, i) => (
								<div key={i}>
									<div className='flex gap-x-6'>
										{navbarLink.svgElement}

										<button
											className='font-semibold'
											onClick={() => {
												toggleOpen();
												navbarLink.onClick(currentPath);
											}}
										>
											{navbarLink.label}
										</button>
									</div>

									<div className='mt-2 h-px bg-white opacity-40 w-full'></div>
								</div>
							))}
						</div>
					</li>
				</ul>
			</motion.div>

			<HamburgerToggleButton toggled={() => toggleOpen()} />
		</motion.nav>
	);
};
