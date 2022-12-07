import axios from 'axios';
import {
  SET_ALLUSERS, SET_USER_ID,
} from '../types';

export const setAllusers = (users) => ({ type: SET_ALLUSERS, payload: users });

export const getAllUsers = () => (dispatch) => {
  axios.get('/users')
    .then((res) => dispatch(setAllusers(res.data)))
    .catch((e) => console.log('error in getting Users', e));
};
