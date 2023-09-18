import React, { useState } from 'react';
import cx from 'classnames';
import { Checkbox } from './checkbox';
import { DragIndicatorSvg } from '../drag-indicator-svg';
import { SortByOption } from '../models/sort-by-option';

interface SortableCheckboxListProps<T> {
	sortByOptions: SortByOption<T>[];
	onChange: (sortByOptions: SortByOption<T>[]) => void;
}

const SortableCheckboxList: React.FC<SortableCheckboxListProps<any>> = <T extends unknown>({
	sortByOptions,
	onChange,
}: SortableCheckboxListProps<T>) => {
	const [draggedOptionId, setDraggedOptionId] = useState<string | null>(null);

	const handleCheckboxChange = (optionId: string) => {
		const option = sortByOptions.find((option) => option.id === optionId)!;
		const checkedOptions = sortByOptions.filter((option) => option.checked);

		if (option.checked && checkedOptions.length === 1) {
			return;
		}

		sortByOptions.forEach((option) => {
			if (option.id === optionId) {
				option.checked = !option.checked;
			}
		});

		onChange(sortByOptions);
	};

	const handleDragStart = (optionId: string) => {
		setDraggedOptionId(optionId);
	};

	const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
		e.preventDefault();
	};

	const handleDrop = (targetOptionId: string) => {
		if (!draggedOptionId) {
			return;
		}

		const newCheckedOptionIds = [
			...sortByOptions.filter((option) => option.checked).map((option) => option.id),
		];
		const sourceOptionIndex = newCheckedOptionIds.indexOf(draggedOptionId);
		const targetOptionIndex = newCheckedOptionIds.indexOf(targetOptionId);

		if (sourceOptionIndex !== -1 && targetOptionIndex !== -1) {
			newCheckedOptionIds.splice(sourceOptionIndex, 1);
			newCheckedOptionIds.splice(targetOptionIndex, 0, draggedOptionId);

			const newSortByOptions = newCheckedOptionIds.map((optionId) => {
				return sortByOptions.find((option) => option.id === optionId)!;
			});

			for (const option of sortByOptions) {
				if (!newSortByOptions.includes(option)) {
					newSortByOptions.push(option);
				}
			}

			onChange(newSortByOptions);
		}

		setDraggedOptionId(null);
	};

	const sortedOptions = sortByOptions.sort((a, b) => {
		const checkedOptionIds = sortByOptions
			.filter((option) => option.checked)
			.map((option) => option.id);
		const indexA = checkedOptionIds.indexOf(a.id);
		const indexB = checkedOptionIds.indexOf(b.id);

		// Handle cases where one of the options is not in checkedOptionIds
		if (indexA === -1 && indexB === -1) {
			return 0; // Both options are not in checkedOptionIds, preserve the order
		} else if (indexA === -1) {
			return 1; // 'b' is in checkedOptionIds, so it comes first
		} else if (indexB === -1) {
			return -1; // 'a' is in checkedOptionIds, so it comes first
		}

		// Compare based on their positions in checkedOptionIds
		return indexA - indexB;
	});

	return (
		<ul className='space-y-2'>
			{sortedOptions.map((option) => {
				const checkedOptionIds = sortByOptions
					.filter((option) => option.checked)
					.map((option) => option.id);

				const isChecked = checkedOptionIds.includes(option.id);

				return (
					<li
						key={option.id}
						className={cx(
							'flex justify-between items-center p-2 bg-white border rounded shadow cursor-move',
							{
								'bg-blue-100': isChecked,
							}
						)}
						draggable
						onDragStart={() => handleDragStart(option.id)}
						onDragOver={handleDragOver}
						onDrop={() => handleDrop(option.id)}
						data-item-id={option.id}
					>
						<div className='flex gap-x-3'>
							<div className='flex flex-col justify-around'>
								<DragIndicatorSvg></DragIndicatorSvg>
							</div>

							<Checkbox
								label={option.label}
								uncheckedLabelClass='dark:text-gray-800'
								checked={isChecked}
								onChange={() => handleCheckboxChange(option.id)}
							/>
						</div>

						<span className='text-gray-400'>
							{isChecked ? checkedOptionIds.indexOf(option.id) + 1 : ''}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export { SortableCheckboxList };
