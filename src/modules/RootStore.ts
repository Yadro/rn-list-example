import PeopleStore from './people/PeopleStore';
import React from 'react';

class RootStore {
  personsStore: PeopleStore;

  constructor() {
    this.personsStore = new PeopleStore();
  }
}

const rootStoreContext = React.createContext(new RootStore());

export const useRootStore = () => React.useContext(rootStoreContext);
