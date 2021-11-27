import { AnyAction, configureStore, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { todoApi } from './middleware.api';
import { thunkMiddleware } from './middleware.thunk';
import { logger } from './middlewares.logger';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [logger, thunkMiddleware]
});

export default store;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch ;
export type RootState = ReturnType<typeof store.getState>;
