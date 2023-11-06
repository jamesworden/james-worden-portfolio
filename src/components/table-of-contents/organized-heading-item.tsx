import React from 'react';
import { OrganizedHeading } from '../../util/blog/blog-utils';
import { getDisplayIndex } from '../../util/get-display-index';
import { motion } from 'framer-motion';
import cx from 'classnames';

interface OrganizedHeadingItemProps {
	organizedHeading: OrganizedHeading;
	index: number;
	onHeadingClicked: (headingId: string) => void;
	highlightedHeaderId: string | null;
}

export const OrganizedHeadingItem: React.FC<OrganizedHeadingItemProps> = ({
	organizedHeading,
	index,
	onHeadingClicked,
	highlightedHeaderId,
}) => {
	const displayIndex = getDisplayIndex(index);

	return (
		<motion.div
			initial={{ y: 50, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: { delay: index * 0.25, type: 'spring', bounce: 0.4, duration: 0.8 },
			}}
		>
			<div className='w-full flex gap-x-12'>
				<div className='flex flex-col justify-around'>
					<motion.h5
						initial={{ scale: 0, rotate: 180 }}
						animate={{ scale: 1, rotate: 0 }}
						transition={{
							delay: index * 0.25,
							type: 'spring',
							stiffness: 260,
							damping: 20,
						}}
						className='text-md'
					>
						{displayIndex}
					</motion.h5>
				</div>

				<div className='flex flex-col'>
					<motion.li
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						className={cx(
							'tracking-wide d-flex flex-col justify-around list-none leading-loose cursor-pointer font-semibold text-md transition',
							highlightedHeaderId &&
								highlightedHeaderId === organizedHeading.parentHeading.id
								? 'underline text-rose-700 dark:text-emerald-400'
								: ''
						)}
					>
						<a onClick={() => onHeadingClicked(organizedHeading.parentHeading.id)}>
							{organizedHeading.parentHeading.value}
						</a>
					</motion.li>

					{organizedHeading.subHeadings.map((subHeading, subHeadingIndex) => (
						<motion.div
							key={`subHeadingIndex:${subHeadingIndex}`}
							whileTap={{ scale: 0.9 }}
							whileHover={{ scale: 1.05 }}
							className={cx(
								'p-1 tracking-wide d-flex flex-col justify-around cursor-pointer rounded bg-transparent list-disc text-md transition',
								`ml-${
									(subHeading.depth - organizedHeading.parentHeading.depth) * 4
								}`,
								highlightedHeaderId && highlightedHeaderId === subHeading.id
									? 'underline text-rose-700 dark:text-emerald-400'
									: ''
							)}
						>
							<li>
								<a onClick={() => onHeadingClicked(subHeading.id)}>
									{subHeading.value}
								</a>
							</li>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
};
