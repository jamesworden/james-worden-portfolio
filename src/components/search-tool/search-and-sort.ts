import _ from 'lodash';
import { SearchSettings } from '../models/search-settings';
import { SearchableAndSortable } from '../models/searchable-and-sortable';

interface ItemMetrics {
	sortBy: number[];
	orderBy: string[];
}

interface ItemsToMetrics {
	[itemId: string]: ItemMetrics;
}

export function searchAndSort<T extends SearchableAndSortable>(
	items: T[],
	searchSettings: SearchSettings<T>
) {
	if (items.length <= 1) {
		return items;
	}

	const itemsToMetrics = getItemsToMetrics<T>(items, searchSettings);
	const sortedItemsToMetrics = getSortedItemsToMetrics(itemsToMetrics);
	const sortedItems = getItemsSortedByItemsToMetrics<T>(items, sortedItemsToMetrics);
	return searchSettings.orderByAscending ? sortedItems : sortedItems.reverse();
}

function getItemsSortedByItemsToMetrics<T extends SearchableAndSortable>(
	items: T[],
	itemsToMetrics: ItemsToMetrics
) {
	const sortedItems: T[] = [];

	for (const [itemId] of Object.entries(itemsToMetrics)) {
		const item = items.find((item) => item.searchAndSortId === itemId)!;
		sortedItems.push(item);
	}

	return sortedItems;
}

function getItemsToMetrics<T extends SearchableAndSortable>(
	items: T[],
	searchSettings: SearchSettings<T>
) {
	const itemIdsToItemMetrics: ItemsToMetrics = {};

	for (const item of items) {
		itemIdsToItemMetrics[item.searchAndSortId] = {
			orderBy: [],
			sortBy: [],
		};
	}

	if (searchSettings.searchQuery.length > 0) {
		for (const option of searchSettings.searchByOptions) {
			if (option.checked) {
				for (const item of items) {
					const { sortBy, orderBy } = option.getSortableMetrics(
						item,
						searchSettings.searchQuery
					);
					itemIdsToItemMetrics[item.searchAndSortId].sortBy.push(sortBy);
					itemIdsToItemMetrics[item.searchAndSortId].orderBy.push(orderBy);
				}
			}
		}
	}

	return itemIdsToItemMetrics;
}

function getSortedItemsToMetrics(itemsToMetrics: ItemsToMetrics, sortByMetricIndex = 0) {
	const sortedItemIds: string[] = [];

	for (let [itemId, itemMetrics] of Object.entries(itemsToMetrics)) {
		const currentMetric = itemMetrics.sortBy[sortByMetricIndex];
		const currentOrderByMetric = itemMetrics.orderBy[sortByMetricIndex];

		if (currentMetric === null || currentMetric === undefined) {
			return itemsToMetrics;
		}

		if (sortedItemIds.length === 0) {
			sortedItemIds.push(itemId);
			continue;
		}

		insertItemIdAtCorrectPosition(
			sortedItemIds,
			itemsToMetrics,
			sortByMetricIndex,
			currentMetric,
			itemId,
			currentOrderByMetric
		);
	}

	const sortedItemsToMetrics: ItemsToMetrics = {};

	for (const sortedItemId of sortedItemIds) {
		sortedItemsToMetrics[sortedItemId] = itemsToMetrics[sortedItemId];
	}

	sortByMetricIndex++;
	return getSortedItemsToMetrics(sortedItemsToMetrics, sortByMetricIndex);
}

function insertItemIdAtCorrectPosition(
	sortedItemIds: string[],
	itemsToMetrics: ItemsToMetrics,
	sortByMetricIndex: number,
	currentMetric: number,
	itemId: string,
	currentOrderByMetric: string
) {
	const originalSortedItemIdLength = sortedItemIds.length;

	// Go through each sorted item id and see if the current one belongs before any of them
	for (let i = 0; i < sortedItemIds.length; i++) {
		const sortedItemId = sortedItemIds[i];
		const itemMetrics = itemsToMetrics[sortedItemId];
		const metric = itemMetrics.sortBy[sortByMetricIndex];

		if (currentMetric < metric) {
			// Insert before
			sortedItemIds.splice(i, 0, itemId);
			break;
		} else if (currentMetric === metric) {
			const orderByMetric = itemMetrics.orderBy[sortByMetricIndex];
			const orderMetrics = [currentOrderByMetric, orderByMetric];
			const [firstOrderByMetric] = orderMetrics.sort((a, b) => a.localeCompare(b));

			if (firstOrderByMetric === currentOrderByMetric) {
				// Insert before
				sortedItemIds.splice(i, 0, itemId);
				break;
			}
		}
	}

	// If the above for loop doesn't add the id before any other value
	if (sortedItemIds.length === originalSortedItemIdLength) {
		sortedItemIds.push(itemId);
	}
}
