export enum PrismJsFileNames {
	PrismCoy = 'prism-coy.css',
	PrismDark = 'prism-dark.css',
	PrismFunky = 'prism-funky.css',
	PrismOkaidia = 'prism-okaidia.css',
	PrismSolarizedLight = 'prism-solarized-light.css',
	PrismTomorrow = 'prism-tomorrow.css',
	PrismTwilight = 'prism-twilight.css',
	Prism = 'prism.css',
}

export interface CodeHighlightTheme {
	displayName: string;
	fileName: PrismJsFileNames;
}

const prismCoyTheme: CodeHighlightTheme = {
	displayName: 'Prism Coy',
	fileName: PrismJsFileNames.PrismCoy,
};

const prismDarkTheme: CodeHighlightTheme = {
	displayName: 'Prism Dark',
	fileName: PrismJsFileNames.PrismDark,
};

const prismFunkyTheme: CodeHighlightTheme = {
	displayName: 'Prism Funky',
	fileName: PrismJsFileNames.PrismFunky,
};

const prismOkaidiaTheme: CodeHighlightTheme = {
	displayName: 'Prism Okaidia',
	fileName: PrismJsFileNames.PrismOkaidia,
};

const prismSolarizedLightTheme: CodeHighlightTheme = {
	displayName: 'Prism Solarized Light',
	fileName: PrismJsFileNames.PrismSolarizedLight,
};

const prismTomorrowTheme: CodeHighlightTheme = {
	displayName: 'Prism Tomorrow',
	fileName: PrismJsFileNames.PrismTomorrow,
};

const prismTwilightTheme: CodeHighlightTheme = {
	displayName: 'Prism Twilight',
	fileName: PrismJsFileNames.PrismTwilight,
};

const prismDefaultTheme: CodeHighlightTheme = {
	displayName: 'Prism Default',
	fileName: PrismJsFileNames.Prism,
};

export const codeHighlightThemes = {
	prismCoyTheme,
	prismDarkTheme,
	prismFunkyTheme,
	prismOkaidiaTheme,
	prismSolarizedLightTheme,
	prismTomorrowTheme,
	prismTwilightTheme,
	prismDefaultTheme,
};
