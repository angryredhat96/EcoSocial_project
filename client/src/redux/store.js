import { configureStore } from '@reduxjs/toolkit';
import errorReducer from './reducer/errorReducer';
import eventsReducer from './reducer/eventsReducer';
import joinerReducer from './reducer/joinersReducer';
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
    joiners: joinerReducer,
  },
});

export default store;
