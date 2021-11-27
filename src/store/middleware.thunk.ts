import { Middleware } from '@reduxjs/toolkit';

export const thunkMiddleware: Middleware = (store) => next => action => {
    // If the "action" is actually a function instead
    if (typeof action === 'function') {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(store.dispatch, store.getState)
    }
    // Otherwise, it's a normal action - send it onwards
    return next(action)
  }

