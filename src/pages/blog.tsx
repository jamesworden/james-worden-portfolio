import * as React from 'react';
import { PageContent } from '../components/page-content';
import { Link, PageProps, graphql } from 'gatsby';

import '../styles/global.scss';
import { MarkdownRemarkQueryResult } from '../graphql-types';
export { GlobalHead as Head } from '../components/global-head';

interface ProjectPageProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const projectsPage: React.FC<ProjectPageProps> = ({
	data: {
		allMarkdownRemark: { edges },
	},
}) => {
	const Posts = edges
		.filter((edge) => !!edge.node.frontmatter.date) // Filter displayed post links
		.map((edge) => (
			<Link key={edge.node.id} to={`/blog/${edge.node.frontmatter.slug}`}>
				{edge.node.frontmatter.slug}
			</Link>
		));

	return (
		<PageContent>
			<h1 className='text-3xl mt-12 mb-8'>Blog</h1>

			{Posts.map((post) => post)}
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
					}
				}
			}
		}
	}
`;

export default projectsPage;
