import { SET_ONE_PLACE } from '../types';

export default function onePlaceReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ONE_PLACE:
      return payload;
    default:
      return state;
  }
}
