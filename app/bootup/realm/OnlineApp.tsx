import React from 'react';
import { OpenRealmBehaviorConfiguration, OpenRealmBehaviorType, OpenRealmTimeOutBehavior } from 'realm';
import { AppProvider, UserProvider } from '@realm/react';
import { AppRealmContext, Task } from '../../models';
import Gatepass from './Gatepass';
import Booting from '../';
import Fallback from './Fallback';

const { RealmProvider } = AppRealmContext;

const realmFileBehavior: OpenRealmBehaviorConfiguration = {
  type: "downloadBeforeOpen" as OpenRealmBehaviorType,
  timeOut: 1000,
  timeOutBehavior: "openLocalRealm" as OpenRealmTimeOutBehavior,  // open the local realm if the download has not completed within 1000ms
};

export const OnlineApp: React.FC<{ appId: string }> = ({ appId }) => {
  return (
    <AppProvider id={appId}>
      <UserProvider fallback={Gatepass}>
        <RealmProvider sync={{
          flexible: true, initialSubscriptions: {
            update: (subs, realm) => {
              subs.add(realm.objects(Task));
            }
          },
          existingRealmFileBehavior: realmFileBehavior,
        }} fallback={<Fallback />}>
          <Booting />
        </RealmProvider>
      </UserProvider>
    </AppProvider>
  );
};
