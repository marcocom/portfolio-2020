import {ReactNode, useReducer, createContext, Dispatch} from 'react';
import {MyThemeProvider} from '../context';
import {reducer} from '../reducers/reduceGlobal'
import {TState, InitialState, DispatchActionType} from "../reducers/types";
// import {createContext} from "../utils";

export const GlobalStateContext = createContext<Partial<TState> | undefined>(undefined);
export const GlobalDispatchContext =
  createContext<Dispatch<DispatchActionType> | undefined>(undefined);

export const GlobalContextProvider = (children: ReactNode): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        <MyThemeProvider>
          {children}
        </MyThemeProvider>
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
