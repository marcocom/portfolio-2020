import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import VideoList from "../../components/VideoList";

// import { Button } from "../../components/Button"

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => (
  <>
    <h1 className="text-center">About Me</h1>
    <section>
      <p>Lorem ipsum dolor sit amet.</p>
    </section>
    <Link to="/">Home</Link>

    <br/>
    <VideoList />
  </>
);

export { About }
