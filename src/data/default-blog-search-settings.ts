import { IBlogPostCard } from '../components/blog-post-card';
import { SearchSettings } from '../components/models/search-settings';
import { findLongestSubstringLengthWithRestOfString } from '../components/search-tool/find-longest-substring-with-rest-of-string';

export const defaultBlogSearchSettings: SearchSettings<IBlogPostCard> = {
	orderByAscending: true,
	searchByOptions: [
		{
			checked: true,
			id: 'title',
			label: 'Title',
			getSortableMetric: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, [item.title]);

				return {
					sortBy: longestSubstring.length,
					alphabetizeBy: longestSubstringWithRestOfWord,
				};
			},
		},
		{
			checked: false,
			id: 'keywords',
			label: 'Keywords',
			getSortableMetric: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, item.keywords);

				return {
					sortBy: longestSubstring.length,
					alphabetizeBy: longestSubstringWithRestOfWord,
				};
			},
		},
	],
	sortByOptions: [
		{
			checked: true,
			id: 'featured',
			label: 'Featured',
			getSortableMetric: (item) => ({
				sortBy: item.featured ? 1 : -1,
				alphabetizeBy: item.title,
			}),
		},
		{
			checked: true,
			id: 'recent',
			label: 'Recent',
			getSortableMetric: (item) => ({
				sortBy: new Date(item.date).getTime(),
				alphabetizeBy: item.date,
			}),
		},
		{
			checked: true,
			id: 'category',
			label: 'Category',
			getSortableMetric: (item) => ({
				sortBy: item.category ? 1 : -1,
				alphabetizeBy: item.category ?? item.title,
			}),
		},
	],
	searchQuery: '',
};
