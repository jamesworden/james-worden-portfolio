import * as React from 'react';

export interface ToggleSwitchProps {
	value: boolean;
	toggled: () => void;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ toggled, value }) => {
	return (
		<label className='relative inline-flex items-center cursor-pointer'>
			<input
				type='checkbox'
				value=''
				checked={value}
				className='sr-only peer'
				onChange={toggled}
			/>
			<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-rose-600"></div>
		</label>
	);
};
