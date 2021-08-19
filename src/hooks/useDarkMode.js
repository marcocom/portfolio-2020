import { useContext, useEffect, useState } from 'react';
import { GlobalDispatchContext } from '../context';
import { GlobalStateActions } from '../reducers/types';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const dispatch = useContext(GlobalDispatchContext);
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
        const localTheme = window.localStorage.getItem('theme'); // TODO: make a service for this
        if (localTheme) {
            setTheme(localTheme);
            dispatch && dispatch({ type: GlobalStateActions.THEME_SAVED });
        }
        else {
            setTheme(isOSInDarkMode ? 'light' : 'dark'); // reversed because homepage animation toggles this after anim.
        }
        setComponentMounted(true);
    }, []);
    return [theme, toggleTheme, componentMounted];
};
