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
      <section className="content-container">
        <nav>
          <Link to="/about">About</Link><br/>
          <Link to="/todos">Todos test</Link>
        </nav>
        <p>Random number: {state}</p>
      </section>

    </div>
  )
};

export { Home }
