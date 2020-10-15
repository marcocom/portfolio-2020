import React, {FunctionComponent, ReducerAction, useReducer} from "react"
import { Link } from "react-router-dom"
import {Background, initialState, IState} from "../../components/Background";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = ():JSX.Element => {

  return (

    <div className="app-container">
      <header>
        <h1>marco comparato</h1>
        <h4>digital creations</h4>
        <nav>
          <Link to="/about">About</Link><br/>
          <Link to="/blog">Blog</Link><br/>
        </nav>
      </header>
      <section>

      </section>
      <Background/>
    </div>
  )
};

export default Home
