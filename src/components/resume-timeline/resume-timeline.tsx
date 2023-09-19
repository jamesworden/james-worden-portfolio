import React from 'react';
import { ResumeEntry } from './resume-entry';
import { AnimatePresence } from 'framer-motion';

export interface ResumeTimelineProps {
	resumeEntries: ResumeEntry[];
}

export const ResumeTimeline: React.FC<ResumeTimelineProps> = ({ resumeEntries }) => {
	return (
		<div className='relative w-full h-full'>
			<div className='flex flex-col w-full h-full'>
				<AnimatePresence>
					{resumeEntries.map((resumeEntry, i) => (
						<ResumeEntry key={i} resumeEntry={resumeEntry}></ResumeEntry>
					))}
				</AnimatePresence>
			</div>

			<div className='absolute flex justify-around h-full top-0 md:left-1/2 left-0 w-px'>
				<div className='w-px h-full bg-rose-900 dark:bg-gray-100'></div>
			</div>
		</div>
	);
};
