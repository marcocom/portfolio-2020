export const InitialState = {
    workScrollPoint: 0,
    themeSaved: false,
    lastPage: undefined,
    workSorting: 'desc',
    drawerVisible: false,
    projects: [],
    searchFilterString: undefined,
};
export var GlobalStateActions;
(function (GlobalStateActions) {
    GlobalStateActions[GlobalStateActions["SET_SCROLL"] = 0] = "SET_SCROLL";
    GlobalStateActions[GlobalStateActions["SET_PAGE"] = 1] = "SET_PAGE";
    GlobalStateActions[GlobalStateActions["CLEAR_PAGE"] = 2] = "CLEAR_PAGE";
    GlobalStateActions[GlobalStateActions["TOGGLE_SORTING"] = 3] = "TOGGLE_SORTING";
    GlobalStateActions[GlobalStateActions["SET_PROJECTS"] = 4] = "SET_PROJECTS";
    GlobalStateActions[GlobalStateActions["TOGGLE_DRAWER"] = 5] = "TOGGLE_DRAWER";
    GlobalStateActions[GlobalStateActions["SET_DRAWER"] = 6] = "SET_DRAWER";
    GlobalStateActions[GlobalStateActions["THEME_SAVED"] = 7] = "THEME_SAVED";
    GlobalStateActions[GlobalStateActions["SEARCH_INPUT"] = 8] = "SEARCH_INPUT";
    GlobalStateActions[GlobalStateActions["NOOP"] = 9] = "NOOP";
})(GlobalStateActions || (GlobalStateActions = {}));
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
