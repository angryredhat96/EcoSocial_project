import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function EventCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Автор события
        </Typography>
        <Typography variant="h5" component="div">
          Событие
        </Typography>
        <Typography variant="body2">
          Телеграм линк
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => console.log('add')} component={Link} to={`/event/:id`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px', marginTop: '18px' }}>
          Инфо
        </Button>
      </CardActions>
    </Card>
  );
}