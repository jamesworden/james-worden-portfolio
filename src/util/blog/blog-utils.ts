import { IBlogPostCard } from '../../components/blog-post-card';
import { SearchToolSettings, SortByOption } from '../../components/search-tool/search-tool';
import { MarkdownRemarkNode } from '../../graphql-types';

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

function compareBySortOptions(
	a: IBlogPostCard,
	b: IBlogPostCard,
	sortByOptions: SortByOption[],
	orderByAscending: boolean
): number {
	for (const sortByOption of sortByOptions) {
		if (sortByOption.checked) {
			const propA = a[sortByOption.id as keyof IBlogPostCard]!;
			const propB = b[sortByOption.id as keyof IBlogPostCard]!;

			// Compare based on the selected sortByOption
			if (propA < propB) {
				return orderByAscending ? -1 : 1;
			} else if (propA > propB) {
				return orderByAscending ? 1 : -1;
			}
		}
	}

	// If no sortByOption applied, maintain the original order
	return 0;
}

export function sortBlogPostCards(
	blogPostCards: IBlogPostCard[],
	searchToolSettings: SearchToolSettings
): IBlogPostCard[] {
	const { sortByOptions, orderByAscending } = searchToolSettings;

	// Sort the blogPostCards array using the custom compare function
	return blogPostCards
		.slice()
		.sort((a, b) => compareBySortOptions(a, b, sortByOptions, orderByAscending));
}
