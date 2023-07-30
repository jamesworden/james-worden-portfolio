import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import * as indexStyles from '../styles/index.module.scss';
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
				<div className='pt-32 flex flex-col'>
					<div className='pb-16'>
						<h1>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<button>See My Work</button>
				</div>

				<div className='relative'>
					<img
						alt='Headshot'
						src={headshot}
						className='w-[400px] h-[267px] rounded-3xl'
					/>
					<div className='absolute top-[24px] left-[24px] w-[400px] h-[267px] bg-rose-900 rounded-3xl -z-1' />
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
