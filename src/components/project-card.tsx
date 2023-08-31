import * as React from 'react';
import { IProjectCard } from '../data/project-cards';

export interface ProjectCardProps {
	projectCard: IProjectCard;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectCard }) => {
	return (
		<div className='w-full shadow-2xl bg-gray-200 my-8 flex justify-between p-4 md:p-6'>
			<div className='flex flex-col mr-4 md:mr-6'>
				<div className='text-gray-500 italic mb-2'>{projectCard.displayNumber}</div>

				<div className='flex grow justify-around'>
					<div className='max-w-[1px] grow h-full bg-gray-400'></div>
				</div>
			</div>

			<div className='flex flex-col grow'>
				<div className='flex flex-wrap gap-x-8 mb-8'>
					<div className='relative mr-4 md:w-[360px] md:h-[240px] w-[320px] h-[213.3px] mb-8'>
						<img
							alt='Headshot'
							src={projectCard.image}
							className='rounded-3xl absolute z-10'
						/>
						<div className='absolute top-[20px] left-[20px] w-full md:h-full bg-rose-900 rounded-3xl z-2 shadow-2xl h-[213px] transition' />
					</div>

					<div className='flex flex-col max-w-md'>
						<div className='mb-4'>
							<h3 className='font-bold'>{projectCard.displayWebsiteUrl}</h3>
							<h6 className='italic'>{projectCard.displayDate}</h6>
						</div>

						<div className='text-wrap'>{projectCard.description}</div>
					</div>
				</div>

				<div className='flex gap-2 flex-wrap'>
					{projectCard.technologyBadges.map((technologyBadge) => (
						<div className='bg-gray-300 text-gray-600 font-bold p-4 rounded-md'>
							{technologyBadge}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
