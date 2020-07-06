import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import VideoList from "../../components/VideoList";
import {StoreProvider, Store} from "../../components/VideoList/Store";

// import { Button } from "../../components/Button"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  const store = React.useContext(Store);
  return (
    <StoreProvider>
      <h1 className="text-center">About Me</h1>
      <section>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
      <Link to="/">Home</Link>

      <br/> {console.log('About store:', store)}
      <VideoList/>
    </StoreProvider>
  )
};

export { About }
