import React from 'react';
import { Variants, motion, useCycle } from 'framer-motion';
import { useDimensions } from '../../../hooks/use-dimensions';
import { HamburgerToggleButton } from './hamburger-toggle-button';
import { Link } from 'gatsby';
import headshot from '../../../images/headshot.jpg';

const MD_BREAKPOINT_IN_PIXELS = 768;

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
			delay: 0.2,
			type: 'spring',
			stiffness: 400,
			damping: 40,
		},
	}),
};

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ toggled }) => {
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
						<div className='flex gap-x-6'>
							<svg
								className='h-6 w-6 fill-gray-200'
								version='1.1'
								id='Capa_1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 495.398 495.398'
							>
								<g>
									<g>
										<g>
											<path
												d='M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z'
											/>
											<path
												d='M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z'
											/>
										</g>
									</g>
								</g>
							</svg>

							<Link className='font-semibold' onClick={() => toggleOpen()} to='/'>
								Home
							</Link>
						</div>

						<div className='mt-2 h-px bg-white opacity-40 w-full'></div>
					</li>
				</ul>
			</motion.div>

			<HamburgerToggleButton toggled={() => toggleOpen()} />
		</motion.nav>
	);
};
