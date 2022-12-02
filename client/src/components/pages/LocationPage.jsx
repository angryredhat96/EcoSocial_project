import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, Button, Grid, CardActions,
  Container,
} from '@mui/material';
import { Link } from 'react-router-dom';
import EventCard from '../ui/EventCard';

export default function LocationPage() {
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Название места
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Описание места
          </Typography>
        </CardContent>
        <CardActionArea>
          <div className="row">
            <Button onClick={() => console.log('addEvent')} variant="contained" sx={{ backgroundColor: '#689f38', color: 'white' }} style={{ marginLeft: '230px', marginBottom: '18px' }}>
              +
            </Button>
            <CardMedia
              component="img"
              height="140"
              width="140"
              image="https://vsegda-pomnim.com/uploads/posts/2022-04/1649124761_13-vsegda-pomnim-com-p-priroda-gor-foto-17.jpg"
              alt="avatar"
            />
          </div>
        </CardActionArea>
      </Card>
      <Button onClick={() => console.log('addEvent')} variant="contained" component={Link} to="/new" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '400px', position: 'absolute', top: '50%' }}>
        Добавить ивент
      </Button>
      <Container sx={{
        position: 'absolute', bottom: '20%', margin: '10px', justifyContent: 'center',
      }}
      >
        <Grid container spacing={10}>
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </Grid>
      </Container>
    </Container>
  );
}
