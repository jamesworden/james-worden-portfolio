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
}

interface IStartMonthAndYearPageProps {
	startMonthAndYear: string;
}

const StartMonthAndYear: React.FC<IStartMonthAndYearPageProps> = ({ startMonthAndYear }) => {
	return <span className='text-rose-900 font-bold'>{startMonthAndYear}</span>;
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
				'flex w-full relative',
				resumeEntry.placement === ResumeEntryPlacement.Right
					? 'flex-row'
					: 'flex-row-reverse'
			)}
		>
			<div
				className={cx(
					'flex-[4] mt-12',
					resumeEntry.placement === ResumeEntryPlacement.Right
						? 'text-right'
						: 'text-left'
				)}
			>
				<StartMonthAndYear
					startMonthAndYear={resumeEntry.startMonthAndYear}
				></StartMonthAndYear>
			</div>

			<div className='flex-1'></div>

			<div className='flex-[4] p-8 my-4'>
				<div className='flex flex-col justify-between'>
					<div className='flex justify-between'>
						<div className='flex flex-col'>
							<span>{resumeEntry.jobTitle}</span>
							<span>{resumeEntry.company}</span>
						</div>
						<div className='flex flex-col'>
							<span>{resumeEntry.location}</span>
							<span>{resumeEntry.dateRange}</span>
						</div>
					</div>
					<div>
						{resumeEntry.bulletPoints.map((bulletPoint) => (
							<div>
								{'\n'}
								<span>• {bulletPoint}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className='absolute flex justify-around w-full h-full'>
				<div className='w-px h-full bg-rose-900 m-auto'></div>
			</div>
		</div>
	);
};

export const ResumeTimeline: React.FC<IResumeTimelinePageProps> = ({ resumeEntries }) => {
	return (
		<div className='flex flex-col'>
			{resumeEntries.map((resumeEntry) => (
				<Entry resumeEntry={resumeEntry}></Entry>
			))}
		</div>
	);
};
