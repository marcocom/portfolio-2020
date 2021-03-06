import React, { useContext } from 'react'
import { useDarkMode } from '../hooks'

const initialState = {
  theme: 'light',
  toggle: null,
  mounted: false,
};

const ThemeContext = React.createContext(initialState);

export const useTheme = () => useContext(ThemeContext);

export const MyThemeProvider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const state = {
    theme,
    toggle: toggleTheme,
    mounted: componentMounted,
  };
  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
};

