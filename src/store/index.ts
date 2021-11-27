import { configureStore } from '@reduxjs/toolkit';
import { todoApi } from './middleware.api';
import { logger } from './middlewares.logger';
import todoReducer from './todoSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [logger, todoApi]
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
