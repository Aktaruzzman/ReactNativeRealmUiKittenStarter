import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppStorage} from '../../../../services/app-storage.service';
import { ColorType } from '../../../../types';
import {initialState} from '../slices/ColorSlice';

const color: ColorType = initialState.value;

export const getColor = createAsyncThunk('getColor', async () => {
  return AppStorage.getColor(color).then(result => {
    return result;
  });

});

