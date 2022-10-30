import {
    configureStore,
    ThunkAction,
    Action
  } from '@reduxjs/toolkit';
import hashReducer from './hashSlice';

  export const store = configureStore({
    reducer: {
      hashesWithSums: hashReducer,
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;