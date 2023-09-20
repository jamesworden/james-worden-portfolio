export function scrollTo(elementId: string) {
	const element = document.getElementById(elementId);

	if (!element) {
		console.warn(`[Scroll To]: element with id ${elementId} not found!`);
		return;
	}

	const navbarHeight = 32;
	const offset = element.offsetTop - navbarHeight;

	window.scrollTo({
		top: offset,
		behavior: 'smooth',
	});
}
