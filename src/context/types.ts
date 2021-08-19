type ThemeFunction = ((doNotSave?: boolean) => void);
export type ThemeContextProps = {
  theme: string | boolean | ThemeFunction,
  toggle?: string | boolean | ThemeFunction,
  mounted: string | boolean | ThemeFunction,
};

export type DarkModeProps = {
  theme: string,
  toggleTheme: Function,
  componentMounted: boolean,
};
