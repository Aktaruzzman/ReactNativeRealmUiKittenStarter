import React from 'react';
import { StatusBar, ColorSchemeName } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, } from '@ui-kitten/components';
import palettes from '../themes'
import { default as mapping } from '../themes/mapping.json';
import { useAppSelector } from '../redux/hooks'
import { Restore } from './Restore';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { ColorType } from '../types';
import { Router } from '../router';


const Bootup: React.FC<{ ownerId?: string }> = ({ ownerId }) => {

  const theme: ColorSchemeName = useAppSelector((state) => state.theme.value)
  const color: ColorType = useAppSelector((state) => state.color.value)

  return (
    <>
      <ApplicationProvider  {...eva} theme={{ ...eva[theme ? theme : 'light'], ...palettes[color] }} customMapping={{ ...eva.mapping, mapping }}>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={palettes[color]['color-primary-500']} />
          <Router />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default (): React.ReactElement => {
  
  return (
    <Provider store={store}>
      <Restore>
        {() => <Bootup />}
      </Restore>
    </Provider>
  )
};




