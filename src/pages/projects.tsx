import React, { useState } from 'react';
import { projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';
import { PageContent } from '../components/page-content';

import '../styles/global.scss';
import { SearchTool, SearchToolSettings } from '../components/search-tool/search-tool';
import { defaultProjectSearchSettings } from '../data/default-search-settings';
export { GlobalHead as Head } from '../components/global-head';

const projectsPage: React.FC<{}> = () => {
	const [searchSettings, setSearchSettings] = useState(defaultProjectSearchSettings);

	const handleSearchSettingsChange = (searchSettings: SearchToolSettings) => {
		setSearchSettings({ ...searchSettings });
	};

	return (
		<PageContent>
			<div className='prose lg:prose-lg dark:prose-invert mt-16 mb-8 lg:my-16'>
				<h1 className='mt-12 mb-8'>Projects</h1>
			</div>

			<div className='flex gap-x-6'>
				<div className='flex gap-x-6 flex-col'>
					<div className='mb-6 flex flex-col gap-y-8'>
						{projectCards.map((projectCard, i) => (
							<ProjectCard projectCard={projectCard} key={i}></ProjectCard>
						))}
					</div>
				</div>

				<div className='min-h-full w-px bg-rose-900 dark:bg-emerald-900 hidden lg:block'></div>

				<div className='hidden lg:block'>
					<SearchTool
						settings={searchSettings}
						onChange={handleSearchSettingsChange}
					></SearchTool>
				</div>
			</div>
		</PageContent>
	);
};

export default projectsPage;
