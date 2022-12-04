import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer/counterReducer';
import errorReducer from './reducer/errorReducer';
import eventsReducer from './reducer/eventsReducer';
import oneEventReducer from './reducer/oneEventReducer';
import onePlaceReducer from './reducer/onePlaceReducer';
import placeReducer from './reducer/placeReducer';
import userReducer from './reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    events: eventsReducer,
    oneEvent: oneEventReducer,
    place: placeReducer,
    onePlace: onePlaceReducer,
    counter: counterReducer,
  },
});

export default store;
