import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { authReducer } from './auth';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});

export default store;
