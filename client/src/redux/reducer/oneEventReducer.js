import {
  SET_EVENT,
} from '../types';

export default function eventsReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_EVENT:
      return payload;
    default:
      return state;
  }
}
