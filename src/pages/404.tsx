import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import { PageContent } from '../components/page-content';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<PageContent>
			<section className='mt-32'>
				<h1 className='text-4xl mb-2'>Page not found</h1>
				<Link className='text-lg' to='/'>
					Sorry 😔 click here to return home.
				</Link>
			</section>
		</PageContent>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
