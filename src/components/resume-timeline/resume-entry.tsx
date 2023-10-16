import React from 'react';
import { ResumeEntryPlacement } from './resume-entry-placement';
import cx from 'classnames';
import { StartMonthAndYear } from './start-month-and-year';
import { motion } from 'framer-motion';

export interface ResumeEntry {
	placement: ResumeEntryPlacement;
	dateRange: string;
	startMonthAndYear: string;
	jobTitle: string;
	company: string;
	location: string;
	bulletPoints: string[];
	image: any;
}

interface ResumeEntryProps {
	resumeEntry: ResumeEntry;
}

export const ResumeEntry: React.FC<ResumeEntryProps> = ({ resumeEntry }) => {
	return (
		<motion.div
			initial='offscreen'
			whileInView='onscreen'
			viewport={{ once: true, amount: 0.8 }}
			variants={{
				offscreen: {
					y: 50,
					opacity: 0,
				},
				onscreen: {
					y: 0,
					opacity: 1,
					transition: {
						type: 'spring',
						bounce: 0.4,
						duration: 0.8,
					},
				},
			}}
			className={cx(
				'flex md:w-full mt-4 ml-4 relative m-4 md:m-0 flex-col max-w-xl md:max-w-none',
				resumeEntry.placement === ResumeEntryPlacement.Right
					? 'md:flex-row'
					: 'md:flex-row-reverse'
			)}
		>
			<div
				className={cx(
					'flex-[5] mt-12 relative',
					resumeEntry.placement === ResumeEntryPlacement.Right
						? 'text-right'
						: 'text-left'
				)}
			>
				<div className='flex justify-around h-full'>
					<div className='flex justify-around flex-col'>
						<motion.img
							initial='offscreen'
							whileInView='onscreen'
							viewport={{ once: true, amount: 0.8 }}
							variants={{
								offscreen: {
									rotate: -15,
								},
								onscreen: {
									rotate: 0,
									transition: {
										type: 'spring',
										duration: 1.6,
									},
								},
							}}
							src={resumeEntry.image}
							width={220}
							className='opacity-80 hidden md:block'
						/>
					</div>
				</div>

				<StartMonthAndYear
					startMonthAndYear={resumeEntry.startMonthAndYear}
					resumeEntryPlacement={resumeEntry.placement}
				></StartMonthAndYear>
			</div>

			<div className='flex-1'></div>

			<div className='flex-[4] xs:px-4 xs:py-8 p-8 mt-4 mb-8 shadow-xl bg-gray-200 shadow-3xl ring-1 ring-slate-700/10 dark:bg-gray-700 rounded'>
				<div className='flex flex-col justify-between'>
					<div className='flex justify-between pb-4'>
						<div className='flex flex-col'>
							<h4 className='font-bold text-lg'>{resumeEntry.jobTitle}</h4>
							<h5 className='italic'>{resumeEntry.company}</h5>
						</div>
						<div className='flex flex-col'>
							<h4 className='text-lg'>{resumeEntry.location}</h4>
							<h5 className='italic'>{resumeEntry.dateRange}</h5>
						</div>
					</div>
					<div>
						{resumeEntry.bulletPoints.map((bulletPoint, i) => (
							<div key={i}>
								{'\n'}
								<span>• {bulletPoint}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};
