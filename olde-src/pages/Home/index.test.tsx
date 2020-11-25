import React from "react"
import Home from "."
import { BrowserRouter as Router } from "react-router-dom"

import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

describe("<Home /> tests", () => {
  const renderComponent = () =>
    render(
      <Router>
        <Home />
      </Router>
    );

  it("should match snapshot", () => {
    expect(<Home />).toMatchSnapshot()
  });

});
