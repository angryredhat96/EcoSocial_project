import {
  SET_ALLUSERS,
} from '../types';

export default function allusersReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALLUSERS:
      return payload;
    default:
      return state;
  }
}
