import axios from 'axios';
import {
  LOGOUT, LOG_FAILED, REG_FAILED, SET_EMPTY_USER, SET_USER,
} from '../types';

export const setAuth = (payload) => ({ type: SET_USER, payload });
export const logout = () => ({ type: LOGOUT });
export const setEmpty = () => ({ type: SET_EMPTY_USER });

export const regUser = (inputs) => (dispatch) => {
  axios.post('/auth/reg', { inputs })
    .then((res) => {
      dispatch(setAuth(res.data));
    })
    .catch((err) => dispatch({ type: REG_FAILED, payload: err.response.data.message }));
};

export const loginUser = (inputs) => (dispatch) => {
  axios.post('/auth/log', { inputs })
    .then((res) => dispatch(setAuth(res.data)))
    .catch((err) => dispatch({ type: LOG_FAILED, payload: err.response.data.message }));
};

export const logoutUser = () => (dispatch) => {
  axios('/auth/logout')
    .then(() => dispatch(logout()))
    .catch(console.log);
};

export const checkUser = () => (dispatch) => {
  axios.post('/auth/check')
    .then((res) => dispatch(setAuth(res.data)))
    .catch(console.log);
};
