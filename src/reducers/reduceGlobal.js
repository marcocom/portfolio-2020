import { InitialState, GlobalStateActions } from "./types";
export const reducer = (state = InitialState, action) => {
    console.log(`GLOBAL STATE Action:${action.type} payload:${action.payload}`);
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
                lastPage: undefined
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
        case GlobalStateActions.NOOP:
            return {
                ...state,
            };
        default:
            return {
                ...state,
            };
    }
};
