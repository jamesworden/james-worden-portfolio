import React from 'react';
import { MagnifyingGlassSvg } from '../svgs/magnifying-glass-svg';

interface SearchBarProps {
	value: string;
	onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
	return (
		<div>
			<div className='flex items-center rounded-full shadow-md bg-white'>
				<MagnifyingGlassSvg></MagnifyingGlassSvg>

				<input
					className='py-2 px-4 rounded-full focus:outline-none bg-white text-black'
					type='text'
					placeholder='Search'
					value={value}
					onChange={(element) => onChange(element.target.value)}
				/>
			</div>
		</div>
	);
};

export { SearchBar };
