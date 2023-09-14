import { SearchToolSettings } from '../components/search-tool/search-tool';

export const defaultBlogSearchSettings: SearchToolSettings = {
	orderByAscending: true,
	searchByOptions: [
		{
			checked: true,
			id: 'title',
			label: 'Title',
		},
		{
			checked: false,
			id: 'keywords',
			label: 'Keywords',
		},
	],
	sortByOptions: [
		{
			checked: true,
			id: 'featured',
			label: 'Featured',
		},
		{
			checked: true,
			id: 'recent',
			label: 'Recent',
		},
		{
			checked: true,
			id: 'category',
			label: 'Category',
		},
	],
};
