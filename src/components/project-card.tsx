import React from 'react';
import { IProjectCard } from '../data/project-cards';
import cx from 'classnames';

export interface ProjectCardProps {
	projectCard: IProjectCard;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ projectCard }) => {
	return (
		<div className='w-full shadow-xl bg-gray-200 flex justify-between p-4 md:p-6 dark:bg-slate-800 transition rounded-lg'>
			<div className='flex flex-col mr-4 md:mr-6'>
				<div className='text-gray-500 italic mb-2 dark:text-gray-300'>
					{projectCard.displayNumber}
				</div>

				<div className='flex grow justify-around'>
					<div className='max-w-[1px] grow h-full bg-gray-400'></div>
				</div>
			</div>

			<div className='flex flex-col grow'>
				<div className='flex flex-wrap gap-x-8 mb-8'>
					<div className='relative mr-4 sm:w-[320px] sm:h-[213.3px] w-[216px] h-[144px] mb-12'>
						<a
							href={projectCard.imageUrl}
							target='_blank'
							className={cx(
								'absolute z-10',
								projectCard.imageUrl
									? 'hover:scale-105 transition cursor-pointer'
									: ''
							)}
						>
							<img alt='Headshot' src={projectCard.image} className='rounded-3xl' />
						</a>

						<div className='absolute top-[20px] left-[20px] w-full md:h-full dark:bg-emerald-900 bg-rose-900 rounded-3xl z-2 shadow-xl sm:w-[320px] sm:h-[213.3px] w-[216px] h-[144px] transition' />
					</div>

					<div className='flex flex-col max-w-md'>
						<div className='mb-4'>
							<h3 className='font-bold'>{projectCard.displayWebsiteUrl}</h3>
							<h6 className='italic'>{projectCard.displayDate}</h6>
						</div>

						<div className='text-wrap mb-4'>{projectCard.description}</div>

						<div className='flex flex-wrap gap-2'>
							{projectCard.buttons.map((button, i) => (
								<a
									key={i}
									href={button.websiteUrl}
									target='_blank'
									className={cx(
										'uppercase px-8 py-2 tracking-widest text-sm rounded-md shadow-xl tracking-widest transition',
										button.buttonClassName
									)}
								>
									{button.displayText}
								</a>
							))}
						</div>

						{projectCard.githubUrl && (
							<div className='mt-4'>
								<a
									href={projectCard.githubUrl}
									target='_blank'
									className='inline-block'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32'
										height='32'
										viewBox='0 0 36 35.109'
									>
										<path
											id='Icon_simple-github'
											data-name='Icon simple-github'
											d='M18,.445a18,18,0,0,0-5.693,35.077c.9.169,1.23-.387,1.23-.866,0-.428-.015-1.56-.023-3.06-5.007,1.086-6.063-2.415-6.063-2.415a4.771,4.771,0,0,0-2-2.632c-1.63-1.116.126-1.094.126-1.094A3.774,3.774,0,0,1,8.333,27.31a3.836,3.836,0,0,0,5.243,1.5,3.838,3.838,0,0,1,1.14-2.407c-4-.45-8.2-2-8.2-8.9a6.944,6.944,0,0,1,1.852-4.83,6.4,6.4,0,0,1,.158-4.764s1.507-.483,4.95,1.845a16.97,16.97,0,0,1,9,0C25.9,7.428,27.4,7.911,27.4,7.911a6.577,6.577,0,0,1,.18,4.764,6.973,6.973,0,0,1,1.845,4.83c0,6.915-4.208,8.438-8.212,8.88a4.309,4.309,0,0,1,1.215,3.33c0,2.409-.022,4.344-.022,4.929,0,.472.315,1.035,1.237.855A17.978,17.978,0,0,0,18,.445'
											transform='translate(0 -0.446)'
											className='fill-gray-800 dark:fill-white'
										/>
									</svg>
								</a>
							</div>
						)}
					</div>
				</div>

				<div className='flex gap-2 flex-wrap'>
					{projectCard.technologyBadges.map((technologyBadge, i) => (
						<div key={i} className='bg-gray-300 text-gray-600 font-bold p-4 rounded-md'>
							{technologyBadge}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
