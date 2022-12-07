import axios from 'axios';
import { SET_ONE_PLACE_IMAGE } from '../types';

export const setPlaceImage = (payload) => ({ type: SET_ONE_PLACE_IMAGE, payload });

export const setPlaceImageThunk = (data, id) => (dispatch) => {
  axios.post(`/api/photos/addphoto/${id}`, data)
    .then((res) => dispatch(setPlaceImage(res.data)))
    .catch(console.log);
};
