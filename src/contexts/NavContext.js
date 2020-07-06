import React, { createContext } from 'react';
import {Link} from 'react-router-dom';
import {StoreProvider} from '../components/VideoList/Store';
const NavContext = createContext();

const NavProvider = ({ children }) => {
  const navsections = [
    { name: 'Contact' },
    { name: 'About Me' },
    { name: 'Creations' },
  ];

  return (
    <NavContext.Provider value={navsections}>
      {children}
      <Link to="/">Home</Link>
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
