import React from 'react';
import { AnimatePresence } from 'framer-motion';

export const wrapPageElement = ({ element }) => (
	<AnimatePresence
		mode='wait'
		initial={false}
		onExitComplete={() => {
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0 });
			}
		}}
	>
		{element}
	</AnimatePresence>
);

export const shouldUpdateScroll = () => false;
