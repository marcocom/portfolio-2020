import React from 'react'
import { GlobalContextProvider } from '@src/context'
import 'typeface-karla'
import 'typeface-rubik'

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm('This application has been updated. Reload to display latest?');
  if(answer === true) window.location.reload();
};
