import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, NavLink, useParams } from 'react-router-dom';
import {
  CardActionArea, Button, Grid,
} from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import EventCard from '../ui/EventCard';
import { getEvents, getEventsByLocation } from '../../redux/actions/eventActions';
import { getOnePlaceThunk } from '../../redux/actions/onePlaceAction';
import { setPhotosThunk } from '../../redux/actions/photoActions';
import Courusel from './Courusel';
import { getAllUsers } from '../../redux/actions/allusersActions';

export default function LocationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id, 'id');
  const selector = useSelector((store) => store.onePlace);
  // console.log('item', selector);
  const events = useSelector((store) => store.events);
  const allUsers = useSelector((store) => store.users);
  const [fileData, setFileData] = useState({ photos: null });
  const [photo, setPhoto] = useState([]);
  const photoId = useSelector((store) => store.photos);
  // console.log(photoId, 'PHOOOOOOOOOOO');
  console.log(events, 'events');

  const changeHandler = (e) => {
    setFileData(e.target.files);
    // console.log(e.target.files, 'ZZZZZZZZ');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('photos', fileData);
    await axios.post(`/api/photos/addphoto/${id}`, data)
      .then((res) => setPhoto(res.data?.image));
  };

  console.log(photo, 'QQQQQQQQ');
  useEffect(() => {
    dispatch(getOnePlaceThunk(id));
  }, []);

  // useEffect(() => {
  //   dispatch(getAllUsers());
  // }, []);

  useEffect(() => {
    dispatch(getEventsByLocation(id));
  }, []);

  useEffect(() => {
    dispatch(setPhotosThunk(id));
  }, [photo]);
  return (
    <Container
      direction="column"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 685,
          marginTop: '35px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          direction: 'column',
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selector?.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {selector?.description}
          </Typography>
        </CardContent>
        <CardActionArea>
          <div className="row">
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <input type="file" style={{ marginLeft: '10px' }} name="photos" onChange={changeHandler} multiple />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px', marginBottom: '5px' }}>
                Добавить
              </Button>
            </form>
            <Courusel photoId={photoId} />
          </div>
        </CardActionArea>
        {/* <NavLink to="#">
          <AddIcon sx={{ color: 'black' }} />
        </NavLink> */}
      </Card>
      <Container sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
      >
        <Button
          onClick={() => console.log('addEvent')}
          variant="contained"
          component={Link}
          to={`/new/${id}`}
          sx={{
            backgroundColor: '#689f38', marginLeft: '20px', height: '30px', mt: '15px',
          }}
        >
          Добавить ивент
        </Button>
      </Container>
      <Grid container spacing={6} sx={{ mt: '15px' }}>
        {events?.map((el) => (
          <EventCard
            key={el.id}
            elId={el.id}
            event={el}
          />
        ))}
      </Grid>
    </Container>
  );
}
