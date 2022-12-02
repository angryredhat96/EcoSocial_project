import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import eventsReducer from './reducer/eventsReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    events: eventsReducer,
  },
});

export default store;
