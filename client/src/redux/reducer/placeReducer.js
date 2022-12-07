import { ADD_PLACE, SET_PLACE } from '../types';

export default function placeReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PLACE:
      return payload;
    case ADD_PLACE:
      return [...state, payload];
    default:
      return state;
  }
}
// state.images: [...state.images, ...payload],
