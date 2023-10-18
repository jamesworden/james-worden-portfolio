import { IBlogPostCard } from '../../components/blog-post-card';
import { NAVBAR_OFFSET_Y_PX } from '../../constants';
import { MarkdownRemarkHeading, MarkdownRemarkNode } from '../../graphql-types';

export function getBlogPostCardsFromEdges(edges: MarkdownRemarkNode[]): IBlogPostCard[] {
	return edges.map((edge) => ({
		date: edge.node.frontmatter.date,
		description: edge.node.frontmatter.description,
		title: edge.node.frontmatter.title,
		slug: edge.node.frontmatter.slug,
		thumbnailId: edge.node.frontmatter.thumbnailId,
		githubUrl: edge.node.frontmatter.githubUrl,
		category: edge.node.frontmatter.category,
		keywords: getBlogPostCardKeywords(edge.node.frontmatter.keywords),
		featured: getBlogPostCardFeaturedStatus(edge.node.frontmatter.featured),
	}));
}

function getBlogPostCardKeywords(keywordsString?: string) {
	const stringIsEmpty = !keywordsString || keywordsString.length === 0;

	if (stringIsEmpty) {
		return [];
	}

	return keywordsString.split(',');
}

function getBlogPostCardFeaturedStatus(featuredString?: string) {
	const stringIsEmpty = !featuredString || featuredString.length === 0;

	if (stringIsEmpty) {
		return false;
	}

	return featuredString.trim().toLocaleLowerCase() === 'true';
}

export interface OrganizedHeading {
	parentHeading: MarkdownRemarkHeading;
	subHeadings: MarkdownRemarkHeading[];
}

export function getOrganizedHeadings(headings: MarkdownRemarkHeading[], parentHeadingDepth = 2) {
	const organizedHeadings: OrganizedHeading[] = [];

	for (let i = 0; i < headings.length; i++) {
		const heading = headings[i];

		if (heading.depth === parentHeadingDepth) {
			organizedHeadings.push({ parentHeading: heading, subHeadings: [] });
		} else if (heading.depth >= parentHeadingDepth) {
			organizedHeadings[organizedHeadings.length - 1].subHeadings.push(heading);
		}
	}

	return organizedHeadings;
}

export function wrapTablesInContainers(parentElement: HTMLElement, containerClassName: string) {
	const tables = parentElement.querySelectorAll('table');

	tables.forEach((table) => {
		const container = document.createElement('div');
		container.className = containerClassName;
		const alreadyWrapped = table.parentElement?.classList.contains(containerClassName);

		if (table.parentNode && !alreadyWrapped) {
			table.parentNode.insertBefore(container, table);
			container.appendChild(table);
		}
	});
}

export function getActiveHeaderElement(): Element | null {
	const headerElements = document.querySelectorAll(
		'h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]'
	);

	if (hasScrolledToBottomOfPage()) {
		return headerElements[headerElements.length - 1];
	}

	let closestDistance = Infinity;
	let headerIndex = 0;

	headerElements.forEach((header, i) => {
		const headerOffset = header.getBoundingClientRect().top;

		if (headerOffset > NAVBAR_OFFSET_Y_PX && headerOffset < closestDistance) {
			closestDistance = headerOffset;
			headerIndex = i - 1;
		}
	});

	return headerElements[headerIndex] ?? null;
}

function hasScrolledToBottomOfPage() {
	const scrollY = window.scrollY || window.pageYOffset;
	const windowHeight = window.innerHeight;
	const documentHeight = Math.max(
		document.body.scrollHeight,
		document.body.offsetHeight,
		document.documentElement.clientHeight,
		document.documentElement.scrollHeight,
		document.documentElement.offsetHeight
	);

	return scrollY + windowHeight >= documentHeight;
}
