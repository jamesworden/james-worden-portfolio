import React from 'react';
import { ReactElement } from 'react';
import { Navbar } from './navbar/navbar';
import { PageContentProps } from './page-content';
import { navbarLinks } from '../data/navbar-links';
import { Overlay } from './overlay';
import { useCodeHighlight } from '../contexts/code-highlight-context';

export interface LayoutProps {
	children: ReactElement<PageContentProps>;
	currentPath: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentPath }) => {
	useCodeHighlight();

	return (
		<main className='bg-gray-100 dark:bg-gray-900 transition dark:text-gray-100 h-full min-h-screen justify-between flex flex-col'>
			<Navbar currentPath={currentPath} navbarLinks={navbarLinks}></Navbar>
			<Overlay />
			{children}
		</main>
	);
};
