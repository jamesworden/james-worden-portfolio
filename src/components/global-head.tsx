import { HeadProps } from 'gatsby';
import * as React from 'react';

export const GlobalHead: React.FC<HeadProps> = () => {
	return (
		<>
			<title>James Worden</title>
			<meta name='description' content="James Worden's portfolio as a software engineer." />
			<meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
			<meta name='theme-color' content='#0a0a0a' />
			<meta name='robots' content='index, follow'></meta>
			<meta property='og:title' content="James Worden's Portfolio"></meta>
			<meta property='og:type' content='website' />
			<meta
				property='og:description'
				content="James Worden's portfolio as a software engineer."
			></meta>
			<meta property='og:url' content='https://www.jamesworden.com/'></meta>
			{/* The image URL may break if gatsby changes it's file name during the build script. */}
			<meta
				property='og:image'
				content='www.jamesworden.com/static/headshot-06cf33228d9cdbc5941e27108fa4bd8d.jpg'
			></meta>
		</>
	);
};
