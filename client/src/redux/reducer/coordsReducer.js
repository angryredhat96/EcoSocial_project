import { SET_COORDS } from '../types';

export default function coordsReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COORDS:
      return payload;
    default:
      return state;
  }
}
