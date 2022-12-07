import { SET_ONE_PLACE, SET_ONE_PLACE_IMAGE } from '../types';

export default function onePlaceReducer(state = {}, action) {
  const { type, payload } = action;
  console.log(payload, 'PAYLOAAAD');
  switch (type) {
    case SET_ONE_PLACE:
      return payload;
    case SET_ONE_PLACE_IMAGE:
      return { ...state, Images: [...payload] };
    default:
      return state;
  }
}
