import _ from 'lodash';
import { SearchSettings } from '../models/search-settings';
import { SortableMetric } from '../models/sortable-metric';

export function searchAndSort<T>(items: T[], searchSettings: SearchSettings<T>): T[] {
	if (items.length <= 1) {
		return items;
	}

	const itemsWithMetrics: {
		item: T;
		sortableMetrics: SortableMetric[];
	}[] = [];

	for (let i = 0; i < items.length; i++) {
		itemsWithMetrics.push({
			item: items[i],
			sortableMetrics: [],
		});
	}

	for (const option of searchSettings.searchByOptions) {
		if (option.checked) {
			for (const itemWithMetrics of itemsWithMetrics) {
				itemWithMetrics.sortableMetrics.push(
					option.getSortableMetric(itemWithMetrics.item, searchSettings.searchQuery)
				);
			}
		}
	}

	for (const option of searchSettings.sortByOptions) {
		if (option.checked) {
			for (const itemWithMetrics of itemsWithMetrics) {
				itemWithMetrics.sortableMetrics.push(
					option.getSortableMetric(itemWithMetrics.item)
				);
			}
		}
	}

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

		const lastItemIndex = a.sortableMetrics.length - 1;

		return a.sortableMetrics[lastItemIndex].alphabetizeBy.localeCompare(
			b.sortableMetrics[lastItemIndex].alphabetizeBy
		);
	});

	return itemsWithMetrics.map(({ item }) => item);
}
