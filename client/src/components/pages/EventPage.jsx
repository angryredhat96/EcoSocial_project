import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button, Grid, CardActions } from '@mui/material';
import { Container } from '@mui/system';

export default function EventPage() {
  return (
  <Container>
    <Card sx={{ maxWidth: 345, marginTop: '15px', position: 'absolute', top: '10%', left: '40%' }} className='container'>
          <CardContent>
          <Typography gutterBottom variant="h4" style={{color: '#689f38'}} component="div">
            Название ивента
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Описание ивента 
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Дата ивента
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            ТГ линк
          </Typography>
        </CardContent>
      <CardActionArea>
        <Button onClick={() => console.log('Join')} variant="contained" sx={{ backgroundColor: '#689f38', color: "white" }} style={{ marginLeft: '230px', marginBottom: '18px' }}>
          Иду
        </Button>
      </CardActionArea>
    </Card>
    </Container>
  );
}