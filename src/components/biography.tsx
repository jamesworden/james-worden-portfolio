import React from 'react';
import headshot from '../images/headshot.jpg';

interface BiographyProps {
	nameClass?: string;
	occupationClass?: string;
}

export const Biography: React.FC<BiographyProps> = ({ nameClass, occupationClass }) => (
	<div className='flex'>
		<div className='flex justify-end'>
			<div className='relative mr-4'>
				<img
					alt='Headshot'
					src={headshot}
					className='h-16 w-16 rounded-full overflow-hidden object-cover'
				/>
			</div>
		</div>

		<div className='flex flex-col mt-2'>
			<span className={nameClass ?? 'text-white text-lg'}>James Worden</span>
			<span className={occupationClass ?? 'text-gray-300 text-xs'}>Software Engineer</span>
		</div>
	</div>
);
