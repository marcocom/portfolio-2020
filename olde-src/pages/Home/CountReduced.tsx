import React, {FunctionComponent, useReducer} from "react"


const countReducer = (state = 0, action: any) => {
  console.log(action);
  switch (action.type) {
    case 'ADD2':
      return state += action.payload;
    case 'RES':
      return state = 0;
    default:
      return state;
  }
};

const CountReduced: FunctionComponent = (): JSX.Element => {
  let randomized = Math.floor(Math.random() * 6) + 1;
  const [count, dispatch] = useReducer(countReducer, randomized);

  return (
    <div className="app-container">
      <section className="content-container">
        <br/>
        <div>
          <h6>getting to know react hooks</h6>
          <p>count: {count}</p>
          <button onClick={() => dispatch({type: 'ADD2', payload: 5})}>+5</button>
          <button onClick={() => dispatch({type: 'ADD2', payload: -2})}>-2</button>
          <button onClick={() => dispatch({type: 'RES', payload: null})}>reset</button>
        </div>
      </section>

    </div>
  )
};

export default CountReduced;
