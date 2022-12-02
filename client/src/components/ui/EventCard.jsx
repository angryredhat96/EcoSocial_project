import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncDelete, asyncEdit, setEvent } from '../../redux/actions/eventActions';

export default function EventCard({ id, event }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Автор события
        </Typography>
        <Typography variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2">
          {event.tgLink}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            dispatch(asyncEdit(event));
            navigate(`/event/${event.id}/edit`);
          }}
          variant="contained"
          sx={{ backgroundColor: '#689f38' }}
          style={{ marginTop: '10px', marginBottom: '10px' }}
        >
          Edit
        </Button>
        <Button onClick={() => dispatch(asyncDelete(id))} variant="contained" sx={{ backgroundColor: '#ab003c' }} style={{ marginLeft: '10px', marginTop: '10px', marginBottom: '10px' }}>
          Del
        </Button>
        <Button onClick={() => dispatch(setEvent(event))} component={Link} to={`/event/${event.id}`} variant="contained" sx={{ backgroundColor: '#689f38' }} style={{ marginLeft: '15px' }}>
          Инфо
        </Button>
      </CardActions>
    </Card>
  );
}
