import React, { useEffect, useRef } from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';
import { scrollTo } from '../../util/scroll-to';
import {
	attatchCopyButtonsToCodeBlocks,
	getOrganizedHeadings,
	wrapTablesInContainers,
} from '../../util/blog/blog-utils';
import { TableOfContents } from '../../components/table-of-contents/table-of-contents';
import { Biography } from '../../components/biography';
import { useHamburgerMenu } from '../../contexts/hamburger-menu-context';
import cx from 'classnames';

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html, headings } = data.markdownRemark;
	const organizedHeadings = getOrganizedHeadings(headings);
	const hamburgerMenu = useHamburgerMenu();
	const articleRef = useRef(null);

	useEffect(() => {
		const articleElement = articleRef.current;

		if (articleElement) {
			wrapTablesInContainers(articleElement, 'markdown-table-container');
			attatchCopyButtonsToCodeBlocks(articleElement);
		}
	}, []);

	return (
		<PageContent>
			<header className='my-24'>
				<div className='mb-24'>
					<div className='text-sm lg:text-md text-gray-700 dark:text-gray-400'>
						{frontmatter.date}
					</div>

					<h1 className='text-5xl mt-6 mb-8'>{frontmatter.title}</h1>

					<div
						className={cx(
							'transition',
							hamburgerMenu.isOpen ? 'opacity-0' : 'opacity-100'
						)}
					>
						<Biography
							nameClass='text-gray-800 dark:text-gray-100 text-lg'
							occupationClass='text-gray-500 dark:text-gray-300 text-xs'
						></Biography>
					</div>
				</div>

				<h3 className='prose dark:prose-invert text-3xl lg:text-2xl mt-4'>
					{frontmatter.subtitle}
				</h3>
			</header>

			<section className='flex flex-row justify-between mb-8'>
				<article
					ref={articleRef}
					className='prose prose-zinc lg:prose-lg dark:prose-invert dark:prose-dark mr-0 prose-code:before:content-none prose-code:after:content-none grid lg:pr-4'
					dangerouslySetInnerHTML={{ __html: html }}
				></article>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-500 hidden lg:block'></div>

				<div className='hidden lg:block'>
					<div className='max-w-sm w-full lg:sticky top-32 overflow-y-auto rounded-lg px-4 flex'>
						<TableOfContents
							organizedHeadings={organizedHeadings}
							onHeadingClicked={(headingId) => scrollTo(headingId)}
						/>
					</div>
				</div>
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
			headings {
				id
				value
				depth
			}
		}
	}
`;

export default BlogPostTemplate;
