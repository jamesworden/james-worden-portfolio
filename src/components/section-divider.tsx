import React from 'react';

export interface SectionDividerProps {
	displayNumber: string;
	displayName: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ displayNumber, displayName }) => {
	return (
		<div className='flex w-full'>
			<span className='pr-4 text-sm italic'>{displayNumber}</span>
			<span className='uppercase tracking-widest pr-4 text-sm'>{displayName}</span>
			<div className='flex flex-col justify-around w-full'>
				<hr className='border-bottom border-px border-gray-400 w-full dark:border-slate-600' />
			</div>
		</div>
	);
};
