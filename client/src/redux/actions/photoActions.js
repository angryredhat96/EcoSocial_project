import axios from 'axios';
import { SET_PHOTOS_ID } from '../types';

export const setPhotos = (payload) => ({ type: SET_PHOTOS_ID, payload });

export const setPhotosThunk = (id) => (dispatch) => {
  axios(`/api/v2/location/${id}`)
    .then((res) => dispatch(setPhotos(res.data)))
    .catch(console.log);
};
