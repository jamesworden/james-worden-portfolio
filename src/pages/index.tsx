import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import headshot from '../images/headshot.jpg';
import { Layout } from '../components/layout';
import { SectionDivider } from '../components/section-divider';
import { ResumeTimeline } from '../components/resume-timeline';
import { resumeEntries } from '../data/resume-entries';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<section className='flex justify-between pt-4'>
				<span className='uppercase p-4 tracking-widest'>James Worden</span>
				<div className='flex flex-col justify-around'>
					<button className='uppercase px-8 py-2 tracking-widest bg-transparent border border-rose-900 text-rose-900 text-sm rounded-md tracking-widest'>
						Contact
					</button>
				</div>
			</section>

			<section className='flex justify-between mt-36 mb-40'>
				<div className='pt-[50px] flex flex-col'>
					<div className='pb-8'>
						<h1 className='text-4xl pb-2'>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<div>
						<button className='uppercase px-8 py-2 tracking-widest bg-rose-900 text-white text-sm rounded-md shadow-2xl tracking-widest'>
							My Work
						</button>
					</div>
				</div>

				<div className='relative mr-4 w-[360px] h-[240px]'>
					<img alt='Headshot' src={headshot} className='rounded-3xl absolute z-10' />
					<div className='absolute top-[20px] left-[20px] w-full h-full bg-rose-900 rounded-3xl z-2 shadow-2xl' />
				</div>
			</section>

			<SectionDivider displayName='About' displayNumber='01'></SectionDivider>

			<section className='columns-2 my-16'>
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
			</section>

			<SectionDivider displayName='Resume' displayNumber='02'></SectionDivider>

			<section className='flex justify-around my-16'>
				<ResumeTimeline resumeEntries={resumeEntries}></ResumeTimeline>
			</section>

			<SectionDivider displayName='Projects' displayNumber='03'></SectionDivider>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
