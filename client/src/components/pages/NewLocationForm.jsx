import React, { useState } from 'react';
import {
  CardActionArea, Stack, CardContent, Card, Button, Box, TextField,
} from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPlaceThunk } from '../../redux/actions/placeActions';

export default function NewLocationForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coordinates = useSelector((store) => store.coordinates);
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    latitude: coordinates[0],
    longitude: coordinates[1],
  });
  const changeHandler = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  console.log('Coordinates here:', coordinates);
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', justifyContent: 'center', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '36ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField value={coordinates[0]} id="outlined-basic" name="latitude" variant="outlined" disabled />
            <TextField value={coordinates[1]} id="outlined-basic" name="longitude" variant="outlined" disabled />
            <TextField value={inputs.title} onChange={changeHandler} id="outlined-basic" name="title" label="Название места" variant="outlined" />
            <TextField value={inputs.description} onChange={changeHandler} id="outlined-basic" name="description" label="Описание места" variant="outlined" />
          </Box>
        </CardContent>
        <CardActionArea>
          <Button
            onClick={(e) => {
              dispatch(addPlaceThunk(inputs));
              setInputs({
                title: '',
                description: '',
              });
              navigate('/');
            }}
            variant="contained"
            sx={{ backgroundColor: '#689f38', color: 'white' }}
            style={{ marginLeft: '125px', marginBottom: '18px' }}
          >
            Создать
          </Button>
        </CardActionArea>
      </Card>
    </Container>
  );
}