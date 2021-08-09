import React, {Context, createContext, useContext} from 'react'
import {useDarkMode} from '../hooks'
import {ThemeContextProps} from "./ContextTypes";

const initialState: ThemeContextProps = {
  theme: 'light',
  toggle: () => null,
  mounted: false,
};

const ThemeContext: Context<ThemeContextProps> = createContext(initialState);

export const MyThemeProvider = ({ children }): JSX.Element => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const state = {
    theme: theme,
    toggle: toggleTheme,
    mounted: componentMounted,
  };

  return (
    <ThemeContext.Provider value={state as ThemeContextProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme: ThemeContextProps = useContext(ThemeContext);
