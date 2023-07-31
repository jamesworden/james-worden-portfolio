import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import headshot from '../images/headshot.jpg';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<section className='flex justify-between'>
				<span className='uppercase p-4 tracking-widest'>James Worden</span>
				<div className='flex flex-col justify-around'>
					<button className='uppercase px-8 py-2 tracking-widest bg-white border border-rose-900 text-rose-900 text-sm rounded-md tracking-widest'>
						Contact
					</button>
				</div>
			</section>

			<section className='flex justify-between mt-56 mb-60'>
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

			<div className='flex w-full'>
				<span className='pr-4'>01</span>
				<span className='uppercase tracking-widest pr-4'>About</span>
				<div className='flex flex-col justify-around w-full'>
					<hr className=' border border-black w-full' />
				</div>
			</div>

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
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
