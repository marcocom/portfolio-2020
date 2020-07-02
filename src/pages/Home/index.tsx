import React, { FunctionComponent } from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/Button";

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [state, setState] = React.useState(0)

  React.useEffect(() => {
    setInterval(() => setState(Math.floor(Math.random() * 6) + 1), 3000)
  }, [])

  return (
    <div className="app-container">
      <header>
        <h1 data-testid="home-title">
          marco comparato </h1>
      </header>
      <div className="content-container">
        <p>Random number: {state}</p>
        <Button>I am a primary button</Button>
        <Link to="/about">About</Link> <br/> <Link to="/nope">404 Page</Link>
      </div>

    </div>
  )
};

export { Home }
