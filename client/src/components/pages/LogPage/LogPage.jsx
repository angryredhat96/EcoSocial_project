import {
  Button, Card, CardActionArea, CardContent, Grid, Paper, Stack, TextField,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/actions/userActions';

export default function LogPage() {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.error);
  const navigate = useNavigate();
  return (
  //     <form onSubmit={(e) => {
  //       e.preventDefault();
  //       dispatch(loginUser(Object.fromEntries(new FormData(e.target))));
  //       navigate('/');
  //     }}
  //     >
  //       <Grid align="center">
  //         <Paper
  //           elevation={6}
  //           style={{
  //             width: '600px',
  //             height: '400px',
  //             marginTop: '40px',
  //           }}
  //         >
  //           <Stack
  //             style={{
  //               justifyContent: 'center',
  //               flexWrap: 'wrap',
  //               width: '35%',
  //             }}
  //             direction="row"
  //           >
  //             <h2 style={{ fontFamily: 'Gill Sans, sans-serif' }}>Authorization</h2>
  //             <div style={{ visibility: error.visible, color: 'red' }}>
  //               {error.message}
  //             </div>
  //             <TextField
  //               name="email"
  //               type="email"
  //               id="standard-basic"
  //               label="Email"
  //               variant="standard"
  //             />
  //             <TextField
  //               name="password"
  //               type="password"
  //               id="standard-basic"
  //               label="Password"
  //               variant="standard"
  //             />
  //             <Button
  //               type="submit"
  //               variant="outlined"
  //               style={{ marginTop: '20px' }}
  //             >
  //               Auth
  //             </Button>
  //             {' '}
  //           </Stack>
  //         </Paper>
  //       </Grid>
  //     </form>
  //   );
  // }

    <Container sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
    >
      <Card
        sx={{
          width: 360,
          marginTop: '15px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
        className="container"
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '32ch' },
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(loginUser(Object.fromEntries(new FormData(e.target))));
              navigate('/');
            }}
          >
            <Box style={{ visibility: error.visible, color: 'red' }}>
              {error.message}
            </Box>
            <TextField
              sx={{
                '& .MuiInputLabel-root': { color: 'green' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'green' },
                },
              }}
              id="outlined-basic"
              name="password"
              type="email"
              label="Email"
              variant="outlined"
            />
            <TextField
              sx={{
                '& .MuiInputLabel-root': { color: 'green' },
                '& .MuiOutlinedInput-root': {
                  '& > fieldset': { borderColor: 'green' },
                },
              }}
              id="outlined-basic"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
            />
          </Box>
        </CardContent>
        <Button
          variant="outlined"
          color="success"
          sx={{
            marginBottom: '10px',
          }}
        >
          OK
        </Button>
      </Card>
    </Container>
  );
}
