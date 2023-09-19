export function getDisplayIndex(index: number, prefix = 0) {
	index++;
	return index < 10 ? `${prefix}${index}` : `${index}`;
}
