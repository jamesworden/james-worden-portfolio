import React, { useState } from 'react';
import { IProjectCard, projectCards } from '../data/project-cards';
import { ProjectCard } from '../components/project-card';
import { PageContent } from '../components/page-content';
import { SearchTool } from '../components/search-tool/search-tool';
import { defaultProjectSearchSettings } from '../data/default-project-search-settings';
import { SearchSettings } from '../components/models/search-settings';

export { GlobalHead as Head } from '../components/global-head';
import '../styles/global.scss';
import { searchAndSort } from '../components/search-tool/search-and-sort';

const projectsPage: React.FC<{}> = () => {
	const [searchSettings, setSearchSettings] = useState(defaultProjectSearchSettings);

	const handleSearchSettingsChange = (searchSettings: SearchSettings<IProjectCard>) => {
		setSearchSettings({ ...searchSettings });
	};

	const sortedProjectCards = searchAndSort(projectCards, searchSettings);

	return (
		<PageContent>
			<header className='text-5xl my-20'>
				<h1 className='mt-12 mb-8'>Projects</h1>
			</header>

			<div className='flex gap-x-6 flex-col-reverse lg:flex-row mb-6'>
				<div className='flex gap-x-6 flex-col'>
					<div className='mb-6 flex flex-col gap-y-8'>
						{sortedProjectCards.map((projectCard, i) => (
							<ProjectCard key={i} projectCard={projectCard} index={i}></ProjectCard>
						))}
					</div>
				</div>

				<div className='min-h-full w-px bg-gray-400 dark:bg-slate-600 hidden lg:block transition'></div>

				<div className='lg:sticky lg:top-48 lg:max-h-16 lg:overflow-y-visible'>
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
