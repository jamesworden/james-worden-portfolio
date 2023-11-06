import React from 'react';
import { ResumeEntryPlacement } from './resume-entry-placement';
import cx from 'classnames';

interface StartMonthAndYearProps {
	startMonthAndYear: string;
	resumeEntryPlacement: ResumeEntryPlacement;
}

export const StartMonthAndYear: React.FC<StartMonthAndYearProps> = ({
	startMonthAndYear,
	resumeEntryPlacement,
}) => {
	return (
		<span
			className={cx(
				'absolute md:top-0 left-0 -top-4',
				resumeEntryPlacement === ResumeEntryPlacement.Right ? 'md:right-0' : 'md:left-0'
			)}
		>
			{startMonthAndYear}
		</span>
	);
};
