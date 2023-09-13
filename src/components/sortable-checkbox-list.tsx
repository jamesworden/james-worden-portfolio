import React, { useState } from 'react';
import cx from 'classnames';
import { Checkbox } from '../components/checkbox';
import { DragIndicatorSvg } from './drag-indicator-svg';

interface ListItem {
	id: string;
	label: string;
}

const SortableCheckboxList: React.FC<{ items: ListItem[] }> = ({ items }) => {
	const [selectedItemIds, setSelectedItemIds] = useState<string[]>(items.map((item) => item.id));
	const [draggedItem, setDraggedItem] = useState<string | null>(null);

	const handleCheckboxChange = (itemId: string) => {
		const isLastSelectedCheckbox =
			selectedItemIds.length === 1 && selectedItemIds.includes(itemId);
		if (isLastSelectedCheckbox) {
			return;
		}

		setSelectedItemIds((prevSelectedItems) => {
			if (prevSelectedItems.includes(itemId)) {
				return prevSelectedItems.filter((id) => id !== itemId);
			} else {
				return [...prevSelectedItems, itemId];
			}
		});
	};

	const handleDragStart = (itemId: string) => {
		setDraggedItem(itemId);
	};

	const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
		e.preventDefault();
	};

	const handleDrop = (targetItemId: string) => {
		if (draggedItem) {
			const newSelectedItems = [...selectedItemIds];
			const sourceItemIndex = newSelectedItems.indexOf(draggedItem);
			const targetItemIndex = newSelectedItems.indexOf(targetItemId);

			if (sourceItemIndex !== -1 && targetItemIndex !== -1) {
				newSelectedItems.splice(sourceItemIndex, 1);
				newSelectedItems.splice(targetItemIndex, 0, draggedItem);
				setSelectedItemIds(newSelectedItems);
			}

			setDraggedItem(null);
		}
	};

	const sortedItems = items.sort((a, b) => {
		const indexA = selectedItemIds.indexOf(a.id);
		const indexB = selectedItemIds.indexOf(b.id);

		// Handle cases where one of the items is not in selectedItemIds
		if (indexA === -1 && indexB === -1) {
			return 0; // Both items are not in selectedItemIds, preserve the order
		} else if (indexA === -1) {
			return 1; // 'b' is in selectedItemIds, so it comes first
		} else if (indexB === -1) {
			return -1; // 'a' is in selectedItemIds, so it comes first
		}

		// Compare based on their positions in selectedItemIds
		return indexA - indexB;
	});

	return (
		<ul className='space-y-2'>
			{sortedItems.map((item) => {
				const isSelected = selectedItemIds.includes(item.id);

				return (
					<li
						key={item.id}
						className={cx(
							'flex justify-between items-center p-2 bg-white border rounded shadow cursor-move',
							{
								'bg-blue-100': isSelected,
							}
						)}
						draggable
						onDragStart={() => handleDragStart(item.id)}
						onDragOver={handleDragOver}
						onDrop={() => handleDrop(item.id)}
						data-item-id={item.id}
					>
						<div className='flex gap-x-3'>
							<div className='flex flex-col justify-around'>
								<DragIndicatorSvg></DragIndicatorSvg>
							</div>

							<Checkbox
								label={item.label}
								checked={isSelected}
								onChange={() => handleCheckboxChange(item.id)}
							/>
						</div>

						<span className='text-gray-400'>
							{isSelected ? selectedItemIds.indexOf(item.id) + 1 : ''}
						</span>
					</li>
				);
			})}
		</ul>
	);
};

export { SortableCheckboxList };
