import { useEffect, useState } from 'react'

export const useDarkMode = () => {



  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode)
  };

  const toggleTheme = () => {
    setMode(theme === 'light' ? 'dark' : 'light')
  };

  useEffect(() => {
    const isOSInDarkMode = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme)
    } else {
      setMode(isOSInDarkMode ? 'dark' : 'light');
    }
    setComponentMounted(true)
  }, []);

  return [theme, toggleTheme, componentMounted]
};
