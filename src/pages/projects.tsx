import * as React from 'react';
import { Layout } from '../components/layout';
import { projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';

import '../styles/global.scss';
export { Head } from '../components/head';

const projectsPage: React.FC<{}> = () => {
	return (
		<Layout>
			<React.Fragment>
				<h1 className='text-3xl mt-12 mb-8'>Projects</h1>
				{projectCards.map((projectCard, i) => (
					<ProjectCard projectCard={projectCard} key={i}></ProjectCard>
				))}
			</React.Fragment>
		</Layout>
	);
};

export default projectsPage;
