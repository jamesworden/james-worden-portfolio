import * as React from 'react';
import { useState } from 'react';
import { PageContent } from '../components/page-content';
import { PageProps, graphql } from 'gatsby';

import '../styles/global.scss';
import { MarkdownRemarkNode, MarkdownRemarkQueryResult } from '../graphql-types';
import { BlogPostCard, IBlogPostCard } from '../components/blog-post-card';
import {
	SearchTool,
	SearchToolSettings,
	SortByOption,
} from '../components/search-tool/search-tool';
import { defaultBlogSearchSettings } from '../data/default-search-settings';

export { GlobalHead as Head } from '../components/global-head';

interface ProjectPageProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const projectsPage: React.FC<ProjectPageProps> = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const [searchSettings, setSearchSettings] = useState(defaultBlogSearchSettings);
	const blogPostCards = sortBlogPostCards(getBlogPostCardsFromEdges(edges), searchSettings);

	const handleSearchSettingsChange = (searchSettings: SearchToolSettings) => {
		setSearchSettings({ ...searchSettings });
	};

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</div>

			<div className='flex gap-x-6 mb-6'>
				<div className='flex flex-col gap-y-8'>
					{blogPostCards.map((blogPostCard, i) => (
						<BlogPostCard key={i} blogPostCard={blogPostCard}></BlogPostCard>
					))}
				</div>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900 hidden lg:block'></div>

				<div className='hidden lg:block'>
					<SearchTool
						settings={searchSettings}
						onChange={handleSearchSettingsChange}
					></SearchTool>
				</div>
			</div>
		</PageContent>
	);
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			edges {
				node {
					id
					excerpt(pruneLength: 250)
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						slug
						title
						description
						thumbnailId
						githubUrl
						category
						keywords
						featured
					}
				}
			}
		}
	}
`;

function getBlogPostCardsFromEdges(edges: MarkdownRemarkNode[]): IBlogPostCard[] {
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

function sortBlogPostCards(
	blogPostCards: IBlogPostCard[],
	searchToolSettings: SearchToolSettings
): IBlogPostCard[] {
	const { sortByOptions, orderByAscending } = searchToolSettings;

	// Sort the blogPostCards array using the custom compare function
	return blogPostCards
		.slice()
		.sort((a, b) => compareBySortOptions(a, b, sortByOptions, orderByAscending));
}

export default projectsPage;
