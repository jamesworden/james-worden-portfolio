import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import * as indexStyles from '../styles/index.module.scss';
import headshot from '../images/headshot.jpg';
import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<section className={indexStyles.menuSection}>
				<span>James Worden</span>
				<button>Contact</button>
			</section>

			<section className={indexStyles.heroSection}>
				<div className={indexStyles.heroDescriptionContainer}>
					<div className={indexStyles.heroDescription}>
						<h1>I'm James Worden.</h1>
						<span>I strive to build simple and</span>
						<br />
						<span>intuitive software.</span>
					</div>

					<button>See My Work</button>
				</div>

				<div className={indexStyles.headshotContainer}>
					<img alt='Headshot' src={headshot} className={indexStyles.headshot} />
					<div className={indexStyles.roundedBackground} />
				</div>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
