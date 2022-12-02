import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import axios from 'axios';
import { useSelector } from 'react-redux';

export default function LKPage() {
  const user = useSelector((store) => store.user);
  const [fileData, setFileData] = useState({ avatar: null });
  const [avatar, setAvatar] = useState(user?.image || 'https://st2.depositphotos.com/6809168/11747/v/950/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg');

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('avatar', fileData.avatar);
    await axios.post('/api/v1/upload', data)
      .then((res) => setAvatar(res.data));
  };
  const changeAmg = (e) => {
    setFileData({ [e.target.name]: e.target.files[0] });
  };
  useEffect(() => {
    if (!user?.image) {
      setAvatar('https://st2.depositphotos.com/6809168/11747/v/950/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg');
    } else {
      setAvatar(user.image);
    }
  }, [user]);

  if (!user || !avatar) return null;

  return (
    <Card
      sx={{
        maxWidth: 345, marginTop: '15px', position: 'absolute', top: '35%', left: '40%',
      }}
      className="container"
    >
      <CardActionArea>
        <div className="row">
          <CardMedia
            component="img"
            height="270"
            width="100"
            image={avatar ? `${avatar}` : 'https://st2.depositphotos.com/6809168/11747/v/950/depositphotos_117473348-stock-illustration-student-icon-isolated.jpg'}
            alt="avatar"
            style={{ borderRadius: '50%' }}
          />
          <form onSubmit={submitHandler} encType="multipart/form-data">
            <input type="file" name="avatar" onChange={changeAmg} />
            <Button type="submit" variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px' }}>
              Изменить
            </Button>
          </form>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography gutterBottom variant="h5" style={{ color: '#689f38' }} component="div">
            Принял участие в N событиях
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
