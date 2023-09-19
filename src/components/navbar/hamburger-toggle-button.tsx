import React from 'react';
import { Transition, Variants, motion } from 'framer-motion';

interface HamburgerToggleButtonProps {
	toggled: () => void;
}

interface PathProps {
	variants?: Variants;
	d?: string;
	transition?: Transition;
}

const Path: React.FC<PathProps> = ({ variants, d, transition }) => (
	<motion.path
		className='stroke-white'
		fill='white'
		strokeWidth='3'
		strokeLinecap='round'
		variants={variants}
		d={d}
		transition={transition}
	/>
);

export const HamburgerToggleButton: React.FC<HamburgerToggleButtonProps> = ({ toggled }) => {
	return (
		<button onClick={() => toggled()} className='absolute z-4'>
			<svg width='23' height='23' viewBox='0 0 23 23'>
				<Path
					variants={{
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					d='M 2 9.423 L 20 9.423'
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
	);
};
