import { SET_PLACE } from '../types';

export default function placeReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PLACE:
      return payload;
    default:
      return state;
  }
}
