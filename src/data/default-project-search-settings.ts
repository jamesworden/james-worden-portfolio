import { SearchSettings } from '../components/models/search-settings';
import { IProjectCard } from './project-cards';

export const defaultProjectSearchSettings: SearchSettings<IProjectCard> = {
	orderByAscending: true,
	searchByOptions: [
		// {
		// 	checked: true,
		// 	id: 'title',
		// 	label: 'Title',
		// },
		// {
		// 	checked: false,
		// 	id: 'technologies',
		// 	label: 'Technologies',
		// },
	],
	sortByOptions: [
		// {
		// 	checked: true,
		// 	id: 'featured',
		// 	label: 'Featured',
		// },
		// {
		// 	checked: true,
		// 	id: 'recent',
		// 	label: 'Recent',
		// },
	],
	searchQuery: '',
};
