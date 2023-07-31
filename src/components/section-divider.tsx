import * as React from 'react';

import '../styles/global.scss';

export interface ISectionDividerPageProps {
	displayNumber: string;
	displayName: string;
}

const Layout: React.FC<ISectionDividerPageProps> = ({ displayNumber, displayName }) => {
	return (
		<div className='flex w-full'>
			<span className='pr-4'>{displayNumber}</span>
			<span className='uppercase tracking-widest pr-4'>{displayName}</span>
			<div className='flex flex-col justify-around w-full'>
				<hr className=' border border-black w-full' />
			</div>
		</div>
	);
};

export default Layout;
