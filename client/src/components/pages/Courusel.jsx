// import React from 'react';
import { Card, CardMedia } from '@mui/material';
import React from 'react';

export default function Courusel({ ph }) {
  const photo = JSON.parse(ph.image);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
      </Card>
    </div>
  );
}
