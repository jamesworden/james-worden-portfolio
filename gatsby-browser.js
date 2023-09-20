import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './src/components/layout';
import { ThemeProvider } from './src/contexts/theme-context';
import { HamburgerMenuProvider } from './src/contexts/hamburger-menu-context';

export const wrapPageElement = ({ element, props }) => {
	return (
		<Layout currentPath={props.path}>
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

export const wrapRootElement = ({ element }) => (
	<ThemeProvider>
		<HamburgerMenuProvider>{element}</HamburgerMenuProvider>
	</ThemeProvider>
);

export const shouldUpdateScroll = () => false;
