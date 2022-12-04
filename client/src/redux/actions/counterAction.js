import axios from 'axios';
import { ADD_PERSON, INCREMENT } from '../types';

export const incrCounter = () => ({ type: INCREMENT });
export const addPerson = (person) => ({ type: ADD_PERSON, payload: person });

// export const getCounter = () => (dispatch) => {
//   axios.get('/counter')
//     .then((res) => dispatch(incrCounter(res.data)))
//     .catch((e) => console.log('error in getting Counter', e));
// };

// export const addingPerson = (e) => (dispatch) => {
//   e.preventDefault();
//   axios.post('/counter', {})
//     .then((res) => dispatch(addPerson(res.data)))
//     .catch((er) => console.log('error in submitting Event', er));
// };
