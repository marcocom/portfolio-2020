import { useTheme, GlobalDispatchContext } from '@src/context';
import {GlobalStateActions} from '@src/reducers/reduceGlobal';


import { GlobalStyle, Theme } from '@src/styles';
import { Footer, Helmet, LoadingPage, Nav } from '@src/ui/layout';
import React from 'react';

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
          <Nav />
          <main>{children}</main>
          {/*<Footer />*/}
        </>
      )}
    </Theme>
  )
};
