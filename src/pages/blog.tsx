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
	}));

	// TODO: Dynamically filter blog posts.

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8'>
				<h1 className='mt-12 mb-8'>Blog</h1>
			</div>

			<div className='mb-12'>
				{blogPostCards.map((blogPostCard) => (
					<BlogPostCard blogPostCard={blogPostCard}></BlogPostCard>
				))}
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
					}
				}
			}
		}
	}
`;

export default projectsPage;
