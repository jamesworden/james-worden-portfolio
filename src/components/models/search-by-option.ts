export interface SearchByOption<T> {
	label: string;
	checked: boolean;
	id: string;
	getSortableMetric: (
		item: T,
		searchQuery: string
	) => {
		sortBy: number;
		alphabetizeBy: string;
	};
}
