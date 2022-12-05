import { REG_FAILED } from '../types';

export default function errorRegReducer(state = { visible: 'hidden', message: '' }, action) {
  const { type, payload } = action;
  switch (type) {
    case REG_FAILED:
      return { visible: 'visible', message: payload };
    default:
      return state;
  }
}
