import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, IconButton } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import { getLKCounter } from '../../redux/actions/counterAction';
import { getUserId } from '../../redux/actions/oneUserActions';
import { setImageThunk } from '../../redux/actions/imageActions';

export default function LKPage() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [fileData, setFileData] = useState({ avatar: null });
  const [avatar, setAvatar] = useState('Zaglushka.jpeg');
  const counter = useSelector((store) => store.counter);
  const count = counter.length;

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', fileData.avatar);
    dispatch(setImageThunk(data));
  };
  const changeAmg = (e) => {
    setFileData({ [e.target.name]: e.target.files[0] });
  };
  useEffect(() => {
    if (user?.image) {
      setAvatar(user?.image);
    }
  }, [user]);

  useEffect(() => {
    dispatch(getLKCounter());
  }, [count]);

  return (
    <Container style={{
      color: 'orange',
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
              image={`http://localhost:3001/lk/${avatar}`}
              alt="avatar"
              style={{ borderRadius: '50%', marginTop: '10px' }}
            />
          </div>
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <input type="file" name="avatar" onChange={changeAmg} />
            <IconButton type="submit" variant="contained" style={{ marginLeft: '130px', marginTop: '1px' }}>
              <DoneIcon />
            </IconButton>
          </form>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {user?.name}
            </Typography>
            <Typography gutterBottom variant="h5" style={{ color: '#689f38' }} component="div">
              ☘️
              {' '}
              {count}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
