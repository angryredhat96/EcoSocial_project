import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setImageThunk } from '../../redux/actions/imageActions';

export default function LKPage() {
  const user = useSelector((store) => store.user);
  const [fileData, setFileData] = useState({ avatar: null });
  const [avatar, setAvatar] = useState('Zaglushka.jpeg');
  const dispatch = useDispatch();

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
              style={{ borderRadius: '50%' }}
            />
          </div>
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <input type="file" name="avatar" onChange={changeAmg} />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px' }}>
              Изменить
            </Button>
          </form>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {user?.name}
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
