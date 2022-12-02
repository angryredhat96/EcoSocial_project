import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, Button, Grid, CardActions,
} from '@mui/material';
import { Container } from '@mui/system';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import EventCard from '../ui/EventCard';
import { getOnePlaceThunk } from '../../redux/actions/onePlaceAction';

export default function LocationPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, 'id');
  const selector = useSelector((store) => store.onePlace);
  console.log('item', selector);

  useEffect(() => {
    dispatch(getOnePlaceThunk(id));
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
      <Container sx={{
        position: 'absolute', bottom: '20%', margin: '10px', justifyContent: 'center',
      }}
      >
        <Grid container spacing={10}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Container>
    </Container>
  );
}
