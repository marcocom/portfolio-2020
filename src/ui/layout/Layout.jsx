import { useTheme } from '@src/context'
import { GlobalStyle, Theme } from '@src/styles'
import { Footer, Helmet, LoadingPage, Nav, Background } from '@src/ui/layout'
import React from 'react'

export const Layout = ({ pageTitle, children }) => {
  const { mounted, theme } = useTheme();

  return (
    <Theme colorTheme={theme}>
      <Helmet pageTitle={pageTitle} />
      {!mounted ?
        <LoadingPage />
       : (
        <>
          <GlobalStyle/>
          {/*<Background />*/}
          <Nav />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </Theme>
  )
};
