import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, Button,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { asyncEdit } from '../../redux/actions/eventActions';
import { incrCounter } from '../../redux/actions/counterAction';

export default function EventPage() {
  const event = useSelector((store) => store.events)[0];
  console.log(event);
  // const userName = ` ${event.User.name[0].toUpperCase()}${event.User.name.slice(1)}`;
  const user = useSelector((store) => store.user);
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            событие от
            {' '}
            {/* {userName} */}
          </Typography>
          <Typography gutterBottom variant="h4" style={{ color: '#689f38' }} component="div">
            {event.title}
          </Typography>
          <Typography gutterBottom variant="h5" style={{ color: '#689f38' }} component="div">
            🖖
            {' '}
            {counter}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {event.description}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {dayjs(event.date).format('DD.MM.YY')}
          </Typography>
          <Box>
            <NavLink to={`${event.tgLink}`}><TelegramIcon /></NavLink>
          </Box>
          <Typography gutterBottom variant="h7" style={{ color: '#689f38' }} component="div">
            counter of Joiners
          </Typography>
        </CardContent>
        <CardActionArea>
          <Container>
            <Button onClick={() => dispatch(incrCounter())} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ margin: '10px' }}>
              Join
            </Button>
            {/* {event.userId === user.id ? ( */}
            <Button
              onClick={() => {
                // dispatch(asyncEdit(event));
                navigate(`/event/${event.id}/edit`);
              }}
              variant="contained"
              sx={{ backgroundColor: '#689f38' }}
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              Edit
            </Button>
            {/* ) : ( */}
            <div />
            {/* )} */}
          </Container>
        </CardActionArea>
      </Card>
    </Container>
  );
}
