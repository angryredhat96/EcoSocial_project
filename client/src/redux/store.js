import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
  },
});

export default store;
