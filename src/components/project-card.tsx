import * as React from 'react';
import { IProjectCard } from '../data/project-cards';

export interface ProjectCardProps {
	projectCard: IProjectCard;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectCard }) => {
	return <div className='w-full'>{projectCard.displayNumber}</div>;
};
