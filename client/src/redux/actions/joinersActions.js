import axios from 'axios';
import {
    ADD_JOINER,
  SET_JOINERS,
} from '../types';

export const setJoiners = (joiners) => ({ type: SET_JOINERS, payload: joiners });
export const addJoiner = (newJoiner) => ({ type: ADD_JOINER, payload: newJoiner });

export const getJoiners = () => (dispatch) => {
  axios.get('/joiners')
    .then((res) => dispatch(setJoiners(res.data)))
    .catch((e) => console.log('error in getting Joiners', e));
};

export const addingJoiner = (e) => (dispatch) => {
  e.preventDefault();
  axios.post('/joiners')
    .then((res) => dispatch(addJoiner(res.data)))
    .catch((er) => console.log('error in adding Joiner', er));
};
