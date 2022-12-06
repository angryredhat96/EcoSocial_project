import {
  Button, Grid, Paper, Stack, TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/actions/userActions';

export default function LogPage() {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.error);
  const navigate = useNavigate();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(loginUser(Object.fromEntries(new FormData(e.target))));
      navigate('/');
    }}
    >
      <Grid align="center">
        <Paper
          elevation={6}
          style={{
            width: '600px',
            height: '400px',
            marginTop: '40px',
          }}
        >
          <Stack
            style={{
              justifyContent: 'center',
              flexWrap: 'wrap',
              width: '35%',
            }}
            direction="row"
          >
            <h2 style={{ fontFamily: 'Gill Sans, sans-serif' }}>Authorization</h2>
            <div style={{ visibility: error.visible, color: 'red' }}>
              {error.message}
            </div>
            <TextField
              name="email"
              type="email"
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              name="password"
              type="password"
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: '20px' }}
            >
              Auth
            </Button>
            {' '}
          </Stack>
        </Paper>
      </Grid>
    </form>
  );
}
