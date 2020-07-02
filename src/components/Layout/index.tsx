import React, { FunctionComponent } from "react"

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main className="text-center">
      {children}
    </main>
  )
};

export { Layout }
