// import React from 'react';
// import { Card, CardMedia } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Item';

export default function Courusel({ photoId }) {
  return (
    // <div>
    //   <Card sx={{ maxWidth: 345, margin: '5px' }}>
    //     {photo && photo?.map((el) => (
    //       <CardMedia
    //         style={{ margin: '5px' }}
    //         component="img"
    //         height="175"
    //         image={`http://localhost:3001/vid/${el}`}
    //         alt="..."
    //       />
    //     ))}
    //   </Card>
    // </div>
    <Carousel>
      {photoId && photoId.map((el) => <Item key={el.id} kart={el} />)}
    </Carousel>
  );
}
