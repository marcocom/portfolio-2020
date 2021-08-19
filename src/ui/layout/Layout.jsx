import React from 'react';

import { useTheme, GlobalDispatchContext } from '../../context';
import {GlobalStateActions} from '../../reducers/reduceGlobal';
import { GlobalStyle, Theme } from '../../styles';
import { Footer, Helmet, LoadingPage, Nav } from '../../ui/layout';

export const Layout = ({ pageTitle, children }) => {
  const { mounted, theme } = useTheme();

  return (
    <Theme currentTheme={theme}>
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
