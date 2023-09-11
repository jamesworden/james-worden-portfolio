import * as React from 'react';
import { projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';
import { PageContent } from '../components/page-content';

import '../styles/global.scss';
export { GlobalHead as Head } from '../components/global-head';

const projectsPage: React.FC<{}> = () => {
	return (
		<PageContent>
			<h1 className='text-3xl mt-12 mb-8'>Projects</h1>
			{projectCards.map((projectCard, i) => (
				<ProjectCard projectCard={projectCard} key={i}></ProjectCard>
			))}
		</PageContent>
	);
};

export default projectsPage;
