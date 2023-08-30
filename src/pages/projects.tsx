import * as React from 'react';
import '../styles/global.scss';
import { Layout } from '../components/layout';
import { projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';

const projectsPage: React.FC<{}> = () => {
	return (
		<Layout>
			{projectCards.map((projectCard) => (
				<ProjectCard projectCard={projectCard}></ProjectCard>
			))}
		</Layout>
	);
};

export default projectsPage;
