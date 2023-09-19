export function getDisplayIndex(index: number, prefix = 0) {
	return index < 10 ? `${prefix}${index}` : `${index}`;
}
