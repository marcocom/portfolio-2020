export type ThemeContextProps = {
  theme: string,
  toggle?: Function | ((doNotSave?: boolean) => void),
  mounted: boolean,
};

export type DarkModeProps = {
  theme: string,
  toggleTheme: Function,
  componentMounted: boolean,
};
