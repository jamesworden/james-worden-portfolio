import React from 'react';
import { useState } from 'react';
import { PageContent } from '../components/page-content';
import { PageProps, graphql } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../graphql-types';
import { BlogPostCard, IBlogPostCard } from '../components/blog-post-card';
import { SearchTool } from '../components/search-tool/search-tool';
import { defaultBlogSearchSettings } from '../data/default-blog-search-settings';
import { getBlogPostCardsFromEdges } from '../util/blog/blog-utils';

import '../styles/global.scss';
import { SearchSettings } from '../components/models/search-settings';
import { searchAndSort } from '../components/search-tool/search-and-sort';
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
	const blogPostCards = searchAndSort(getBlogPostCardsFromEdges(edges), searchSettings);

	const handleSearchSettingsChange = (searchSettings: SearchSettings<IBlogPostCard>) => {
		setSearchSettings({ ...searchSettings });
	};

	return (
		<PageContent>
			<header className='prose lg:prose-lg dark:prose-invert mt-16 mb-6 lg:my-16'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</header>

			<div className='flex gap-x-6 flex-col-reverse lg:flex-row mb-6'>
				<div className='flex flex-col gap-y-8'>
					{blogPostCards.map((blogPostCard, i) => (
						<BlogPostCard key={i} blogPostCard={blogPostCard}></BlogPostCard>
					))}
				</div>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900 hidden lg:block'></div>

				<div className='lg:sticky lg:top-48 lg:max-h-16 lg:overflow-y-visible'>
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

export default projectsPage;
