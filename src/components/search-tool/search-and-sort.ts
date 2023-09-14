import _ from 'lodash';
import { SearchSettings } from '../models/search-settings';

export function searchAndSort<T>(items: T[], searchSettings: SearchSettings<T>) {
	let sortedItems = [...items];

	if (searchSettings.searchQuery.length > 0) {
		for (const option of searchSettings.searchByOptions) {
			if (option.checked) {
				sortedItems = _.sortBy(sortedItems, (item) => {
					const { sortBy } = option.getSortableMetrics(item, searchSettings.searchQuery);
					return sortBy;
				});
				// sortedItems = _.orderBy(sortedItems, (item) => {
				// 	const { orderBy } = option.getSortableMetrics(item, searchSettings.searchQuery);
				// 	return orderBy;
				// });
			}
		}
	}

	return sortedItems;
}
