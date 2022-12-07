import { SET_USER_ID } from '../types';

export default function oneReducer(state = {}, actions) {
  const { type, payload } = actions;
  switch (type) {
    case SET_USER_ID:
      return payload;
    default:
      return state;
  }
}
