import { ADD_JOINER, SET_JOINERS } from '../types';

export default function joinerReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_JOINERS:
      return payload;
    case ADD_JOINER:
      return [payload, ...state];
    default:
      return state;
  }
}
