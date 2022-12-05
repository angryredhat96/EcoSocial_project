import axios from 'axios';
import {
  ADD_EVENT, DELETE_EVENT, SET_EVENT, SET_EVENTS, UPDATE_EVENT,
} from '../types';

export const setEvents = (events) => ({ type: SET_EVENTS, payload: events });
export const setEvent = (event) => ({ type: SET_EVENT, payload: event });
export const addEvent = (newEvent) => ({ type: ADD_EVENT, payload: newEvent });
export const deleteEvent = (eventId) => ({ type: DELETE_EVENT, payload: eventId });
export const editEvent = (editedId) => ({ type: UPDATE_EVENT, payload: editedId });

export const getEvents = () => (dispatch) => {
  axios.get('/events')
    .then((res) => dispatch(setEvents(res.data)))
    .catch((e) => console.log('error in getting Events', e));
};

export const submitEvent = (e, inputs, value) => (dispatch) => {
  e.preventDefault();
  console.log('dispatching date', value);
  axios.post('/events', {
    title: inputs.title, description: inputs.description, tgLink: inputs.tgLink, date: value,
  })
    .then((res) => dispatch(addEvent(res.data)))
    .catch((er) => console.log('error in submitting Event', er));
};

export const asyncDelete = (id) => (dispatch) => {
  axios.delete(`/events/${id}`)
    .then(() => dispatch(deleteEvent(id)))
    .catch((err) => console.log('error in deleting Event', err));
};

export const getOneEvent = (id) => (dispatch) => {
  axios.get(`/events/${id}`)
    .then((res) => dispatch(setEvent(res.data)))
    .catch((err) => console.log('error in deleting Event', err));
};

export const asyncEdit = (id, event, value) => (dispatch) => {
  console.log({
    title: event.title, description: event.description, tgLink: event.tgLink, date: value,
  });
  axios.patch(`/events/${id}/edit`, {
    title: event.title, description: event.description, tgLink: event.tgLink, date: value,
  })
    .then((res) => dispatch(editEvent()))
    .catch((err) => console.log('error in editing Event', err));
};
