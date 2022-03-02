import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { authReducer } from './auth';
import { articleReducer } from './article';

const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    article: articleReducer,
  },
});

export default store;
