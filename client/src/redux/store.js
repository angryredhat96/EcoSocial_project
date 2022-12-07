import { configureStore } from '@reduxjs/toolkit';
import coordsReducer from './reducer/coordsReducer';
import errorReducer from './reducer/errorReducer';
import errorRegReducer from './reducer/errorRegReducer';
import eventsReducer from './reducer/eventsReducer';
import oneEventReducer from './reducer/oneEventReducer';
import onePlaceReducer from './reducer/onePlaceReducer';
import placeReducer from './reducer/placeReducer';
import userReducer from './reducer/userReducer';
import photoReducer from './reducer/photoReducer';
import allusersReducer from './reducer/allusersReducer';
import counterReducer from './reducer/counterReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    erroreg: errorRegReducer,
    events: eventsReducer,
    oneEvent: oneEventReducer,
    place: placeReducer,
    onePlace: onePlaceReducer,
    photos: photoReducer,
    coordinates: coordsReducer,
    users: allusersReducer,
    counter: counterReducer,
  },
});

export default store;
