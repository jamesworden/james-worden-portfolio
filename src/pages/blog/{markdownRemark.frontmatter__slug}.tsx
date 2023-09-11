import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark;

	return (
		<div>
			<div>
				<h1>{frontmatter.title}</h1>
				<h2>{frontmatter.date}</h2>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	);
};

export const pageQuery = graphql`
	query ($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`;

export default BlogPostTemplate;
