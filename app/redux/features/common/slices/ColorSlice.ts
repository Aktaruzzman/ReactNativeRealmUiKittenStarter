import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStorage } from '../../../../services/app-storage.service';
import { ColorType } from '../../../../types';
import { getColor } from '../services/ColorService'

export const initialState: { value: ColorType } = {
  value: 'red',
};
const ColorSlice = createSlice({
  name: 'color',
  initialState: initialState,
  reducers: {
    setColor(state, action: PayloadAction<ColorType>) {
      state.value = action.payload;
      AppStorage.setColor(action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(getColor.fulfilled, (state, { payload }) => {
      state.value = payload;
    });
  },
});
export const { setColor } = ColorSlice.actions;
export default ColorSlice.reducer;


