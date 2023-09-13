import * as React from 'react';
import { useState } from 'react';
import { PageContent } from '../components/page-content';
import { PageProps, graphql } from 'gatsby';

import '../styles/global.scss';
import { MarkdownRemarkNode, MarkdownRemarkQueryResult } from '../graphql-types';
import { BlogPostCard } from '../components/blog-post-card';
import { Checkbox } from '../components/checkbox';
import { SearchTool } from '../components/search-tool/search-tool';
export { GlobalHead as Head } from '../components/global-head';

export interface IBlogPostCard {
	slug: string;
	title: string;
	description: string;
	date: string;
	thumbnailId: string;
	githubUrl?: string;
	category?: string;
	keywords: string[];
	featured: boolean;
}

interface ProjectPageProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const projectsPage: React.FC<ProjectPageProps> = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const blogPostCards = getBlogPostCardsFromEdges(edges);

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</div>

			<div className='flex gap-x-6 justify-between mb-6'>
				<div className='flex flex-col gap-y-8'>
					{blogPostCards.map((blogPostCard, i) => (
						<BlogPostCard key={i} blogPostCard={blogPostCard}></BlogPostCard>
					))}
				</div>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900 hidden lg:block'></div>

				<div className='hidden lg:block'>
					<SearchTool></SearchTool>
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

export default projectsPage;
