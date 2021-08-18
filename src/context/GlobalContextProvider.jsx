import { useReducer, createContext } from 'react';
import { MyThemeProvider } from '../context';
import { reducer } from '../reducers/reduceGlobal';
import { InitialState } from "../reducers/types";
// import {createContext} from "../utils";
export const GlobalStateContext = createContext(undefined);
export const GlobalDispatchContext = createContext(undefined);
export const GlobalContextProvider = (children) => {
    const [state, dispatch] = useReducer(reducer, InitialState);
    return (<GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>);
};
