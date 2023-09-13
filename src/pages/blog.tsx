import * as React from 'react';
import { useState } from 'react';
import { PageContent } from '../components/page-content';
import { Link, PageProps, graphql } from 'gatsby';

import '../styles/global.scss';
import { MarkdownRemarkNode, MarkdownRemarkQueryResult } from '../graphql-types';
import { BlogPostCard } from '../components/blog-post-card';
import Checkbox from '../components/checkbox';
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
	const [searchingByTitle, setSearchingByTitle] = useState(true);
	const [searchingByKeyword, setSearchingByKeyword] = useState(false);
	const [sortingByDate, setSortingByDate] = useState(true);
	const [sortingByCategory, setSortingByCategory] = useState(false);
	const [sortingByFeatured, setSortingByFeatured] = useState(false);
	const [orderByAscending, setOrderByAscending] = useState(true);

	const handleSearchByTitleChange = (checked: boolean) => {
		if (checked || searchingByKeyword) {
			setSearchingByTitle(checked);
		}
	};

	const handleSearchByKeywordChange = (checked: boolean) => {
		if (checked || searchingByTitle) {
			setSearchingByKeyword(checked);
		}
	};

	const handleSortByDateChange = (checked: boolean) => {
		if (checked || sortingByCategory || sortingByFeatured) {
			setSortingByDate(checked);
		}
	};

	const handleSortByCategoryChange = (checked: boolean) => {
		if (checked || sortingByFeatured || sortingByDate) {
			setSortingByCategory(checked);
		}
	};

	const handleSortByFeaturedChange = (checked: boolean) => {
		if (checked || sortingByCategory || sortingByDate) {
			setSortingByFeatured(checked);
		}
	};

	const handleOrderByAscendingChange = (_: boolean) => {
		if (!orderByAscending) {
			setOrderByAscending(true);
		}
	};

	const handleOrderByDescendingChange = (_: boolean) => {
		if (orderByAscending) {
			setOrderByAscending(false);
		}
	};

	const blogPostCards = getBlogPostCardsFromEdges(edges);

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</div>

			<div className='flex gap-x-6 justify-between mb-6'>
				<div className='flex flex-col gap-y-8'>
					{blogPostCards.map((blogPostCard) => (
						<BlogPostCard blogPostCard={blogPostCard}></BlogPostCard>
					))}
				</div>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900'></div>

				<div className='grow hidden lg:block'>
					<div className='p-4 max-w-xs flex flex-col gap-y-8'>
						<div className='flex items-center rounded-full shadow-md bg-gray-200'>
							<svg
								className='w-4 h-4 fill-gray-500 ml-4'
								version='1.1'
								id='Capa_1'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 490.4 490.4'
							>
								<g>
									<path
										d='M484.1,454.796l-110.5-110.6c29.8-36.3,47.6-82.8,47.6-133.4c0-116.3-94.3-210.6-210.6-210.6S0,94.496,0,210.796
		s94.3,210.6,210.6,210.6c50.8,0,97.4-18,133.8-48l110.5,110.5c12.9,11.8,25,4.2,29.2,0C492.5,475.596,492.5,463.096,484.1,454.796z
		 M41.1,210.796c0-93.6,75.9-169.5,169.5-169.5s169.6,75.9,169.6,169.5s-75.9,169.5-169.5,169.5S41.1,304.396,41.1,210.796z'
									/>
								</g>
							</svg>
							<input
								className='py-2 px-4 rounded-full focus:outline-none bg-gray-200 text-black'
								type='text'
								placeholder='Search'
							/>
						</div>

						<div>
							<div className='text-xl font-semibold mb-2'>Search by</div>

							<Checkbox
								label='Title'
								checked={searchingByTitle}
								onChange={handleSearchByTitleChange}
							/>

							<Checkbox
								label='Keyword'
								checked={searchingByKeyword}
								onChange={handleSearchByKeywordChange}
							/>
						</div>

						<div>
							<div className='text-xl font-semibold mb-2'>Sort by</div>

							<Checkbox
								label='Date'
								checked={sortingByDate}
								onChange={handleSortByDateChange}
							/>

							<Checkbox
								label='Category'
								checked={sortingByCategory}
								onChange={handleSortByCategoryChange}
							/>

							<Checkbox
								label='Featured'
								checked={sortingByFeatured}
								onChange={handleSortByFeaturedChange}
							/>
						</div>

						<div>
							<div className='text-xl font-semibold mb-2'>Order by</div>

							<Checkbox
								label='Ascending'
								checked={orderByAscending}
								onChange={handleOrderByAscendingChange}
							/>

							<Checkbox
								label='Descending'
								checked={!orderByAscending}
								onChange={handleOrderByDescendingChange}
							/>
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
