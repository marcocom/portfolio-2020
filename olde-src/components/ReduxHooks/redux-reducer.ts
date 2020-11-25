import {Action, Dispatch, Reducer} from "redux";

export interface IState {
  name: string;
  address: string;
}

export const initialState: IState = {
  name: '',
  address: '',
};

export interface DispatchAction extends Action {
  payload: Partial<IState>;
}

export enum ActionType {
  UpdateName,
  UpdateAddress,
  DeleteName,
  DeleteAddress,
}

export const reduxReducer: Reducer<IState, DispatchAction> = (state = initialState, action) => {
  console.log(`redux reducer action:${action.type}`);
  switch(action.type) {
    case ActionType.UpdateName:
      return {...state, name: action.payload.name};

    case ActionType.DeleteName:
      return {...state, name: ''};

    case ActionType.DeleteAddress:
      return {...state, address: ''};

    case ActionType.UpdateAddress:
      return {...state, address: action.payload.name};

    default:
      return state;
  }
};


export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;
  constructor(dispatch:Dispatch<DispatchAction>){
    this.dispatch = dispatch;
  }
  updateName = (name: string) => this.dispatch({type: ActionType.UpdateName, payload: {name}});
  updateAddress = (name: string) => this.dispatch({type: ActionType.UpdateAddress, payload: {name}});
  deleteName = () => this.dispatch({type: ActionType.DeleteName, payload: {}});
}
