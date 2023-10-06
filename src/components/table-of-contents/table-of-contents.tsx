import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { OrganizedHeading } from '../../util/blog/blog-utils';
import { OrganizedHeadingItem } from './organized-heading-item';

interface TableOfContentsProps {
	organizedHeadings: OrganizedHeading[];
	onHeadingClicked: (headingId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
	organizedHeadings,
	onHeadingClicked,
}) => {
	return (
		<AnimatePresence>
			<div className='prose lg:prose-lg mb-6'>
				<h3>Table of Contents</h3>
			</div>

			<ul>
				{organizedHeadings.map((organizedHeading, i) => (
					<OrganizedHeadingItem
						key={i}
						organizedHeading={organizedHeading}
						index={i}
						onHeadingClicked={(headingId) => onHeadingClicked(headingId)}
					></OrganizedHeadingItem>
				))}
			</ul>
		</AnimatePresence>
	);
};
