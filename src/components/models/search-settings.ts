import { SearchByOption } from './search-by-option';
import { SortByOption } from './sort-by-option';

export interface SearchSettings<T> {
	searchByOptions: SearchByOption<T>[];
	sortByOptions: SortByOption<T>[];
	orderByAscending: boolean;
	searchQuery: string;
}
