import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';
import { scrollTo } from '../../util/scroll-to';
import { AnimatePresence, motion } from 'framer-motion';

const SPACES_PER_INDENT = 4;

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html, headings } = data.markdownRemark;

	return (
		<PageContent>
			<header className='my-24'>
				<div className='mb-12'>
					<h1 className='text-3xl lg:text-5xl lg:font-semibold lg:mb-2'>
						{frontmatter.title}
					</h1>

					<span className='text-md lg:text-lg'>{frontmatter.date}</span>
				</div>

				<h3 className='text-lg lg:text-2xl mt-4'>{frontmatter.subtitle}</h3>
			</header>

			<div className='flex flex-row gap-x-24 mb-8'>
				<article
					className='prose lg:prose-lg dark:prose-invert mr-0'
					dangerouslySetInnerHTML={{ __html: html }}
				></article>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900 hidden lg:block'></div>

				<div className='lg:sticky top-32 max-w-md overflow-y-visible max-h-[calc(100vh-16rem)] '>
					<AnimatePresence>
						<span className='text-2xl'>Table of Contents</span>

						<ul>
							{headings.map((heading, index) => {
								let spacesBeforeItem = '';

								for (let i = 0; i < heading.depth; i++) {
									for (let i = 0; i < SPACES_PER_INDENT; i++) {
										spacesBeforeItem += String.fromCharCode(160);
									}
								}

								return (
									<motion.li
										className='list-none text-lg leading-loose cursor-pointer'
										initial='offscreen'
										whileInView='onscreen'
										viewport={{ once: true, amount: 0.8 }}
										variants={{
											offscreen: {
												y: 50,
												opacity: 0,
											},
											onscreen: {
												y: 0,
												opacity: 1,
												transition: {
													delay: index * 0.25,
													type: 'spring',
													bounce: 0.4,
													duration: 0.8,
												},
											},
										}}
										key={index}
									>
										<a onClick={() => scrollTo(heading.id)}>
											{spacesBeforeItem + heading.value}
										</a>
									</motion.li>
								);
							})}
						</ul>
					</AnimatePresence>
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
