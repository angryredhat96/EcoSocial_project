import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  CardActionArea, Button,
} from '@mui/material';
import { Container } from '@mui/system';
import { useSelector } from 'react-redux';

export default function EventPage() {
  const event = useSelector((store) => store.events)[0];
  return (
    <Container>
      <Card
        sx={{
          maxWidth: 345, marginTop: '15px', position: 'absolute', top: '10%', left: '40%',
        }}
        className="container"
      >
        <CardContent>
          <Typography gutterBottom variant="h4" style={{ color: '#689f38' }} component="div">
            {event.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {event.description}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {event.date}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {event.tgLink}
          </Typography>
        </CardContent>
        <CardActionArea>
          <Container>
            <Button onClick={() => console.log('join')} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>
              Join
            </Button>
          </Container>
        </CardActionArea>
      </Card>
    </Container>
  );
}
