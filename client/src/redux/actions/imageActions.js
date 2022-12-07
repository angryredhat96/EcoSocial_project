import axios from 'axios';
import { CHANGE_USER_IMAGE } from '../types';

export const setImage = (payload) => ({ type: CHANGE_USER_IMAGE, payload });

export const setImageThunk = (data) => (dispatch) => {
  axios.post('/api/v1/upload', data)
    .then((res) => dispatch(setImage(res.data)))
    .catch(console.log());
};
