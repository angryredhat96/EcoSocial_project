import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import errorRegReducer from './reducer/errorRegReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    erroreg: errorRegReducer,
  },
});

export default store;
