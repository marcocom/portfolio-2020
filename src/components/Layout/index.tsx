import React, { FunctionComponent } from "react"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main className="layout-parent-container">
      {children}
    </main>
  )
};

export { Layout }
