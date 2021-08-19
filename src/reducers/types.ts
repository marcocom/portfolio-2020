import {ProjectsList} from "../data/types";

export type TState = {
  workScrollPoint: number | undefined,
  themeSaved: boolean,
  lastPage?: string | undefined,
  workSorting: string,
  drawerVisible: boolean | undefined,
  projects: ProjectsList,
  searchFilterString?: Partial<TState>,
}
export const InitialState: TState = {
  workScrollPoint: 0,
  themeSaved: false,
  lastPage: undefined,
  workSorting: 'desc',
  drawerVisible: false,
  projects: [],
  searchFilterString: undefined,
};

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
  NOOP,
}

export type DispatchActionType =
  | { type: GlobalStateActions.SET_SCROLL; payload: Partial<TState["workScrollPoint"]> }
  | { type: GlobalStateActions.SET_PAGE; payload: Partial<TState["lastPage"]> }
  | { type: GlobalStateActions.CLEAR_PAGE }
  | { type: GlobalStateActions.TOGGLE_SORTING; payload: Partial<TState["workSorting"]> }
  | { type: GlobalStateActions.SET_PROJECTS; payload: Partial<TState["projects"]> }
  | { type: GlobalStateActions.TOGGLE_DRAWER; payload: Partial<TState["drawerVisible"]> }
  | { type: GlobalStateActions.SET_DRAWER; payload: Partial<TState["drawerVisible"]> }
  | { type: GlobalStateActions.THEME_SAVED}
  | { type: GlobalStateActions.SEARCH_INPUT; payload: Partial<TState["searchFilterString"]> }
  | { type: GlobalStateActions.NOOP };

export type DispatchAction = {
  type: DispatchActionType,
  payload?: Dispatch<DispatchActionType>,
}

// type State<S> = S | undefined;
type Dispatch<S> = (state: S) => void;
export type GlobalContextType = {
  state: TState;
  dispatch: Dispatch<DispatchActionType>;
};

/* enum types themselves effectively become a union of each enum member. ie:
type ActionType =
  GlobalStateActions.SET_SCROLL |
  GlobalStateActions.SET_PAGE |
  GlobalStateActions.CLEAR_PAGE |
  GlobalStateActions.TOGGLE_SORTING |
  GlobalStateActions.SET_PROJECTS |
  GlobalStateActions.TOGGLE_DRAWER |
  GlobalStateActions.SET_DRAWER |
  GlobalStateActions.THEME_SAVED |
  GlobalStateActions.SEARCH_INPUT;
*/
