import { IBlogPostCard } from '../components/blog-post-card';
import { SearchSettings } from '../components/models/search-settings';

export const defaultBlogSearchSettings: SearchSettings<IBlogPostCard> = {
	orderByAscending: true,
	searchByOptions: [
		// {
		// 	checked: true,
		// 	id: 'title',
		// 	label: 'Title',
		// },
		// {
		// 	checked: false,
		// 	id: 'keywords',
		// 	label: 'Keywords',
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
		// {
		// 	checked: true,
		// 	id: 'category',
		// 	label: 'Category',
		// },
	],
	searchQuery: '',
};
