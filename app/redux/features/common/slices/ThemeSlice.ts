import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ColorSchemeName } from 'react-native';
import { AppStorage } from '../../../../services/app-storage.service';
import { getDeviceColorScheme } from '../../../../utility/util';
import { getTheme } from '../services/ThemeService';

const deviceTheme: any = getDeviceColorScheme();

export const initialState: {
  value: ColorSchemeName;
} = {
  value: deviceTheme ? deviceTheme : 'light',
};

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ColorSchemeName>) {
      state.value = action.payload;
      AppStorage.setTheme(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getTheme.fulfilled, (state, { payload }) => {
      state.value = payload;
    });
  },
});
export const { setTheme } = ThemeSlice.actions;
export default ThemeSlice.reducer;
