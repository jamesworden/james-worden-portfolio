import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html } = data.markdownRemark;

	return (
		<PageContent>
			<section className='mt-20 mb-4'>
				<h1 className='text-3xl'>{frontmatter.title}</h1>
				<span className='text-sm'>{frontmatter.date}</span>
			</section>

			<h3 className='text-lg mb-16'>{frontmatter.subtitle}</h3>

			<section>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</section>
		</PageContent>
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
				subtitle
			}
		}
	}
`;

export default BlogPostTemplate;
