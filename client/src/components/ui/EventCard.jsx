import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { asyncDelete, setEvent } from '../../redux/actions/eventActions';

export default function EventCard({ id, event }) {
  const dispatch = useDispatch();
  // const user = req.session.user.id;
  // const user = useSelector((store) => store.user);
  // const userName = ` ${event.User.name[0].toUpperCase()}${event.User.name.slice(1)}`;
  // const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          событие от
          {' '}
          {/* {userName} */}
        </Typography>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" type="link">
          {dayjs(event.date).format('DD.MM.YY')}
        </Typography>
      </CardContent>
      <CardActions>
        {/* {event.userId === user.id ? ( */}
        {/* <> */}
        <Button onClick={() => dispatch(asyncDelete(id))} variant="contained" sx={{ backgroundColor: '#ab003c' }} style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>
          Del
        </Button>
        <Button onClick={() => dispatch(setEvent(event))} component={Link} to={`/event/${event.id}`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px' }}>
          Инфо
        </Button>
        {/* </> */}
        {/* ) : ( */}
        {/* <Button onClick={() => dispatch(setEvent(event))} component={Link} to={`/event/${event.id}`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px' }}>
            Инфо
          </Button> */}
        {/* )} */}
      </CardActions>
    </Card>
  );
}
