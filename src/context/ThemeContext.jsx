import React, { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks';
const initialState = {
    theme: 'light',
    toggle: () => null,
    mounted: false,
};
const ThemeContext = createContext(initialState);
export const MyThemeProvider = ({ children }) => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();
    const state = {
        theme: theme,
        toggle: toggleTheme,
        mounted: componentMounted,
    };
    return (<ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>);
};
export const useTheme = useContext(ThemeContext);
