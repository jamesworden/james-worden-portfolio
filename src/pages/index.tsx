import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import headshot from '../images/headshot.jpg';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<section className='flex justify-between'>
				<span className='uppercase'>James Worden</span>
				<button>Contact</button>
			</section>

			<section className='flex justify-between mt-[180px] mb-[180px]'>
				<div className='pt-[50px] flex flex-col'>
					<div className='pb-16'>
						<h1 className='text-4xl'>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<button>See My Work</button>
				</div>

				<div className='relative mr-4 w-[360px] h-[240px]'>
					<img alt='Headshot' src={headshot} className='rounded-3xl absolute z-10' />
					<div className='absolute top-[20px] left-[20px] w-full h-full bg-rose-900 rounded-3xl z-2 shadow-xl' />
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
