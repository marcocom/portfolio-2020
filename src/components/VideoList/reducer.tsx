import {Reducer} from "react";
import {initialState, IState} from './Store'
interface Action {
  action:string | 'ADD' | 'SUB';
}

const videoListReducer = (state: IState = initialState, action:Action) => {
  console.log('videolistReducer action:', action);
  switch(action) {

    default:
      return state
  }
  console.log('videolistReducer state:', state)
};

export default videoListReducer;
