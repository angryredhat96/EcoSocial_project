import { LOG_FAILED, REG_FAILED } from '../types';

export default function errorReducer(state = { visible: 'hidden', message: '' }, action) {
  const { type, payload } = action;
  switch (type) {
    case LOG_FAILED:
      return { visible: 'visible', message: payload };
    case REG_FAILED:
      return { visible: 'visible', message: payload };
    default:
      return state;
  }
}
