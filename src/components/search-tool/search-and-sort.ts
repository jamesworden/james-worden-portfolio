import _ from 'lodash';
import { SearchSettings } from '../models/search-settings';
import { SortableMetric } from '../models/sortable-metric';

export function searchAndSort<T>(items: T[], searchSettings: SearchSettings<T>): T[] {
	if (items.length <= 1) {
		return items;
	}

	const sortableMetrics: {
		[itemIndex: number]: SortableMetric[];
	} = {};

	// Initialize
	for (let i = 0; i < items.length; i++) {
		sortableMetrics[i] = [];
	}

	// Calculate and push search setting metrics
	for (const option of searchSettings.searchByOptions) {
		if (option.checked) {
			for (let i = 0; i < items.length; i++) {
				const sortableMetric = option.getSortableMetric(
					items[i],
					searchSettings.searchQuery
				);
				sortableMetrics[i].push(sortableMetric);
			}
		}
	}

	// Calculate and push sort setting metrics
	for (const option of searchSettings.sortByOptions) {
		if (option.checked) {
			for (let i = 0; i < items.length; i++) {
				const sortableMetric = option.getSortableMetric(items[i]);
				sortableMetrics[i].push(sortableMetric);
			}
		}
	}

	// Associate items with their metrics
	const itemsWithMetrics: {
		item: T;
		sortableMetrics: SortableMetric[];
	}[] = [];

	for (let i = 0; i < items.length; i++) {
		itemsWithMetrics.push({
			item: items[i],
			sortableMetrics: sortableMetrics[i],
		});
	}

	// Sort items with their metrics or alphebetize if same metric
	itemsWithMetrics.sort((a, b) => {
		for (let i = 0; i < a.sortableMetrics.length; i++) {
			if (a.sortableMetrics[i].sortBy > b.sortableMetrics[i].sortBy) {
				return -1;
			} else if (a.sortableMetrics[i].sortBy === b.sortableMetrics[i].sortBy) {
				continue;
			} else {
				return 1;
			}
		}

		// If down to last metric and both items are of equal sort value, alphabetize them.
		const lastItemIndex = a.sortableMetrics.length - 1;
		return a.sortableMetrics[lastItemIndex].alphabetizeBy.localeCompare(
			b.sortableMetrics[lastItemIndex].alphabetizeBy
		);
	});

	return itemsWithMetrics.map(({ item }) => item);
}
