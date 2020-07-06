import React, {FunctionComponent, ReducerAction, useReducer} from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [randomNum, setRandomNum] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => setRandomNum(Math.floor(Math.random() * 6) + 1), 3000);
  }, []);


  const countreducer = (state = 0, action: any) => {
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
  const [count, dispatch] = useReducer(countreducer, randomNum);

  return (
    <div className="app-container">
      <header>
        <h1>marco comparato</h1>
        <h4>digital creations</h4>
        <nav>
          <Link to="/about">About</Link><br/>
        </nav>
      </header>
      <section className="content-container">
        <br/>
        <div>
          <h6>getting to know react hooks</h6>
          <p>Random number: {count}</p>
          <button onClick={() => dispatch({type: 'ADD2', payload: 2})}>+2</button>
          <button onClick={() => dispatch({type: 'ADD2', payload: 5})}>+5</button>
          <button onClick={() => dispatch({type: 'ADD2', payload: 10})}>+10</button>
          <button onClick={() => dispatch({type: 'ADD2', payload: -2})}>-2</button>
          <button onClick={() => dispatch({type: 'RES'})}>reset</button>
        </div>
      </section>

    </div>
  )
};

export { Home }
