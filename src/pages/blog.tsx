import * as React from 'react';
import { PageContent } from '../components/page-content';
import { Link, PageProps, graphql } from 'gatsby';

import '../styles/global.scss';
import { MarkdownRemarkQueryResult } from '../graphql-types';
import { BlogPostCard } from '../components/blog-post-card';
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
	const blogPostCards: IBlogPostCard[] = edges.map((edge) => ({
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

	// TODO: Dynamically filter blog posts.

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</div>

			<div className='flex gap-x-4 justify-between mb-6'>
				<div className='flex flex-col gap-y-8'>
					{blogPostCards.map((blogPostCard) => (
						<BlogPostCard blogPostCard={blogPostCard}></BlogPostCard>
					))}
				</div>

				<div className='grow hidden lg:block'>
					<div className='p-4 max-w-xs flex flex-col gap-y-8'>
						<div>
							<div className='text-xl font-semibold mb-2'>Search</div>

							<div className='flex gap-x-4 mb-2'>
								<div className='flex gap-x-2'>
									<input id='search-by-title' type='radio' checked={true} />
									<label htmlFor='search-by-title'>Date</label>
								</div>

								<div className='flex gap-x-2'>
									<input id='search-by-keywords' type='radio' checked={false} />
									<label htmlFor='search-by-title'>Category</label>
								</div>

								<div className='flex gap-x-2'>
									<input id='search-by-keywords' type='radio' checked={false} />
									<label htmlFor='search-by-title'>Category</label>
								</div>
							</div>

							<input
								className='block w-full rounded border border-gray-300 bg-white py-1.5 px-2 text-base font-normal text-gray-700 focus:border-[#365CCE] focus:bg-white focus:text-gray-700 focus:outline-none'
								placeholder='Basic Input'
							/>
						</div>

						<div>
							<div className='text-xl font-semibold mb-2'>Sort</div>

							<div className='flex flex-col mb-3'>
								<div className='flex gap-x-2'>
									<input id='search-by-title' type='radio' checked={true} />
									<label htmlFor='search-by-title'>Title</label>
								</div>

								<div className='flex gap-x-2'>
									<input id='search-by-keywords' type='radio' checked={false} />
									<label htmlFor='search-by-title'>Keywords</label>
								</div>
							</div>
						</div>
					</div>
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
