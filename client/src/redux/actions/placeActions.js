import axios from 'axios';
import { SET_PLACE } from '../types';

export const setPlace = (allPlaces) => ({ type: SET_PLACE, payload: allPlaces });

export const getPlacesThunk = () => (dispatch) => {
  axios('/')
    .then((res) => dispatch(setPlace(res.data)))
    .catch(console.log);
};

export const addPlaceThunk = (inputs) => (dispatch) => {
  axios.post('/places', { inputs })
    .then((res) => dispatch(setPlace(res.data)))
    .catch(console.log);
};
