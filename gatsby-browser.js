import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './src/components/layout';

export const wrapPageElement = ({ element }) => (
	<Layout>
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
	</Layout>
);

export const shouldUpdateScroll = () => false;
