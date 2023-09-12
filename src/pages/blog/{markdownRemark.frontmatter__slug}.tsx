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
			<section className='my-20'>
				<h1 className='text-3xl lg:text-5xl lg:font-semibold lg:mb-2'>
					{frontmatter.title}
				</h1>
				<span className='text-sm lg:text-md'>{frontmatter.date}</span>
				<h3 className='text-lg lg:text-2xl mt-4'>{frontmatter.subtitle}</h3>
			</section>

			<div className='flex flex-row justify-between gap-8'>
				<article
					className='prose lg:prose-lg dark:prose-invert mr-0'
					dangerouslySetInnerHTML={{ __html: html }}
				></article>

				<div className='bg-rose-300 flex-grow hidden lg:block max-w-md'>
					<h3>Table of Contents</h3>
				</div>
			</div>
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
