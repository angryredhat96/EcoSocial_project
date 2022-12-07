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

export default function ProfilePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const thisUser = useSelector((store) => store.users);
  console.log(thisUser, 'THISUSER');
  const fin = thisUser.find((el) => el.id == id);
  console.log('hospadi', fin);
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
              image={`http://localhost:3001/lk/${fin?.image?.slice(7)}`}
              alt="avatar"
              style={{ borderRadius: '50%' }}
            />
            <Button onClick={() => console.log('changePhoto')} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px' }}>
              Изменить
            </Button>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {fin?.name}
            </Typography>
            <Typography gutterBottom variant="h5" style={{ color: '#689f38' }} component="div">
              ☘️
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
