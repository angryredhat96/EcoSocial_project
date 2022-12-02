import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import errorRegReducer from './reducer/errorRegReducer';
import eventsReducer from './reducer/eventsReducer';
import onePlaceReducer from './reducer/onePlaceReducer';
import placeReducer from './reducer/placeReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    erroreg: errorRegReducer,
    events: eventsReducer,
    place: placeReducer,
    onePlace: onePlaceReducer,
  },
});

export default store;
