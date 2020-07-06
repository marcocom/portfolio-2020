import React, { FunctionComponent, Suspense } from "react"
import {StoreProvider} from "../../components/VideoList/Store";
import TodoReduce from "../../components/TodoReduce";

//lazy-loading of child! too cool.
// const VideoList: FunctionComponent = React.lazy<FunctionComponent>(() => import("../../components/VideoList"));
// <Suspense fallback={<h1>Loading!<br/>please wait..</h1>}></Suspense>

// import { Button } from "../../components/Button"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <StoreProvider>
      <h1 className="text-center">About Me</h1>
      <section>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>

    </StoreProvider>
  )
};

export { About }
