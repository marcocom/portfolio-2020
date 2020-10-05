import React, {createContext} from 'react';
import {initialState, IState} from "../../components/Background";

export const ThemeContext = React.createContext(initialState);

export const ThemeProvider = ({children}:any) => {
  const navsections = [
    {name: 'Contact'},
  ];

  return (
    <ThemeContext.Provider value={navsections}>
      {children}
    </ThemeContext.Provider>
  );
};


