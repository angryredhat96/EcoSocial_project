import { configureStore } from '@reduxjs/toolkit';
import coordsReducer from './reducer/coordsReducer';
import errorReducer from './reducer/errorReducer';
import errorRegReducer from './reducer/errorRegReducer';
import eventsReducer from './reducer/eventsReducer';
import joinerReducer from './reducer/joinersReducer';
import oneEventReducer from './reducer/oneEventReducer';
import onePlaceReducer from './reducer/onePlaceReducer';
import placeReducer from './reducer/placeReducer';
import userReducer from './reducer/userReducer';
import photoReducer from './reducer/photoReducer';

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
    joiners: joinerReducer,
    coordinates: coordsReducer,
  },
});

export default store;
