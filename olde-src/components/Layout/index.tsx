import React, { FunctionComponent } from "react"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main className="layout-container">
      {children}
    </main>
  )
};

export default Layout;
