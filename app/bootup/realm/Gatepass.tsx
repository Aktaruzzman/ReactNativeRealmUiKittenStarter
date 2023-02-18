import React from 'react';
import * as eva from '@eva-design/eva';
import { StatusBar, ColorSchemeName } from 'react-native';
import { Provider } from 'react-redux';
import { useAppSelector } from '../../redux/hooks'
import store from '../../redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ApplicationProvider } from '@ui-kitten/components';
import palettes from '../../themes'
import { default as mapping } from '../../themes/mapping.json';
import { Login } from './login';
import { Restore } from '../Restore';
import { ColorType } from '../../types';

const Gatepass = () => {
  const theme: ColorSchemeName = useAppSelector((state) => state.theme.value)
  const color: ColorType = useAppSelector((state) => state.color.value)

  return (
    <>
      <ApplicationProvider  {...eva} theme={{ ...eva[theme ? theme : 'light'], ...palettes[color] }} customMapping={{ ...eva.mapping, mapping }}>
        <SafeAreaProvider>
          <StatusBar barStyle={'light-content'} backgroundColor={palettes[color]['color-primary-500']} />
          <Login />
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default (): React.ReactElement => {

  return (
    <Provider store={store}>
      <Restore>
        {() => <Gatepass />}
      </Restore>
    </Provider>
  )

};




