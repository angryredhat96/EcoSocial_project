import React from 'react';
import {
  Button, Grid, Paper, Stack, TextField,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { regUser } from '../../../redux/actions/userActions';

export default function RegPage() {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.error);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      dispatch(regUser(Object.fromEntries(new FormData(e.target))));
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
            <h2 style={{ fontFamily: 'Gill Sans, sans-serif' }}>Registration</h2>
            <div style={{ visibility: error.visible, color: 'red' }}>
              {error.message}
            </div>
            <TextField
              name="name"
              type="text"
              id="standard-basic1"
              label="Name"
              variant="standard"
            />
            <TextField
              name="email"
              type="email"
              id="standard-basic2"
              label="Email"
              variant="standard"
            />
            <TextField
              name="password"
              type="password"
              id="standard-basic3"
              label="Password"
              variant="standard"
            />
            <Button
              type="submit"
              variant="outlined"
              style={{ marginTop: '20px' }}
            >
              Reg
            </Button>
            {' '}
          </Stack>
        </Paper>
      </Grid>
    </form>
  );
}
