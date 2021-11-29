import React from 'react';

export interface Theme {
    name: string;
	foreground: string;
	background: string;
}

interface ThemeMap {
	[key: string]: Theme;
}

export const themes: ThemeMap = {
	light: {
        name: 'Light',
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
        name: 'Dark',
		foreground: '#ffffff',
		background: '#222222',
	},
};

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

export const defaultTheme = {
	theme: themes.dark,
	toggleTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextType>(defaultTheme);
