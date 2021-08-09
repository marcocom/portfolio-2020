import {ReducerAction} from "react";

export type TState = {
  workScrollPoint: number,
  themeSaved: boolean,
  lastPage?: string | undefined,
  workSorting: string,
  drawerVisible: boolean,
  projects: [],
  searchFilterString?: Partial<TState>,
}
export const initialState: TState = {
  workScrollPoint: 0,
  themeSaved: false,
  lastPage: undefined,
  workSorting: 'desc',
  drawerVisible: false,
  projects: [],
  searchFilterString: undefined,
};

export interface DispatchAction extends ReducerAction {
  payload: Partial<TState>;
}

export enum GlobalStateActions {
  SET_SCROLL,
  SET_PAGE,
  CLEAR_PAGE,
  TOGGLE_SORTING,
  SET_PROJECTS,
  TOGGLE_DRAWER,
  SET_DRAWER,
  THEME_SAVED,
  SEARCH_INPUT,
}


export const initialGlobalState: TState = {
  workScrollPoint: 0,
  themeSaved: false,
  lastPage: undefined,
  workSorting: 'desc',
  drawerVisible: false,
  projects: [],
  searchFilterString: undefined,
};

export const reducer: Reducer<TState, DispatchAction> = (state = initialState, action) => {
//export const reducer: (state: TState, action: DispatchAction) => (TState) = (state = initialState, action) => {
  console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload || 'NONE'}`);

  switch (action.type) {
    case GlobalStateActions.SEARCH_INPUT:
      return {
        ...state,
        searchFilterString: action.payload //.replace(/ /ig, '')
      };
    case GlobalStateActions.SET_SCROLL:
      return {
        ...state,
        workScrollPoint: action.payload
      };
    case GlobalStateActions.SET_PAGE:
      return {
        ...state,
        lastPage: action.payload
      };
    case GlobalStateActions.CLEAR_PAGE:
      return {
        ...state,
        lastPage: null
      };
    case GlobalStateActions.SET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GlobalStateActions.TOGGLE_SORTING:
      return {
        ...state,
        workSorting: state.workSorting === 'asc' ? 'desc' : 'asc',
      };
    case GlobalStateActions.TOGGLE_DRAWER:
      return {
        ...state,
        drawerVisible: !state.drawerVisible,
      };
    case GlobalStateActions.SET_DRAWER:
      return {
        ...state,
        drawerVisible: action.payload,
      };
    case GlobalStateActions.THEME_SAVED:
      return {
        ...state,
        themeSaved: true,
      };
    default:
      return initialGlobalState;
  }
};
