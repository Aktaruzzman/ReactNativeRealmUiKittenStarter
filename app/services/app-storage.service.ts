import AsyncStorage from '@react-native-async-storage/async-storage';
import { ColorSchemeName } from 'react-native';
import { ColorType } from '../types';

export class AppStorage {

  static getTheme = (fallback?: ColorSchemeName): Promise<ColorSchemeName> => {
    return AsyncStorage.getItem('theme').then((theme: any) => {
      return theme || fallback;
    });
  };

  static setTheme = (theme: ColorSchemeName | any): Promise<void> => {
    return AsyncStorage.setItem('theme', theme);
  };

  static getColor = (fallback?: ColorType): Promise<ColorType> => {
    return AsyncStorage.getItem('color').then((color: ColorType | any) => {
      return color || fallback;
    });
  };
  static setColor = (color: ColorType): Promise<void> => {
    return AsyncStorage.setItem('color', color);
  };
}





