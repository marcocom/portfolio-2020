export const GlobalStateActions = {
  SET_SCROLL: 'SET_SCROLL',
  SET_PAGE: 'SET_PAGE',
  CLEAR_PAGE: 'CLEAR_PAGE',
  TOGGLE_SORTING: 'SET_SORTING',
  SET_PROJECTS: 'SET_PROJECTS',
  TOGGLE_DRAWER: 'TOGGLE_DRAWER',
  SET_DRAWER: 'SET_DRAWER',
  THEME_SAVED:'THEME_SAVED',
  SEARCH_INPUT: 'SEARCH_INPUT',
};

export const initialGlobalState = {
  workScrollPoint: 0,
  themeSaved: false,
  lastPage: null,
  workSorting: 'desc',
  drawerVisible: false,
  projects: [],
  searchFilterString: '',
};

export const reducer = (store, action) => {
  console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload || 'NONE'}`);

  switch (action.type) {
    case GlobalStateActions.SEARCH_INPUT:
      return {
        ...store,
        searchFilterString: action.payload //.replace(/ /ig, '')
      };
    case GlobalStateActions.SET_SCROLL:
      return {
        ...store,
        workScrollPoint: action.payload
      };
    case GlobalStateActions.SET_PAGE:
      return {
        ...store,
        lastPage: action.payload
      };
    case GlobalStateActions.CLEAR_PAGE:
      return {
        ...store,
        lastPage: null
      };
    case GlobalStateActions.SET_PROJECTS:
      return {
        ...store,
        projects: action.payload
      };
    case GlobalStateActions.TOGGLE_SORTING:
      return {
        ...store,
        workSorting: store.workSorting === 'asc' ? 'desc' : 'asc',
      };
    case GlobalStateActions.TOGGLE_DRAWER:
      return {
        ...store,
        drawerVisible: !store.drawerVisible,
      };
    case GlobalStateActions.SET_DRAWER:
      return {
        ...store,
        drawerVisible: action.payload,
      };
    case GlobalStateActions.THEME_SAVED:
      return {
        ...store,
        themeSaved: true,
      };
    default:
      return initialGlobalState;
  }
};
