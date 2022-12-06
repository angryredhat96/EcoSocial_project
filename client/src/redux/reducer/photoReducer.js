import { SET_PHOTOS_ID } from '../types';

export default function photoReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PHOTOS_ID:
      return payload;
    default:
      return state;
  }
}
