import React from 'react';
import { MyThemeProvider } from '../context';
import {reducer, initialGlobalState} from '@src/reducers/reduceGlobal'

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();


export const GlobalContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialGlobalState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <MyThemeProvider>
          {props.children}
        </MyThemeProvider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
