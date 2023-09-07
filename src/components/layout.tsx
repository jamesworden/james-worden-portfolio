import * as React from 'react';
import { ReactElement } from 'react';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer';
import { PageContentProps } from './page-content';

export interface LayoutProps {
	children: ReactElement<PageContentProps>;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<main className='bg-gray-100 dark:bg-gray-900 transition dark:text-gray-100 h-full min-h-screen justify-between flex flex-col'>
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</main>
	);
};
