import { ADD_COUNTER, SET_COUNTER } from '../types';

export default function counterReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COUNTER:
      return payload;
    case ADD_COUNTER:
      return [payload, ...state];
    default:
      return state;
  }
}
