import { AnyAction, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { thunkMiddleware } from './middleware.thunk';
import { logger } from './middlewares.logger';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, thunkMiddleware),
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
