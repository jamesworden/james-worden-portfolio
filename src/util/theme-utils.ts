import { WEBKIT_THEME_COLOR } from '../constants';

class ThemeUtils {
	public updateWebkitThemeColor() {
		const themeColorMetaTag = document.head.querySelector('meta[name="theme-color"]');
		themeColorMetaTag
			? themeColorMetaTag.setAttribute('content', this.getWebkitThemeColor())
			: console.warn(
					'[Webkit Theme Color]: Failed to set the theme color as the corresponding meta tag was not found in the document.'
			  );
	}

	public getWebkitThemeColor() {
		return this.isDarkModeEnabled() ? WEBKIT_THEME_COLOR.Dark : WEBKIT_THEME_COLOR.Default;
	}

	public isDarkModeEnabled() {
		return document.documentElement.classList.contains('dark');
	}

	public setDarkModeEnabled(enabled: boolean) {
		enabled
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
}

/**
 * Because these utilities require DOM manipulation, gatsby will fail to build if
 * used outside of lifecycle methods or `useEffect`.
 */
export const THEME_UTILS = new ThemeUtils();
