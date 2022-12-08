import React from 'react';
import {
  Button, Card, CardContent, Grid, Paper, Stack, TextField, Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/system';
import { regUser } from '../../../redux/actions/userActions';

export default function RegPage() {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.erroreg);
  const navigate = useNavigate();
  return (
      <form onSubmit={(e) => {
        e.preventDefault();
        dispatch(regUser(Object.fromEntries(new FormData(e.target))));
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
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         dispatch(regUser(Object.fromEntries(new FormData(e.target))));
//         navigate('/');
//       }}
//     >
//       <Container sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//       }}
//       >
//         <Card
//           sx={{
//             width: 360,
//             marginTop: '15px',
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//           }}
//           className="container"
//         >
//           <Typography gutterBottom variant="h4" sx={{ fontFamily: 'Gill Sans, sans-serif', marginTop: '10px', fontWeight: 'bold' }} component="div">
//             Регистрация
//           </Typography>
//           <Typography gutterBottom variant="h6" style={{ visibility: error.visible, color: 'red' }} component="div">
//             {error.message}
//           </Typography>
//           <CardContent>
//             <Box
//               component="form"
//               sx={{
//                 '& > :not(style)': { m: 1, width: '32ch' },
//               }}
//               noValidate
//               autoComplete="on"
//             >
//               <TextField
//                 sx={{
//                   '& .MuiInputLabel-root': { color: 'green' },
//                   '& .MuiOutlinedInput-root': {
//                     '& > fieldset': { borderColor: 'green' },
//                   },
//                 }}
//                 color="success"
//                 id="outlined-basic"
//                 name="password"
//                 type="text"
//                 label="Имя"
//                 variant="outlined"
//               />
//               <TextField
//                 sx={{
//                   '& .MuiInputLabel-root': { color: 'green' },
//                   '& .MuiOutlinedInput-root': {
//                     '& > fieldset': { borderColor: 'green' },
//                   },
//                 }}
//                 color="success"
//                 id="outlined-basic2"
//                 name="password"
//                 type="email"
//                 label="Email"
//                 variant="outlined"
//               />
//               <TextField
//                 sx={{
//                   '& .MuiInputLabel-root': { color: 'green' },
//                   '& .MuiOutlinedInput-root': {
//                     '& > fieldset': { borderColor: 'green' },
//                   },
//                 }}
//                 color="success"
//                 id="outlined-basic3"
//                 name="password"
//                 type="password"
//                 label="Пароль"
//                 variant="outlined"
//               />
//             </Box>
//           </CardContent>
//           <Button
//             variant="outlined"
//             color="success"
//             sx={{
//               marginBottom: '10px',
//             }}
//           >
//             OK
//           </Button>
//         </Card>
//       </Container>
//     </form>
//   );
// }
