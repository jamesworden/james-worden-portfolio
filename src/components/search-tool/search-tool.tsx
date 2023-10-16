import React, { useState } from 'react';
import { Checkbox } from '../inputs/checkbox';
import { SearchBar } from './search-bar';
import { SortableCheckboxList } from '../inputs/sortable-checkbox-list';
import { SearchSettings } from '../models/search-settings';
import { SortByOption } from '../models/sort-by-option';
import { AnimatePresence, motion } from 'framer-motion';
import { CogSvg } from './cog-svg';

interface SearchToolProps<T> {
	settings: SearchSettings<T>;
	onChange: (settings: SearchSettings<T>) => void;
}

const SearchTool: React.FC<SearchToolProps<any>> = <T extends unknown>({
	settings,
	onChange,
}: SearchToolProps<T>) => {
	const [showingSearchSettings, setShowingSearchSettings] = useState(false);

	const handleShowingSearchOptionsChange = () => {
		setShowingSearchSettings(!showingSearchSettings);
	};

	const handleSearchBarInputChange = (value: string) => {
		settings.searchQuery = value;
		onChange({ ...settings });
	};

	const handleSearchByOptionChange = (checked: boolean, id: string) => {
		const numSelectedOptions = settings.searchByOptions.filter(
			(option) => option.checked
		).length;
		settings.searchByOptions.forEach((option) => {
			if (option.id === id && (checked || numSelectedOptions > 1)) {
				option.checked = checked;
			}
		});
		onChange({ ...settings });
	};

	const handleOrderByAscendingChange = (_: boolean) => {
		if (!settings.orderByAscending) {
			settings.orderByAscending = true;
		}
		onChange({ ...settings });
	};

	const handleOrderByDescendingChange = (_: boolean) => {
		if (settings.orderByAscending) {
			settings.orderByAscending = false;
		}
		onChange({ ...settings });
	};

	const handleSortByOptionsChange = (sortByOptions: SortByOption<T>[]) => {
		settings.sortByOptions = sortByOptions;
		onChange({ ...settings });
	};

	return (
		<div>
			<div>
				<div className='flex gap-x-4 justify-between'>
					<SearchBar
						value={settings.searchQuery}
						onChange={handleSearchBarInputChange}
					></SearchBar>

					<div>
						<motion.button
							onClick={handleShowingSearchOptionsChange}
							className='flex flex-col justify-around h-full focus:outline-none'
							whileTap={{ scale: 1.1, rotate: 90 }}
						>
							<CogSvg></CogSvg>
						</motion.button>
					</div>
				</div>
			</div>

			<AnimatePresence mode='wait'>
				<motion.div
					key={showingSearchSettings ? 'search-settings' : 'empty'}
					initial={{ height: 0, opacity: 0 }}
					animate={
						showingSearchSettings
							? {
									height: 'auto',
									opacity: 1,
									transition: {
										type: 'tween',
									},
							  }
							: {
									height: 0,
									opacity: 0,
									transition: {
										type: 'tween',
									},
							  }
					}
					exit={{ height: 0, opacity: 0 }}
					transition={{ duration: 0.15, delay: 0 }}
					className='mt-4 overflow-hidden'
				>
					{showingSearchSettings && (
						<div className='pb-12 pt-4 max-w-xs flex flex-col gap-y-8'>
							<div>
								<div className='text-lg mb-2'>Search by</div>

								{settings.searchByOptions.map((searchByOption, i) => (
									<Checkbox
										key={i}
										label={searchByOption.label}
										checked={searchByOption.checked}
										onChange={(checked) =>
											handleSearchByOptionChange(checked, searchByOption.id)
										}
									/>
								))}
							</div>

							<div>
								<div className='text-lg mb-2'>Sort by</div>

								<SortableCheckboxList
									sortByOptions={settings.sortByOptions}
									onChange={handleSortByOptionsChange}
								></SortableCheckboxList>
							</div>

							<div>
								<div className='text-lg mb-2'>Order by</div>

								<Checkbox
									label='Ascending'
									checked={settings.orderByAscending}
									onChange={handleOrderByAscendingChange}
								/>

								<Checkbox
									label='Descending'
									checked={!settings.orderByAscending}
									onChange={handleOrderByDescendingChange}
								/>
							</div>
						</div>
					)}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};

export { SearchTool };
