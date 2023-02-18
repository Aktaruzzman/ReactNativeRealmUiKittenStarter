import React from 'react';
import Booting from '..';
import { AppRealmContext } from '../../models';
const { RealmProvider } = AppRealmContext;

export const OfflineApp = () => {

  return (
    <RealmProvider>
      <Booting />
    </RealmProvider>
  );
  
};

