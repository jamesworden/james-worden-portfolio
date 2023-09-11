import React, { useState, createContext, ReactNode, useContext } from 'react';

export interface Theme {
	htmlElementClassName: string;
}

export const DefaultTheme: Theme = {
	htmlElementClassName: '',
};

export const DarkTheme: Theme = {
	htmlElementClassName: 'dark',
};

const themes = [DefaultTheme, DarkTheme];

const ThemeContext = createContext(DefaultTheme);
const ThemeUpdateContext = createContext(() => {});

export function useTheme() {
	return useContext(ThemeContext);
}

export function useThemeUpdate() {
	return useContext(ThemeUpdateContext);
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useState(DefaultTheme);

	function toggleDocumentThemeClass() {
		theme === DefaultTheme
			? document.documentElement.classList.add(DarkTheme.htmlElementClassName)
			: document.documentElement.classList.remove(DarkTheme.htmlElementClassName);
	}

	function toggleTheme() {
		setTheme(theme === DefaultTheme ? DarkTheme : DefaultTheme);
		toggleDocumentThemeClass();
	}

	return (
		<ThemeContext.Provider value={theme}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{children}
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	);
};
