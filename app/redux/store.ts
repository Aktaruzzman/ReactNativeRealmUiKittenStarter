//common
import { configureStore } from '@reduxjs/toolkit';
import ColorSlice from './features/common/slices/ColorSlice';
import ThemeSlice from './features/common/slices/ThemeSlice';

const store = configureStore({
  reducer: {
    color: ColorSlice,
    theme: ThemeSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

