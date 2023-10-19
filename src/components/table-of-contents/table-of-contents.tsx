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
		<div className='max-w-sm w-full mb-12 shadow-xl lg:sticky top-32 overflow-y-auto max-h-[calc(100vh-12rem)] rounded-lg ring-1 ring-slate-700/10 bg-gray-200 dark:bg-gray-800 p-6 transition dark:ring-slate-200/10'>
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
		</div>
	);
};
