import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import eventsReducer from './reducer/eventsReducer';
import onePlaceReducer from './reducer/onePlaceReducer';
import placeReducer from './reducer/placeReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    events: eventsReducer,
    place: placeReducer,
    onePlace: onePlaceReducer,
  },
});

export default store;
