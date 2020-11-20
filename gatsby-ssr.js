import React from 'react'
import { GlobalContextProvider } from '@src/context'
import 'fontsource-cooper-hewitt'
import 'fontsource-rubik'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
};
