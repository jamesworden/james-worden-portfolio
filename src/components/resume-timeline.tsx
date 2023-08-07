import * as React from 'react';
import cx from 'classnames';

import '../styles/global.scss';

export enum ResumeEntryPlacement {
	Right = 'Right',
	Left = 'Left',
}

export interface IResumeEntry {
	placement: ResumeEntryPlacement;
	dateRange: string;
	startMonthAndYear: string;
	jobTitle: string;
	company: string;
	location: string;
	bulletPoints: string[];
	image: any;
}

interface IStartMonthAndYearPageProps {
	startMonthAndYear: string;
	resumeEntryPlacement: ResumeEntryPlacement;
}

const StartMonthAndYear: React.FC<IStartMonthAndYearPageProps> = ({
	startMonthAndYear,
	resumeEntryPlacement,
}) => {
	return (
		<span
			className={cx(
				'text-rose-900 dark:text-gray-100 font-bold absolute md:top-0 left-0 -top-4',
				resumeEntryPlacement === ResumeEntryPlacement.Right ? 'md:right-0' : 'md:left-0'
			)}
		>
			{startMonthAndYear}
		</span>
	);
};

export interface IResumeTimelinePageProps {
	resumeEntries: IResumeEntry[];
}

interface IResumeEntryPageProps {
	resumeEntry: IResumeEntry;
}

const Entry: React.FC<IResumeEntryPageProps> = ({ resumeEntry }) => {
	return (
		<div
			className={cx(
				'flex w-full relative m-4 md:m-0 flex-col max-w-xl md:max-w-none',
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
						<img
							src={resumeEntry.image}
							width={220}
							className='grayscale hover:grayscale-0 transition opacity-25 hover:opacity-70 hidden md:block'
						/>
					</div>
				</div>

				<StartMonthAndYear
					startMonthAndYear={resumeEntry.startMonthAndYear}
					resumeEntryPlacement={resumeEntry.placement}
				></StartMonthAndYear>
			</div>

			<div className='flex-1'></div>

			<div className='flex-[4] p-8 mt-4 mb-8 shadow-xl bg-zinc-100 dark:bg-gray-700 rounded'>
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
		</div>
	);
};

export const ResumeTimeline: React.FC<IResumeTimelinePageProps> = ({ resumeEntries }) => {
	return (
		<div className='relative w-full h-full'>
			<div className='flex flex-col w-full h-full'>
				{resumeEntries.map((resumeEntry, i) => (
					<Entry resumeEntry={resumeEntry} key={i}></Entry>
				))}
			</div>

			<div className='absolute flex justify-around h-full top-0 md:left-1/2 left-0 w-px'>
				<div className='w-px h-full bg-rose-900 dark:bg-gray-100'></div>
			</div>
		</div>
	);
};
