import * as React from 'react';
import { HeadProps } from 'gatsby';
import { getWebkitThemeColor } from '../util/theme-utils';

export const Head: React.FC<HeadProps> = () => (
	<>
		<title>James Worden</title>
		<meta name='description' content="James Worden's portfolio as a software engineer." />
		<meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
		<meta name='theme-color' content={getWebkitThemeColor()} />
	</>
);
