import { ColorSchemeName } from 'react-native';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppStorage } from '../../../../services/app-storage.service';
import { initialState } from '../slices/ThemeSlice';

const type: ColorSchemeName = initialState.value;
export const getTheme = createAsyncThunk('getTheme', async () => {
  return AppStorage.getTheme(type).then(result => {
    return result;
  });
});
