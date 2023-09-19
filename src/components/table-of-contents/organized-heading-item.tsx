import React from 'react';
import { OrganizedHeading } from '../../util/blog/blog-utils';
import { getDisplayIndex } from '../../util/get-display-index';
import { motion } from 'framer-motion';

const SPACES_PER_INDENT = 2;

interface OrganizedHeadingItemProps {
	organizedHeading: OrganizedHeading;
	index: number;
	onHeadingClicked: (headingId: string) => void;
}

export const OrganizedHeadingItem: React.FC<OrganizedHeadingItemProps> = ({
	organizedHeading,
	index,
	onHeadingClicked,
}) => {
	const displayIndex = getDisplayIndex(index);

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
						delay: index * 0.25,
						type: 'spring',
						bounce: 0.4,
						duration: 0.8,
					},
				},
			}}
		>
			<div className='w-full bg-rose-900 dark:bg-emerald-500 h-px'></div>

			<div className='w-full flex gap-x-12'>
				<motion.h5
					initial={{ scale: 0, rotate: 180 }}
					animate={{ scale: 1, rotate: 0 }}
					whileHover={{ rotate: 30 }}
					transition={{
						delay: index * 0.25,
						type: 'spring',
						stiffness: 260,
						damping: 20,
					}}
					className='text-2xl text-rose-900 dark:text-emerald-500 underline mt-1'
				>
					{displayIndex}
				</motion.h5>

				<div className='flex flex-col py-6 pr-6'>
					<motion.li
						whileTap={{ scale: 0.9 }}
						whileHover={{ scale: 1.05 }}
						className='tracking-wide d-flex flex-col justify-around list-none text-sm leading-loose cursor-pointer font-bold uppercase text-rose-900 dark:text-emerald-500'
					>
						<a onClick={() => onHeadingClicked(organizedHeading.parentHeading.id)}>
							{organizedHeading.parentHeading.value}
						</a>
					</motion.li>

					{organizedHeading.subHeadings.map((subHeading, subHeadingIndex) => {
						let spacesBeforeItem = '';

						for (
							let i = organizedHeading.parentHeading.depth;
							i < subHeading.depth;
							i++
						) {
							for (let i = 0; i < SPACES_PER_INDENT; i++) {
								spacesBeforeItem += String.fromCharCode(160);
							}
						}

						return (
							<motion.li
								key={`subHeadingIndex:${subHeadingIndex}`}
								whileTap={{ scale: 0.9 }}
								whileHover={{ scale: 1.05 }}
								className='tracking-wide d-flex flex-col justify-around list-none text-sm cursor-pointer uppercase text-rose-900 dark:bg-emerald-500 dark:text-gray-800 dark:rounded'
							>
								<a onClick={() => onHeadingClicked(subHeading.id)}>
									{spacesBeforeItem + subHeading.value}
								</a>
							</motion.li>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};
