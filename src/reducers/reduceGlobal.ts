export const GlobalStateActions = {
  SET_SCROLL: 'SET_SCROLL',
  SET_PAGE: 'SET_PAGE',
  CLEAR_PAGE: 'CLEAR_PAGE',
};

export const initialGlobalState = {
  workScrollPoint: 0,
  lastPage: null,
};

export const reducer = (state, action) => {
  console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload || ''}`)
  switch (action.type) {
    case GlobalStateActions.SET_SCROLL:
      return {
        ...initialGlobalState,
        workScrollPoint: action.payload
      };
    case GlobalStateActions.SET_PAGE:
      return {
        ...initialGlobalState,
        lastPage: action.payload
      };
    case GlobalStateActions.CLEAR_PAGE:
      return {
        ...initialGlobalState,
        lastPage: null
      };
    default:
      return initialGlobalState;
  }
};
