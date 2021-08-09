import {createContext, Dispatch, PropsWithChildren, ReactChildren, Reducer, useReducer} from 'react';
import {MyThemeProvider} from '../context';
import {reducer, initialGlobalState, IState} from '../reducers/reduceGlobal'

interface IContextProps {
  state: IState;
  dispatch: <ActionType>(value: ActionType) => void;
}
export function createReducerCtx<StateType, ActionType>(
  reducer: Reducer<StateType, ActionType>,
  initialState: StateType,
) {
  const defaultDispatch: Dispatch<ActionType> = () => initialState // we never actually use this
  const ctx: React.Context<IContextProps> = createContext({
    state: initialState,
    dispatch: defaultDispatch, // just to mock out the dispatch type and make it not optioanl
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, dispatch] = useReducer<Reducer<StateType, ActionType>>(reducer, initialState);
    const e: IContextProps = {state, dispatch};
    return <ctx.Provider value={e} {...props} />
  }

  return [ctx, Provider] as const
}

export const GlobalStateContext = createContext();
// export const GlobalStateContext = createReducerCtx(reducer, undefined);
export const GlobalDispatchContext = createContext();
// export const GlobalDispatchContext = createReducerCtx(reducer, undefined);

export const GlobalContextProvider = (props: { children: ReactChildren }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialGlobalState);

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
