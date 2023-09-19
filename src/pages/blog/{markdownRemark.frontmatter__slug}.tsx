import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { MarkdownRemarkQueryResult } from '../../graphql-types';
import { PageContent } from '../../components/page-content';
import { scrollTo } from '../../util/scroll-to';
import { AnimatePresence, motion } from 'framer-motion';
import { getOrganizedHeadings } from '../../util/blog/blog-utils';

const SPACES_PER_INDENT = 2;

interface BlogPostTemplateProps extends PageProps {
	data: MarkdownRemarkQueryResult;
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ data }) => {
	const { frontmatter, html, headings } = data.markdownRemark;
	const organizedHeadings = getOrganizedHeadings(headings);

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

				<div className='hidden lg:block lg:sticky top-48 max-w-xs w-full overflow-y-visible max-h-[calc(100vh-16rem)] '>
					<AnimatePresence>
						<div className='mb-6'>
							<span className='text-xs font-semibold uppercase text-rose-900'>
								Table of Contents
							</span>
						</div>

						<ul>
							{organizedHeadings.map(
								({ parentHeading, subHeadings }, organizedHeadingIndex) => {
									const displayIndex =
										organizedHeadingIndex + 1 < 10
											? `0${organizedHeadingIndex + 1}`
											: organizedHeadingIndex + 1;

									return (
										<motion.div
											key={`organizedHeadingIndex:${organizedHeadingIndex}`}
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
														delay: organizedHeadingIndex * 0.25,
														type: 'spring',
														bounce: 0.4,
														duration: 0.8,
													},
												},
											}}
										>
											<div className='w-full bg-rose-900 h-px'></div>

											<div className='w-full flex gap-x-12'>
												<h5 className='text-2xl text-rose-900 underline mt-1'>
													{displayIndex}
												</h5>

												<div className='flex flex-col py-6 pr-6'>
													<li className='tracking-wide d-flex flex-col justify-around list-none text-sm leading-loose cursor-pointer font-bold uppercase text-rose-900'>
														<a
															onClick={() =>
																scrollTo(parentHeading.id)
															}
														>
															{parentHeading.value}
														</a>
													</li>

													{subHeadings.map(
														(subHeading, subHeadingIndex) => {
															let spacesBeforeItem = '';

															for (
																let i = parentHeading.depth;
																i < subHeading.depth;
																i++
															) {
																for (
																	let i = 0;
																	i < SPACES_PER_INDENT;
																	i++
																) {
																	spacesBeforeItem +=
																		String.fromCharCode(160);
																}
															}

															return (
																<li
																	key={`subHeadingIndex:${subHeadingIndex}`}
																	className='tracking-wide d-flex flex-col justify-around list-none text-sm cursor-pointer uppercase text-rose-900'
																>
																	<a
																		onClick={() =>
																			scrollTo(subHeading.id)
																		}
																	>
																		{spacesBeforeItem +
																			subHeading.value}
																	</a>
																</li>
															);
														}
													)}
												</div>
											</div>
										</motion.div>
									);
								}
							)}
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
