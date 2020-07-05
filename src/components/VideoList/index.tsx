import React, {FunctionComponent, useReducer} from 'react';
import {initialState, Store, StoreProvider} from './Store'
import videoListReducer from './reducer';
import './style.css'

const VideoList:FunctionComponent = (props):JSX.Element => {
  const store = React.useContext(Store);
  const countreducer = (state = 0, action:string) => {
    console.log(action);
    /*
    switch (action) {
      case 'ADD':
        return state+1;
      case 'SUB':
        return state-1;
      case 'RES':
        return state=0;
      default:
        return state;
    }*/

    // i like this way
    const mutators:Object = {
      'ADD': state+1,
      'SUB': state-1,
      'RES': state=0
    };
    // @ts-ignore
    return mutators[action];

  };
  const [count, dispatch] = useReducer(countreducer, 0);
  return (
    <StoreProvider>
      <div className="component-container">
        {console.log('VideoList store:', store)}
        <h1>Episodes</h1>
        <p>pick your favorite</p>

        <h6>reducer test</h6>
        <div>count:{count}</div>
        <button onClick={() => dispatch('ADD')}>+</button>
        <button onClick={() => dispatch('SUB')}>-</button>
        <button onClick={() => dispatch('RES')}>reset</button>

      </div>
    </StoreProvider>
  )
};

export default VideoList;
