import {
  InitialState,
  TState,
  GlobalStateActions, DispatchActionType
} from "./types";
import {ProjectsList} from "../data/types";



// export const reducer: Reducer<TState, DispatchAction> = (state = InitialState, action) => {
export const reducer: (state: TState, action: DispatchActionType) => (TState) = (state = InitialState, action): TState => {
  console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload}`);

  switch (action.type) {
    case GlobalStateActions.SEARCH_INPUT:
      return <TState>{
        ...state,
        searchFilterString: action.payload //.replace(/ /ig, '')
      };
    case GlobalStateActions.SET_SCROLL:
      return <TState>{
        ...state,
        workScrollPoint: action.payload
      };
    case GlobalStateActions.SET_PAGE:
      return <TState>{
        ...state,
        lastPage: action.payload
      };
    case GlobalStateActions.CLEAR_PAGE:
      return <TState>{
        ...state,
        lastPage: undefined
      };
    case GlobalStateActions.SET_PROJECTS:
      return <TState><ProjectsList | unknown>{
        ...state,
        projects: action.payload
      };
    case GlobalStateActions.TOGGLE_SORTING:
      return <TState>{
        ...state,
        workSorting: state.workSorting === 'asc' ? 'desc' : 'asc',
      };
    case GlobalStateActions.TOGGLE_DRAWER:
      return <TState>{
        ...state,
        drawerVisible: !state.drawerVisible,
      };
    case GlobalStateActions.SET_DRAWER:
      return <TState>{
        ...state,
        drawerVisible: action.payload,
      };
    case GlobalStateActions.THEME_SAVED:
      return <TState>{
        ...state,
        themeSaved: true,
      };
    case GlobalStateActions.NOOP:
      return <TState>{
        ...state,
      };
    default:
      return <TState>{
        ...state,
      };
  }
};
