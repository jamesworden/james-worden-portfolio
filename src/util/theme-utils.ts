import { WEBKIT_THEME_COLOR } from '../constants';

export function updateWebkitThemeColor() {
	const themeColorMetaTag = document.head.querySelector('meta[name="theme-color"]');
	themeColorMetaTag
		? themeColorMetaTag.setAttribute('content', getWebkitThemeColor())
		: console.warn(
				'[Webkit Theme Color]: Failed to set the theme color as the corresponding meta tag was not found in the document.'
		  );
}

export function getWebkitThemeColor() {
	return isDarkModeEnabled() ? WEBKIT_THEME_COLOR.Dark : WEBKIT_THEME_COLOR.Default;
}

export function isDarkModeEnabled() {
	return document.documentElement.classList.contains('dark');
}
