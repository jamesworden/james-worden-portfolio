import React from 'react';
import cx from 'classnames';

interface CheckboxProps {
	label: string;
	checked: boolean;
	uncheckedLabelClass?: string;
	onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange, uncheckedLabelClass }) => {
	const handleCheckboxClick = () => {
		const newChecked = !checked;
		onChange(newChecked);
	};

	const inputId = `checkbox:${label}`;

	return (
		<div className='flex gap-x-2 items-center'>
			<input
				id={inputId}
				type='checkbox'
				className='hidden'
				checked={checked}
				onChange={() => {}}
			/>
			<label
				htmlFor={inputId}
				className={`flex items-center cursor-pointer transition`}
				onClick={handleCheckboxClick}
			>
				<div
					className={cx(
						'transition w-4 h-4 bg-transparent rounded border-2',
						checked
							? 'dark:border-emerald-400 border-rose-500'
							: 'dark:border-gray-400 border-gray-500',
						'relative'
					)}
				>
					{checked && (
						<div
							className={`transition w-3 h-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
								checked ? 'opacity-1' : 'opacity-0'
							}`}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='transition stroke-rose-400 dark:stroke-emerald-400'
								viewBox='0 0 24 24'
								fill='none'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							>
								<polyline points='20 6 9 17 4 12' />
							</svg>
						</div>
					)}
				</div>
				<span
					className={cx(
						'ml-2 transition',
						checked
							? 'dark:text-emerald-400 text-rose-500'
							: 'dark:text-gray-200 text-gray-700',
						!checked && uncheckedLabelClass ? uncheckedLabelClass : ''
					)}
				>
					{label}
				</span>
			</label>
		</div>
	);
};

export { Checkbox };
