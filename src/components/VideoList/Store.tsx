import React, {Context} from 'react';
export interface IState {
  episodes: any[],
  favorites: any[],
  text: string
}
const initialState:IState = {
  episodes: [],
  favorites: [],
  text: ''
};
const Store:Context<IState> = React.createContext<IState>(initialState);

const reducer = (action: any, state: IState) => {

};

const StoreProvider = (props: any): JSX.Element => {
  return (
    <Store.Provider value={initialState}>
      <div className="provider-container">{props.children}</div>
    </Store.Provider>
  )
};

export {Store, StoreProvider, initialState};
