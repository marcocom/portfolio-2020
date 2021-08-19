import React, {Context, createContext, ReactNode, useContext} from 'react'
import {useDarkMode} from '../hooks'
import {ThemeContextProps} from "./types";

const initialState: ThemeContextProps = {
  theme: 'light',
  toggle: () => null,
  mounted: false,
};

const ThemeContext: Context<ThemeContextProps> = createContext(initialState);

type ThemeProviderProps = {children:ReactNode}
export const MyThemeProvider = ({children}: ThemeProviderProps): JSX.Element => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const state: ThemeContextProps = {
    theme: theme,
    toggle: toggleTheme,
    mounted: componentMounted,
  };

  return (
    <ThemeContext.Provider value={state}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = useContext(ThemeContext);
