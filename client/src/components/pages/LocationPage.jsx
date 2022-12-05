import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import {
  CardActionArea, Button,
} from '@mui/material';
import { Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import EventCard from '../ui/EventCard';
import { getEvents } from '../../redux/actions/eventActions';
import { getOnePlaceThunk } from '../../redux/actions/onePlaceAction';

export default function LocationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  // console.log(id, 'id');
  const selector = useSelector((store) => store.onePlace);
  // console.log('item', selector);
  const events = useSelector((store) => store.events);
  const [fileData, setFileData] = useState({ photos: null });
  const [photo, setPhoto] = useState([]);

  const changeHandler = (e) => {
    setFileData(e.target.files);
    // console.log(e.target.files, 'ZZZZZZZZ');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('photos', fileData);
    // console.log(data, 'UUUUUUU');
    await axios.post(`/api/photos/addphoto/${id}`, data)
      .then((res) => setPhoto(JSON.parse(res.data?.image)));
  };

  console.log(photo, 'QQQQQQQQ');
  useEffect(() => {
    dispatch(getOnePlaceThunk(id));
  }, []);
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {selector.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {selector.description}
          </Typography>
        </CardContent>
        <CardActionArea>
          <div className="row">
            <Button onClick={() => console.log('addEvent')} variant="contained" sx={{ backgroundColor: '#689f38', color: 'white' }} style={{ marginLeft: '230px', marginBottom: '18px' }}>
              +
            </Button>
            <form onSubmit={submitHandler} encType="multipart/form-data">
              <input type="file" name="photos" onChange={changeHandler} multiple />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px' }}>
                Добавить
              </Button>
            </form>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image="https://vsegda-pomnim.com/uploads/posts/2022-04/1649124761_13-vsegda-pomnim-com-p-priroda-gor-foto-17.jpg"
              alt="avatar"
            />
          </div>
        </CardActionArea>
      </Card>
      <Button onClick={() => console.log('addEvent')} variant="contained" component={Link} to="/new" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '400px', position: 'absolute', top: '50%' }}>
        Добавить ивент
      </Button>
      <Container>
        {events?.map((el) => (
          <EventCard
            key={el.id}
            id={el.id}
            event={el}
          />
        ))}
      </Container>
    </Container>
  );
}
