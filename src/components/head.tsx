import * as React from 'react';
import { HeadProps } from 'gatsby';
import { useEffect, useState } from 'react';
import { WEBKIT_THEME_COLOR } from '../constants';
import { THEME_UTILS } from '../util/theme-utils';

export const Head: React.FC<HeadProps> = () => {
	const [webkitThemeColor, setWebkitThemeColor] = useState(WEBKIT_THEME_COLOR.Default);

	useEffect(() => {
		setWebkitThemeColor(THEME_UTILS.getWebkitThemeColor());
	});

	return (
		<>
			<title>James Worden</title>
			<meta name='description' content="James Worden's portfolio as a software engineer." />
			<meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>
			<meta name='theme-color' content={webkitThemeColor} />
		</>
	);
};
