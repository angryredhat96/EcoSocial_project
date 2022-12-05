import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import { Container } from '@mui/system';

export default function LKPage() {
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
          maxWidth: 345, marginTop: '55px',
        }}
        className="container"
      >
        <CardActionArea>
          <div className="row">
            <CardMedia
              component="img"
              height="270"
              width="100"
              image="https://avatars.mds.yandex.net/get-mpic/5259100/img_id5021518703231911464.jpeg/orig"
              alt="avatar"
              style={{ borderRadius: '50%' }}
            />
            <Button onClick={() => console.log('changePhoto')} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '230px', marginTop: '18px' }}>
              Изменить
            </Button>
          </div>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              Имя юзера
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
