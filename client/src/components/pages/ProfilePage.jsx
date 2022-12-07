import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions/allusersActions';
import { getProfileCounter } from '../../redux/actions/counterAction';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const thisUser = useSelector((store) => store.users);
  const counter = useSelector((store) => store.counter);
  const count = counter.length;
  console.log('counter', count);
  console.log(thisUser, 'THISUSER');
  const fin = thisUser.find((el) => el.id == id);
  console.log('hospadi', fin);

  useEffect(() => {
    dispatch(getProfileCounter(id));
  }, [count]);

  return (
    <Container sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
    >
      <Card
        sx={{
          maxWidth: 345, marginTop: '35px',
        }}
        className="container"
      >
        <CardActionArea>
          <div className="row">
            <CardMedia
              component="img"
              height="270"
              width="100"
              image={`http://localhost:3001/lk/${fin?.image}`}
              alt="avatar"
              style={{ borderRadius: '50%' }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {fin?.name}
            </Typography>
            <Typography gutterBottom variant="h5" style={{ color: '#689f38' }} component="div">
              ☘️
              {count}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
