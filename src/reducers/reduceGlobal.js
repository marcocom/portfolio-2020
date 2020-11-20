export const GlobalStateActions = {
  SET_SCROLL: 'SET_SCROLL',
  SET_PAGE: 'SET_PAGE',
  CLEAR_PAGE: 'CLEAR_PAGE',
  TOGGLE_SORTING: 'SET_SORTING',
  SET_PROJECTS: 'SET_PROJECTS',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  SET_DRAWER: 'SET_DRAWER',
  THEME_SAVED:'THEME_SAVED'
};

export const initialGlobalState = {
  workScrollPoint: 0,
  themeSaved: false,
  lastPage: null,
  workSorting: 'asc',
  drawerVisible: false,
  projects: [],
};

export const reducer = (state, action) => {
  console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload || ''}`);

  switch (action.type) {
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
