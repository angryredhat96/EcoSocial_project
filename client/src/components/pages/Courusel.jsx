// import React from 'react';
import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';

export default function Courusel({ ph }) {
  const photo = JSON.parse(ph.image);

  return (
    <div>
      <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
        {photo && photo?.map((el) => (
          <ImageListItem key={el}>
            <img
              src={`http://localhost:3001/vid/${el}`}
              alt="..."
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
