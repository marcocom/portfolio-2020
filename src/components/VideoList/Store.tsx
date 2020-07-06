import React, {Context, ReducerAction, useReducer} from 'react';

export interface IState {
  episodes: Object[],
  favorites: Object[],
  text: string
}
export interface IAction {
  type: string | 'FETCH_DATE',
  payload?:any
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {
    medium: string
    original: string
  }
  name: string
  number: 10
  runtime: 30
  season: 4
  summary: string
  url: string
  _links: {
    self: {
      href: string
    }
  }
}
const initialState:IState = {
  episodes: [],
  favorites: [],
  text: ''
};

// @ts-ignore
const Store:Context = React.createContext(initialState);

const reducer = (state = initialState, action:IAction):IState => {
  console.log(`VideoList Store Reducer:${action.type}`);
  switch(action.type) {
    case 'FAV':
      return {...state, favorites:[...state.favorites, action.payload]};
    case 'FETCH_DATA':
      return {...state, episodes: action.payload};
    default:
      return state;
  }
};

const StoreProvider = (props: any): JSX.Element => {
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
