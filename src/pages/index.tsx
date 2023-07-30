import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

import * as indexStyles from '../styles/index.module.scss';

const IndexPage: React.FC<PageProps> = () => {
	return <main className={indexStyles.container}>Test</main>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
