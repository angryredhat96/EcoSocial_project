import React from 'react';
import { Paper, Button } from '@mui/material';

export default function Item({ kart }) {
  return (
    <Paper>
      <img src={`http://localhost:3001/vid/${kart.image}`} alt="..." style={{ width: '100%', height: '55vh' }} />
    </Paper>
  );
}
