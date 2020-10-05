import React, {ComponentProps, Context, FunctionComponent, useReducer} from 'react';
import {IFetchAction, IEpisodeAction, IEpisode, IState} from "./model";


const initialState: IState = {
  episodes: [],
  favorites: [],
  text: ''
};
const Store:Context<IState> = React.createContext<IState>(initialState);

const reducer = (state = initialState, action: IFetchAction | IEpisodeAction):IState => {
  console.log(`VideoList Store Reducer:${action.type}`);
  switch(action.type) {
    case 'UNFAV':
      const unfav:IEpisode = {...action.payload};
      const newArr:IEpisode[] = state.favorites.filter((epi:IEpisode) => {
        return epi.id !== unfav.id;
      });
      return {...state, favorites:[...newArr]};
    case 'FAV':
      const fav: IEpisode = {...action.payload};
      return {...state, favorites:[...state.favorites, fav]};
    case 'FETCH_DATA':
      const list: IEpisode[] = [...action.payload];
      return {...state, episodes: list};
    default:
      return state;
  }
};

const StoreProvider: FunctionComponent = (props: ComponentProps<any>): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{state, dispatch}}>
      <div className="provider-container">
        {props.children}
      </div>
    </Store.Provider>
  )
};


export {Store, StoreProvider, initialState};
