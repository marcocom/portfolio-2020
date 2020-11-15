import React from 'react';

const defaultStore = {
  ypoint: 0,
  currentProject: null
};
const WorkStore = React.createContext(defaultStore);

const reducer = () => {

};
const WorkStoreProvider = (props) => {
  return <WorkStore.Provider value={WorkStore}>{props.children}</WorkStore.Provider>
};

export {WorkStore, WorkStoreProvider};
