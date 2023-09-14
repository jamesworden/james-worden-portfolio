import { SearchSettings } from '../components/models/search-settings';
import { findLongestSubstringLengthWithRestOfString } from '../components/search-tool/find-longest-substring-with-rest-of-string';
import { IProjectCard } from './project-cards';

export const defaultProjectSearchSettings: SearchSettings<IProjectCard> = {
	orderByAscending: true,
	searchByOptions: [
		{
			checked: true,
			id: 'title',
			label: 'Title',
			getSortableMetrics: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, [
						item.displayWebsiteUrl,
					]);

				return {
					sortBy: -longestSubstring.length,
					orderBy: longestSubstringWithRestOfWord,
				};
			},
		},
		{
			checked: false,
			id: 'technologies',
			label: 'Technologies',
			getSortableMetrics: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, item.technologyBadges);

				return {
					sortBy: -longestSubstring.length,
					orderBy: longestSubstringWithRestOfWord,
				};
			},
		},
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
