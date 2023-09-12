import * as React from 'react';
import { projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';
import { PageContent } from '../components/page-content';

import '../styles/global.scss';
export { GlobalHead as Head } from '../components/global-head';

const projectsPage: React.FC<{}> = () => {
	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Projects</h1>
			</div>

			<div className='mb-6'>
				{projectCards.map((projectCard, i) => (
					<ProjectCard projectCard={projectCard} key={i}></ProjectCard>
				))}
			</div>
		</PageContent>
	);
};

export default projectsPage;
