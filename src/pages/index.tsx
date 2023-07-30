import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import * as indexStyles from '../styles/index.module.scss';
import headshot from '../images/headshot.jpg';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<main className={indexStyles.container}>
			<div className={indexStyles.headshotContainer}>
				<img alt='Headshot' src={headshot} className={indexStyles.headshot} />
				<div className={indexStyles.roundedBackground} />
			</div>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
