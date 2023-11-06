import React, { useState, createContext, ReactNode, useContext, useEffect } from 'react';
import { CodeHighlightTheme, codeHighlightThemes } from '../data/code-highlight-themes';
import { ACTIVE_PRISM_JS_STYLESHEET_ID } from '../constants';

const CodeHighlightContext = createContext(codeHighlightThemes.prismTomorrowTheme);
const CodeHighlightUpdateContext = createContext((_: CodeHighlightTheme) => {});

export function useCodeHighlight() {
	return useContext(CodeHighlightContext);
}

export function useCodeHighlightUpdate() {
	return useContext(CodeHighlightUpdateContext);
}

interface CodeHighlightProviderProps {
	children: ReactNode;
}

export const CodeHighlightProvider: React.FC<CodeHighlightProviderProps> = ({ children }) => {
	const [codeHighlight, setCodeHighlight] = useState(codeHighlightThemes.prismTomorrowTheme);

	useEffect(() => {
		const themePath = `/prismjs-themes/${codeHighlight.fileName}`;
		const existingPrismStylesheetLink = document.getElementById(ACTIVE_PRISM_JS_STYLESHEET_ID);

		if (existingPrismStylesheetLink) {
			document.head.removeChild(existingPrismStylesheetLink);
		}

		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = themePath;
		link.id = ACTIVE_PRISM_JS_STYLESHEET_ID;

		document.head.appendChild(link);
	});

	function setTheme(theme: CodeHighlightTheme) {
		setCodeHighlight({ ...theme });
	}

	return (
		<CodeHighlightContext.Provider value={codeHighlight}>
			<CodeHighlightUpdateContext.Provider value={setTheme}>
				{children}
			</CodeHighlightUpdateContext.Provider>
		</CodeHighlightContext.Provider>
	);
};
