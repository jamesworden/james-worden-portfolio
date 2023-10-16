import React from 'react';
import { useState } from 'react';
import { navigate, type PageProps } from 'gatsby';
import headshot from '../images/headshot.jpg';
import { SectionDivider } from '../components/section-divider';
import { ResumeTimeline } from '../components/resume-timeline/resume-timeline';
import { resumeEntries } from '../data/resume-entries';
import { SkillsCubes } from '../components/skill-cubes/skills-cubes';
import { skillCubes } from '../data/skill-cubes';
import { ContactForm } from '../components/contact-form';
import { PageContent } from '../components/page-content';
import { motion } from 'framer-motion';

import '../styles/global.scss';
import { StopSvg } from '../components/stop-svg';
import { RefreshSvg } from '../components/refresh-svg';
export { GlobalHead as Head } from '../components/global-head';

const IndexPage: React.FC<PageProps> = ({}) => {
	const [layoutAnimationCompleted, setLayoutAnimationCompleted] = useState(false);
	const [expandSkillCubeSection, setExpandSkillCubeSection] = useState(true);

	return (
		<PageContent onAnimationComplete={() => setLayoutAnimationCompleted(true)}>
			<header className='flex justify-around w-100'>
				<div className='max-w-5xl w-full'>
					<section className='flex justify-between my-8 md:mt-36 mb-40 flex-col flex'>
						<div className='flex flex-col gap-8 mb-20 z-20'>
							<div className=' mt-12 md:mt-0 lg:mb-6'>
								<h1 className='text-6xl md:text-7xl'>
									<span className='text-3xl xs:text-5xl md:text-6xl serif text-black dark:text-white transition'>
										I'm
									</span>{' '}
									James Worden.
								</h1>

								<div className='mt-6'>
									<span>I strive to build simple and</span>
									<br />
									<span>intuitive software.</span>
								</div>
							</div>

							<div>
								<button
									className='uppercase px-4 py-2 tracking-widest bg-rose-900 dark:bg-emerald-900 dark:hover:bg-emerald-800 hover:bg-rose-800 text-white text-sm rounded-md shadow-2xl tracking-widest transition'
									onClick={() => navigate('/projects')}
								>
									My Projects
								</button>
							</div>
						</div>

						<div className='flex justify-end md:-mt-32'>
							<div className='relative mr-4 md:w-[360px] md:h-[240px] w-[320px] h-[213.3px]'>
								<img
									alt='Headshot'
									src={headshot}
									className='rounded-3xl absolute z-10'
								/>
								<div className='absolute top-[20px] left-[20px] w-full md:h-full dark:bg-emerald-900 bg-rose-900 rounded-3xl z-2 shadow-2xl h-[213px] transition' />
							</div>
						</div>
					</section>
				</div>
			</header>

			{/* <SectionDivider displayName='About' displayNumber='00'></SectionDivider>

	<section className='md:columns-2 my-16'>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
			incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
			nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
			Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
			fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
			amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
			adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
			sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
			adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
			ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
			consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit.
		</p>
	</section> */}

			<SectionDivider displayName='Skills' displayNumber='01'></SectionDivider>

			<motion.section
				initial={{ height: 0 }}
				animate={
					expandSkillCubeSection
						? {
								height: '24rem',
								transition: {
									type: 'tween',
								},
						  }
						: {
								height: 'auto',
								transition: {
									type: 'tween',
								},
						  }
				}
				exit={{ height: 0 }}
				transition={{ duration: 0.15, delay: 0 }}
				className='flex flex-col mt-16 mb-4 relative'
			>
				<div className='flex flex-wrap justify-between mb-12'>
					<div className='max-w-xs p-2 prose lg-prose:lg dark:prose-invert'>
						<h3 className='text-xl mb-2 border-b'>Frontend</h3>
						<p>
							Angular, React, Gatsby, TypeScript, JavaScript, HTML, CSS, SASS,
							Bootstrap, TailwindCSS, NX, RXJS, NPM, Adobe XD
						</p>
					</div>
					<div className='max-w-xs p-2 prose lg-prose:lg dark:prose-invert'>
						<h3 className='text-xl mb-2 border-b'>Backend</h3>
						<p>C#, Java, NodeJS, PostgreSQL, MongoDB, Redis, RabbitMQ</p>
					</div>
					<div className='max-w-xs p-2 prose lg-prose:lg dark:prose-invert'>
						<h3 className='text-xl mb-2 border-b'>Testing & Infrastructure</h3>
						<p>
							Playwright, Cypress, Jest, Postman, AWS, Docker, Git, Bitbucket, Bamboo
						</p>
					</div>
				</div>

				<button
					className='absolute z-10 right-0 bottom-0 p-4 shadow-lg ring-1 ring-slate-700/10 dark:bg-gray-700 rounded bg-gray-200 dark:bg-slate-700'
					onClick={() => setExpandSkillCubeSection(!expandSkillCubeSection)}
				>
					{expandSkillCubeSection ? <StopSvg /> : <RefreshSvg />}
				</button>

				<SkillsCubes
					skillCubes={skillCubes}
					renderCanvas={layoutAnimationCompleted && expandSkillCubeSection}
				></SkillsCubes>
			</motion.section>

			<SectionDivider displayName='Resume' displayNumber='02'></SectionDivider>

			<section className='flex justify-around my-16'>
				<ResumeTimeline resumeEntries={resumeEntries}></ResumeTimeline>
			</section>

			<SectionDivider displayName='Contact' displayNumber='03'></SectionDivider>

			<section className='flex justify-around flex-col mt-16 mb-6' id='contact-section'>
				<ContactForm></ContactForm>
			</section>
		</PageContent>
	);
};

export default IndexPage;
