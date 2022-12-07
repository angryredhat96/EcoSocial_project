import {
  CHANGE_USER_IMAGE,
  LOGOUT, SET_EMPTY_USER, SET_USER,
} from '../types';

export default function userReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return payload;
    case CHANGE_USER_IMAGE:
      return { ...state, image: payload };
    case SET_EMPTY_USER:
      return null;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
