/* eslint-disable eqeqeq */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, Button, Grid, CardActions,
  Container,
} from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';
import {
  Link, NavLink, useNavigate, useParams,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { asyncEdit } from '../../redux/actions/eventActions';
import { addJoiner, getJoiners } from '../../redux/actions/joinersActions';

export default function EventPage() {
  const { id } = useParams();
  const event = useSelector((store) => store.events).find((el) => el.id == id);
  const userName = ` ${event?.User?.name[0].toUpperCase()}${event?.User.name.slice(1)}`;
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const joiners = useSelector(((store) => store.joiners));
  // const counter = joiners.length();

  // useEffect(() => {
  //   dispatch(getJoiners());
  // }, []);

  const linkStyle = {
    textDecoration: 'none',
    color: 'gray',
    fontFamily: 'Monospace',
    fontSize: 14,
  };

  return (
    <Container sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
    >
      {event
      && (
      <Card
        sx={{
          maxWidth: 300, minWidth: 300, marginTop: '15px',
        }}
        className="container"
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={linkStyle} component={Link} to="/profile/:id">
            событие от
            {' '}
            {userName}
          </Typography>
          <Typography gutterBottom variant="h4" style={{ color: '#689f38' }} component="div">
            {event.title}
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {event.description}
            s
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            {dayjs(event.date).format('DD.MM.YY')}
          </Typography>
          <Box>
            <a href={`${event.tgLink}`} target="_blank" label="text" rel="noreferrer"><TelegramIcon /></a>
          </Box>
          <Typography gutterBottom variant="h7" style={{ color: '#689f38' }} component="div">
            🖖
            {' '}
            counter
          </Typography>
        </CardContent>
        <CardActionArea>
          <Container sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          >
            <Button onClick={() => dispatch(addJoiner())} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ margin: '10px' }}>
              Join
            </Button>
            {event?.userId == user?.id ? (
              <Button
                onClick={() => {
                // dispatch(asyncEdit(event));
                  navigate(`/event/${event.id}/edit`);
                }}
                variant="contained"
                sx={{ backgroundColor: '#689f38' }}
                style={{ marginTop: '10px', marginBottom: '10px', marginRight: '10px' }}
              >
                Edit
              </Button>
            ) : (
              <div />
            )}
          </Container>
        </CardActionArea>
      </Card>
      )}
    </Container>
  );
}
