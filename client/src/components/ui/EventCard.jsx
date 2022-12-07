/* eslint-disable eqeqeq */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Avatar, Grid, IconButton } from '@mui/material';
import { asyncDelete, setEvent } from '../../redux/actions/eventActions';

const linkStyle = {
  textDecoration: 'none',
  color: 'gray',
  fontFamily: 'Monospace',
  fontSize: 14,
};

export default function EventCard({ event, elId }) {
  console.log(event);
  const dispatch = useDispatch();
  const userName = ` ${event?.User?.name[0].toUpperCase()}${event?.User?.name.slice(1)}`;
  console.log(userName, 'userName');
  const user = useSelector((store) => store.user);
  const counter = useSelector((store) => store.counter);
  const count = counter.length;

  return (
    <Grid item md="4">
      <Card sx={{ minWidth: 275, height: '180px' }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={linkStyle} component={Link} to={`/profile/${event.userId}`}>
            <IconButton
              sx={{ p: 0 }}
            >
              <Avatar alt="kakoytochel" src={`http://localhost:3001/lk/${event?.User?.image}`} />
            </IconButton>
            {' '}
            событие от
            {' '}
            {userName}
          </Typography>
          <Typography variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2">
            {dayjs(event.date).format('DD.MM.YY')}
          </Typography>
          {/* <Typography gutterBottom variant="h7" style={{ color: '#689f38' }} component="div">
            🖖
            {' '}
            counter
          </Typography> */}
        </CardContent>
        <CardActions>
          {event?.userId == user?.id ? (
            <>
              <Button onClick={() => dispatch(asyncDelete(elId))} variant="contained" sx={{ backgroundColor: '#ab003c' }} style={{ marginLeft: '10px' }}>
                Del
              </Button>
              <Button onClick={() => dispatch(setEvent(event))} component={Link} to={`/event/${event.id}`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px' }}>
                Инфо
              </Button>
            </>
          ) : (
            <Button onClick={() => dispatch(setEvent(event))} component={Link} to={`/event/${event.id}`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px' }}>
              Инфо
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
