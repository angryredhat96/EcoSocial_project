import { configureStore } from '@reduxjs/toolkit';
import coordsReducer from './reducer/coordsReducer';
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
    coordinates: coordsReducer,
  },
});

export default store;
