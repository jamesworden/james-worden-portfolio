import { SortableMetric } from './sortable-metric';

export interface SearchByOption<T> {
	label: string;
	checked: boolean;
	id: string;
	getValue: (item: T) => SortableMetric;
}
