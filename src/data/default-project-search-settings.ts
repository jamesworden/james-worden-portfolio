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
			getSortableMetric: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, [
						item.displayWebsiteUrl,
					]);

				return {
					sortBy: longestSubstring.length,
					alphabetizeBy: longestSubstringWithRestOfWord,
				};
			},
		},
		{
			checked: false,
			id: 'technologies',
			label: 'Technologies',
			getSortableMetric: (item, searchQuery) => {
				const { longestSubstring, longestSubstringWithRestOfWord } =
					findLongestSubstringLengthWithRestOfString(searchQuery, item.technologyBadges);

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
			id: 'recent',
			label: 'Recent',
			getSortableMetric: (item) => ({
				sortBy: new Date(item.displayDate).getTime(),
				alphabetizeBy: item.displayDate,
			}),
		},
	],
	searchQuery: '',
};
