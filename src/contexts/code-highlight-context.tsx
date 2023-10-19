import React, { useState, createContext, ReactNode, useContext, useEffect } from 'react';

export interface CodeHighlightDetails {
	theme: string;
}

export const defaultCodeHighlightDetails: CodeHighlightDetails = {
	theme: 'prism-tomorrow',
};

const CodeHighlightContext = createContext(defaultCodeHighlightDetails);
const CodeHighlightUpdateContext = createContext((theme: string) => {});

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
	const [codeHighlight, setCodeHighlight] = useState(defaultCodeHighlightDetails);

	useEffect(() => {
		const themePath = `/prismjs-themes/${codeHighlight.theme}.css`;

		const existingPrismStylesheetLink = document.getElementById('prism-js-stylesheet');

		if (existingPrismStylesheetLink) {
			document.head.removeChild(existingPrismStylesheetLink);
		}

		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = themePath;
		link.id = 'prism-js-stylesheet';

		document.head.appendChild(link);
	});

	function setTheme(theme: string) {
		setCodeHighlight({ ...codeHighlight, theme });
	}

	return (
		<CodeHighlightContext.Provider value={codeHighlight}>
			<CodeHighlightUpdateContext.Provider value={setTheme}>
				{children}
			</CodeHighlightUpdateContext.Provider>
		</CodeHighlightContext.Provider>
	);
};
