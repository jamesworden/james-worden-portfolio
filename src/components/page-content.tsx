import * as React from 'react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TRANSITION_DURATION_MS } from '../constants';

export interface PageContentProps {
	children: ReactNode;
	onAnimationComplete?: () => void;
}

export const PageContent: React.FC<PageContentProps> = ({ onAnimationComplete, children }) => (
	<motion.main
		className='h-full w-full grow flex flex-col justify-between'
		onAnimationComplete={onAnimationComplete}
		initial={{ opacity: 0, x: -100 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x: 100 }}
		transition={{
			type: 'spring',
			mass: 0.35,
			duration: TRANSITION_DURATION_MS,
		}}
	>
		<div className='m-auto max-w-screen-xl flex flex-col px-safe-or-2 relative grow w-full'>
			{children}
		</div>
	</motion.main>
);
