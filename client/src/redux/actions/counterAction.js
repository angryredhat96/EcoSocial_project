import axios from 'axios';
import { ADD_COUNTER, SET_COUNTER } from '../types';

export const setCounter = (counter) => ({ type: SET_COUNTER, payload: counter });
export const addCounter = (addCount) => ({ type: ADD_COUNTER, payload: addCount });

export const getLKCounter = () => (dispatch) => {
  axios.get('/counter/lkevents')
    .then((res) => dispatch(setCounter(res.data)))
    .catch((e) => console.log('error in getting LkCounter', e));
};

export const getProfileCounter = (id) => (dispatch) => {
  axios.get(`/profileevents/event/${id}`)
    .then((res) => dispatch(setCounter(res.data)))
    .catch((e) => console.log('error in getting ProfileCounter', e));
};

export const getEventCounter = (id) => (dispatch) => {
  axios.get(`/counter/event/${id}`)
    .then((res) => dispatch(setCounter(res.data)))
    .catch((e) => console.log('error in getting EventCounter', e));
};

export const submitCounter = (id) => (dispatch) => {
//   e.preventDefault();
  axios.post(`/counter/event/${id}`)
    .then((res) => dispatch(addCounter(res.data)))
    .catch((er) => console.log('error in submitting Counter', er));
};
