import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';
import { scrollTo } from '../../util/scroll-to';
import { getOrganizedHeadings } from '../../util/blog/blog-utils';
import { TableOfContents } from '../../components/table-of-contents/table-of-contents';

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html, headings } = data.markdownRemark;
	const organizedHeadings = getOrganizedHeadings(headings);

	return (
		<PageContent>
			<header className='my-20'>
				<div className='mb-20'>
					<h1 className='text-5xl mb-6'>{frontmatter.title}</h1>

					<span className='text-md lg:text-lg'>{frontmatter.date}</span>
				</div>

				<h3 className='text-3xl lg:text-2xl mt-4'>{frontmatter.subtitle}</h3>
			</header>

			<div className='flex flex-row gap-x-24 mb-8'>
				<article
					className='prose prose-zinc lg:prose-lg dark:prose-invert dark:prose-dark mr-0 prose-code:before:content-none prose-code:after:content-none'
					dangerouslySetInnerHTML={{ __html: html }}
				></article>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-500 hidden lg:block'></div>

				<div className='hidden lg:block lg:sticky top-48 max-w-xs w-full overflow-y-visible max-h-[calc(100vh-16rem)]'>
					<TableOfContents
						organizedHeadings={organizedHeadings}
						onHeadingClicked={(headingId) => scrollTo(headingId)}
					></TableOfContents>
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
				depth
			}
		}
	}
`;

export default BlogPostTemplate;
