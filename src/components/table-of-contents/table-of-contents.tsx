import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { OrganizedHeading, getActiveHeaderElement } from '../../util/blog/blog-utils';
import { OrganizedHeadingItem } from './organized-heading-item';

const NAVBAR_OFFSET_Y_PX = 136;

interface TableOfContentsProps {
	organizedHeadings: OrganizedHeading[];
	onHeadingClicked: (headingId: string) => void;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
	organizedHeadings,
	onHeadingClicked,
}) => {
	const [activeHeaderElement, setActiveHeaderElement] = useState<Element | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			setActiveHeaderElement(getActiveHeaderElement());
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<AnimatePresence>
			<div
				key='table-of-contents-header'
				className='prose lg:prose-lg mb-6 dark:prose-invert'
			>
				<h3>Table of Contents</h3>
			</div>

			<ul>
				{organizedHeadings.map((organizedHeading, i) => (
					<OrganizedHeadingItem
						highlightedHeaderId={activeHeaderElement?.id ?? null}
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
