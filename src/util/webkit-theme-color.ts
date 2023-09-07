import { WEBKIT_THEME_COLOR } from '../constants';

export function updateWebkitThemeColor() {
	const themeColorMetaTag = document.head.querySelector('meta[name="theme-color"]')!;
	themeColorMetaTag.setAttribute('content', getWebkitThemeColor());
}

export function getWebkitThemeColor() {
	const darkMode = document.documentElement.classList.contains('dark');
	return darkMode ? WEBKIT_THEME_COLOR.Dark : WEBKIT_THEME_COLOR.Default;
}
