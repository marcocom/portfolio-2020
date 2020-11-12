import React, {useContext, useState} from 'react';
import { useScrollChange } from '../hooks'

export const initialScrollState = {
  ypoint: 0,
  isMounted: false,
};


const ScrollContext = React.createContext(initialScrollState);

export const useScroll = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const {ypoint, isMounted} = useScroll();
  const state = {
    ypoint, isMounted
  };
  return <ScrollContext.Provider value={state}>{children}</ScrollContext.Provider>
};

