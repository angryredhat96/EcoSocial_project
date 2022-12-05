import axios from 'axios';
import { ADD_PLACE, SET_PLACE } from '../types';

export const setPlace = (allPlaces) => ({ type: SET_PLACE, payload: allPlaces });
export const addPlace = (newPlace) => ({ type: ADD_PLACE, payload: newPlace });

export const getPlacesThunk = () => (dispatch) => {
  axios('/')
    .then((res) => dispatch(setPlace(res.data)))
    .catch(console.log);
};

export const addPlaceThunk = (inputs) => (dispatch) => {
  console.log('inputs', inputs);
  axios.post('/places', inputs)
    .then((res) => dispatch(addPlace(res.data)))
    .catch(console.log);
};
