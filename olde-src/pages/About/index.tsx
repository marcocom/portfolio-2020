import React, { FunctionComponent, Suspense } from "react"
//VideoList
import {StoreProvider} from "../../components/VideoList/Store";

//redux hooks
import ReduxHooks from "../../components/ReduxHooks";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reduxReducer} from '../../components/ReduxHooks/redux-reducer';
export const store = createStore(reduxReducer);




//lazy-loading of child! too cool.
// const VideoList: FunctionComponent = React.lazy<FunctionComponent>(() => import("../../components/VideoList"));
// <Suspense fallback={<h1>Loading!<br/>please wait..</h1>}></Suspense>

// import { Button } from "../../components/Button"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <>
      <header>
        <h1>About Me</h1>
      </header>
      <section>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  )
};

export default About;
