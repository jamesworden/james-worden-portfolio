import * as React from 'react';

import '../styles/global.scss';

export interface ILayoutPageProps {
	children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<ILayoutPageProps> = ({ children }) => {
	return <main className='m-auto max-w-screen-lg flex flex-col pl-4 pr-4'>{children}</main>;
};

export default Layout;
