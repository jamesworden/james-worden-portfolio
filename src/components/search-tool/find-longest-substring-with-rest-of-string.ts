export function findLongestSubstringLengthWithRestOfString(
	searchQuery: string,
	strArray: string[]
) {
	let longestSubstringBelongsToWord = '';
	let longestSubstring = '';
	let currentSubstring = '';

	for (const str of strArray) {
		for (let i = 0; i < str.length; i++) {
			currentSubstring += str[i];

			// If the current substring is not a prefix of searchQuery, reset it
			if (!searchQuery.startsWith(currentSubstring)) {
				currentSubstring = '';
			}

			// If the current substring is longer than the longest one found so far, update it
			if (currentSubstring.length > longestSubstring.length) {
				longestSubstring = currentSubstring;
				longestSubstringBelongsToWord = str;
			}
		}
	}

	// Append the rest of the word from the first string in strArray to the longestSubstring
	const firstIndexOfSubstring = longestSubstringBelongsToWord.indexOf(longestSubstring);
	const longestSubstringWithRestOfWord =
		longestSubstringBelongsToWord.slice(firstIndexOfSubstring);

	return {
		longestSubstring,
		longestSubstringWithRestOfWord,
	};
}
