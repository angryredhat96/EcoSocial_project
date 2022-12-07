import axios from 'axios';
import { SET_USER_ID } from '../types';

export const setUserId = (payload) => ({ type: SET_USER_ID, payload });

export const getUserId = () => (dispatch) => {
  axios.get('/users/oneuser')
    .then((res) => dispatch(setUserId(res.data)))
    .catch(console.log);
};
