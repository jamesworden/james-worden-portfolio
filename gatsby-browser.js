import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './src/components/layout';
import { ThemeProvider } from './src/contexts/theme-context';

export const wrapPageElement = ({ element }) => {
	return (
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
};

export const wrapRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

export const shouldUpdateScroll = () => false;
