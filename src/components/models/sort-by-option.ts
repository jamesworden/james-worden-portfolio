import { SortableMetric } from './sortable-metric';

export interface SortByOption<T> {
	label: string;
	checked: boolean;
	id: string;
	getValue: (item: T) => SortableMetric;
}
