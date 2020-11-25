import React, { createContext } from 'react';
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
    </NavContext.Provider>
  );
};

export { NavContext, NavProvider };
