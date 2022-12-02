import axios from 'axios';
import { SET_ONE_PLACE } from '../types';

export const setOnePlace = (onePlace) => ({ type: SET_ONE_PLACE, payload: onePlace });

export const getOnePlaceThunk = (id) => (dispatch) => {
  console.log(id, 'id');
  axios.get(`/location/${id}`)
    .then((res) => dispatch(setOnePlace(res.data)))
    .catch(console.log);
};
