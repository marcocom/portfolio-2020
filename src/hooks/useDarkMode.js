import React, { useEffect, useState } from 'react'
import {GlobalDispatchContext} from '@src/context'
import {GlobalStateActions} from '@src/reducers';

export const useDarkMode = () => {

  const [theme, setTheme] = useState('light');
  const dispatch = React.useContext(GlobalDispatchContext);
  const [componentMounted, setComponentMounted] = useState(false);

  const saveToLocal = (mode = theme) => {
    window.localStorage.setItem('theme', mode);
  };

  const toggleTheme = (doNotSave = false) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    !doNotSave && saveToLocal(newTheme);
  };

  useEffect(() => {
    const isOSInDarkMode = window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    const localTheme = window.localStorage.getItem('theme');

    if (localTheme) {
      setTheme(localTheme);
      dispatch({type: GlobalStateActions.THEME_SAVED});
    } else {
      setTheme(isOSInDarkMode ? 'light' : 'dark');  // reversed because homepage animation toggles this after anim.
    }
    setComponentMounted(true)
  }, []);

  return [theme, toggleTheme, componentMounted]
};
