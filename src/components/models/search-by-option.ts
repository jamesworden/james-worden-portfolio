export interface SearchByOption<T> {
	label: string;
	checked: boolean;
	id: string;
	getSortableMetrics: (
		item: T,
		searchQuery: string
	) => {
		sortBy: number;
		orderBy: string;
	};
}
