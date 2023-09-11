import { HeadProps } from 'gatsby';
import * as React from 'react';

export const GlobalHead: React.FC<HeadProps> = () => {
	return (
		<>
			<title>James Worden</title>
			<meta name='description' content="James Worden's portfolio as a software engineer." />
			<meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
			<meta name='theme-color' content='#0a0a0a' />
		</>
	);
};
