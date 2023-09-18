import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';
import { scrollTo } from '../../util/scroll-to';

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html, headings } = data.markdownRemark;

	return (
		<PageContent>
			<header className='my-20'>
				<h1 className='text-3xl lg:text-5xl lg:font-semibold lg:mb-2'>
					{frontmatter.title}
				</h1>
				<span className='text-sm lg:text-md'>{frontmatter.date}</span>
				<h3 className='text-lg lg:text-2xl mt-4'>{frontmatter.subtitle}</h3>
			</header>

			<div className='flex flex-row justify-between gap-8 mb-6'>
				<article
					className='prose lg:prose-lg dark:prose-invert mr-0'
					dangerouslySetInnerHTML={{ __html: html }}
				></article>

				<div className='bg-rose-300 flex-grow hidden lg:block max-w-md'>
					<h3>Table of Contents</h3>
					{headings.map((heading, index) => (
						<li key={index}>
							<a onClick={() => scrollTo(heading.id)}>{heading.value}</a>
						</li>
					))}
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
			headings {
				id
				value
			}
		}
	}
`;

export default BlogPostTemplate;
