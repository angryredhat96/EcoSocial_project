import { INCREMENT } from '../types';

export default function counterReducer(state = 0, action) {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}
