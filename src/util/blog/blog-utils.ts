import { IBlogPostCard } from '../../components/blog-post-card';
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
